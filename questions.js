const questionData = {
    // ==========================================
    // ESPAÑOL (Target Language: Spanish)
    // ==========================================
    es: {
        beginner: {
            work: [
                { question: "Yo _____ en una oficina.", options: ["trabajo", "trabajas", "trabaja"], correct: "trabajo" },
                { question: "¿Tú _____ correo electrónico?", options: ["usas", "usar", "uso"], correct: "usas" },
                { question: "El jefe _____ una reunión.", options: ["tiene", "tengo", "tienes"], correct: "tiene" },
                { question: "Nosotros _____ informes.", options: ["escribimos", "escribe", "escriben"], correct: "escribimos" },
                { question: "Ella _____ el teléfono.", options: ["contesta", "contestas", "contesto"], correct: "contesta" },
                { question: "¿Ustedes _____ café?", options: ["beben", "bebe", "bebes"], correct: "beben" },
                { question: "Yo _____ a las 9:00 AM.", options: ["llego", "llegas", "llega"], correct: "llego" },
                { question: "El escritorio _____ grande.", options: ["es", "son", "eres"], correct: "es" },
                { question: "¿Dónde _____ la impresora?", options: ["está", "es", "soy"], correct: "está" },
                { question: "Mis compañeros _____ amables.", options: ["son", "están", "es"], correct: "son" }
            ],
            tourism: [
                { question: "Yo _____ un boleto.", options: ["compro", "compras", "compra"], correct: "compro" },
                { question: "¿Dónde _____ el hotel?", options: ["está", "es", "soy"], correct: "está" },
                { question: "Nosotros _____ a la playa.", options: ["vamos", "vas", "van"], correct: "vamos" },
                { question: "El museo _____ interesante.", options: ["es", "está", "son"], correct: "es" },
                { question: "¿Tú _____ fotos?", options: ["tomas", "toma", "tomo"], correct: "tomas" },
                { question: "El tren _____ rápido.", options: ["es", "está", "son"], correct: "es" },
                { question: "Yo _____ mi pasaporte.", options: ["necesito", "necesitas", "necesita"], correct: "necesito" },
                { question: "¿Usted _____ inglés?", options: ["habla", "hablas", "hablo"], correct: "habla" },
                { question: "La comida _____ deliciosa.", options: ["es", "está", "son"], correct: "es" },
                { question: "Nosotros _____ turistas.", options: ["somos", "estamos", "son"], correct: "somos" }
            ],
            grammar: [
                { question: "La casa _____ roja.", options: ["es", "está", "son"], correct: "es" },
                { question: "Los gatos _____ pequeños.", options: ["son", "es", "están"], correct: "son" },
                { question: "Yo _____ alto.", options: ["soy", "estoy", "es"], correct: "soy" },
                { question: "Ella _____ cansada.", options: ["está", "es", "son"], correct: "está" },
                { question: "Nosotros _____ estudiantes.", options: ["somos", "estamos", "son"], correct: "somos" },
                { question: "¿Tú _____ feliz?", options: ["estás", "eres", "es"], correct: "estás" },
                { question: "El libro _____ en la mesa.", options: ["está", "es", "son"], correct: "está" },
                { question: "Las flores _____ bonitas.", options: ["son", "están", "es"], correct: "son" },
                { question: "Hoy _____ lunes.", options: ["es", "está", "son"], correct: "es" },
                { question: "Yo _____ enfermo.", options: ["estoy", "soy", "es"], correct: "estoy" }
            ]
        },
        intermediate: {
            work: [
                { question: "Ayer yo _____ el informe.", options: ["terminé", "termino", "terminaré"], correct: "terminé" },
                { question: "Nosotros _____ una conferencia la semana pasada.", options: ["tuvimos", "tenemos", "tendremos"], correct: "tuvimos" },
                { question: "¿Tú _____ el correo ayer?", options: ["enviaste", "envías", "enviarás"], correct: "enviaste" },
                { question: "El cliente _____ satisfecho con el proyecto.", options: ["quedó", "queda", "quedará"], correct: "quedó" },
                { question: "Yo _____ trabajando cuando llamaste.", options: ["estaba", "estoy", "estaré"], correct: "estaba" },
                { question: "Ellos _____ el contrato mañana.", options: ["firmarán", "firman", "firmaron"], correct: "firmarán" },
                { question: "Si tengo tiempo, _____ el documento.", options: ["revisaré", "reviso", "revisé"], correct: "revisaré" },
                { question: "Es importante que tú _____ a tiempo.", options: ["llegues", "llegas", "llegaste"], correct: "llegues" },
                { question: "Busco un asistente que _____ inglés.", options: ["hable", "habla", "habló"], correct: "hable" },
                { question: "Cuando _____ el jefe, empezamos.", options: ["llegue", "llega", "llegó"], correct: "llegue" }
            ],
            tourism: [
                { question: "El año pasado _____ a España.", options: ["fui", "voy", "iré"], correct: "fui" },
                { question: "Nosotros _____ en un hotel muy bonito.", options: ["nos quedamos", "nos quedamos", "nos quedaremos"], correct: "nos quedamos" },
                { question: "¿Ya _____ las maletas?", options: ["hiciste", "haces", "harás"], correct: "hiciste" },
                { question: "Mañana _____ el museo del Prado.", options: ["visitaremos", "visitamos", "visitamos"], correct: "visitaremos" },
                { question: "Cuando _____ a París, comeré croissants.", options: ["vaya", "voy", "fui"], correct: "vaya" },
                { question: "Me gustaría que tú _____ conmigo.", options: ["vinieras", "vienes", "venías"], correct: "vinieras" },
                { question: "Yo _____ fotos mientras caminaba.", options: ["tomaba", "tomé", "tomo"], correct: "tomaba" },
                { question: "Si tuviera dinero, _____ por el mundo.", options: ["viajaría", "viajaré", "viajo"], correct: "viajaría" },
                { question: "Espero que el vuelo no _____ retrasado.", options: ["esté", "está", "estuvo"], correct: "esté" },
                { question: "Anoche _____ en un restaurante típico.", options: ["cenamos", "cenábamos", "cenaremos"], correct: "cenamos" }
            ],
            grammar: [
                { question: "Cuando era niño, _____ mucho.", options: ["jugaba", "jugué", "juego"], correct: "jugaba" },
                { question: "Ayer _____ al cine.", options: ["fui", "iba", "voy"], correct: "fui" },
                { question: "He _____ ese libro dos veces.", options: ["leído", "leyendo", "leo"], correct: "leído" },
                { question: "No creo que él _____ la verdad.", options: ["sepa", "sabe", "sabía"], correct: "sepa" },
                { question: "Si _____ estudiarías más.", options: ["pudieras", "puedes", "podías"], correct: "pudieras" },
                { question: "Quiero que tú _____ la tarea.", options: ["hagas", "haces", "hiciste"], correct: "hagas" },
                { question: "Dudo que ellos _____ mañana.", options: ["vengan", "vienen", "vinieron"], correct: "vengan" },
                { question: "Me alegra que _____ aquí.", options: ["estés", "estás", "estuviste"], correct: "estés" },
                { question: "Busco un libro que _____ interesante.", options: ["sea", "es", "era"], correct: "sea" },
                { question: "Aunque _____ calor, saldré.", options: ["haga", "hace", "hizo"], correct: "haga" }
            ]
        },
        advanced: {
            work: [
                { question: "Si hubieras terminado el informe, lo _____ enviado.", options: ["habríamos", "habremos", "hemos"], correct: "habríamos" },
                { question: "Es imprescindible que se _____ las normas.", options: ["respeten", "respetan", "respetaron"], correct: "respeten" },
                { question: "A no ser que _____ el presupuesto, no podemos continuar.", options: ["aprueben", "aprueban", "aprobaron"], correct: "aprueben" },
                { question: "Por mucho que _____, no lograrás convencerlo.", options: ["insistas", "insistes", "insististe"], correct: "insistas" },
                { question: "De haberlo sabido, te _____ avisado.", options: ["habría", "habré", "he"], correct: "habría" },
                { question: "Se busca personal que _____ experiencia previa.", options: ["tenga", "tiene", "tenía"], correct: "tenga" },
                { question: "Cuando hayas _____ el análisis, avísame.", options: ["terminado", "terminando", "terminar"], correct: "terminado" },
                { question: "No obstante, _____ seguir intentándolo.", options: ["debemos", "debiéramos", "debimos"], correct: "debemos" },
                { question: "El proyecto fue _____ por el comité.", options: ["rechazado", "rechazando", "rechazar"], correct: "rechazado" },
                { question: "Habiendo _____ los datos, procedemos.", options: ["analizado", "analizando", "analizar"], correct: "analizado" }
            ],
            tourism: [
                { question: "Si hubiéramos reservado antes, _____ pagado menos.", options: ["habríamos", "habremos", "hemos"], correct: "habríamos" },
                { question: "Ojalá _____ visitado ese museo.", options: ["hubiéramos", "habríamos", "hemos"], correct: "hubiéramos" },
                { question: "A menos que _____ el vuelo, llegaremos tarde.", options: ["cancelen", "cancelan", "cancelaron"], correct: "cancelen" },
                { question: "Como si _____ la primera vez que viajas.", options: ["fuera", "es", "fue"], correct: "fuera" },
                { question: "De no haber perdido el tren, ya _____ allí.", options: ["estaríamos", "estaremos", "estamos"], correct: "estaríamos" },
                { question: "Quienquiera que _____ a ese lugar, queda encantado.", options: ["vaya", "va", "fue"], correct: "vaya" },
                { question: "Aun cuando _____ mal tiempo, saldremos.", options: ["haga", "hace", "hizo"], correct: "haga" },
                { question: "Se recomienda que los turistas _____ precaución.", options: ["tengan", "tienen", "tenían"], correct: "tengan" },
                { question: "Habiendo _____ las maletas, salimos.", options: ["hecho", "haciendo", "hacer"], correct: "hecho" },
                { question: "No creo que el guía _____ dicho eso.", options: ["haya", "ha", "había"], correct: "haya" }
            ],
            grammar: [
                { question: "Si yo _____ tú, no lo haría.", options: ["fuera", "fuese", "soy"], correct: "fuera" },
                { question: "Es posible que él ya _____ llegado.", options: ["haya", "ha", "había"], correct: "haya" },
                { question: "Me extraña que no me _____ llamado.", options: ["hayas", "has", "habías"], correct: "hayas" },
                { question: "Si hubieras estudiado, _____ aprobado.", options: ["habrías", "habrás", "has"], correct: "habrías" },
                { question: "Te lo diré con tal de que no se lo _____ a nadie.", options: ["digas", "dices", "dijiste"], correct: "digas" },
                { question: "Antes de que _____ te daré el regalo.", options: ["te vayas", "te vas", "te fuiste"], correct: "te vayas" },
                { question: "No es que no _____ ir, es que no puedo.", options: ["quiera", "quiero", "quise"], correct: "quiera" },
                { question: "Ojalá _____ llovido ayer.", options: ["hubiera", "habría", "ha"], correct: "hubiera" },
                { question: "Quiero un coche que _____ poco.", options: ["consuma", "consume", "consumió"], correct: "consuma" },
                { question: "Por más que _____, no te escuchará.", options: ["grites", "gritas", "gritaste"], correct: "grites" }
            ]
        }
    },

    // ==========================================
    // ENGLISH (Target Language: English)
    // ==========================================
    en: {
        beginner: {
            work: [
                { question: "I _____ in an office.", options: ["work", "works", "working"], correct: "work" },
                { question: "She _____ emails every day.", options: ["writes", "write", "writing"], correct: "writes" },
                { question: "We _____ a meeting now.", options: ["have", "has", "having"], correct: "have" },
                { question: "He _____ the phone.", options: ["answers", "answer", "answering"], correct: "answers" },
                { question: "Do you _____ coffee?", options: ["drink", "drinks", "drinking"], correct: "drink" },
                { question: "They _____ colleagues.", options: ["are", "is", "am"], correct: "are" },
                { question: "The boss _____ busy.", options: ["is", "are", "am"], correct: "is" },
                { question: "I _____ at 9 AM.", options: ["start", "starts", "starting"], correct: "start" },
                { question: "Where _____ the printer?", options: ["is", "are", "am"], correct: "is" },
                { question: "You _____ a computer.", options: ["use", "uses", "using"], correct: "use" }
            ],
            tourism: [
                { question: "I _____ a ticket.", options: ["buy", "buys", "buying"], correct: "buy" },
                { question: "Where _____ the hotel?", options: ["is", "are", "am"], correct: "is" },
                { question: "We _____ to the beach.", options: ["go", "goes", "going"], correct: "go" },
                { question: "The museum _____ interesting.", options: ["is", "are", "am"], correct: "is" },
                { question: "Do you _____ photos?", options: ["take", "takes", "taking"], correct: "take" },
                { question: "The train _____ fast.", options: ["is", "are", "am"], correct: "is" },
                { question: "I _____ my passport.", options: ["need", "needs", "needing"], correct: "need" },
                { question: "Do you _____ English?", options: ["speak", "speaks", "speaking"], correct: "speak" },
                { question: "The food _____ delicious.", options: ["is", "are", "am"], correct: "is" },
                { question: "We _____ tourists.", options: ["are", "is", "am"], correct: "are" }
            ],
            grammar: [
                { question: "The cat _____ black.", options: ["is", "are", "am"], correct: "is" },
                { question: "They _____ happy.", options: ["are", "is", "am"], correct: "are" },
                { question: "I _____ tall.", options: ["am", "is", "are"], correct: "am" },
                { question: "She _____ tired.", options: ["is", "are", "am"], correct: "is" },
                { question: "We _____ students.", options: ["are", "is", "am"], correct: "are" },
                { question: "He _____ not like apples.", options: ["does", "do", "doing"], correct: "does" },
                { question: "_____ you play tennis?", options: ["Do", "Does", "Doing"], correct: "Do" },
                { question: "The book _____ on the table.", options: ["is", "are", "am"], correct: "is" },
                { question: "Today _____ Monday.", options: ["is", "are", "am"], correct: "is" },
                { question: "I _____ hungry.", options: ["am", "is", "are"], correct: "am" }
            ]
        },
        intermediate: {
            work: [
                { question: "Yesterday, I _____ the report.", options: ["finished", "finish", "finishing"], correct: "finished" },
                { question: "We _____ a conference last week.", options: ["had", "have", "having"], correct: "had" },
                { question: "Did you _____ the email?", options: ["send", "sent", "sending"], correct: "send" },
                { question: "The client _____ satisfied.", options: ["was", "is", "were"], correct: "was" },
                { question: "I _____ working when you called.", options: ["was", "am", "were"], correct: "was" },
                { question: "They _____ sign the contract tomorrow.", options: ["will", "did", "does"], correct: "will" },
                { question: "If I have time, I _____ review it.", options: ["will", "would", "did"], correct: "will" },
                { question: "It is important that you _____ on time.", options: ["arrive", "arrived", "arriving"], correct: "arrive" },
                { question: "I am looking for someone who _____ English.", options: ["speaks", "speak", "spoke"], correct: "speaks" },
                { question: "When the boss _____, we will start.", options: ["arrives", "arrive", "arrived"], correct: "arrives" }
            ],
            tourism: [
                { question: "Last year I _____ to Spain.", options: ["went", "go", "gone"], correct: "went" },
                { question: "We _____ in a nice hotel.", options: ["stayed", "stay", "staying"], correct: "stayed" },
                { question: "Have you _____ your bags yet?", options: ["packed", "pack", "packing"], correct: "packed" },
                { question: "Tomorrow we _____ visit the museum.", options: ["will", "did", "does"], correct: "will" },
                { question: "When I _____ to Paris, I will eat croissants.", options: ["go", "went", "gone"], correct: "go" },
                { question: "I would like you to _____ with me.", options: ["come", "came", "coming"], correct: "come" },
                { question: "I _____ photos while I was walking.", options: ["took", "take", "taken"], correct: "took" },
                { question: "If I had money, I _____ travel.", options: ["would", "will", "did"], correct: "would" },
                { question: "I hope the flight _____ not delayed.", options: ["is", "was", "be"], correct: "is" },
                { question: "Last night we _____ at a restaurant.", options: ["ate", "eat", "eaten"], correct: "ate" }
            ],
            grammar: [
                { question: "When I was a child, I _____ play a lot.", options: ["used to", "use to", "using"], correct: "used to" },
                { question: "Yesterday I _____ to the cinema.", options: ["went", "go", "gone"], correct: "went" },
                { question: "I have _____ that book twice.", options: ["read", "reading", "reads"], correct: "read" },
                { question: "I don't think he _____ the truth.", options: ["knows", "know", "knew"], correct: "knows" },
                { question: "If you _____, you would pass.", options: ["studied", "study", "studying"], correct: "studied" },
                { question: "I want you to _____ the homework.", options: ["do", "did", "done"], correct: "do" },
                { question: "I doubt they _____ come tomorrow.", options: ["will", "would", "did"], correct: "will" },
                { question: "I am glad you _____ here.", options: ["are", "is", "be"], correct: "are" },
                { question: "I am looking for a book that _____ interesting.", options: ["is", "are", "be"], correct: "is" },
                { question: "Although it _____ raining, I will go out.", options: ["is", "was", "be"], correct: "is" }
            ]
        },
        advanced: {
            work: [
                { question: "If you had finished, we _____ have sent it.", options: ["would", "will", "did"], correct: "would" },
                { question: "It is essential that rules _____ followed.", options: ["be", "are", "is"], correct: "be" },
                { question: "Unless they _____ the budget, we can't continue.", options: ["approve", "approves", "approved"], correct: "approve" },
                { question: "However much you _____, he won't listen.", options: ["insist", "insists", "insisted"], correct: "insist" },
                { question: "Had I known, I _____ have told you.", options: ["would", "will", "did"], correct: "would" },
                { question: "We seek staff _____ prior experience.", options: ["having", "has", "have"], correct: "having" },
                { question: "Once you have _____ the analysis, let me know.", options: ["finished", "finish", "finishing"], correct: "finished" },
                { question: "Nevertheless, we _____ keep trying.", options: ["must", "might", "may"], correct: "must" },
                { question: "The project was _____ by the committee.", options: ["rejected", "reject", "rejecting"], correct: "rejected" },
                { question: "Having _____ the data, we proceed.", options: ["analyzed", "analyze", "analyzing"], correct: "analyzed" }
            ],
            tourism: [
                { question: "If we had booked earlier, we _____ have paid less.", options: ["would", "will", "did"], correct: "would" },
                { question: "I wish we _____ visited that museum.", options: ["had", "have", "has"], correct: "had" },
                { question: "Unless the flight _____ cancelled, we arrive late.", options: ["is", "be", "was"], correct: "is" },
                { question: "It's as if it _____ your first time traveling.", options: ["were", "was", "is"], correct: "were" },
                { question: "Had we not missed the train, we _____ be there.", options: ["would", "will", "did"], correct: "would" },
                { question: "Whoever _____ there loves it.", options: ["goes", "go", "gone"], correct: "goes" },
                { question: "Even if the weather _____ bad, we'll go.", options: ["is", "be", "was"], correct: "is" },
                { question: "It is recommended that tourists _____ careful.", options: ["be", "are", "is"], correct: "be" },
                { question: "Having _____ our bags, we left.", options: ["packed", "pack", "packing"], correct: "packed" },
                { question: "I don't think the guide _____ said that.", options: ["has", "have", "had"], correct: "has" }
            ],
            grammar: [
                { question: "If I _____ you, I wouldn't do it.", options: ["were", "was", "am"], correct: "were" },
                { question: "It is possible that he _____ already arrived.", options: ["has", "have", "had"], correct: "has" },
                { question: "It surprises me that you _____ not called.", options: ["have", "has", "had"], correct: "have" },
                { question: "If you had studied, you _____ have passed.", options: ["would", "will", "did"], correct: "would" },
                { question: "I'll tell you provided you _____ tell anyone.", options: ["don't", "didn't", "won't"], correct: "don't" },
                { question: "Before you _____, I'll give you the gift.", options: ["go", "went", "gone"], correct: "go" },
                { question: "It's not that I don't _____ to go.", options: ["want", "wants", "wanted"], correct: "want" },
                { question: "I wish it _____ rained yesterday.", options: ["had", "has", "have"], correct: "had" },
                { question: "I want a car that _____ little fuel.", options: ["consumes", "consume", "consuming"], correct: "consumes" },
                { question: "No matter how much you _____, he won't hear.", options: ["shout", "shouts", "shouted"], correct: "shout" }
            ]
        }
    },

    // ==========================================
    // FRANÇAIS (Target Language: French)
    // ==========================================
    fr: {
        beginner: {
            work: [
                { question: "Je _____ dans un bureau.", options: ["travaille", "travailles", "travaillons"], correct: "travaille" },
                { question: "Tu _____ des emails.", options: ["écris", "écrit", "écrivons"], correct: "écris" },
                { question: "Le chef _____ une réunion.", options: ["a", "as", "ont"], correct: "a" },
                { question: "Nous _____ des collègues.", options: ["sommes", "êtes", "sont"], correct: "sommes" },
                { question: "Elle _____ au téléphone.", options: ["répond", "réponds", "répondent"], correct: "répond" },
                { question: "Vous _____ du café ?", options: ["buvez", "bois", "boit"], correct: "buvez" },
                { question: "J'_____ à 9h00.", options: ["arrive", "arrives", "arrivent"], correct: "arrive" },
                { question: "Le bureau _____ grand.", options: ["est", "sont", "es"], correct: "est" },
                { question: "Où _____ l'imprimante ?", options: ["est", "sont", "es"], correct: "est" },
                { question: "Ils _____ gentils.", options: ["sont", "est", "sommes"], correct: "sont" }
            ],
            tourism: [
                { question: "J'_____ un billet.", options: ["achète", "achètes", "achetons"], correct: "achète" },
                { question: "Où _____ l'hôtel ?", options: ["est", "sont", "es"], correct: "est" },
                { question: "Nous _____ à la plage.", options: ["allons", "vas", "va"], correct: "allons" },
                { question: "Le musée _____ intéressant.", options: ["est", "sont", "es"], correct: "est" },
                { question: "Tu _____ des photos ?", options: ["prends", "prend", "prenons"], correct: "prends" },
                { question: "Le train _____ rapide.", options: ["est", "sont", "es"], correct: "est" },
                { question: "J'_____ mon passeport.", options: ["ai besoin de", "as besoin de", "a besoin de"], correct: "ai besoin de" },
                { question: "Vous _____ anglais ?", options: ["parlez", "parles", "parle"], correct: "parlez" },
                { question: "La nourriture _____ délicieuse.", options: ["est", "sont", "es"], correct: "est" },
                { question: "Nous _____ touristes.", options: ["sommes", "êtes", "sont"], correct: "sommes" }
            ],
            grammar: [
                { question: "La maison _____ rouge.", options: ["est", "sont", "es"], correct: "est" },
                { question: "Les chats _____ petits.", options: ["sont", "est", "sommes"], correct: "sont" },
                { question: "Je _____ grand.", options: ["suis", "es", "est"], correct: "suis" },
                { question: "Elle _____ fatiguée.", options: ["est", "sont", "es"], correct: "est" },
                { question: "Nous _____ étudiants.", options: ["sommes", "êtes", "sont"], correct: "sommes" },
                { question: "Tu _____ content ?", options: ["es", "est", "suis"], correct: "es" },
                { question: "Le livre _____ sur la table.", options: ["est", "sont", "es"], correct: "est" },
                { question: "Aujourd'hui, c'_____ lundi.", options: ["est", "sont", "es"], correct: "est" },
                { question: "J'_____ faim.", options: ["ai", "as", "a"], correct: "ai" },
                { question: "Il _____ beau.", options: ["fait", "fais", "font"], correct: "fait" }
            ]
        },
        intermediate: {
            work: [
                { question: "Hier, j'_____ le rapport.", options: ["ai fini", "finis", "finirai"], correct: "ai fini" },
                { question: "Nous _____ une conférence.", options: ["avons eu", "avons", "aurons"], correct: "avons eu" },
                { question: "As-tu _____ l'email ?", options: ["envoyé", "envoies", "enverras"], correct: "envoyé" },
                { question: "Le client _____ satisfait.", options: ["était", "est", "sera"], correct: "était" },
                { question: "Je _____ quand tu as appelé.", options: ["travaillais", "travaille", "travaillerai"], correct: "travaillais" },
                { question: "Ils _____ le contrat demain.", options: ["signeront", "signent", "ont signé"], correct: "signeront" },
                { question: "Si j'ai le temps, je _____.", options: ["vérifierai", "vérifie", "ai vérifié"], correct: "vérifierai" },
                { question: "Il faut que tu _____ à l'heure.", options: ["arrives", "arrive", "arrivais"], correct: "arrives" },
                { question: "Je cherche quelqu'un qui _____ anglais.", options: ["parle", "parles", "parlait"], correct: "parle" },
                { question: "Quand le chef _____, on commence.", options: ["arrivera", "arrive", "est arrivé"], correct: "arrivera" }
            ],
            tourism: [
                { question: "L'année dernière, je _____ en Espagne.", options: ["suis allé", "vais", "irai"], correct: "suis allé" },
                { question: "Nous _____ dans un bel hôtel.", options: ["sommes restés", "restons", "resterons"], correct: "sommes restés" },
                { question: "As-tu _____ tes valises ?", options: ["fait", "fais", "feras"], correct: "fait" },
                { question: "Demain, nous _____ le musée.", options: ["visiterons", "visitons", "avons visité"], correct: "visiterons" },
                { question: "Quand je _____ à Paris, je mangerai.", options: ["serai", "suis", "étais"], correct: "serai" },
                { question: "J'aimerais que tu _____ avec moi.", options: ["viennes", "viens", "venais"], correct: "viennes" },
                { question: "Je _____ des photos.", options: ["prenais", "prends", "prendrai"], correct: "prenais" },
                { question: "Si j'avais de l'argent, je _____.", options: ["voyagerais", "voyage", "voyagerai"], correct: "voyagerais" },
                { question: "J'espère que le vol n'_____ pas retardé.", options: ["est", "soit", "était"], correct: "est" },
                { question: "Hier soir, nous _____ au resto.", options: ["avons dîné", "dînons", "dînerons"], correct: "avons dîné" }
            ],
            grammar: [
                { question: "Quand j'étais petit, je _____ beaucoup.", options: ["jouais", "ai joué", "joue"], correct: "jouais" },
                { question: "Hier, je _____ au cinéma.", options: ["suis allé", "allais", "vais"], correct: "suis allé" },
                { question: "J'ai _____ ce livre deux fois.", options: ["lu", "lis", "lira"], correct: "lu" },
                { question: "Je ne crois pas qu'il _____ la vérité.", options: ["sache", "sait", "savait"], correct: "sache" },
                { question: "Si tu _____, tu réussirais.", options: ["étudiais", "étudies", "étudié"], correct: "étudiais" },
                { question: "Je veux que tu _____ tes devoirs.", options: ["fasses", "fais", "faisais"], correct: "fasses" },
                { question: "Je doute qu'ils _____ demain.", options: ["viennent", "viennent", "sont venus"], correct: "viennent" },
                { question: "Je suis content que tu _____ là.", options: ["sois", "es", "étais"], correct: "sois" },
                { question: "Je cherche un livre qui _____ intéressant.", options: ["soit", "est", "était"], correct: "soit" },
                { question: "Bien qu'il _____ beau, je reste.", options: ["fasse", "fait", "faisait"], correct: "fasse" }
            ]
        },
        advanced: {
            work: [
                { question: "Si tu avais fini, nous l'_____ envoyé.", options: ["aurions", "aurons", "avions"], correct: "aurions" },
                { question: "Il est essentiel que les règles _____ suivies.", options: ["soient", "sont", "étaient"], correct: "soient" },
                { question: "À moins qu'ils n'_____ le budget.", options: ["approuvent", "approuveront", "ont approuvé"], correct: "approuvent" },
                { question: "Quoi que tu _____, il n'écoute pas.", options: ["dises", "dis", "disais"], correct: "dises" },
                { question: "Si j'avais su, je te l'_____ dit.", options: ["aurais", "aurai", "avais"], correct: "aurais" },
                { question: "On cherche du personnel _____ de l'expérience.", options: ["ayant", "a", "ont"], correct: "ayant" },
                { question: "Une fois l'analyse _____, dis-le moi.", options: ["terminée", "terminer", "terminant"], correct: "terminée" },
                { question: "Néanmoins, nous _____ continuer.", options: ["devons", "devrions", "devions"], correct: "devons" },
                { question: "Le projet a été _____ par le comité.", options: ["rejeté", "rejeter", "rejetant"], correct: "rejeté" },
                { question: "Ayant _____ les données, on avance.", options: ["analysé", "analyser", "analysant"], correct: "analysé" }
            ],
            tourism: [
                { question: "Si on avait réservé, on _____ payé moins.", options: ["aurait", "aura", "avait"], correct: "aurait" },
                { question: "Je regrette que nous n'_____ pas visité.", options: ["ayons", "avons", "avions"], correct: "ayons" },
                { question: "À moins que le vol _____ annulé.", options: ["soit", "est", "était"], correct: "soit" },
                { question: "C'est comme si c'_____ la première fois.", options: ["était", "est", "serait"], correct: "était" },
                { question: "Si on n'avait pas raté le train, on _____ là.", options: ["serait", "sera", "était"], correct: "serait" },
                { question: "Quiconque _____ là-bas adore.", options: ["va", "vont", "allait"], correct: "va" },
                { question: "Même s'il _____ mauvais, on sort.", options: ["fait", "fasse", "faisait"], correct: "fait" },
                { question: "Il est recommandé que les touristes _____ prudents.", options: ["soient", "sont", "étaient"], correct: "soient" },
                { question: "Ayant _____ nos valises, on part.", options: ["fait", "faire", "faisant"], correct: "fait" },
                { question: "Je ne pense pas que le guide _____ dit ça.", options: ["ait", "a", "avait"], correct: "ait" }
            ],
            grammar: [
                { question: "Si j'_____ toi, je ne le ferais pas.", options: ["étais", "suis", "serais"], correct: "étais" },
                { question: "Il est possible qu'il _____ déjà arrivé.", options: ["soit", "est", "était"], correct: "soit" },
                { question: "Ça m'étonne que tu n'_____ pas appelé.", options: ["aies", "as", "avais"], correct: "aies" },
                { question: "Si tu avais étudié, tu _____ réussi.", options: ["aurais", "auras", "avais"], correct: "aurais" },
                { question: "Je te le dis pourvu que tu ne le _____ pas.", options: ["répètes", "répète", "répétais"], correct: "répètes" },
                { question: "Avant que tu _____, voici le cadeau.", options: ["partes", "pars", "partais"], correct: "partes" },
                { question: "Ce n'est pas que je ne _____ pas y aller.", options: ["veuille", "veux", "voulais"], correct: "veuille" },
                { question: "Si seulement il _____ plu hier.", options: ["avait", "a", "aurait"], correct: "avait" },
                { question: "Je veux une voiture qui _____ peu.", options: ["consomme", "consommes", "consommait"], correct: "consomme" },
                { question: "Bien que tu _____, il n'entend pas.", options: ["cries", "crie", "criais"], correct: "cries" }
            ]
        }
    }
};
