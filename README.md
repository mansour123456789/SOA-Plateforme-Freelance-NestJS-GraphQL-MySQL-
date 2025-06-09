# Gestion de Freelancers - API GraphQL

Ce projet est une API GraphQL construite avec NestJS pour gérer des freelancers, leurs compétences, liens professionnels et missions.

## Technologies Utilisées

- NestJS
- GraphQL
- TypeORM
- PostgreSQL
- TypeScript

## Prérequis

- Node.js (v14 ou supérieur)
- PostgreSQL
- npm ou yarn

## Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd [NOM_DU_PROJET]
```

2. Installer les dépendances :
```bash
npm install
```

3. Configurer la base de données :
- Créer une base de données PostgreSQL
- Configurer les variables d'environnement dans `.env` :
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=votre_mot_de_passe
DATABASE_NAME=freelancer_db
```

## Structure du Projet

Le projet contient 4 entités principales :

1. **Freelancer**
   - Informations personnelles
   - Compétences
   - Liens professionnels
   - Missions

2. **Competence**
   - Nom
   - Niveau
   - Association avec Freelancer

3. **LienProfessionnel**
   - Titre
   - URL
   - Association avec Freelancer

4. **Mission**
   - Titre
   - Description
   - Association avec Freelancers

## Commandes Disponibles

```bash
# Développement
npm run start:dev

# Production
npm run build
npm run start:prod

# Génération de ressources
nest generate resource [nom_ressource]

# Génération de modules
nest g module [nom_module]

# Génération de resolvers
nest g resolver [nom_resolver]

# Génération de services
nest g service [nom_service]
```

## API GraphQL

L'API expose les opérations suivantes pour chaque entité :

### Freelancer
- Création
- Lecture (unique et liste)
- Mise à jour
- Suppression

### Competence
- Création
- Lecture (unique et liste)
- Mise à jour
- Suppression

### LienProfessionnel
- Création
- Lecture (unique et liste)
- Mise à jour
- Suppression

### Mission
- Création
- Lecture (unique et liste)
- Mise à jour
- Suppression

## Exemple d'Utilisation

```graphql
# Créer un Freelancer
mutation {
  createFreelancer(createFreelancerInput: {
    fullName: "Ali Ben Youssef",
    email: "ali@example.com",
    phone: "+216 22 333 444"
  }) {
    id
    fullName
    email
  }
}

# Lire tous les Freelancers
query {
  freelancers {
    id
    fullName
    email
    competences {
      id
      nom
      niveau
    }
  }
}
```

## Tests

```bash
# Tests unitaires
npm run test

# Tests e2e
npm run test:e2e

# Couverture de tests
npm run test:cov
```

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

MIT
