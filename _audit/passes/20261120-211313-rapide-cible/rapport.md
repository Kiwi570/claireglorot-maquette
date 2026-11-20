# Rapport d’audit

Projet : `claireglorot-maquette` · 20/11/2026 22:29:02 · 16 min · 4 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /conseil,/formation,/coaching,/contact

## Résumé

- Statut : **41 échec(s)**
- Passe : `20261120-211313-rapide-cible` · version ?v=1
- Échecs : **41**
- À regarder : **24**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (24), films d’ouverture (8), films de transition (8), bords de l’écran (3), intro accélérable et passable (7), menu (1), clavier (4), liens et boutons (4), liens profonds (16), liens vers la page en cours (4), changements de hauteur (4), parcours du projet (1), tient dans l’écran (2), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (10), souris immobile (7), vitesse (4), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ⚠ à regarder | présent sur /coaching, /conseil, /formation, / ; absent sur /contact |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-210541-rapide-cible | rapide | / | toutes | 20 | 18 | 1 | échecs |
| **20261120-211313-rapide-cible** (celle-ci) | rapide | /conseil,/formation,/coaching,/contact | toutes | 41 | 24 | 2 | échecs |

## Échecs

### image de partage (5)

- **image de partage** — `coaching.html` — fichier introuvable : /assets/partage/coaching-fr.jpg
- **image de partage** — `conseil.html` — fichier introuvable : /assets/partage/conseil-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `formation.html` — fichier introuvable : /assets/partage/formation-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/coaching` — section#debut > div.chiffres-geants:nth-of-type(2) > p.geant:nth-of-type(1) > span.geant-chiffre:nth-of-type(1) « 10 » — avec section#debut > div.chiffres-geants:nth-of-type(2) > p.geant:nth-of-type(1) > span.geant-mot:nth-of-type(2) « séances d'environ 1 h 30 » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/coaching` — section#debut > div.chiffres-geants:nth-of-type(2) > p.geant.geant--2:nth-of-type(2) > span.geant-chiffre:nth-of-type(1) « 6 à 8 » — avec section#debut > div.chiffres-geants:nth-of-type(2) > p.geant.geant--2:nth-of-type(2) > span.geant-mot:nth-of-type(2) « mois d'accompagnement » _(1366×768 normal)_
- **textes qui se chevauchent** — `/formation` — section#debut > div.conteneur.ouverture-titre-grille > div.pastille:nth-of-type(3) > span.pastille-chiffre:nth-of-type(1) « 13 » — avec section#debut > div.conteneur.ouverture-titre-grille > div.pastille:nth-of-type(3) > span.pastille-mot:nth-of-type(2) « FORMATIONS » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/coaching` — section#debut > div.ouverture-texte:nth-of-type(1) > p.ouverture-actions:nth-of-type(3) > a.bouton « Être contacté » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/conseil` — section#debut > div.ouverture-texte:nth-of-type(1) > p.ouverture-actions:nth-of-type(3) > a.bouton « Entrer en relation pour un échange stratégique » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/formation` — div.conteneur.ouverture-titre-grille > div.ouverture-cote:nth-of-type(2) > p.ouverture-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Demander un devis » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/coaching` — section#debut > div.ouverture-texte:nth-of-type(1) > p.ouverture-info:nth-of-type(4) « Environ 10 séances de 1 h 30 sur 6 à 8 mois » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/conseil` — section#debut > div.ouverture-texte:nth-of-type(1) > p.ouverture-info:nth-of-type(4) « Missions courtes, moyennes ou longues · Guadeloupe » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ouverture-texte > div.contact-coord > p.contact-claire:nth-of-type(1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/formation` — section#debut > div.conteneur.ouverture-titre-grille > div.ouverture-cote:nth-of-type(2) > p.ouverture-info:nth-of-type(3) « Finançable par les OPCO · intra ou inter-entrepris » _(320×568 sansJs)_

### accessibilité (axe) : color-contrast (3)

- **accessibilité (axe) : color-contrast** — `/coaching` — li[data-effet="situations"]:nth-child(1) ; li[data-effet="situations"]:nth-child(2) ; li[data-effet="situations"]:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal, 390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/conseil` — button[aria-controls="strategie-contenu"] > .ofr__num ; p[data-fx-rangee=""]:nth-child(1) ; p[data-sens="-1"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/formation` — div[aria-label="Thème"] > button[data-valeur="tout"] > .cff__nb[aria-hidden="true"] ; div[aria-label="Durée"] > button[data-valeur="tout"] > .cff__nb[aria-hidden="true"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal, 390×844 normal)_

### contraste insuffisant (3)

- **contraste insuffisant** — `/conseil` — li#strategie > h3.ofr__titre > button.ofr__poignee > span.ofr__num:nth-of-type(1) « 01 » — 4.32:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/conseil` — section#territoire > div.mots-geants:nth-of-type(1) > p:nth-of-type(1) « Guadeloupe · Caraïbe · International · Guadeloupe  » — 1.75:1 (minimum 3:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/conseil` — section#territoire > div.mots-geants:nth-of-type(1) > p:nth-of-type(2) « International · Caraïbe · Guadeloupe · Internation » — 1.75:1 (minimum 3:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### texte coupé (2)

- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere.est-actif:nth-of-type(1) > span.fpe__nom:nth-of-type(2) « Votre demande » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — le contenu dépasse de son cadre _(844×390 normal)_

### en-tête coupé en haut (1)

- **en-tête coupé en haut** — `/formation` — body#haut > header « Claire Glorot CONSEIL · FORMATION · COACHING Conse » — -65 px _(1366×768 normal)_

### clavier (6)

- **clavier** — `/formation` — a « Claire GlorotConseil · Formati » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/formation` — a « Conseil » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/formation` — a « Formation » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/formation` — a « Coaching » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/formation` — a « Contact » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/formation` — a « Demander un échange » — le focus arrive sur un élément caché _(1366×768)_

### lien profond (3)

- **lien profond** — `/conseil → /contact?sujet=Strat%C3%A9gie%2C+management+et+gouvernance#demande` — choix « sujet=Stratégie, management et gouvernance » non prérempli (valeur : undefined) _(1366×768 lien profond)_
- **lien profond** — `/conseil → /contact?sujet=Organisation+et+ressources+humaines#demande` — choix « sujet=Organisation et ressources humaines » non prérempli (valeur : undefined) _(1366×768 lien profond)_
- **lien profond** — `/conseil → /contact?sujet=Transformation+et+gestion+de+projet#demande` — choix « sujet=Transformation et gestion de projet » non prérempli (valeur : undefined) _(1366×768 lien profond)_

### positions non recalculées après un changement de hauteur (7)

- **positions non recalculées après un changement de hauteur** — `/formation` — Tout13 — décalage de 1865 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/formation` — Management6 — décalage de 965 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/formation` — Management et RH2 — décalage de 439 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/formation` — Compétences transverses5 — décalage de 873 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/formation` — Tout5 — décalage de 873 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/formation` — 2 jours4 — décalage de 445 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/formation` — 3 jours1 — décalage de 390 px _(1366×768)_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/formation` — section#debut.ouverture.ouverture--titre — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — `/contact` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### texte de contenu sous 13 px (ordinateur) (12)

- **texte de contenu sous 13 px (ordinateur)** — `/coaching` — section#debut > figure.media.arche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/coaching` — div.conteneur.deroule-grille > div.deroule-image:nth-of-type(1) > figure.media.deroule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/coaching` — section#equipe > div.conteneur.equipe-grille > figure.media.equipe-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/conseil` — section#debut > div.persiennes-cadre:nth-of-type(2) > figure.media.ouverture-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/conseil` — div.ofr__corps:nth-of-type(2) > div.ofr__visuels > figure.ofr__visuel.est-actif:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.ouverture-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#demande > div.conteneur.demande-grille > div.fpe__tete:nth-of-type(1) > p.fpe__note:nth-of-type(2) « Formulaire de démonstration : rien n'est envoyé. » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOTRE DEMANDE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formation` — section#pedagogie > div > figure.media.ouvre-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formation` — div.cff__filtres:nth-of-type(2) > div.cff__rang:nth-of-type(2) > label.cff__curseur:nth-of-type(1) > span.cff__etiquette « BUDGET MAXIMUM » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formation` — div.formats-grille.fx-fini:nth-of-type(2) > article.format:nth-of-type(1) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formation` — div.formats-grille.fx-fini:nth-of-type(2) > article.format:nth-of-type(2) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (7)

- **section sans visuel** — `/coaching` — section#situations « POUR QUELLES SITUATIONS Quand le coaching fait la  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/coaching` — section#temoignages « En conclusion, grâce à ce coaching et à la réflexi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/conseil` — section#mission « UNE MISSION Une méthode adaptée 01 Cadrage Une pha » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Quatre étapes, une réponse sur mesur » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formation` — section#cycle « INTER-ENTREPRISES EN GUADELOUPE Cycle Management & » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formation` — section#rendez-vous « PROCHAIN RENDEZ-VOUS Leadership au féminin, petit- » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formation` — section#catalogue « CATALOGUE 13 formations, à filtrer Prix nets de TV » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/conseil` — écran différent à la même position après rechargement (4.2 %), voir comparaisons/rechargement-conseil-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/contact` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **bords de l’écran /conseil 1366×768** : page.click: Timeout 30000ms exceeded. (3 tentatives)
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 18 min de travail pour 30 min de budget, 17 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /coaching, /conseil, /contact, /formation.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /coaching (1366×768) : 2602 ms depuis le premier octet
- Ouverture /conseil (1366×768) : 2736 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2611 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formation (1366×768) : 2605 ms depuis le premier octet
- film de l'ouverture /formation 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /coaching (390×844) : 2615 ms depuis le premier octet
- Ouverture /conseil (390×844) : 2736 ms depuis le premier octet
- Ouverture /contact (390×844) : 2579 ms depuis le premier octet
- Ouverture /formation (390×844) : 2582 ms depuis le premier octet
- bords de l’écran /formation 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 243 images d’intro, 6 de voile et 66 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /coaching : aucune section épinglée ou plein écran.
- Tient dans l'écran /conseil : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Fluidité /coaching 1366×768 (molette) : 0 % d'images lentes sur 290, tâche la plus longue 0 ms
- Fluidité /conseil 1366×768 (molette) : 0 % d'images lentes sur 239, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 155, tâche la plus longue 0 ms
- Fluidité /formation 1366×768 (molette) : 0 % d'images lentes sur 425, tâche la plus longue 0 ms
- Fluidité /coaching 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /conseil 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /formation 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse /coaching : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /conseil : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /formation : 0.31 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours,mouvement,bords
```
