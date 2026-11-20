# Claire Glorot · maquette v1

Maquette du nouveau site de Claire Glorot (conseil, formation et coaching professionnel, Sainte-Anne, Guadeloupe), direction artistique « L'équilibre » : sable, océan profond et corail, Bricolage Grotesque et Figtree, un mobile suspendu qui tient en équilibre conseil, formation et coaching.

Adresse de la maquette : https://claireglorot-maquette.vercel.app (non indexée).

## Pages

| Page | Ouverture | Sections |
|---|---|---|
| Accueil `/` | « Concilier performance et bien-être » et le mobile en équilibre | orienteur des cinq situations, trois métiers, Claire, méthode, formations à la une, petit-déjeuner du 11 décembre, témoignages et clients, appel final |
| Conseil `/conseil` | photo derrière des persiennes qui s'ouvrent | trois axes en tiroirs, déroulé d'une mission, Guadeloupe · Caraïbe · International |
| Formation `/formation` | grand titre puis image qui s'ouvre en plein écran | cycle Management & Leadership, prochain rendez-vous, catalogue filtrable des 13 formations, intra et inter, engagements, Qualiopi |
| Coaching `/coaching` | « 10 séances · 6 à 8 mois » en chiffres géants | situations, déroulé en six temps, thématiques, coaching d'équipe, témoignages, déontologie |
| Contact `/contact` | coordonnées et portrait | demande en quatre étapes (préremplie par l'adresse : `?sujet=…&formation=…`), carte de Sainte-Anne à Jarry |
| 404 | « Cette page est en pleine transition » | |

Pages du site actuel non reprises en v1 (possibles en v2) : À propos (parcours, valeurs, références : en partie sur l'accueil), Planning 2026, CGV.

## Construire

```
node outils/generer.mjs          pages HTML à partir de donnees/ et source/
node _biblio/images/produire.mjs plan-images.json   images (pipeline de la bibliothèque)
node _audit/audit.mjs            audit standard
```

Les textes sont dans `donnees/textes/fr.json`, le catalogue dans `donnees/formations.json`, les situations de l'orienteur dans `donnees/situations.json`, les listes (axes du conseil, thématiques du coaching) dans `donnees/listes.json`. Ne jamais modifier les pages `.html` à la main.

## À fournir par le client (à compléter)

- Mentions légales : raison sociale, adresse du siège, SIRET (539 751 032 00035 d'après le catalogue PDF), directeur de la publication.
- Hébergeur : Vercel Inc., adresse à vérifier sur le site de Vercel au moment de la mise en ligne.
- Politique de confidentialité (RGPD) : le site actuel la propose en PDF ; à reprendre en page.
- Crédits : photographie du portrait de Claire (auteur à indiquer) ; les images marquées « Illustration générée » ont été créées par intelligence artificielle (Grok) et gardent cette mention sur le site final.
- Certificat Qualiopi : vérifier la date de validité ; le logo est réservé aux actions de formation (il ne figure plus sur les pages Conseil et Coaching).
- Assurance responsabilité civile professionnelle, si elle doit figurer.

### Retiré ou remplacé faute d'information

- Tarifs du coaching : le catalogue en ligne affiche « 0 € / gratuit » ; la maquette dit « conditions financières précisées au contrat » (page Coaching, déroulé).
- Tarif de « Préparer et conduire ses entretiens annuels » : non publié, affiché « Tarif sur devis ».
- Dates du cycle Management & Leadership 2026 : publiées en images sur le site actuel, illisibles ; remplacées par « Demander les dates ».
- Indicateurs « 0 personne formée » et « 0 jour de formation » : retirés ; seule la satisfaction générale (9,3 sur 10) est affichée.
- Horaires d'ouverture : aucun publié, aucun affiché.
- Références clients : noms en texte (Europcar, Chantiers Audebert, Novundi, FORE, DRSM, Clubfunding, CMC Caraïbe Management Construction) ; fournir les logos en bonne définition pour les afficher.
- Témoignages : extraits des deux témoignages publiés (Muriel, Marie-Claude) ; fournir d'autres témoignages pour enrichir la section.

## Incohérences relevées sur le site actuel

- Satisfaction « Leadership au féminin » : 98 % sur la fiche, 9,8/10 pour le petit-déjeuner.
- Marque « ConseilFormation » dans les titres des pages, « claireglorot » ailleurs.
- Adresse complète seulement dans le catalogue PDF ; e-mail Hotmail (une adresse au nom de domaine serait plus rassurante) ; copyright 2025.
- Logo Qualiopi affiché sur les pages Coaching et Consulting.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`), formulaires simulés (brancher un envoi réel), mentions « à compléter » du pied de page, phrases d'attente ci-dessus une fois les informations fournies.
- Garder : la mention « Illustration générée » sur les images créées par IA ; la mention de la déclaration d'activité (« cet enregistrement ne vaut pas agrément de l'État »).
- Le compte à rebours du petit-déjeuner du 11 décembre 2026 bascule seul sur « a eu lieu » le lendemain (heure de la Guadeloupe) ; mettre à jour `donnees/formations.json` et `donnees/textes/fr.json` (clés `rdv`) pour le prochain rendez-vous.
