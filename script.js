const quizData = {

    maths: {
        name: "Maths",
        total: 25,
        questions: [
            
  {
    "question": "Combien font 12 x 15 ?",
    "answers": ["160", "170", "180", "190"],
    "correct": 2
  },
  {
    "question": "Quelle est la racine carree de 144 ?",
    "answers": ["10", "11", "12", "14"],
    "correct": 2
  },
  {
    "question": "Combien font 25% de 200 ?",
    "answers": ["25", "40", "50", "75"],
    "correct": 2
  },
  {
    "question": "Resoudre : 2x + 6 = 14. x = ?",
    "answers": ["3", "4", "5", "6"],
    "correct": 1
  },
  {
    "question": "Combien de degres dans un triangle ?",
    "answers": ["90 degres", "180 degres", "270 degres", "360 degres"],
    "correct": 1
  },
  {
    "question": "Quelle est l'aire d'un carre de cote 7 ?",
    "answers": ["14", "28", "49", "56"],
    "correct": 2
  },
  {
    "question": "Combien font 3^4 ?",
    "answers": ["12", "27", "64", "81"],
    "correct": 3
  },
  {
    "question": "Le PGCD de 12 et 18 est :",
    "answers": ["2", "3", "6", "9"],
    "correct": 2
  },
  {
    "question": "Combien font 1/2 + 1/4 ?",
    "answers": ["1/6", "2/6", "3/4", "1"],
    "correct": 2
  },
  {
    "question": "Quelle est la valeur de Pi arrondie a 2 decimales ?",
    "answers": ["3.12", "3.14", "3.16", "3.18"],
    "correct": 1
  },
  {
    "question": "Un nombre pair + un nombre pair = ?",
    "answers": ["Impair", "Pair", "0", "1"],
    "correct": 1
  },
  {
    "question": "Combien de cotes a un hexagone ?",
    "answers": ["5", "6", "7", "8"],
    "correct": 1
  },
  {
    "question": "10% de 90 = ?",
    "answers": ["8", "9", "10", "18"],
    "correct": 1
  },
  {
    "question": "Volume d'un cube de cote 3 ?",
    "answers": ["9", "18", "27", "36"],
    "correct": 2
  },
  {
    "question": "Combien font 100 - 37 ?",
    "answers": ["63", "67", "73", "77"],
    "correct": 0
  },
  {
    "question": "Le symbole π represente :",
    "answers": ["Rayon", "Diametre", "Circonference / Diametre", "Aire"],
    "correct": 2
  },
  {
    "question": "5! = ?",
    "answers": ["20", "60", "120", "240"],
    "correct": 2
  },
  {
    "question": "Combien de minutes dans 2.5 heures ?",
    "answers": ["120", "140", "150", "180"],
    "correct": 2
  },
  {
    "question": "L'equation d'une droite est :",
    "answers": ["y = ax + b", "x² + y² = r²", "a² + b² = c²", "A = πr²"],
    "correct": 0
  },
  {
    "question": "Combien font 9 x 9 ?",
    "answers": ["72", "81", "90", "99"],
    "correct": 1
  },
  {
    "question": "Quelle fraction est egale a 0.75 ?",
    "answers": ["1/2", "2/3", "3/4", "4/5"],
    "correct": 2
  },
  {
    "question": "Theoreme de Pythagore :",
    "answers": ["a + b = c", "a² + b² = c²", "a x b = c", "a/b = c"],
    "correct": 1
  },
  {
    "question": "Combien font 2^10 ?",
    "answers": ["512", "1024", "2048", "4096"],
    "correct": 1
  },
  {
    "question": "Le perimetre d'un cercle s'appelle :",
    "answers": ["Aire", "Diametre", "Circonference", "Rayon"],
    "correct": 2
  },
  {
    "question": "7 - 3 x 2 = ?",
    "answers": ["1", "8", "14", "4"],
    "correct": 0
  }

        ]
    },

    biology: {
        name: "Biologie",
        total: 25,
        questions: [
  {
    "question": "Quel organe absorbe l'eau et les sels mineraux chez la plante ?",
    "answers": ["Tige", "Feuille", "Fleur", "Racine"],
    "correct": 3
  },
  {
    "question": "La photosynthese se fait dans quel organite ?",
    "answers": ["Mitochondrie", "Chloroplaste", "Noyau", "Vacuole"],
    "correct": 1
  },
  {
    "question": "Quel gaz les plantes absorbent-elles pour la photosynthese ?",
    "answers": ["Oxygene", "Dioxyde de carbone", "Azote", "Hydrogene"],
    "correct": 1
  },
  {
    "question": "La partie coloree et parfumee de la plante qui attire les pollinisateurs :",
    "answers": ["Fruit", "Tige", "Fleur", "Graine"],
    "correct": 2
  },
  {
    "question": "Quel pigment donne la couleur verte aux feuilles ?",
    "answers": ["Carotene", "Chlorophylle", "Anthocyane", "Xanthophylle"],
    "correct": 1
  },
  {
    "question": "A quoi sert principalement la tige ?",
    "answers": ["Faire la photosynthese", "Transporter la seve", "Se reproduire", "Stocker l'eau"],
    "correct": 1
  },
  {
    "question": "Le fruit provient de quelle partie de la fleur ?",
    "answers": ["Etamine", "Ovaire", "Petale", "Sepale"],
    "correct": 1
  },
  {
    "question": "Les plantes qui fabriquent leur propre nourriture sont dites :",
    "answers": ["Heterotrophes", "Autotrophes", "Carnivores", "Parasites"],
    "correct": 1
  },
  {
    "question": "Les stomates se trouvent principalement sur :",
    "answers": ["La racine", "La tige", "La feuille", "La fleur"],
    "correct": 2
  },
  {
    "question": "Que contient une graine ?",
    "answers": ["L'embryon", "La seve", "La chlorophylle", "Le pollen"],
    "correct": 0
  },
  {
    "question": "Quel element est essentiel pour la croissance des feuilles ?",
    "answers": ["Or", "Azote", "Plomb", "Mercure"],
    "correct": 1
  },
  {
    "question": "La transpiration des plantes se fait par :",
    "answers": ["La racine", "Les stomates", "La tige", "Le fruit"],
    "correct": 1
  },
  {
    "question": "Le mais est une plante :",
    "answers": ["Dicotyledone", "Monocotyledone", "Gymnosperme", "Bryophyte"],
    "correct": 1
  },
  {
    "question": "Le pollen est produit par :",
    "answers": ["Pistil", "Etamine", "Petale", "Sepale"],
    "correct": 1
  },
  {
    "question": "Quelle plante est carnivore ?",
    "answers": ["Rose", "Drosera", "Baobab", "Ble"],
    "correct": 1
  },
  {
    "question": "Le bois d'un arbre vient principalement de :",
    "answers": ["L'ecorce", "Le xyleme", "Le phloeme", "La moelle"],
    "correct": 1
  },
  {
    "question": "Pourquoi les plantes transpirent ?",
    "answers": ["Pour mourir", "Pour refroidir et transporter les sels", "Pour devenir rouge", "Pour faire des fruits"],
    "correct": 1
  },
  {
    "question": "La banane est botaniquement :",
    "answers": ["Un legume", "Une baie", "Un tubercule", "Une graine"],
    "correct": 1
  },
  {
    "question": "La reproduction par bouturage est :",
    "answers": ["Sexuee", "Asexuee", "Impossible", "Hybride"],
    "correct": 1
  },
  {
    "question": "Quel type de sol retient le mieux l'eau ?",
    "answers": ["Sableux", "Argileux", "Rocheux", "Calcaire"],
    "correct": 1
  },
  {
    "question": "La germination a besoin de :",
    "answers": ["Feu", "Eau, air, chaleur", "Glace", "Sel"],
    "correct": 1
  },
  {
    "question": "Les algues font partie des :",
    "answers": ["Bryophytes", "Pteridophytes", "Thallophytes", "Spermaphytes"],
    "correct": 2
  },
  {
    "question": "Le riz est riche surtout en :",
    "answers": ["Proteines", "Lipides", "Glucides", "Vitamines"],
    "correct": 2
  },
  {
    "question": "L'arbre le plus haut du monde est :",
    "answers": ["Baobab", "Sequoia", "Chene", "Eucalyptus"],
    "correct": 1
  },
  {
    "question": "Les racines du haricot sont :",
    "answers": ["Pivotantes", "Fasciculees", "Tubereuses", "Aeriennes"],
    "correct": 0
  }

        ]
    },

    medecine: {
        name: "Medine",
        total: 25,
        questions: [
  {
    "question": "Quel organe pompe le sang dans tout le corps ?",
    "answers": ["Poumon", "Cerveau", "Coeur", "Foie"],
    "correct": 2
  },
  {
    "question": "Combien de litres de sang a environ un adulte ?",
    "answers": ["3L", "4L", "5L", "7L"],
    "correct": 2
  },
  {
    "question": "Les globules rouges transportent principalement :",
    "answers": ["Les anticorps", "L'oxygene", "La graisse", "Le sucre"],
    "correct": 1
  },
  {
    "question": "La vitamine C previent quelle maladie ?",
    "answers": ["Rachitisme", "Scorbut", "Anemie", "Cecite"],
    "correct": 1
  },
  {
    "question": "Quel est le plus grand organe du corps humain ?",
    "answers": ["Foie", "Cerveau", "Peau", "Intestin"],
    "correct": 2
  },
  {
    "question": "Combien d'os a un corps d'adulte ?",
    "answers": ["186", "206", "226", "256"],
    "correct": 1
  },
  {
    "question": "L'insuline est produite par quel organe ?",
    "answers": ["Foie", "Pancreas", "Rein", "Rate"],
    "correct": 1
  },
  {
    "question": "Quelle est la tension arterielle normale ?",
    "answers": ["8/5", "12/8", "16/10", "20/12"],
    "correct": 1
  },
  {
    "question": "A quoi servent principalement les poumons ?",
    "answers": ["Digerer", "Respirer", "Filtrer le sang", "Penser"],
    "correct": 1
  },
  {
    "question": "Quel est le groupe sanguin donneur universel ?",
    "answers": ["A+", "B-", "AB+", "O-"],
    "correct": 3
  },
  {
    "question": "De quoi le cerveau a-t-il besoin comme energie principale ?",
    "answers": ["Glucose", "Proteines", "Lipides", "Eau salee"],
    "correct": 0
  },
  {
    "question": "A quoi sert un vaccin ?",
    "answers": ["Guerir", "Prevenir", "Operer", "Soulager"],
    "correct": 1
  },
  {
    "question": "La fievre est generalement un signe de :",
    "answers": ["Bonne sante", "Infection", "Faim", "Sommeil"],
    "correct": 1
  },
  {
    "question": "Combien de reins avons-nous ?",
    "answers": ["1", "2", "3", "4"],
    "correct": 1
  },
  {
    "question": "La carie dentaire touche :",
    "answers": ["Les yeux", "Les dents", "Les oreilles", "Le nez"],
    "correct": 1
  },
  {
    "question": "Le paludisme est transmis par :",
    "answers": ["Mouche", "Moustique", "Puce", "Tique"],
    "correct": 1
  },
  {
    "question": "La deshydratation cause surtout :",
    "answers": ["Sommeil", "Fatigue et soif", "Faim", "Joie"],
    "correct": 1
  },
  {
    "question": "Le SIDA est cause par quel virus ?",
    "answers": ["Bacterie", "Virus VIH", "Champignon", "Parasite"],
    "correct": 1
  },
  {
    "question": "Avec quel appareil mesure-t-on la temperature ?",
    "answers": ["Barometre", "Thermometre", "Tensiometre", "Stethoscope"],
    "correct": 1
  },
  {
    "question": "A quoi servent principalement les proteines ?",
    "answers": ["Energie rapide", "Construire les muscles", "Hydrater", "Dormir"],
    "correct": 1
  },
  {
    "question": "Le diabete concerne un probleme avec :",
    "answers": ["Le sel", "Le sucre dans le sang", "La graisse", "L'eau"],
    "correct": 1
  },
  {
    "question": "Le coeur bat en moyenne combien de fois par minute au repos ?",
    "answers": ["40 fois", "70 fois", "120 fois", "200 fois"],
    "correct": 1
  },
  {
    "question": "La radiographie sert a voir :",
    "answers": ["Le sang", "Les os", "La peau", "Le cerveau"],
    "correct": 1
  },
  {
    "question": "Le manque de fer dans le sang cause :",
    "answers": ["Diabete", "Anemie", "Cancer", "Asthme"],
    "correct": 1
  },
  {
    "question": "Se laver les mains regulierement permet d'eviter :",
    "answers": ["Le froid", "Les infections", "La faim", "Le sommeil"],
    "correct": 1
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
        },
        {
          question: "Le marathon fait combien de kilometre ?",
            answers: [
              "21",
              "32",
              "42,195",
              "50"
            ],
            correct: "42,195"
        },
        {
          question: "Combien de sets pour gagner a Roland Garros ?",
            answers: [
              "2",
              "3",
              "4",
              "5"
            ],
            correct: "3"
        },
        {
          question: "Quel est le sport national du japon ?",
            answers: [
              "Karate",
              "Judo",
              "Sumo",
              "Kendo"
            ],
            correct: "Sumo"
        },
        {
          question: "Combien d'anneaux y a-t-il sur le logo des jeux olympiques ?",
            answers: [
              "3",
              "4",
              "5",
              "6"
            ],
            correct: "5"
        },
        {
          question: "Dans la natation, le papillon est : ?",
            answers: [
              "Une nage",
              "Un equipement",
              "Une faute",
              "Un record"
            ],
            correct: "Une nage"
        },
        {
          question: "Le ballon recompense le meilleur joueur ?",
            answers: [
              "Le meilleur coach",
              "le meilleur joueur",
              "le meilleur equipe",
              "le meilleur but"
            ],
            correct: "le meilleur joueur"
        },
        {
          question: "Combien de joueurs y a-t-il dans une equipe de volley ?",
            answers: [
              "4",
              "5",
              "6",
              "7"
            ],
            correct: "6"
        },
        {
          question: "Le 100m est une epreuve de :  ?",
            answers: [
              "Fond",
              "Demi-fond",
              "Sprint",
              "Haies"
            ],
            correct: "Sprint"
        },
        {
          question: "Au tennis, 40-4- s'appelle : ?",
            answers: [
              "Avantage",
              "Egalite",
              "Jeu",
              "Set"
            ],
            correct: "Egalite"
        },
        {
          question: "Quel est le pays avec le plus de coupe du monde ?",
            answers: [
              "Allemagne",
              "Bresil",
              "France",
              "Italie"
            ],
            correct: "Bresil"
        },
        {
          question: "La NBA est une ligue de :  ?",
            answers: [
              "Football",
              "Baseball",
              "Basket",
              "Hockey"
            ],
            correct: "Basket"
        },
        {
          question: "Combien de tours fait un F1 a Monaco ?",
            answers: [
              "50",
              "68",
              "78",
              "90"
            ],
            correct: "78"
        },
        {
          question: "Le criquet se joue en :  ?",
            answers: [
              "USA",
              "Inde",
              "Bresil",
              "Russie"
            ],
            correct: "Inde"
        },
        {
          question: "Le KO vient de :  ?",
            answers: [
              "Boxe",
              "Ruby",
              "Foot",
              "Golf"
            ],
            correct: "Boxe"
        },
        {
          question: "Combien de joueurs en ruby au XV ?",
            answers: [
              "11",
              "13",
              "15",
              "18"
            ],
            correct: "15"
        },
        {
          question: "Le tour de France est : ?",
            answers: [
              "Course a pied",
              "Course cycliste",
              "Course en bateau",
              "Course auto"
            ],
            correct: "Course cycliste"
        },
        {
          question: "Dans quel sport crie-t-on Strike ?",
            answers: [
              "Golf",
              "Billard",
              "Flechettes",
              "Tenis"
            ],
            correct: "Bowling"
        },
        {
          question: "Les JO d'hiver 2026 auront lieu au : ?",
            answers: [
              "Paris",
              "Milan Cortina",
              "Tokyo",
              "Los Angeles"
            ],
            correct: "Mila Cortina"
        },
        {
          question: "Le but au handball mesure: ?",
            answers: [
              "2m x 2m",
              "3m x 2m",
              "3m x 2,5m",
              "4m x 4m"
            ],
            correct: "3m x 2m"
        },
        {
          question: "Michael Jordan a joue en  ?",
            answers: [
              "NBA",
              "NHL",
              "MLB",
              "NFL"
            ],
            correct: "NBA"
        },
        {
          question: "Le plus rapide sur 110m : Usain ?",
            answers: [
              "Parker",
              "Smith",
              "Bolt",
              "James"
            ],
            correct: "Bolt"
        },
        {
          question: "Au fait, un carton rouge = ?",
            answers: [
              "Avertissement",
              "Expulsion",
              "But",
              "Corner"
            ],
            correct: "Expulsion"
        },
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
    "question": "Quelle est la capitale du Cameroun ?",
    "answers": ["Douala", "Yaounde", "Garoua", "Bafoussam"],
    "correct": 1
  },
  {
    "question": "Combien de joueurs sur un terrain de football ?",
    "answers": ["9", "10", "11", "12"],
    "correct": 2
  },
  {
    "question": "Quel organe pompe le sang ?",
    "answers": ["Poumon", "Cerveau", "Coeur", "Foie"],
    "correct": 2
  },
  {
    "question": "Qui a ecrit Les Miserables ?",
    "answers": ["Voltaire", "Victor Hugo", "Moliere", "Camus"],
    "correct": 1
  },
  {
    "question": "En quelle annee l'homme a marche sur la Lune ?",
    "answers": ["1965", "1969", "1972", "1980"],
    "correct": 1
  },
  {
    "question": "Que signifie HTML ?",
    "answers": ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Tool Multi Language"],
    "correct": 0
  },
  {
    "question": "Combien font 12 x 15 ?",
    "answers": ["160", "170", "180", "190"],
    "correct": 2
  },
  {
    "question": "La photosynthese se fait dans :",
    "answers": ["Mitochondrie", "Chloroplaste", "Noyau", "Vacuole"],
    "correct": 1
  },
  {
    "question": "Le marathon fait combien de km ?",
    "answers": ["21 km", "32 km", "42.195 km", "50 km"],
    "correct": 2
  },
  {
    "question": "Quel est le plus grand ocean du monde ?",
    "answers": ["Atlantique", "Indien", "Arctique", "Pacifique"],
    "correct": 3
  },
  {
    "question": "How do you say 'Bonjour' in English ?",
    "answers": ["Goodbye", "Good morning", "Good night", "Hello"],
    "correct": 3
  },
  {
    "question": "Qui a peint la Joconde ?",
    "answers": ["Van Gogh", "Picasso", "Leonard de Vinci", "Michel-Ange"],
    "correct": 2
  },
  {
    "question": "Combien de litres de sang a un adulte ?",
    "answers": ["3L", "4L", "5L", "7L"],
    "correct": 2
  },
  {
    "question": "Quelle est la racine carree de 144 ?",
    "answers": ["10", "11", "12", "14"],
    "correct": 2
  },
  {
    "question": "Dans quel sport utilise-t-on un panier ?",
    "answers": ["Tennis", "Basket", "Volley", "Handball"],
    "correct": 1
  },
  {
    "question": "Quel gaz les plantes absorbent-elles ?",
    "answers": ["Oxygene", "Dioxyde de carbone", "Azote", "Hydrogene"],
    "correct": 1
  },
  {
    "question": "Qui est l'auteur de Le Petit Prince ?",
    "answers": ["Albert Camus", "Antoine de Saint-Exupery", "Jean de La Fontaine", "Charles Perrault"],
    "correct": 1
  },
  {
    "question": "La vitamine C previent :",
    "answers": ["Rachitisme", "Scorbut", "Anemie", "Cecite"],
    "correct": 1
  },
  {
    "question": "Quel pays a gagne la Coupe du Monde 2022 ?",
    "answers": ["France", "Argentine", "Bresil", "Maroc"],
    "correct": 1
  },
  {
    "question": "Translate 'Livre' in English :",
    "answers": ["Book", "Pen", "Paper", "Read"],
    "correct": 0
  },
  {
    "question": "En quelle annee a eu lieu la Revolution francaise ?",
    "answers": ["1789", "1799", "1804", "1815"],
    "correct": 0
  },
  {
    "question": "Le plus grand organe du corps :",
    "answers": ["Foie", "Cerveau", "Peau", "Intestin"],
    "correct": 2
  },
  {
    "question": "Combien d'anneaux olympiques ?",
    "answers": ["3", "4", "5", "6"],
    "correct": 2
  },
  {
    "question": "Quelle est la monnaie du Cameroun ?",
    "answers": ["Dollar", "Euro", "Franc CFA", "Naira"],
    "correct": 2
  },
  {
    "question": "Qui a ecrit Candide ?",
    "answers": ["Voltaire", "Rousseau", "Diderot", "Zola"],
    "correct": 0
  },
  {
    "question": "Combien font 25% de 200 ?",
    "answers": ["25", "40", "50", "75"],
    "correct": 2
  },
  {
    "question": "La capitale de l'Australie est :",
    "answers": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "correct": 2
  },
  {
    "question": "Les globules rouges transportent :",
    "answers": ["Anticorps", "Oxygene", "Graisse", "Sucre"],
    "correct": 1
  },
  {
    "question": "Quel animal terrestre est le plus rapide ?",
    "answers": ["Lion", "Guepard", "Cheval", "Autruche"],
    "correct": 1
  },
  {
    "question": "Who wrote Romeo and Juliet ?",
    "answers": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    "correct": 1
  },
  {
    "question": "Combien d'os a un adulte ?",
    "answers": ["186", "206", "226", "256"],
    "correct": 1
  },
  {
    "question": "Le Nil est le plus long fleuve de :",
    "answers": ["Asie", "Amerique", "Afrique", "Europe"],
    "correct": 2
  },
  {
    "question": "Resoudre : 2x + 6 = 14. x = ?",
    "answers": ["3", "4", "5", "6"],
    "correct": 1
  },
  {
    "question": "L'insuline est produite par :",
    "answers": ["Foie", "Pancreas", "Rein", "Rate"],
    "correct": 1
  },
  {
    "question": "Qui a ecrit Madame Bovary ?",
    "answers": ["Gustave Flaubert", "Emile Zola", "Balzac", "Stendhal"],
    "correct": 0
  },
  {
    "question": "Le papillon est une nage en :",
    "answers": ["Athletisme", "Natation", "Cyclisme", "Boxe"],
    "correct": 1
  },
  {
    "question": "Translate 'Merci' in English :",
    "answers": ["Please", "Sorry", "Thank you", "Hello"],
    "correct": 2
  },
  {
    "question": "La tension normale est environ :",
    "answers": ["8/5", "12/8", "16/10", "20/12"],
    "correct": 1
  },
  {
    "question": "Quel pigment donne la couleur verte aux feuilles ?",
    "answers": ["Carotene", "Chlorophylle", "Anthocyane", "Xanthophylle"],
    "correct": 1
  },
  {
    "question": "En quelle annee a commence la 2eme Guerre Mondiale ?",
    "answers": ["1914", "1939", "1945", "1950"],
    "correct": 1
  },
  {
    "question": "Combien de degres dans un triangle ?",
    "answers": ["90 degres", "180 degres", "270 degres", "360 degres"],
    "correct": 1
  },
  {
    "question": "Le Ballon d'Or recompense :",
    "answers": ["Meilleur coach", "Meilleur joueur", "Meilleure equipe", "Meilleur but"],
    "correct": 1
  },
  {
    "question": "Quel est le desert le plus grand du monde ?",
    "answers": ["Sahara", "Gobi", "Kalahari", "Arctique"],
    "correct": 3
  },
  {
    "question": "Who is the author of Harry Potter ?",
    "answers": ["J.K. Rowling", "Stephen King", "George R.R. Martin", "Suzanne Collins"],
    "correct": 0
  },
  {
    "question": "Les poumons servent a :",
    "answers": ["Digerer", "Respirer", "Filtrer", "Penser"],
    "correct": 1
  },
  {
    "question": "Quelle est l'aire d'un carre de cote 7 ?",
    "answers": ["14", "28", "49", "56"],
    "correct": 2
  },
  {
    "question": "Le sport national du Japon :",
    "answers": ["Karate", "Judo", "Sumo", "Kendo"],
    "correct": 2
  },
  {
    "question": "La graine contient :",
    "answers": ["L'embryon", "La seve", "La chlorophylle", "Le pollen"],
    "correct": 0
  },
  {
    "question": "Qui est considere comme le pere de la psychanalyse ?",
    "answers": ["Carl Jung", "Sigmund Freud", "Ivan Pavlov", "B.F. Skinner"],
    "correct": 1
  },
  {
    "question": "Translate 'Chat' in English :",
    "answers": ["Dog", "Cat", "Bird", "Fish"],
    "correct": 1
  },
  {
    "question": "Le groupe sanguin donneur universel :",
    "answers": ["A+", "B-", "AB+", "O-"],
    "correct": 3
  },
  {
    "question": "Combien font 3^4 ?",
    "answers": ["12", "27", "64", "81"],
    "correct": 3
  },
  {
    "question": "La capitale du Bresil est :",
    "answers": ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
    "correct": 2
  },
  {
    "question": "Qui a ecrit Les Fleurs du Mal ?",
    "answers": ["Baudelaire", "Rimbaud", "Verlaine", "Hugo"],
    "correct": 0
  },
  {
    "question": "Le cerveau a besoin de :",
    "answers": ["Glucose", "Proteines", "Lipides", "Eau salee"],
    "correct": 0
  },
  {
    "question": "Combien de joueurs au volley ?",
    "answers": ["4", "5", "6", "7"],
    "correct": 2
  },
  {
    "question": "Le PGCD de 12 et 18 est :",
    "answers": ["2", "3", "6", "9"],
    "correct": 2
  },
  {
    "question": "Quel pays a la forme d'une botte ?",
    "answers": ["Espagne", "Italie", "Grece", "Portugal"],
    "correct": 1
  },
  {
    "question": "Le vaccin sert a :",
    "answers": ["Guerir", "Prevenir", "Operer", "Soulager"],
    "correct": 1
  },
  {
    "question": "Translate 'Ecole' in English :",
    "answers": ["College", "School", "University", "Class"],
    "correct": 1
  },
  {
    "question": "Qui a ecrit Le Rouge et le Noir ?",
    "answers": ["Stendhal", "Balzac", "Flaubert", "Maupassant"],
    "correct": 0
  },
  {
    "question": "Combien font 1/2 + 1/4 ?",
    "answers": ["1/6", "2/6", "3/4", "1"],
    "correct": 2
  },
  {
    "question": "La fievre est un signe de :",
    "answers": ["Bonne sante", "Infection", "Faim", "Sommeil"],
    "correct": 1
  },
  {
    "question": "Le 100m est une epreuve de :",
    "answers": ["Fond", "Demi-fond", "Sprint", "Haies"],
    "correct": 2
  },
  {
    "question": "Combien de continents y a-t-il ?",
    "answers": ["5", "6", "7", "8"],
    "correct": 2
  },
  {
    "question": "Qui a ecrit Germinal ?",
    "answers": ["Zola", "Hugo", "Balzac", "Dumas"],
    "correct": 0
  },
  {
    "question": "Quelle est la valeur de Pi arrondie ?",
    "answers": ["3.12", "3.14", "3.16", "3.18"],
    "correct": 1
  },
  {
    "question": "Combien de reins avons-nous ?",
    "answers": ["1", "2", "3", "4"],
    "correct": 1
  },
  {
    "question": "Translate 'Maison' in English :",
    "answers": ["House", "Home", "Building", "Room"],
    "correct": 0
  },
  {
    "question": "40-40 au tennis s'appelle :",
    "answers": ["Avantage", "Egalite", "Jeu", "Set"],
    "correct": 1
  },
  {
    "question": "Un nombre pair + un nombre pair = ?",
    "answers": ["Impair", "Pair", "0", "1"],
    "correct": 1
  },
  {
    "question": "Le paludisme est transmis par :",
    "answers": ["Mouche", "Moustique", "Puce", "Tique"],
    "correct": 1
  },
  {
    "question": "Qui a ecrit L'Etranger ?",
    "answers": ["Camus", "Sartre", "Beauvoir", "Gide"],
    "correct": 0
  },
  {
    "question": "Combien de cotes a un hexagone ?",
    "answers": ["5", "6", "7", "8"],
    "correct": 1
  },
  {
    "question": "La plus grande planete du systeme solaire :",
    "answers": ["Terre", "Mars", "Jupiter", "Saturne"],
    "correct": 2
  },
  {
    "question": "10% de 90 = ?",
    "answers": ["8", "9", "10", "18"],
    "correct": 1
  },
  {
    "question": "La deshydratation cause :",
    "answers": ["Sommeil", "Fatigue et soif", "Faim", "Joie"],
    "correct": 1
  },
  {
    "question": "Translate 'Eau' in English :",
    "answers": ["Fire", "Air", "Water", "Earth"],
    "correct": 2
  },
  {
    "question": "Qui a decouvert la penicilline ?",
    "answers": ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Albert Einstein"],
    "correct": 2
  },
  {
    "question": "Volume d'un cube de cote 3 ?",
    "answers": ["9", "18", "27", "36"],
    "correct": 2
  },
  {
    "question": "Le pays avec le plus de Coupes du Monde :",
    "answers": ["Allemagne", "Bresil", "France", "Italie"],
    "correct": 1
  },
  {
    "question": "Les stomates se trouvent sur :",
    "answers": ["La racine", "La tige", "La feuille", "La fleur"],
    "correct": 2
  },
  {
    "question": "Qui a ecrit Notre-Dame de Paris ?",
    "answers": ["Moliere", "Racine", "Victor Hugo", "Corneille"],
    "correct": 2
  },
  {
    "question": "Combien font 100 - 37 ?",
    "answers": ["63", "67", "73", "77"],
    "correct": 0
  },
  {
    "question": "Le SIDA est cause par :",
    "answers": ["Bacterie", "Virus VIH", "Champignon", "Parasite"],
    "correct": 1
  },
  {
    "question": "Translate 'Pain' in English :",
    "answers": ["Cake", "Bread", "Milk", "Butter"],
    "correct": 1
  },
  {
    "question": "La NBA est une ligue de :",
    "answers": ["Football", "Baseball", "Basket", "Hockey"],
    "correct": 2
  },
  {
    "question": "Le symbole π represente :",
    "answers": ["Rayon", "Diametre", "Circonference / Diametre", "Aire"],
    "correct": 2
  },
  {
    "question": "On mesure la temperature avec :",
    "answers": ["Barometre", "Thermometre", "Tensiometre", "Stethoscope"],
    "correct": 1
  },
  {
    "question": "Qui est l'auteur de Cyrano de Bergerac ?",
    "answers": ["Edmond Rostand", "Moliere", "Beaumarchais", "Voltaire"],
    "correct": 0
  },
  {
    "question": "5! = ?",
    "answers": ["20", "60", "120", "240"],
    "correct": 2
  },
  {
    "question": "Les proteines servent a :",
    "answers": ["Energie rapide", "Construire les muscles", "Hydrater", "Dormir"],
    "correct": 1
  },
  {
    "question": "Combien de minutes dans 2.5 heures ?",
    "answers": ["120", "140", "150", "180"],
    "correct": 2
  },
  {
    "question": "Translate 'Noir' in English :",
    "answers": ["White", "Red", "Black", "Blue"],
    "correct": 2
  },
  {
    "question": "Le diabete concerne :",
    "answers": ["Le sel", "Le sucre dans le sang", "La graisse", "L'eau"],
    "correct": 1
  },
  {
    "question": "L'equation d'une droite est :",
    "answers": ["y = ax + b", "x² + y² = r²", "a² + b² = c²", "A = πr²"],
    "correct": 0
  },
  {
    "question": "Le coeur bat environ :",
    "answers": ["40 fois/min", "70 fois/min", "120 fois/min", "200 fois/min"],
    "correct": 1
  },
  {
    "question": "Qui a ecrit Vingt mille lieues sous les mers ?",
    "answers": ["Jules Verne", "Alexandre Dumas", "Emile Zola", "Victor Hugo"],
    "correct": 0
  },
  {
    "question": "Combien font 9 x 9 ?",
    "answers": ["72", "81", "90", "99"],
    "correct": 1
  },
  {
    "question": "La radiographie sert a voir :",
    "answers": ["Le sang", "Les os", "La peau", "Le cerveau"],
    "correct": 1
  },
  {
    "question": "Le Tour de France est une course :",
    "answers": ["A pied", "Cycliste", "Auto", "Bateau"],
    "correct": 1
  },
  {
    "question": "Translate 'Vert' in English :",
    "answers": ["Red", "Green", "Blue", "Yellow"],
    "correct": 1
  },
  {
    "question": "Quelle fraction est egale a 0.75 ?",
    "answers": ["1/2", "2/3", "3/4", "4/5"],
    "correct": 2
  },
  {
    "question": "Manque de fer = ?",
    "answers": ["Diabete", "Anemie", "Cancer", "Asthme"],
    "correct": 1
  },
  {
    "question": "On crie 'Strike' dans quel sport ?",
    "answers": ["Bowling", "Golf", "Billard", "Flechettes"],
    "correct": 0
  },
  {
    "question": "Le Theoreme de Pythagore :",
    "answers": ["a + b = c", "a² + b² = c²", "a x b = c", "a/b = c"],
    "correct": 1
  },
  {
    "question": "Se laver les mains evite :",
    "answers": ["Le froid", "Les infections", "La faim", "Le sommeil"],
    "correct": 1
  },
  {
    "question": "Translate 'France' in English :",
    "answers": ["France", "French", "Paris", "Europe"],
    "correct": 0
  },
  {
    "question": "Combien font 2^10 ?",
    "answers": ["512", "1024", "2048", "4096"],
    "correct": 1
  },
  {
    "question": "Le perimetre d'un cercle s'appelle :",
    "answers": ["Aire", "Diametre", "Circonference", "Rayon"],
    "correct": 2
  },
  {
    "question": "Les JO d'hiver 2026 auront lieu a :",
    "answers": ["Paris", "Milan-Cortina", "Tokyo", "Los Angeles"],
    "correct": 1
  },
  {
    "question": "7 - 3 x 2 = ?",
    "answers": ["1", "8", "14", "4"],
    "correct": 0
  },
  {
    "question": "Qui a ecrit Le Comte de Monte-Cristo ?",
    "answers": ["Victor Hugo", "Alexandre Dumas", "Emile Zola", "Balzac"],
    "correct": 1
  },
  {
    "question": "Translate 'Docteur' in English :",
    "answers": ["Teacher", "Doctor", "Lawyer", "Engineer"],
    "correct": 1
  },
  {
    "question": "Le sport avec le plus de medailles aux JO :",
    "answers": ["Athletisme", "Natation", "Gymnastique", "Cyclisme"],
    "correct": 1
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