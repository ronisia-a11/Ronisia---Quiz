/* =====================================================================
   RONISIA - Logique de l'application
   (les questions se trouvent dans questions.js : quizData)
   ===================================================================== */


/* ==================== CONFIGURATION ==================== */

/* Clé de sauvegarde dans le navigateur */
const STORAGE_KEY = "ronisia_data_v1";

/* Points gagnés par bonne réponse */
const POINTS_PER_CORRECT = 10;

/* Thématiques (ordre d'affichage) */
const THEMES = [
    { key: "maths",    label: "Maths" },
    { key: "biology",  label: "Biologie" },
    { key: "medecine", label: "Médecine" },
    { key: "sport",    label: "Sport" },
    { key: "marathon", label: "Marathon" }
];

const LETTERS = ["A", "B", "C", "D", "E", "F"];


/* =====================================================================
   SAUVEGARDE (localStorage)
   Toutes les données passent par loadDB / saveDB : pour brancher plus
   tard un vrai serveur (classement partagé entre appareils), c'est ici
   et dans les fonctions "Joueurs" qu'il faudra intervenir.
   ===================================================================== */

let db = loadDB();

function loadDB() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);

        if (raw) {
            const data = JSON.parse(raw);

            if (data && typeof data.players === "object" && data.players) {
                return {
                    players: data.players,
                    currentId: data.currentId || null,
                    sound: data.sound !== false
                };
            }
        }
    } catch (error) {
        /* Données illisibles ou stockage indisponible : on repart à zéro */
    }

    return { players: {}, currentId: null, sound: true };
}

function saveDB() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch (error) {
        /* Stockage plein ou bloqué : l'application continue en mémoire */
    }
}


/* =====================================================================
   JOUEURS, POINTS ET CLASSEMENT
   ===================================================================== */

/* Identifiant d'un joueur : son nom sans accents, majuscules ni espaces en trop */
function makeId(name) {
    return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function cleanName(name) {
    return name.replace(/\s+/g, " ").trim();
}

function getCurrentPlayer() {
    return db.players[db.currentId] || null;
}

/* Retrouve le joueur ou l'inscrit s'il n'existe pas encore */
function loginPlayer(rawName) {

    const name = cleanName(rawName);
    const id = makeId(name);
    let isNew = false;

    if (!db.players[id]) {
        db.players[id] = {
            id: id,
            name: name,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            themes: {},
            games: 0,
            correct: 0,
            answered: 0
        };
        isNew = true;
    }

    db.currentId = id;
    saveDB();

    return { player: db.players[id], isNew: isNew };
}

/* Points d'un thème = meilleur score x points par bonne réponse */
function themePoints(player, themeKey) {
    const record = player.themes[themeKey];
    return record ? record.best * POINTS_PER_CORRECT : 0;
}

function totalPoints(player) {
    return THEMES.reduce(function(sum, theme) {
        return sum + themePoints(player, theme.key);
    }, 0);
}

/* Classement : filter = "all" ou la clé d'un thème */
function buildRanking(filter) {

    let list = Object.keys(db.players).map(function(id) {

        const player = db.players[id];
        const record = filter === "all" ? null : player.themes[filter];

        return {
            player: player,
            points: filter === "all" ? totalPoints(player) : themePoints(player, filter),
            played: filter === "all" ? true : !!(record && record.plays > 0)
        };
    });

    if (filter !== "all") {
        list = list.filter(function(item) {
            return item.played;
        });
    }

    list.sort(function(a, b) {
        if (b.points !== a.points) return b.points - a.points;
        if (a.player.updatedAt !== b.player.updatedAt) return a.player.updatedAt - b.player.updatedAt;
        return a.player.name.localeCompare(b.player.name, "fr");
    });

    /* Rang (les ex aequo partagent le même rang) */
    list.forEach(function(item, index) {
        item.rank = (index > 0 && item.points === list[index - 1].points)
            ? list[index - 1].rank
            : index + 1;
    });

    return list;
}

function rankOf(player, filter) {
    const list = buildRanking(filter);
    const found = list.find(function(item) {
        return item.player.id === player.id;
    });

    return { rank: found ? found.rank : null, count: list.length };
}

function formatRank(rank) {
    return rank === 1 ? "1er" : rank + "e";
}

function formatPoints(points) {
    return points + (points > 1 ? " pts" : " pt");
}

/* Enregistre le résultat d'une partie */
function recordResult(player, themeKey, gameScore, gameTotal) {

    const record = player.themes[themeKey] || { best: 0, plays: 0 };
    const previousBest = record.best;
    const isRecord = gameScore > previousBest;

    record.plays += 1;
    record.best = Math.max(previousBest, gameScore);

    player.themes[themeKey] = record;
    player.games += 1;
    player.correct += gameScore;
    player.answered += gameTotal;

    /* La date ne bouge que si le joueur progresse (sert à départager les ex aequo) */
    if (isRecord) {
        player.updatedAt = Date.now();
    }

    saveDB();

    return {
        isRecord: isRecord,
        previousBest: previousBest,
        gained: (record.best - previousBest) * POINTS_PER_CORRECT,
        bestPoints: record.best * POINTS_PER_CORRECT
    };
}


/* =====================================================================
   VOIX (synthèse vocale du navigateur)
   ===================================================================== */

const speechSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

let frVoice = null;
let speechToken = 0;

function pickVoice() {

    if (!speechSupported) return;

    const voices = window.speechSynthesis.getVoices();

    frVoice =
        voices.find(function(v) { return /^fr[-_]FR/i.test(v.lang) && /google|natural|online/i.test(v.name); }) ||
        voices.find(function(v) { return /^fr[-_]FR/i.test(v.lang); }) ||
        voices.find(function(v) { return /^fr/i.test(v.lang); }) ||
        null;
}

if (speechSupported) {
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
}

function canSpeak() {
    return speechSupported && db.sound;
}

/*
 * Adapte le texte pour que la voix le lise correctement
 * (symboles mathématiques, unités, fractions...).
 */
function speechText(text) {

    return String(text)
        .replace(/²/g, " au carré")
        .replace(/\^(\d+)/g, " puissance $1")
        .replace(/(\d\s?(?:m|cm|km)?)\s*[x×]\s*(?=\d)/g, "$1 fois ")
        .replace(/\b([a-z])\s+[x×]\s+([a-z])\b/gi, "$1 fois $2")
        .replace(/(\d)\s?%/g, "$1 pour cent")
        .replace(/(\d)!/g, "$1 factorielle")
        .replace(/\/min\b/g, " par minute")
        .replace(/(\d)\/(\d)/g, "$1 sur $2")
        .replace(/([a-z])\/([a-z])/gi, "$1 sur $2")
        .replace(/\s\/\s/g, " sur ")
        .replace(/(\d)\.(\d)/g, "$1,$2")
        .replace(/(\d)\s-\s(?=\d)/g, "$1 moins ")
        .replace(/(\d)-(?=\d)/g, "$1 ")
        .replace(/\bAB\+/g, "A B plus")
        .replace(/\+/g, " plus ")
        .replace(/=/g, " égal ")
        .replace(/π/g, " pi ")
        .replace(/(\d)\s?L\b/g, "$1 litres")
        .replace(/(\d)\s?km\b/g, "$1 kilomètres")
        .replace(/(\d)\s?m\b/g, "$1 mètres")
        .replace(/(\d)eme\b/g, "$1ème")
        .replace(/\bPGCD\b/g, "plus grand commun diviseur")
        .replace(/\bJO\b/g, "J O")
        .replace(/\bF1\b/g, "F 1");
}

function stopSpeaking() {
    speechToken++;

    if (speechSupported) {
        window.speechSynthesis.cancel();
    }
}

/*
 * Lit une suite de phrases, l'une après l'autre.
 * onDone est appelé quand tout est lu (ou tout de suite si la voix est coupée).
 */
function speakSequence(texts, onDone) {

    if (!canSpeak()) {
        if (onDone) onDone();
        return;
    }

    stopSpeaking();

    const token = ++speechToken;
    let index = 0;

    function next() {

        if (token !== speechToken) return;

        if (index >= texts.length) {
            if (onDone) onDone();
            return;
        }

        const text = speechText(texts[index++]);
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.lang = "fr-FR";
        utterance.volume = 1;
        utterance.rate = 0.95;
        utterance.pitch = 1;

        if (frVoice) utterance.voice = frVoice;

        let finished = false;
        let guard = null;

        function finish() {
            if (finished) return;
            finished = true;
            clearTimeout(guard);
            next();
        }

        utterance.onend = finish;
        utterance.onerror = finish;

        /* Sécurité : certains navigateurs ne déclenchent jamais "onend" */
        guard = setTimeout(finish, 4000 + text.length * 150);

        window.speechSynthesis.speak(utterance);
    }

    next();
}


/* =====================================================================
   ÉLÉMENTS HTML
   ===================================================================== */

const welcomeScreen = document.getElementById("welcomeScreen");
const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const welcomeGreeting = document.getElementById("welcomeGreeting");
const playerNameInput = document.getElementById("playerName");
const continueButton = document.getElementById("continueButton");
const nameError = document.getElementById("nameError");
const welcomeSound = document.getElementById("welcomeSound");

const homeHello = document.getElementById("homeHello");
const homePoints = document.getElementById("homePoints");
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = {
    themes: document.getElementById("panelThemes"),
    ranking: document.getElementById("panelRanking"),
    profile: document.getElementById("panelProfile")
};

const themeButtons = document.querySelectorAll(".theme-button, .marathon-button");

const rankDescription = document.getElementById("rankDescription");
const rankFilters = document.getElementById("rankFilters");
const myRank = document.getElementById("myRank");
const rankList = document.getElementById("rankList");

const profileAvatar = document.getElementById("profileAvatar");
const profileName = document.getElementById("profileName");
const profileSince = document.getElementById("profileSince");
const statPoints = document.getElementById("statPoints");
const statRank = document.getElementById("statRank");
const statGames = document.getElementById("statGames");
const statAccuracy = document.getElementById("statAccuracy");
const profileThemes = document.getElementById("profileThemes");
const voiceToggle = document.getElementById("voiceToggle");
const logoutButton = document.getElementById("logoutButton");

const quizCategory = document.getElementById("quizCategory");
const questionCounter = document.getElementById("questionCounter");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const answerFeedback = document.getElementById("answerFeedback");

const finalScore = document.getElementById("finalScore");
const playerResult = document.getElementById("playerResult");
const resultPoints = document.getElementById("resultPoints");
const resultRank = document.getElementById("resultRank");
const restartButton = document.getElementById("restartButton");
const resultRankingButton = document.getElementById("resultRankingButton");
const resultBackButton = document.getElementById("resultBackButton");

const startModal = document.getElementById("startModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalVoice = document.getElementById("modalVoice");
const modalConfirm = document.getElementById("modalConfirm");
const modalCancel = document.getElementById("modalCancel");


/* ==================== ÉTAT ==================== */

let helloPrefix = "Bonjour";
let currentTheme = "";
let currentQuestion = 0;
let score = 0;
let pendingTheme = "";
let rankFilter = "all";
let advanceTimer = null;


/* ==================== OUTILS ==================== */

/* Crée un élément avec du texte (textContent : sûr pour les noms saisis) */
function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function themeLabel(key) {
    const found = THEMES.find(function(theme) { return theme.key === key; });
    return found ? found.label : key;
}

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(function(item) {
        item.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
}


/* =====================================================================
   ÉCRAN D'ACCUEIL / INSCRIPTION
   ===================================================================== */

/* Salutation selon l'heure */
(function setWelcomeGreeting() {
    const hour = new Date().getHours();
    const word = (hour >= 5 && hour < 18) ? "Bonjour" : "Bonsoir";
    welcomeGreeting.textContent = word + " et bienvenue sur Ronisia ! 👋";
})();

continueButton.addEventListener("click", function() {

    const name = cleanName(playerNameInput.value);

    if (name === "") {
        nameError.textContent = "Veuillez entrer votre nom complet.";
        playerNameInput.focus();
        return;
    }

    nameError.textContent = "";

    const result = loginPlayer(name);
    helloPrefix = result.isNew ? "Bienvenue" : "Content de vous revoir";

    enterHome("themes");

    const first = result.player.name.split(" ")[0];
    speakSequence([
        result.isNew
            ? "Bienvenue " + first + " ! Choisissez une thématique pour commencer."
            : "Content de vous revoir " + first + " !"
    ]);
});

playerNameInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        continueButton.click();
    }
});


/* ==================== VOIX : ACTIVER / DÉSACTIVER ==================== */

function setSound(enabled) {

    db.sound = enabled;
    saveDB();

    if (!enabled) stopSpeaking();

    updateSoundUI();
}

function updateSoundUI() {

    /* Bouton de l'écran d'accueil */
    welcomeSound.innerHTML = db.sound
        ? '<i class="fas fa-volume-up"></i>'
        : '<i class="fas fa-volume-mute"></i>';

    welcomeSound.setAttribute(
        "aria-label",
        db.sound ? "Désactiver la voix" : "Activer la voix"
    );

    /* Réglage du profil */
    voiceToggle.textContent = db.sound ? "Activée" : "Désactivée";
    voiceToggle.classList.toggle("on", db.sound);
}

welcomeSound.addEventListener("click", function() {
    setSound(!db.sound);
});

voiceToggle.addEventListener("click", function() {
    setSound(!db.sound);
});


/* =====================================================================
   ÉCRAN PRINCIPAL : THÈMES / CLASSEMENT / PROFIL
   ===================================================================== */

function enterHome(tab) {
    showScreen(homeScreen);
    showTab(tab || "themes");
}

function refreshHeader() {

    const player = getCurrentPlayer();

    if (!player) return;

    const first = player.name.split(" ")[0];

    homeHello.textContent = helloPrefix + ", " + first + " !";
    homePoints.textContent = formatPoints(totalPoints(player));
}

function showTab(tab) {

    tabButtons.forEach(function(button) {
        button.classList.toggle("active", button.dataset.tab === tab);
    });

    Object.keys(tabPanels).forEach(function(key) {
        tabPanels[key].classList.toggle("active", key === tab);
    });

    refreshHeader();

    if (tab === "themes") renderThemeBests();
    if (tab === "ranking") renderRanking();
    if (tab === "profile") renderProfile();
}

tabButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        showTab(button.dataset.tab);
    });
});


/* ---------- Onglet Thèmes ---------- */

function renderThemeBests() {

    const player = getCurrentPlayer();

    themeButtons.forEach(function(button) {

        const badge = button.querySelector(".theme-best");

        if (!badge || !player) return;

        const record = player.themes[button.dataset.theme];

        if (record && record.plays > 0) {
            badge.textContent = "Meilleur : " + formatPoints(record.best * POINTS_PER_CORRECT);
            badge.classList.add("has-points");
        } else {
            badge.textContent = "Pas encore joué";
            badge.classList.remove("has-points");
        }
    });
}

themeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        openStartModal(button.dataset.theme);
    });
});


/* ---------- Onglet Classement ---------- */

function buildRankFilters() {

    rankFilters.innerHTML = "";

    [{ key: "all", label: "Général" }].concat(THEMES).forEach(function(item) {

        const chip = el("button", "chip", item.label);

        chip.dataset.filter = item.key;

        chip.addEventListener("click", function() {
            rankFilter = item.key;
            renderRanking();
        });

        rankFilters.appendChild(chip);
    });
}

function rankRow(item, isMe) {

    const li = el("li", "rank-item");

    if (isMe) li.classList.add("me");
    if (item.rank <= 3 && item.points > 0) li.classList.add("top" + item.rank);

    const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
    const position = (item.rank <= 3 && item.points > 0) ? medals[item.rank] : String(item.rank);

    li.appendChild(el("span", "rank-pos", position));
    li.appendChild(el("span", "rank-name", item.player.name + (isMe ? " (vous)" : "")));
    li.appendChild(el("span", "rank-points", formatPoints(item.points)));

    return li;
}

function renderRanking() {

    const player = getCurrentPlayer();
    const list = buildRanking(rankFilter);
    const MAX_ROWS = 50;

    rankDescription.textContent =
        "Vos points = votre meilleur score par thème (" +
        POINTS_PER_CORRECT + " points par bonne réponse).";

    /* Filtres */
    rankFilters.querySelectorAll(".chip").forEach(function(chip) {
        chip.classList.toggle("active", chip.dataset.filter === rankFilter);
    });

    /* Ma position */
    const meIndex = list.findIndex(function(item) {
        return player && item.player.id === player.id;
    });

    myRank.innerHTML = "";

    if (meIndex >= 0) {
        const me = list[meIndex];
        myRank.appendChild(document.createTextNode("Vous êtes "));
        myRank.appendChild(el("strong", "", formatRank(me.rank)));
        myRank.appendChild(document.createTextNode(
            " sur " + list.length + " joueur" + (list.length > 1 ? "s" : "") +
            " avec " + formatPoints(me.points)
        ));
    } else {
        myRank.textContent = "Vous n'avez pas encore joué ce thème. Lancez-vous pour entrer dans le classement !";
    }

    /* Liste */
    rankList.innerHTML = "";

    if (list.length === 0) {
        rankList.appendChild(el("li", "empty-state", "Personne n'a encore joué ce thème."));
        return;
    }

    list.slice(0, MAX_ROWS).forEach(function(item) {
        rankList.appendChild(rankRow(item, player && item.player.id === player.id));
    });

    if (meIndex >= MAX_ROWS) {
        rankList.appendChild(el("li", "rank-gap", "•••"));
        rankList.appendChild(rankRow(list[meIndex], true));
    }
}


/* ---------- Onglet Profil ---------- */

function renderProfile() {

    const player = getCurrentPlayer();

    if (!player) return;

    const initials = player.name
        .split(" ")
        .slice(0, 2)
        .map(function(word) { return word.charAt(0); })
        .join("")
        .toUpperCase();

    profileAvatar.textContent = initials || "?";
    profileName.textContent = player.name;
    profileSince.textContent =
        "Inscrit le " + new Date(player.createdAt).toLocaleDateString("fr-FR");

    const general = rankOf(player, "all");

    statPoints.textContent = totalPoints(player);
    statRank.textContent = general.rank ? formatRank(general.rank) + " / " + general.count : "-";
    statGames.textContent = player.games;
    statAccuracy.textContent = player.answered > 0
        ? Math.round((player.correct / player.answered) * 100) + " %"
        : "-";

    /* Points par thème */
    profileThemes.innerHTML = "";

    THEMES.forEach(function(theme) {

        const record = player.themes[theme.key];
        const best = record ? record.best : 0;
        const total = quizData[theme.key].total;
        const percent = Math.min(100, (best / total) * 100);

        const row = el("li", "profile-row");
        const top = el("div", "profile-row-top");
        const bar = el("div", "mini-bar");
        const fill = el("div");

        top.appendChild(el("span", "", theme.label));
        top.appendChild(el("span", "",
            record && record.plays > 0
                ? best + "/" + total + " · " + formatPoints(best * POINTS_PER_CORRECT)
                : "Pas encore joué"
        ));

        fill.style.width = percent + "%";
        bar.appendChild(fill);

        row.appendChild(top);
        row.appendChild(bar);
        profileThemes.appendChild(row);
    });

    updateSoundUI();
}

logoutButton.addEventListener("click", function() {

    stopSpeaking();

    db.currentId = null;
    saveDB();

    playerNameInput.value = "";
    nameError.textContent = "";

    showScreen(welcomeScreen);
});


/* =====================================================================
   FENÊTRE : « PRÊT À COMMENCER ? »
   ===================================================================== */

function openStartModal(theme) {

    pendingTheme = theme;

    const quiz = quizData[theme];
    const label = theme === "marathon" ? "Le Grand Marathon" : themeLabel(theme);

    modalTitle.textContent = "Prêt à commencer ?";
    modalText.textContent =
        "Le quiz « " + label + " » comporte " + quiz.total + " questions.";

    if (!speechSupported) {
        modalVoice.textContent = "La lecture vocale n'est pas disponible sur ce navigateur.";
    } else if (db.sound) {
        modalVoice.textContent = "Les questions et les propositions seront lues à voix haute.";
    } else {
        modalVoice.textContent = "La lecture vocale est désactivée (réglage dans votre profil).";
    }

    startModal.classList.add("open");
    modalConfirm.focus();
}

function closeStartModal() {
    startModal.classList.remove("open");
    pendingTheme = "";
}

modalConfirm.addEventListener("click", function() {

    const theme = pendingTheme;

    closeStartModal();

    if (theme) startQuiz(theme);
});

modalCancel.addEventListener("click", closeStartModal);

startModal.addEventListener("click", function(event) {
    if (event.target === startModal) closeStartModal();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && startModal.classList.contains("open")) {
        closeStartModal();
    }
});


/* =====================================================================
   QUIZ
   ===================================================================== */

function startQuiz(theme) {

    stopSpeaking();
    clearTimeout(advanceTimer);

    currentTheme = theme;
    currentQuestion = 0;
    score = 0;

    showScreen(quizScreen);

    loadQuestion();
}

function loadQuestion() {

    const quiz = quizData[currentTheme];

    if (currentQuestion >= quiz.questions.length) {
        finishQuiz();
        return;
    }

    const question = quiz.questions[currentQuestion];

    quizCategory.textContent = quiz.name;

    questionCounter.textContent =
        "Question " + (currentQuestion + 1) + "/" + quiz.total;

    const progress = ((currentQuestion + 1) / quiz.total) * 100;
    progressBar.style.width = Math.min(progress, 100) + "%";

    questionText.textContent = question.question;

    answersContainer.innerHTML = "";
    answerFeedback.textContent = "";
    answerFeedback.className = "answer-feedback";

    question.answers.forEach(function(answer, index) {

        const button = document.createElement("button");

        button.className = "answer-button";
        button.innerHTML = "<span></span>";
        button.firstChild.textContent = answer;

        button.addEventListener("click", function() {
            selectAnswer(button, index, question);
        });

        answersContainer.appendChild(button);
    });

    /* Lecture : la question, puis chaque proposition */
    const lines = [question.question].concat(
        question.answers.map(function(answer, index) {
            return LETTERS[index] + ", " + answer;
        })
    );

    speakSequence(lines);
}

function selectAnswer(button, selectedIndex, question) {

    const buttons = document.querySelectorAll(".answer-button");
    const correctIndex = question.correct;
    const correctAnswer = question.answers[correctIndex];

    /* On coupe la lecture en cours et on bloque les clics */
    stopSpeaking();

    buttons.forEach(function(item) {
        item.classList.add("disabled");
    });

    let spoken;
    let waitWithoutVoice;

    if (selectedIndex === correctIndex) {

        button.classList.add("correct");

        answerFeedback.textContent = "✓ Réponse juste !";
        answerFeedback.classList.add("correct");

        score++;

        spoken = "Réponse juste !";
        waitWithoutVoice = 1200;

    } else {

        button.classList.add("incorrect");
        buttons[correctIndex].classList.add("correct");

        answerFeedback.textContent =
            "✗ Réponse fausse. La réponse juste est : " + correctAnswer;
        answerFeedback.classList.add("incorrect");

        spoken = "Réponse fausse. La réponse juste est : " + correctAnswer;
        waitWithoutVoice = 2600;
    }

    /* Question suivante une fois la voix terminée */
    function goNext() {
        clearTimeout(advanceTimer);
        advanceTimer = setTimeout(function() {
            currentQuestion++;
            loadQuestion();
        }, canSpeak() ? 500 : waitWithoutVoice);
    }

    speakSequence([spoken], goNext);
}

function finishQuiz() {

    const quiz = quizData[currentTheme];
    const player = getCurrentPlayer();
    const total = quiz.questions.length;

    finalScore.textContent = score + " / " + total;

    let summary = "Quiz terminé. Votre score est de " + score + " sur " + total + ".";

    if (player) {

        const result = recordResult(player, currentTheme, score, total);
        const first = player.name.split(" ")[0];

        playerResult.textContent =
            (score >= total / 2 ? "Bravo " : "Courage ") + first + " !";

        if (result.gained > 0) {
            resultPoints.textContent =
                "+" + formatPoints(result.gained) + " ajoutés à votre total !";
            summary += " Vous gagnez " + result.gained + " points.";
        } else {
            resultPoints.textContent =
                "Pas de nouveau record. Votre meilleur : " + formatPoints(result.bestPoints) + ".";
        }

        const general = rankOf(player, "all");

        resultRank.textContent = general.rank
            ? "Classement général : " + formatRank(general.rank) + " sur " + general.count
            : "";

        refreshHeader();

    } else {
        playerResult.textContent = "Bravo !";
        resultPoints.textContent = "";
        resultRank.textContent = "";
    }

    showScreen(resultScreen);

    speakSequence([summary]);
}

restartButton.addEventListener("click", function() {
    startQuiz(currentTheme);
});

resultRankingButton.addEventListener("click", function() {
    stopSpeaking();
    rankFilter = "all";
    enterHome("ranking");
});

resultBackButton.addEventListener("click", function() {
    stopSpeaking();
    enterHome("themes");
});


/* =====================================================================
   INITIALISATION
   ===================================================================== */

buildRankFilters();
updateSoundUI();

/* Si le joueur est déjà connu sur cet appareil, on l'accueille directement */
if (getCurrentPlayer()) {
    helloPrefix = "Bon retour";
    enterHome("themes");
}
