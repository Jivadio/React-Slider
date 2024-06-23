# React-Slider

Ce projet est une application React qui utilise npm comme gestionnaire de paquets. Il comprend un composant de diaporama
qui utilise un tableau de données pour générer chaque diapositive. Ainsi que Heroicons pour les icônes.

## Installation

Pour installer les dépendances du projet, exécutez la commande suivante :

```bash
npm install
```

## Configuration des tests

Nous utilisons Jest comme cadre de test. La configuration de Jest est définie dans le fichier `jest.config.cjs`. Les
tests sont écrits en JavaScript et transformés à l'aide de Babel.

Pour installer les dépendances nécessaires à l'exécution des tests, utilisez la commande suivante :

```bash
npm install --save-dev jest jest-environment-jsdom babel-jest
```

## Utilisation

Pour démarrer l'application, utilisez la commande suivante :

```bash
npm run dev
```

L'application démarrera et sera accessible à l'adresse `http://localhost:3000`.

Pour exécuter les tests, utilisez la commande suivante :

```bash
npm run test
```

## Structure du Projet

Le projet comprend un composant principal `Slider` qui est exporté par défaut. Ce composant utilise un tableau de
données pour générer un diaporama. Chaque diapositive comprend une image, un titre et une description.