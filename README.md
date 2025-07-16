# 🌐 CyberTool

## 🎯 Pitch
**CyberTool** est une plateforme interactive qui permet aux utilisateurs de suivre les cybermenaces dans le monde en temps réel et d'accéder à des conseils personnalisés pour renforcer leur cybersécurité. Grâce à une interface intuitive et dynamique, CyberTool facilite l’analyse des risques et la compréhension des tendances cyber.

## 📝 Description

---

CyberTool a été conçu pour répondre au besoin croissant d'avoir une vision claire et actualisée du paysage des cyberattaques au niveau mondial.

- 🔍 Renseignement sur les cyberattaques (tendance et passée)
- 🗺️ Visualisation des cyberattaques sur une carte interactive 
- 🛡️ Accès à des conseils personnalisés de cybersécurité
- 👥 Ciblé pour les experts en cybersécurité, entreprises et étudiants

## 🚀 Features

---

## 🎨 Frontend

### 🧭 Navigation :
- 🧱 **Barre de navigation** accessible depuis toutes les pages (logo, recherche, liens vers les rubriques).
- 🏠 **Page d'accueil** avec bouton vers le test de sécurité et les conseils.
- 🧑‍💻 **Page Mon Compte** : affichage de l'email, modification du mot de passe, déconnexion.


### 📰 Page **Cyberattaques** :
- 🧠 **Système de filtres** : Année 📅, Mois 📅, Type ❇️, Pays attaquant 🛡️, Pays victime 🎯.
- 🧷 **Affichage mis en avant** de la dernière attaque en haut de page.
- 📄 **Cartes d'attaque individuelles** avec bouton "Lire la suite" / "Réduire".
- 🧭 Design fluide, clair et responsive.


### 🗺️ Page **Carte du monde** :
- 🌐 **Carte interactive** : chaque pays est cliquable.
- 🖌️ **Couleur selon la gravité des attaques**.
- 🧾 **Légende** dynamique pour expliquer les codes couleur.


### 📊 Page **Dashboard** :
- 📈 **Graphique en barres** : nombre d'attaques par année.
- 🍩 **Diagramme en anneau** : répartition par type d'attaque.
- 🔢 **Chiffres clés animés** : données officielles (ANSSI, Cybermalveillance...).


### 🛡️ Page **Conseils cybersécurité** :
- 🔍 **Recherche dynamique** dans les conseils.
- 🧪 **Mini-test** pour déterminer son niveau en cybersécurité.
- 📋 **Affichage des conseils personnalisés** selon le niveau (🟢 débutant / 🟠 intermédiaire / 🔵 avancé).
- ✅ Possibilité de cocher les conseils appliqués.
- 🚫 Filtre pour masquer ceux déjà cochés.

## 🛠️ Backend

### 🔐 Authentification

- ✅ Système d’authentification complet avec **création de compte** et **connexion sécurisée**
- ✅ 🔑 Connexion avec **email et mot de passe**
- ✅ 📧 **Vérification d’email** via Supabase
- ✅ 🔓 **Déconnexion sécurisée**
- 🔄 🔒 Fonctionnalité de **mot de passe oublié** et **modification du mot de passe** depuis l’espace compte


### 🧠 Conseils de cybersécurité

- ❌ 🔎 **Moteur de recherche** dans les conseils de cybersécurité (fonctionnalité à venir)
- ✅ 🧩 **Formulaire d’évaluation** du niveau utilisateur (débutant / intermédiaire / avancé)
- ✅ 🛡️ **Listes de conseils personnalisés** selon le niveau
- ✅ ✅ Possibilité de **cocher les conseils appliqués** et de **filtrer** ceux qui restent


### 🧮 Données & stockage

- ✅ 💾 Base de données Supabase (PostgreSQL) pour stocker :
    - ❌ Résultats des tests de cybersécurité (fonctionnalité à venir)
    - Comptes utilisateurs
    - Données des cyberattaques (2006–2025)
- ❌ 🔄 Sauvegarde des actions utilisateur dans la base (ex : score, conseils cochés…) (fonctionnalité à venir)


## 🖍️ Wireframe du site **CyberTool**

---

### 📰 Page Cyberattaques
- 📑 Titre : Cyberattaques
- 🔍 Filtres : Année | Mois | Type | Pays attaquant | Pays victime
- 🔄 Bouton : Réinitialiser les filtres
- 🧷 À la une :
    - Attaquant ➜ Victime
    - Date, Type, Description...
- 📃 Liste des attaques :
    - Attaquant ➜ Victime
    - Date | Type | Bouton "Lire la suite"


### 🌍 Carte interactive
- 🗺️ Carte du Monde
- 🖱️ Carte cliquable par pays
- 🎨 Couleurs selon gravité
- 🧾 Légende


### 🏠 Page d’accueil (AccueilConseils)
- 🔝 Logo + Navbar
- 🔒 Bienvenue dans l’espace Conseils
- ❓ Souhaitez-vous :
    - 🎯 Faire le test
    - 📘 Voir les conseils


### 📊 Dashboard
- 📈 Graphique en barres : par année
- 🍩 Donut chart : par type d’attaque
- 🔢 Compteurs animés
- 🧮 Données filtrées (score, etc.)


### 🔐 Page Login
- 📧 Email + 🔑 Mot de passe
- 🧩 Boutons : Se connecter | Mot de passe oublié ?


### 🙋‍♂️ Page Mon Compte
- 👤 Email affiché
- ✏️ Modifier le mot de passe
- ⚙️ Gérer préférences
- 📈 Voir mes résultats (test)


## 🛠️ Stack Technique

---

- **Front-end :** Next.js 14, React, Tailwind CSS
- **Back-end :** Python (FastAPI ou Flask)
- **Base de données :** PostgreSQL *(ou JSON statique pour la V1)*
- **Déploiement :** Vercel
- **Autres outils :** Git, GitHub, amCharts, Material Icons

## 🖥️ Installation & Lancement

```bash
# Cloner le repo
git clone https://github.com/Kaly-0/Project2025.git

# Aller dans le dossier
cd CyberTool

# Installer les dépendances
npm install

# Lancer le projet en mode développement
npm run dev

# Build du projet
npm run build
```

## 🧪 Tests
Pas de tests automatisés prévus pour cette version initiale.

Des tests manuels seront réalisés sur :
- **Le formulaire de conseils**
- **La carte interactive**
- **Le système de filtres**

## 📜 Licence
**Tous droits réservés.**  
Ce projet est protégé par le droit d’auteur.  
Il est interdit de copier, utiliser, modifier, distribuer ou réutiliser le code sans autorisation explicite des auteurs.


## 👥 Auteurs
- Jankowski Hugo Co-fondateur de CyberTool
- Fernandes Flávia Co-fondatrice de CyberTool

