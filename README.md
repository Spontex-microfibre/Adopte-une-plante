# Adopte une Plante

## Description

**Adopte une Plante** est une application permettant aux utilisateurs d'adopter / échanger des plantes, pour pouvoir leurs offrir une deuxième vie et plein d'amour. Les utilisateurs peuvent naviguer à travers une collection de plantes disponibles à l'adoption, marquer leurs plantes favorites, et obtenir des informations détaillées sur chaque plante ainsi que leurs propriétaires.

## Fonctionnalités

- **Visualisation d'un catalogue de plantes** : Les utilisateurs peuvent consulter une liste de plantes.
- **Ajouter en favoris** : Les utilisateurs peuvent ajouter une plante à leurs favoris.
- **Consulter détails plantes** : Les utilisateurs peuvent consulter les détails d'une plantes en cliquant dessus.
- **Supprimer ses plantes** : Les utilisateurs peuvent supprimer les plantes qui leurs appartiennent. __On peut seulement supprimer, pas en créer, donc attention de pas tout vider :)__
- **Consulter profils utilisateurs** : Les utilisateurs peuvent consulter le profil d'autre utilisateurs pour voir toutes leurs plantes.
- **Gestion du profil utilisateur** : Les utilisateurs peuvent mettre à jour leurs informations personnelles (nom, localisation, etc.) __Par défaut, on se connecte en tant qu'user d'id 1, aucun système d'authentification n'est en place__

## Technologies

- **React** : Pour construire l'interface utilisateur dynamique.
- **React Router** : Pour la navigation entre les différentes pages de l'application.
- **React Query** : Pour gérer les appels API et le cache de données.
- **Zustand** : Pour la gestion de l'état global (ex. : les plantes favorites).
- **Axios** : Pour effectuer des requêtes HTTP vers l'API.
- **Vite** : Pour le bundling et le développement rapide.
- **Axios** : Pour les requêtes API.
- **React Icons** : Pour les Icones.
- **React Spinners** : Pour les roues de chargements.
- **Mockapi.io** : Pour l'API

## Amélioration à faire
Primo :
- **Ajouter et modifier des plantes**
- **UI/UX upgrade**

Secondo :
- **Système de filtre pour les plantes (par type, nom, localisation, ...)**

Pour le kiff : 
- **Système de messagerie**
- **Persistance des favoris**
- **Page d'identification / création de compte**



## Installation

### Prérequis

- **Node.js** et **npm** doivent être installés sur votre machine.

### Installation du projet

1. Clonez le dépôt sur votre machine locale :
```bash
    git clone https://github.com/Spontex-microfibre/Adopte-une-plante.git
```
2. Déplacer vous dans le dossier de l'application
```bash
    cd Adopte-une-plante
```
3. Installer les dépendances
```bash
    npm install
```
4. Déployez le projet localement
```bash
    npm run dev
```
