/* Accueil : concilier performance et bien-être. Le mobile en équilibre ouvre la page (l'intro finit sur son cadre),
   puis l'orienteur des cinq situations, les trois métiers, Claire, la méthode, les formations, le rendez-vous,
   la confiance et l'appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, surtitre, mobile, appel, fiche, rendezVous } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'claire-portrait-1200.webp' };

const NOMS = ['Europcar', 'Chantiers Audebert', 'Novundi', 'FORE', 'DRSM', 'Clubfunding', 'CMC Caraïbe Management Construction'];

export default (c) => {
  const situations = c.donnees.situations;
  const une = c.donnees.formations.filter((f) => f.une);
  const metiers = [['conseil', 'grok/axe-conseil', 'Séminaire de direction sur une terrasse couverte'], ['formation', 'grok/axe-formation', 'Atelier de formation devant un mur de notes colorées'], ['coaching', 'grok/axe-coaching', 'Une manager de dos face à une grande fenêtre']];
  return html`
<section class="hero ecran" id="debut">
  <div class="hero-texte">
    ${surtitre(c, 'accueil.hero.surtitre', 'hero-surtitre masque-ecran-tres-bas')}
    <h1 class="hero-titre" data-anime="gsap">
      <span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span>
      <span class="ligne-masque"><span class="hero-ligne mot">${c.t('accueil.hero.titre2')}</span></span>
      <span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre3')}</span></span>
    </h1>
    <p class="hero-intro masque-ecran-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions" data-anime="gsap">
      ${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('formation', { ancre: 'catalogue', classe: 'bouton bouton--contour masque-ecran-tres-bas', texte: c.t('accueil.hero.action2') })}
    </p>
    <p class="hero-info" data-anime="gsap" data-info-cle data-rdv-info><span class="point" aria-hidden="true"></span><span data-rdv-avant>${c.t('accueil.hero.info')}</span><span data-rdv-apres hidden>${c.t('accueil.hero.infoPasse')}</span></p>
  </div>
  <div class="hero-mobile">${mobile(c, { iris: true })}</div>
</section>

<section class="orienteur bande bande--sable" id="situations">
  <div class="conteneur">
    <div class="tete-section">
      ${surtitre(c, 'accueil.orienteur.surtitre')}
      ${titre(c, 'accueil.orienteur')}
      <p data-anime>${c.t('accueil.orienteur.texte')}</p>
    </div>
    <div class="orienteur-grille" data-orienteur>
      <div class="orienteur-choix" role="group" aria-label="${c.s('accueil.orienteur.choix')}" data-anime="cascade">
        ${situations.map((s, i) => html`<button type="button" class="orienteur-bouton" data-situation="${s.id}" data-metier="${s.metier}" aria-pressed="${i === 0 ? 'true' : 'false'}" aria-controls="reponse-${s.id}"><span class="orienteur-num">0${String(i + 1)}</span>${s.situation}</button>`)}
      </div>
      <div class="orienteur-reponses" aria-live="polite">
        <svg class="balance" viewBox="0 0 320 150" role="img" aria-label="${c.s('accueil.orienteur.balance')}" data-effet="orienteur" data-visuel>
          <path class="balance-pied" d="M160 40 L160 140 M120 142 H200" />
          <g class="balance-fleau" data-balance>
            <path d="M40 40 H280" class="balance-barre" />
            <circle cx="160" cy="40" r="7" class="balance-axe" />
            <g class="balance-plateau" data-plateau="conseil"><path d="M40 40 L22 82 M40 40 L58 82" /><path d="M14 82 H66 Q40 100 14 82Z" /><text x="40" y="126">${c.t('mobile.conseil')}</text></g>
            <g class="balance-plateau" data-plateau="formation"><path d="M160 40 L160 70" /><rect x="140" y="66" width="40" height="26" rx="4" /><text x="160" y="126">${c.t('mobile.formation')}</text></g>
            <g class="balance-plateau" data-plateau="coaching"><path d="M280 40 L262 82 M280 40 L298 82" /><path d="M254 82 H306 Q280 100 254 82Z" /><text x="280" y="126">${c.t('mobile.coaching')}</text></g>
          </g>
        </svg>
        ${situations.map((s, i) => html`<div class="orienteur-reponse" id="reponse-${s.id}" data-reponse="${s.id}"${i === 0 ? '' : brut(' data-cache')}>
          <p class="orienteur-label">${c.t('accueil.orienteur.reponse')} · <strong>${s.metierNom}</strong></p>
          <p class="orienteur-situation">${s.situation}</p>
          <p class="orienteur-texte">${s.reponse}</p>
          ${c.lien(s.lien, { ancre: s.ancre, params: s.params || '', classe: 'lien-fleche', texte: s.action })}
        </div>`)}
      </div>
    </div>
  </div>
</section>

<section class="metiers bande" id="metiers">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <div>${surtitre(c, 'accueil.metiers.surtitre')}${titre(c, 'accueil.metiers')}</div>
      <p data-anime>${c.t('accueil.metiers.texte')}</p>
    </div>
    <div class="metiers-grille" data-anime="cascade">
      ${metiers.map(([cle, image, alt], i) => html`<article class="metier">
        ${c.media({ nom: image, alt, classe: 'metier-media', sizes: '(max-width: 760px) 100vw, 33vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
        <p class="metier-num">0${String(i + 1)}</p>
        <h3 class="metier-titre">${c.t(`accueil.metiers.${cle}Titre`)}</h3>
        <p>${c.t(`accueil.metiers.${cle}Texte`)}</p>
        ${c.lien(cle, { classe: 'lien-fleche', texte: html`${c.t('accueil.metiers.decouvrir')}<span class="visuellement-cache"> : ${c.t(`accueil.metiers.${cle}Titre`)}</span>` })}
      </article>`)}
    </div>
  </div>
</section>

<section class="claire bande bande--sable" id="claire">
  <div class="conteneur claire-grille">
    ${c.media({ nom: 'claire-portrait', alt: 'Claire Glorot, souriante, assise sur un fauteuil moutarde', classe: 'claire-media', sizes: '(max-width: 760px) 100vw, 42vw', cadrage: '50% 30%', attrs: 'data-anime="rideau"' })}
    <div class="claire-texte">
      ${surtitre(c, 'accueil.claire.surtitre')}
      <h2 class="titre titre--xl" data-anime="lettres">${c.t('accueil.claire.titre')}</h2>
      <p data-anime>${c.t('accueil.claire.texte')}</p>
      <p data-anime>${c.t('accueil.claire.texte2')}</p>
      <ul class="chiffres" data-anime="cascade">
        <li><strong class="chiffre" data-compteur="15">15</strong> ${c.t('accueil.claire.c1')}</li>
        <li><strong class="chiffre" data-compteur="13">13</strong> ${c.t('accueil.claire.c2')}</li>
        <li><strong class="chiffre">9,3</strong> ${c.t('accueil.claire.c3')}</li>
      </ul>
      <h3 class="valeurs-titre">${c.t('accueil.claire.valeurs')}</h3>
      <dl class="valeurs" data-anime="cascade">
        <div><dt>${c.t('accueil.claire.v1')}</dt><dd>${c.t('accueil.claire.v1t')}</dd></div>
        <div><dt>${c.t('accueil.claire.v2')}</dt><dd>${c.t('accueil.claire.v2t')}</dd></div>
        <div><dt>${c.t('accueil.claire.v3')}</dt><dd>${c.t('accueil.claire.v3t')}</dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="methode bande" id="methode">
  <div class="conteneur methode-grille">
    <div class="methode-tete">
      ${surtitre(c, 'accueil.methode.surtitre')}
      ${titre(c, 'accueil.methode')}
    </div>
    <ol class="etapes" data-etapes>
      ${[1, 2, 3, 4].map((n) => html`<li class="etape" style="--n:${String(n)}" data-effet="etapes-empilees">
        <svg class="etape-num" viewBox="0 0 120 120" aria-hidden="true" data-visuel><circle cx="60" cy="60" r="54" /><text x="60" y="78">${String(n)}</text></svg>
        <div><h3>${c.t(`accueil.methode.e${n}`)}</h3><p>${c.t(`accueil.methode.e${n}t`)}</p></div>
      </li>`)}
    </ol>
  </div>
</section>

<section class="une bande bande--sable" id="formations">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <div>${surtitre(c, 'accueil.formations.surtitre')}${titre(c, 'accueil.formations')}</div>
      <div class="une-qualiopi" data-anime>
        <img src="/assets/images/qualiopi.jpg" alt="${c.s('commun.qualiopiTexte')}" width="500" height="406" loading="lazy">
        <p>${c.t('accueil.formations.texte')}</p>
      </div>
    </div>
    <div class="fiches fiches--une" data-anime="cascade" tabindex="0" role="region" aria-label="${c.s('accueil.formations.region')}" data-galerie>
      ${une.map((f) => html`<div class="fiche-cadre" data-fx="vitesse">${fiche(c, f)}</div>`)}
    </div>
    <p class="une-tout">${c.lien('formation', { ancre: 'catalogue', classe: 'bouton bouton--contour', texte: c.t('accueil.formations.tout') })}</p>
  </div>
</section>

${rendezVous(c)}

<section class="confiance bande" id="confiance">
  <div class="conteneur">
    <div class="tete-section">
      ${surtitre(c, 'accueil.confiance.surtitre')}
      ${titre(c, 'accueil.confiance')}
    </div>
    <div class="temoignages">
      <figure class="temoignage">
        <svg class="guillemet" viewBox="0 0 80 60" aria-hidden="true" data-visuel><path d="M0 60V34Q0 8 26 0l4 8Q14 14 14 30h16v30zm44 0V34q0-26 26-34l4 8Q58 14 58 30h16v30z"/></svg>
        <blockquote data-anime="mots">${c.t('accueil.confiance.t1')}</blockquote>
        <figcaption><strong>${c.t('accueil.confiance.t1a')}</strong>, ${c.t('accueil.confiance.t1f')}</figcaption>
      </figure>
      <figure class="temoignage">
        <svg class="guillemet" viewBox="0 0 80 60" aria-hidden="true"><path d="M0 60V34Q0 8 26 0l4 8Q14 14 14 30h16v30zm44 0V34q0-26 26-34l4 8Q58 14 58 30h16v30z"/></svg>
        <blockquote data-anime="mots">${c.t('accueil.confiance.t2')}</blockquote>
        <figcaption><strong>${c.t('accueil.confiance.t2a')}</strong>, ${c.t('accueil.confiance.t2f')}</figcaption>
      </figure>
    </div>
    <p class="confiance-note">${c.t('accueil.confiance.extrait')}</p>
  </div>
  <div class="ruban-section" aria-label="${c.s('accueil.confiance.clients')}" role="group" data-visuel>
    <p class="visuellement-cache">${c.t('accueil.confiance.clients')} : ${NOMS.join(', ')}</p>
    <div class="ruban" id="ruban-clients" data-boucle-css data-ruban aria-hidden="true"><p>${[...NOMS, ...NOMS].map((n) => html`<span>${n}</span>`)}</p></div>
    <button type="button" class="ruban-pause" data-pause-pour="ruban-clients" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button>
  </div>
</section>

${appel(c)}
`;
};
