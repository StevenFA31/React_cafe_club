## Club Café

Créer un site de soumission d'événements pour un café associatif, sur lequel les habitués du club peuvent réaliser trois actions :

- consulter la liste des événements proposés
- proposer un nouvel événement
- signifier sa participation à un événement donné

Pas de création de compte, ni de système de validation d'événement. Pour le gérant du café, il s'agit uniquement de récupérer les intentions de ces clients. Pour l'événement, il n'a donc besoin que du nom, de la date, et d'une brève description. Concernant les enregistrements de participations, il est utile de demander le nom du participant, un numéro de téléphone, et évidemment, l'événement qui concerne la participation !

###Installation

####Pour installer et utiliser ce projet, il vous suffit de suivre les étapes suivantes :

Étape 1 : Cloner la partie front-end (React) et back-end (Symfony) en utilisant les commandes suivantes :

Symfony 
HTTPS : `https://github.com/StevenFA31/Symfony_cafe_club.git`
SSH : `git clone git@github.com:StevenFA31/Symfony_cafe_club.git`

React 
HTTPS : `git clone https://github.com/StevenFA31/React_cafe_club.git`
SSH : `git clone git@github.com:StevenFA31/React_cafe_club.git`

Étape 2 : Installer les packages tiers (et leurs dépendances) dans votre projet.

Pour cela, vous devez exécuter la commande suivante (à la fois sur React et Symfony) :
`npm install`

Étape 3 : Modifier le fichier .env

Afin de configurer la base de donnée, rendez-vous dans le fichier .env et modifier la ligne DATABASE_URL avec base de donnée que vous utiliser en remplissant les informations nécessaire. 

Étape 4 : Créer la base de donnée

La commandes suivantes va vous permettre à créer votre base de donnéee :
`php bin/console d:d:c`

Étape 5 : 

La commandes suivantes va vous permettre de migrer les tables de la base de donnée :
`php bin/console d:m:m`

Étape 6 : Démarrer les serveurs pour lancer le projet.

Pour démarrer le serveur Symfony, exécutez la commande suivante :
`symfony server:start`

Pour démarrer le serveur React, exécutez la commande suivante :
`npm run dev`

>Choses à faire avant utilisation :
>Il est possible qu'au lancement de Symfony le port de votre serveur soit différent du code sur React.
>*Exemple : https://localhost:800X/ *
>Si votre port est différent de 8000, veuillez vous rendre aux adresses suivantes :
>`React_cafe_club>src>Home.tsx`
>`React_cafe_club>src>FormParticipation.tsx`
>Et changer l'adresse du serveur (en fonction du port de votre serveur) :
>À la ligne 16 pour le fichier "Home.tsx"
>À la ligne 12 et 33 pour le fichier "FormParticipation".

### Référentiels

Développeur web et web mobile

### Contexte du projet

Le développeur analyse le besoin, puis en déduit une maquette. Dans un second temps, le développeur réalise une interface utilisateur à l'aide d'un ou plusieurs langages de programmation et/ou frameworks.

### Modalités pédagogiques

Travail individuel à réaliser en deux jours. Techno libre.

### Modalités d'évaluation

Le formateur installe le programme en suivant le README de l'apprenant et vérifie les points cités en "critères de performances" pour valider les compétences.

### Livrables

Le développeur utilise obligatoirement GIT pendant le travail. Ce même dépôt est utilisé pour soumettre l'ensemble des éléments attendus :

- les codes sources
- un README détaillant la procédure pour installer le projet. Pensez à fournir le schéma de base de données (ou des fichiers de migration) !
- le MCD
- le lien vers les maquettes réalisées avec Figma

### Critères de performance

C1 : La maquette fournie correspond au besoin exprimé dans le brief
C2 : L'interface correspond à la maquette fournie
C3 : L'interface interagit dynamiquement avec le backend, ou l'interface est riche, ou l'interface est générée dynamiquement
C5 : Le schéma de base de données fourni est cohérent vis-à-vis du besoin exprimé
C6 : Les échanges entre le backend et la base de données sont réalisés conformément aux pratiques du métier
C7 : Le backend est fonctionnel et sécurisé


