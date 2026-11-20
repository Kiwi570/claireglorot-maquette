# Rapport d’audit

Projet : `claireglorot-maquette` · 20/11/2026 22:45:31 · 4 min · 3 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /conseil,/formation,/contact (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261120-214137-rapide-cible-partiel` · version ?v=1
- Échecs : **9**
- À regarder : **16**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (18), intro accélérable et passable (7), menu (1), clavier (3), liens et boutons (3), liens profonds (16), liens vers la page en cours (3), changements de hauteur (3), parcours du projet (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-210541-rapide-cible | rapide | / | toutes | 20 | 18 | 1 | échecs |
| 20261120-211313-rapide-cible | rapide | /conseil,/formation,/coaching,/contact | toutes | 41 | 24 | 2 | échecs |
| 20261120-213129-rapide-cible-partiel | rapide | /conseil,/formation,/coaching,/contact | fichiers, mesures, parcours, mouvement, bords | 16 | 22 | 0 | échecs |
| **20261120-214137-rapide-cible-partiel** (celle-ci) | rapide | /conseil,/formation,/contact | fichiers, mesures, parcours | 9 | 16 | 0 | échecs |

## Échecs

### image de partage (5)

- **image de partage** — `coaching.html` — fichier introuvable : /assets/partage/coaching-fr.jpg
- **image de partage** — `conseil.html` — fichier introuvable : /assets/partage/conseil-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `formation.html` — fichier introuvable : /assets/partage/formation-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg

### élément recouvert (4)

- **élément recouvert** — `/formation` — section#debut > div.conteneur.ouverture-titre-grille > div:nth-of-type(1) > h1.titre.titre--xxl « Manager avec exigence et humanité » — par section#debut > div.conteneur.ouverture-titre-grille > div.pastille:nth-of-type(3) > span.pastille-anneau:nth-of-type(1) _(390×844 normal)_
- **élément recouvert** — `/formation` — div.conteneur.ouverture-titre-grille > div.ouverture-cote:nth-of-type(2) > p.ouverture-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Demander un devis » — par section#debut > div.conteneur.ouverture-titre-grille > div.pastille:nth-of-type(3) > span.pastille-anneau:nth-of-type(1) _(390×844 normal)_
- **élément recouvert** — `/formation` — div.conteneur.ouverture-titre-grille > div.ouverture-cote:nth-of-type(2) > p.ouverture-actions:nth-of-type(2) > a.bouton.bouton--contour:nth-of-type(2) « Voir le catalogue » — par section#debut > div.conteneur.ouverture-titre-grille > div.pastille:nth-of-type(3) > span.pastille-anneau:nth-of-type(1) _(390×844 normal)_
- **élément recouvert** — `/formation` — section#debut > div.conteneur.ouverture-titre-grille > div.ouverture-cote:nth-of-type(2) > p.ouverture-info:nth-of-type(3) « Finançable par les OPCO · intra ou inter-entrepris » — par section#debut > div.conteneur.ouverture-titre-grille > div.pastille:nth-of-type(3) > span.pastille-anneau:nth-of-type(1) _(390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### texte de contenu sous 13 px (ordinateur) (9)

- **texte de contenu sous 13 px (ordinateur)** — `/conseil` — section#debut > div.persiennes-cadre:nth-of-type(2) > figure.media.ouverture-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/conseil` — div.ofr__corps:nth-of-type(2) > div.ofr__visuels > figure.ofr__visuel.est-actif:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.ouverture-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#demande > div.conteneur.demande-grille > div.fpe__tete:nth-of-type(1) > p.fpe__note:nth-of-type(2) « Formulaire de démonstration : rien n'est envoyé. » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOTRE DEMANDE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formation` — section#pedagogie > div > figure.media.ouvre-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formation` — div.cff__filtres:nth-of-type(2) > div.cff__rang:nth-of-type(2) > label.cff__curseur:nth-of-type(1) > span.cff__etiquette « BUDGET MAXIMUM » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formation` — div.formats-grille.fx-fini:nth-of-type(2) > article.format:nth-of-type(1) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formation` — div.formats-grille.fx-fini:nth-of-type(2) > article.format:nth-of-type(2) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (5)

- **section sans visuel** — `/conseil` — section#mission « UNE MISSION Une méthode adaptée 01 Cadrage Une pha » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Quatre étapes, une réponse sur mesur » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formation` — section#cycle « INTER-ENTREPRISES EN GUADELOUPE Cycle Management & » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formation` — section#rendez-vous « PROCHAIN RENDEZ-VOUS Leadership au féminin, petit- » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formation` — section#catalogue « CATALOGUE 13 formations, à filtrer Prix nets de TV » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/conseil` — écran différent à la même position après rechargement (4.2 %), voir comparaisons/rechargement-conseil-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 18 min de travail pour 30 min de budget, 17 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /conseil, /contact, /formation.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures
```
