# Rapport d’audit

Projet : `claireglorot-maquette` · 20/11/2026 22:11:28 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **20 échec(s)**
- Passe : `20261120-210541-rapide-cible` · version ?v=1
- Échecs : **20**
- À regarder : **18**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), parcours du projet (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (10), souris immobile (2), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `coaching.html` — fichier introuvable : /assets/partage/coaching-fr.jpg
- **image de partage** — `conseil.html` — fichier introuvable : /assets/partage/conseil-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `formation.html` — fichier introuvable : /assets/partage/formation-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg

### texte sous 12 px (1)

- **texte sous 12 px** — `/` — div.entete-rangee > a.entete-logo > span.entete-nom > small « CONSEIL · FORMATION · COACHING » — 11.5 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs)_

### débordement horizontal (2)

- **débordement horizontal** — `/` — page large de 397 px pour un écran de 390 px _(390×844 normal)_
- **débordement horizontal** — `/` — page large de 396 px pour un écran de 390 px _(390×844 sansWebgl)_

### texte coupé (2)

- **texte coupé** — `/` — a.piece.piece--arche > span.piece-forme:nth-of-type(1) > figure.media.piece-media > figcaption.mention-ia « Illustration générée » — coupé par div.pivot.pivot--b2:nth-of-type(2) > a.piece.piece--arche > span.piece-forme:nth-of-type(1) > figure.media.piece-media « Illustration générée » _(844×390 normal)_
- **texte coupé** — `/` — a.piece.piece--rond > span.piece-forme:nth-of-type(1) > figure.media.piece-media > figcaption.mention-ia « Illustration générée » — coupé par div.pivot.pivot--b1:nth-of-type(1) > a.piece.piece--rond > span.piece-forme:nth-of-type(1) > figure.media.piece-media « Illustration générée » _(320×568 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — div.claire-texte > dl.valeurs.fx-fini > div:nth-of-type(2) > dt « Investissement » — avec div.claire-texte > dl.valeurs.fx-fini > div:nth-of-type(3) > dt « Excellence » _(844×390 normal)_

### élément recouvert (8)

- **élément recouvert** — `/` — article#une-management-1 > h3.fiche-titre « Management niveau 1 : les bases du management » — par article#une-management-1 > a.fiche-lien « Demander un devis : Management niveau 1 : les base » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — article#une-management-1 > p.fiche-prix:nth-of-type(4) « 1 485 € net de TVA » — par article#une-management-1 > a.fiche-lien « Demander un devis : Management niveau 1 : les base » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — article#une-leadership-feminin > h3.fiche-titre « Leadership au féminin » — par article#une-leadership-feminin > a.fiche-lien « Demander un devis : Leadership au féminin » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — article#une-leadership-feminin > p.fiche-prix:nth-of-type(3) « 1 485 € net de TVA » — par article#une-leadership-feminin > a.fiche-lien « Demander un devis : Leadership au féminin » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — article#une-conflits > h3.fiche-titre « Prévenir et gérer les conflits » — par article#une-conflits > a.fiche-lien « Demander un devis : Prévenir et gérer les conflits » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — article#une-conflits > p.fiche-prix:nth-of-type(3) « 990 € net de TVA » — par article#une-conflits > a.fiche-lien « Demander un devis : Prévenir et gérer les conflits » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — article#une-changement-360 > h3.fiche-titre « Changement 360° » — par article#une-changement-360 > a.fiche-lien « Demander un devis : Changement 360° » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — article#une-changement-360 > p.fiche-prix:nth-of-type(4) « 2 400 € net de TVA » — par article#une-changement-360 > a.fiche-lien « Demander un devis : Changement 360° » _(1366×768 normal, 390×844 normal)_

### lien profond (1)

- **lien profond** — `/ → /contact?sujet=echange#demande` — choix « sujet=echange » non prérempli (valeur : undefined) _(1366×768 lien profond, 390×844 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (9)

- **texte de contenu sous 13 px (ordinateur)** — `/` — a.piece.piece--cadre > span.piece-forme:nth-of-type(1) > figure.media.piece-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — a.piece.piece--rond > span.piece-forme:nth-of-type(1) > figure.media.piece-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — a.piece.piece--arche > span.piece-forme:nth-of-type(1) > figure.media.piece-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.metiers-grille.fx-fini:nth-of-type(2) > article.metier:nth-of-type(1) > figure.media.metier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.metiers-grille.fx-fini:nth-of-type(2) > article.metier:nth-of-type(2) > figure.media.metier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.metiers-grille.fx-fini:nth-of-type(2) > article.metier:nth-of-type(3) > figure.media.metier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#une-conflits > p.fiche-cat:nth-of-type(1) « MANAGEMENT ET RH » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#une-changement-360 > p.fiche-cat:nth-of-type(1) « COMPÉTENCES TRANSVERSES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#rendez-vous > figure.media.rdv-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (2)

- **section sans visuel** — `/` — section#confiance « ILS M'ONT FAIT CONFIANCE Des mots qui comptent En  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#methode « LA MÉTHODE De l'analyse des besoins à la mise en œ » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] mobile — léger changement (0.5 %) 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 0 étape(s) notée(s), 0 min de travail, 0 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2694 ms depuis le premier octet
- Ouverture / (390×844) : 2709 ms depuis le premier octet
- Bords de l’écran : 86 images d’intro, 3 de voile et 22 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 445, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Vitesse / : 0.48 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours
```
