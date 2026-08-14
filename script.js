/* ============================================================
   VISION HUB
   Gestion complète de la navigation et du quiz
   ============================================================ */


/* ==================== DONNÉES DU QUIZ ==================== */

/*
 * Chaque thématique possède ses questions.
 * Pour l'instant, quelques questions sont présentes comme
 * exemple. Il suffira ensuite de compléter les tableaux.
 */

const quizData = {

    maths: {
        name: "Maths",
        total: 25,
        questions: [
            {
                question: "Quel organe est principalement responsable de la filtration du sang ?",
                answers: [
                    "Le cœur",
                    "Les reins",
                    "Les poumons",
                    "L'estomac"
                ],
                correct: 1
            },
            {
                question: "Quelle est l'unité fondamentale du vivant ?",
                answers: [
                    "L'atome",
                    "Le tissu",
                    "La cellule",
                    "L'organe"
                ],
                correct: 2
            }
        ]
    },

    biology: {
        name: "Biologie",
        total: 25,
        questions: [
            {
                question: "Quel est le plus grand océan de la planète ?",
                answers: [
                    "Océan Atlantique",
                    "Océan Indien",
                    "Océan Arctique",
                    "Océan Pacifique"
                ],
                correct: 3
            },
            {
                question: "Quel est le plus grand désert chaud du monde ?",
                answers: [
                    "Le Sahara",
                    "Le Kalahari",
                    "Le Gobi",
                    "Le Namib"
                ],
                correct: 0
            }
        ]
    },

    sante: {
        name: "sante",
        total: 25,
        questions: [
            {
                question: "En quelle année la Seconde Guerre mondiale s'est-elle terminée ?",
                answers: [
                    "1943",
                    "1944",
                    "1945",
                    "1946"
                ],
                correct: 2
            },
            {
                question: "Quelle civilisation a construit les pyramides de Gizeh ?",
                answers: [
                    "Les Romains",
                    "Les Égyptiens",
                    "Les Grecs",
                    "Les Perses"
                ],
                correct: 1
            }
        ]
    },

    sport: {
      name: "Sport",
      total: 25,
      questions: [
        {
          question: "Combien de jours peut-il y avoir sur un terrain de football ?",
            answers: [
              "9",
              "10",
              "11",
              "12"
            ],
            correct: "11"
        },
        {
          question: "Dans quel sport utilise-t-on un panier ?",
            answers: [
              "Football",
              "Basket",
              "Handball",
              "Tenis"
            ],
            correct: "Basket"
        }
        {
          question: "Le marathon fait combien de kilometre ?",
            answers: [
              "21",
              "32",
              "42,195",
              "50"
            ],
            correct: "42,195"
        }
        {
          question: "Combien de sets pour gagner a Roland Garros ?",
            answers: [
              "2",
              "3",
              "4",
              "5"
            ],
            correct: "3"
        }
        {
          question: "Quel est le sport national du japon ?",
            answers: [
              "Karate",
              "Judo",
              "Sumo",
              "Kendo"
            ],
            correct: "Sumo"
        }
        {
          question: "Combien d'anneaux y a-t-il sur le logo des jeux olympiques ?",
            answers: [
              "3",
              "4",
              "5",
              "6"
            ],
            correct: "5"
        }
        {
          question: "Dans la natation, le papillon est : ?",
            answers: [
              "Une nage",
              "Un equipement",
              "Une faute",
              "Un record"
            ],
            correct: "Une nage"
        }
        {
          question: "Le ballon recompense le meilleur joueur ?",
            answers: [
              "Le meilleur coach",
              "le meilleur joueur",
              "le meilleur equipe",
              "le meilleur but"
            ],
            correct: "le meilleur joueur"
        }
        {
          question: "Combien de joueurs y a-t-il dans une equipe de volley ?",
            answers: [
              "4",
              "5",
              "6",
              "7"
            ],
            correct: "6"
        }
        {
          question: "Le 100m est une epreuve de :  ?",
            answers: [
              "Fond",
              "Demi-fond",
              "Sprint",
              "Haies"
            ],
            correct: "Sprint"
        }
        {
          question: "Au tennis, 40-4- s'appelle : ?",
            answers: [
              "Avantage",
              "Egalite",
              "Jeu",
              "Set"
            ],
            correct: "Egalite"
        }
        {
          question: "Quel est le pays avec le plus de coupe du monde ?",
            answers: [
              "Allemagne",
              "Bresil",
              "France",
              "Italie"
            ],
            correct: "Bresil"
        }
        {
          question: "La NBA est une ligue de :  ?",
            answers: [
              "Football",
              "Baseball",
              "Basket",
              "Hockey"
            ],
            correct: "Basket"
        }
        {
          question: "Combien de tours fait un F1 a Monaco ?",
            answers: [
              "50",
              "68",
              "78",
              "90"
            ],
            correct: "78"
        }
        {
          question: "Le criquet se joue en :  ?",
            answers: [
              "USA",
              "Inde",
              "Bresil",
              "Russie"
            ],
            correct: "Inde"
        }
        {
          question: "Le KO vient de :  ?",
            answers: [
              "Boxe",
              "Ruby",
              "Foot",
              "Golf"
            ],
            correct: "Boxe"
        }
        {
          question: "Combien de joueurs en ruby au XV ?",
            answers: [
              "11",
              "13",
              "15",
              "18"
            ],
            correct: "15"
        }
        {
          question: "Le tour de France est : ?",
            answers: [
              "Course a pied",
              "Course cycliste",
              "Course en bateau",
              "Course auto"
            ],
            correct: "Course cycliste"
        }
        {
          question: "Dans quel sport crie-t-on Strike ?",
            answers: [
              "Golf",
              "Billard",
              "Flechettes",
              "Tenis"
            ],
            correct: "Bowling"
        }
        {
          question: "Les JO d'hiver 2026 auront lieu au : ?",
            answers: [
              "Paris",
              "Milan Cortina",
              "Tokyo",
              "Los Angeles"
            ],
            correct: "Mila Cortina"
        }
        {
          question: "Le but au handball mesure: ?",
            answers: [
              "2m x 2m",
              "3m x 2m",
              "3m x 2,5m",
              "4m x 4m"
            ],
            correct: "3m x 2m"
        }
        {
          question: "Michael Jordan a joue en  ?",
            answers: [
              "NBA",
              "NHL",
              "MLB",
              "NFL"
            ],
            correct: "NBA"
        }
        {
          question: "Le plus rapide sur 110m : Usain ?",
            answers: [
              "Parker",
              "Smith",
              "Bolt",
              "James"
            ],
            correct: "Bolt"
        }
        {
          question: "Au fait, un carton rouge = ?",
            answers: [
              "Avertissement",
              "Expulsion",
              "But",
              "Corner"
            ],
            correct: "Expulsion"
        }
        {
          question: "Le sport avec le plus de medailles olympiques : ?",
            answers: [
              "Athletisme",
              "Natation",
              "Cyclisme",
              "Gymnastique"
            ],
            correct: "Natation"
        }
      ]
    },

    marathon: {
        name: "GRAND MARATHON",
        total: 101,
        questions: [
            {
                question: "Qui fut le premier être humain à voyager dans l'espace en 1961 ?",
                answers: [
                    "Neil Armstrong",
                    "Yuri Gagarine",
                    "Buzz Aldrin",
                    "John Glenn"
                ],
                correct: 1
            },
            {
                question: "Quelle est la plus grande planète du système solaire ?",
                answers: [
                    "Terre",
                    "Mars",
                    "Saturne",
                    "Jupiter"
                ],
                correct: 3
            }
        ]
    }
};


/* ==================== VARIABLES ==================== */

let playerName = "";
let currentTheme = "";
let currentQuestion = 0;
let score = 0;
let soundEnabled = true;


/* ==================== ÉLÉMENTS HTML ==================== */

const welcomeScreen = document.getElementById("welcomeScreen");
const themeScreen = document.getElementById("themeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const playerNameInput = document.getElementById("playerName");
const continueButton = document.getElementById("continueButton");
const nameError = document.getElementById("nameError");

const backToWelcome = document.getElementById("backToWelcome");

const themeButtons = document.querySelectorAll(
    ".theme-button, .marathon-button"
);

const quizCategory = document.getElementById("quizCategory");
const questionCounter = document.getElementById("questionCounter");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const answerFeedback = document.getElementById("answerFeedback");

const finalScore = document.getElementById("finalScore");
const playerResult = document.getElementById("playerResult");

const restartButton = document.getElementById("restartButton");
const resultBackButton = document.getElementById("resultBackButton");


/* ==================== CHANGEMENT D'ÉCRAN ==================== */

/*
 * Cette fonction masque tous les écrans puis affiche
 * uniquement celui demandé.
 */

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(function(item) {
        item.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==================== ÉCRAN D'ACCUEIL ==================== */

continueButton.addEventListener("click", function() {

    const name = playerNameInput.value.trim();

    if (name === "") {
        nameError.textContent =
            "Veuillez entrer votre nom complet.";
        playerNameInput.focus();
        return;
    }

    playerName = name;
    nameError.textContent = "";

    showScreen(themeScreen);
});


/*
 * Permet également de valider le nom avec la touche Entrée.
 */

playerNameInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        continueButton.click();
    }
});


/* ==================== RETOUR ACCUEIL ==================== */

backToWelcome.addEventListener("click", function() {
    showScreen(welcomeScreen);
});


/* ==================== SÉLECTION THÉMATIQUE ==================== */

themeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const theme = button.dataset.theme;

        startQuiz(theme);
    });
});


/* ==================== DÉMARRAGE DU QUIZ ==================== */

function startQuiz(theme) {

    currentTheme = theme;
    currentQuestion = 0;
    score = 0;

    showScreen(quizScreen);

    loadQuestion();
}


/* ==================== CHARGEMENT QUESTION ==================== */

function loadQuestion() {

    const quiz = quizData[currentTheme];

    /*
     * Si toutes les questions actuellement disponibles
     * ont été parcourues, on termine le quiz.
     */

    if (currentQuestion >= quiz.questions.length) {
        finishQuiz();
        return;
    }

    const question = quiz.questions[currentQuestion];

    /* Nom de la catégorie */
    quizCategory.textContent = quiz.name;

    /* Numéro de question */
    questionCounter.textContent =
        `Question ${currentQuestion + 1}/${quiz.total}`;

    /*
     * La barre est calculée par rapport au nombre
     * total de questions de la thématique.
     */

    const progress =
        ((currentQuestion + 1) / quiz.total) * 100;

    progressBar.style.width =
        `${Math.min(progress, 100)}%`;

    /* Texte de la question */
    questionText.textContent = question.question;

    /* Réinitialisation */
    answersContainer.innerHTML = "";
    answerFeedback.textContent = "";
    answerFeedback.className = "answer-feedback";

    /* Création des réponses */
    question.answers.forEach(function(answer, index) {

        const button = document.createElement("button");

        button.className = "answer-button";

        button.innerHTML = `
            <span>${answer}</span>
        `;

        button.addEventListener("click", function() {
            selectAnswer(button, index, question.correct);
        });

        answersContainer.appendChild(button);
    });
}


/* ==================== SÉLECTION RÉPONSE ==================== */

function selectAnswer(button, selectedIndex, correctIndex) {

    const buttons =
        document.querySelectorAll(".answer-button");

    /*
     * Empêche l'utilisateur de cliquer plusieurs fois
     * pendant la vérification.
     */

    buttons.forEach(function(item) {
        item.classList.add("disabled");
    });

    /* Bonne réponse */
    if (selectedIndex === correctIndex) {

        button.classList.add("correct");

        answerFeedback.textContent =
            "✓ Bonne réponse !";

        answerFeedback.classList.add("correct");

        score++;

    }

    /* Mauvaise réponse */
    else {

        button.classList.add("incorrect");

        buttons[correctIndex].classList.add("correct");

        answerFeedback.textContent =
            "✗ Mauvaise réponse.";

        answerFeedback.classList.add("incorrect");
    }

    /*
     * Passage automatique à la question suivante.
     */

    setTimeout(function() {

        currentQuestion++;

        loadQuestion();

    }, 1200);
}


/* ==================== FIN DU QUIZ ==================== */

function finishQuiz() {

    const quiz = quizData[currentTheme];

    finalScore.textContent =
        `${score} / ${quiz.questions.length}`;

    playerResult.textContent =
        `Bravo ${playerName} !`;

    showScreen(resultScreen);
}


/* ==================== RECOMMENCER ==================== */

restartButton.addEventListener("click", function() {

    startQuiz(currentTheme);

});


/* ==================== RETOUR AUX THÉMATIQUES ==================== */

resultBackButton.addEventListener("click", function() {

    showScreen(themeScreen);

});


/* ==================== GESTION DU SON ==================== */

const soundButtons = document.querySelectorAll(
    "#welcomeSound, #themeSound, #quizSound"
);

soundButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        soundEnabled = !soundEnabled;

        updateSoundButtons();

    });
});


function updateSoundButtons() {

    soundButtons.forEach(function(button) {

        button.textContent =
            soundEnabled ? "🔊" : "🔇";

        button.setAttribute(
            "aria-label",
            soundEnabled
                ? "Désactiver le son"
                : "Activer le son"
        );
    });
}


/* ==================== INITIALISATION ==================== */

updateSoundButtons();