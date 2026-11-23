/* Coaching : ouverture en chiffres géants (10 séances, 6 à 8 mois) et photo en arche, situations qui s'allument
   une à une, déroulé en six temps avec photo collante, thématiques, coaching d'équipe, témoignages, déontologie. */
import { html } from '../../outils/gabarit.mjs';
import { titre, surtitre, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'coaching', fichier: 'coaching', imagePartage: 'grok/coaching-ouverture-1280.webp' };

export default (c) => html`
<section class="ouverture ouverture--chiffres" id="debut">
  <div class="ouverture-texte">
    ${surtitre(c, 'coaching.ouverture.surtitre')}
    <h1 class="titre titre--xl" data-anime="gsap" data-ouverture-titre>${c.t('coaching.ouverture.titre1')} <em class="mot">${c.t('coaching.ouverture.titreMot')}</em></h1>
    <p class="masque-ecran-bas" data-anime="gsap" data-ouverture-suite>${c.t('coaching.ouverture.texte')}</p>
    <p class="ouverture-actions" data-anime="gsap" data-ouverture-suite>${c.lien('contact', { ancre: 'demande', params: 'sujet=coaching-individuel', classe: 'bouton', texte: c.t('coaching.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="ouverture-info" data-anime="gsap" data-ouverture-suite data-info-cle><span class="point" aria-hidden="true"></span>${c.t('coaching.ouverture.info')}</p>
  </div>
  <div class="chiffres-geants" data-iris-centre>
    <p class="geant" data-effet="chiffre-geant"><span class="geant-chiffre">${c.t('coaching.ouverture.chiffre1')}</span><span class="geant-mot">${c.t('coaching.ouverture.chiffre1t')}</span></p>
    <p class="geant geant--2"><span class="geant-chiffre">${c.t('coaching.ouverture.chiffre2')}</span><span class="geant-mot">${c.t('coaching.ouverture.chiffre2t')}</span></p>
  </div>
  ${c.media({ nom: 'grok/coaching-ouverture', alt: c.s('coaching.ouverture.alt'), priorite: true, classe: 'arche-media', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
</section>

<section class="situations bande bande--sable" id="situations">
  <div class="conteneur">
    <div class="tete-section">${surtitre(c, 'coaching.situations.surtitre')}${titre(c, 'coaching.situations')}</div>
    <ul class="nuage" data-nuage>
      ${c.donnees.listes.situationsCoaching.map((s, i) => html`<li style="--i:${String(i)}" data-effet="situations">${s}</li>`)}
    </ul>
  </div>
</section>

<section class="deroule bande" id="deroule">
  <div class="conteneur deroule-grille">
    <div class="deroule-image">
      ${c.media({ nom: 'grok/coaching-carnet', alt: c.s('coaching.deroule.alt'), classe: 'deroule-media', sizes: '(max-width: 760px) 100vw, 38vw', attrs: 'data-anime="rideau"' })}
    </div>
    <div>
      ${surtitre(c, 'coaching.deroule.surtitre')}
      ${titre(c, 'coaching.deroule')}
      <ol class="temps" data-anime="cascade">
        ${[1, 2, 3, 4, 5, 6].map((n) => html`<li><span class="temps-num">${String(n)}</span><div><h3>${c.t(`coaching.deroule.e${n}`)}</h3><p>${c.t(`coaching.deroule.e${n}t`)}</p></div></li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="themes bande bande--sable" id="themes">
  <div class="conteneur">
    <div class="tete-section">${surtitre(c, 'coaching.themes.surtitre')}${titre(c, 'coaching.themes')}</div>
    <div class="themes-grille" data-anime="cascade">
      ${c.donnees.listes.themes.map((g, i) => html`<article class="theme">
        <svg class="theme-forme" viewBox="0 0 80 80" aria-hidden="true" data-visuel><path d="M14 74 V40 A26 26 0 0 1 66 40 V74 Z"/><text x="40" y="62">${String(i + 1)}</text></svg>
        <h3>${g.titre}</h3><ul class="liste-puces">${g.liste.map((l) => html`<li>${l}</li>`)}</ul>
      </article>`)}
    </div>
  </div>
</section>

<section class="equipe bande" id="equipe">
  <div class="conteneur equipe-grille">
    ${c.media({ nom: 'grok/coaching-equipe', alt: c.s('coaching.equipe.alt'), classe: 'equipe-media', sizes: '(max-width: 760px) 100vw, 52vw', attrs: 'data-fx="zoom"' })}
    <div>
      ${surtitre(c, 'coaching.equipe.surtitre')}
      ${titre(c, 'coaching.equipe')}
      <p data-anime>${c.t('coaching.equipe.texte')}</p>
      <p class="equipe-format" data-anime><span class="point" aria-hidden="true"></span>${c.t('coaching.equipe.format')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'sujet=coaching-equipe', classe: 'bouton', texte: c.t('coaching.equipe.action') })}</p>
    </div>
  </div>
</section>

<section class="paroles bande bande--sable" id="temoignages">
  <div class="conteneur paroles-grille">
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
    <div class="deonto" data-anime>
      <h2 class="titre titre--m">${c.t('coaching.deonto.titre')}</h2>
      <p>${c.t('coaching.deonto.texte')}</p>
    </div>
  </div>
</section>

${appel(c, { params: 'sujet=coaching-individuel' })}
`;
