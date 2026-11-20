/* Formation : grand titre, puis une image qui s'ouvre jusqu'au plein écran (data-fx="plein-ecran"), le cycle 2026
   et le prochain rendez-vous, le catalogue filtrable des 13 formations (module catalogue-filtres-flip),
   les deux formats, les engagements et l'appel final. */
import { html } from '../../outils/gabarit.mjs';
import { titre, surtitre, appel, fiche, rendezVous } from '../gabarits/composants.mjs';

export const page = { cle: 'formation', fichier: 'formation', imagePartage: 'grok/formation-ouverture-1280.webp' };

export default (c) => {
  const f = c.donnees.formations;
  const prixMax = Math.max(...f.filter((x) => x.prix).map((x) => x.prix));
  return html`
<section class="ouverture ouverture--titre" id="debut">
  <div class="conteneur ouverture-titre-grille">
    <div>
      ${surtitre(c, 'formation.ouverture.surtitre')}
      <h1 class="titre titre--xxl" data-anime="gsap" data-ouverture-titre>${c.t('formation.ouverture.titre1')} <em class="mot">${c.t('formation.ouverture.titreMot')}</em></h1>
    </div>
    <div class="ouverture-cote">
      <p class="masque-ecran-bas" data-anime="gsap" data-ouverture-suite>${c.t('formation.ouverture.texte')}</p>
      <p class="ouverture-actions" data-anime="gsap" data-ouverture-suite>
        ${c.lien('contact', { ancre: 'demande', params: 'sujet=formation', classe: 'bouton', texte: c.t('formation.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <a class="bouton bouton--contour masque-ecran-tres-bas" href="#catalogue">${c.t('formation.ouverture.action2')}</a>
      </p>
      <p class="ouverture-info" data-anime="gsap" data-ouverture-suite data-info-cle><span class="point" aria-hidden="true"></span>${c.t('formation.ouverture.info')}</p>
    </div>
    <div class="pastille" data-iris-centre="disque" aria-hidden="true" data-visuel><span class="pastille-anneau" data-effet="pastille"></span><span class="pastille-chiffre">13</span><span class="pastille-mot">formations</span></div>
  </div>
</section>

<section class="ouvre bande" id="pedagogie" data-fx="plein-ecran" data-fx-depart="inset(18% 22% 18% 22% round 24px)">
  <div data-collant>
    ${c.media({ nom: 'grok/formation-ouverture', alt: c.s('formation.ouverture.alt'), classe: 'ouvre-media', sizes: '100vw', cadrage: '50% 55%', attrs: 'data-fx-cible' })}
    <p class="ouvre-mot ouvre-mot--g" data-fx-ecarte="g" aria-hidden="true">${c.t('formation.ouverture.motG')}</p>
    <p class="ouvre-mot ouvre-mot--d" data-fx-ecarte="d" aria-hidden="true">${c.t('formation.ouverture.motD')}</p>
    <p class="ouvre-legende" data-fx-apres>${c.t('formation.ouverture.legende')}</p>
  </div>
</section>

<section class="cycle bande bande--sable" id="cycle">
  <div class="conteneur cycle-grille">
    <div>
      ${surtitre(c, 'formation.cycle.surtitre')}
      ${titre(c, 'formation.cycle')}
      <p data-anime>${c.t('formation.cycle.texte')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'sujet=formation-inter', classe: 'bouton bouton--contour', texte: c.t('formation.cycle.action') })}</p>
    </div>
    <ol class="cycle-modules" data-anime="cascade">
      ${[1, 2, 3, 4, 5].map((n) => html`<li><span class="cycle-num">${String(n)}</span>${c.t(`formation.cycle.m${n}`)}</li>`)}
    </ol>
  </div>
</section>

${rendezVous(c, { image: false, id: 'rendez-vous' })}

<section class="cff catalogue bande" id="catalogue" data-module="catalogue-filtres-flip" aria-labelledby="catalogue-titre">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <div>${surtitre(c, 'formation.catalogue.surtitre')}${titre(c, 'formation.catalogue', { id: 'catalogue-titre' })}</div>
      <p data-anime>${c.t('formation.catalogue.texte')}</p>
    </div>
    <div class="cff__filtres" role="region" aria-label="${c.s('formation.catalogue.region')}">
      <div class="cff__rang">
        <div class="cff__groupe" role="group" aria-label="${c.s('formation.catalogue.categorie')}" data-filtre-groupe="categorie"><span class="cff__etiquette">${c.t('formation.catalogue.categorie')}</span>
          <button type="button" data-valeur="tout" aria-pressed="true">${c.t('formation.catalogue.tout')}</button>
          <button type="button" data-valeur="management" aria-pressed="false">${c.t('fiche.categorie_management')}</button>
          <button type="button" data-valeur="rh" aria-pressed="false">${c.t('fiche.categorie_rh')}</button>
          <button type="button" data-valeur="transverses" aria-pressed="false">${c.t('fiche.categorie_transverses')}</button>
        </div>
        <div class="cff__groupe" role="group" aria-label="${c.s('formation.catalogue.duree')}" data-filtre-groupe="duree"><span class="cff__etiquette">${c.t('formation.catalogue.duree')}</span>
          <button type="button" data-valeur="tout" aria-pressed="true">${c.t('formation.catalogue.tout')}</button>
          <button type="button" data-valeur="court" aria-pressed="false">${c.t('formation.catalogue.court')}</button>
          <button type="button" data-valeur="2j" aria-pressed="false">${c.t('formation.catalogue.j2')}</button>
          <button type="button" data-valeur="3j" aria-pressed="false">${c.t('formation.catalogue.j3')}</button>
        </div>
      </div>
      <div class="cff__rang">
        <label class="cff__curseur"><span class="cff__etiquette">${c.t('formation.catalogue.budget')}</span> <b data-sortie="prix">${new Intl.NumberFormat('fr-FR').format(prixMax).replace(/[  ]/g, ' ')} €</b>
          <input type="range" min="100" max="${String(prixMax)}" step="50" value="${String(prixMax)}" data-filtre-max="prix"></label>
        <label class="cff__tri"><span class="cff__etiquette">${c.t('formation.catalogue.tri')}</span>
          <select data-tri><option value="ordre">${c.t('formation.catalogue.triOrdre')}</option><option value="prix-asc">${c.t('formation.catalogue.triPrix')}</option><option value="heures-asc">${c.t('formation.catalogue.triDuree')}</option></select></label>
        <p class="cff__compte" aria-live="polite"><b data-compte>${String(f.length)}</b> <span data-compte-mot>${c.t('formation.catalogue.compte')}</span> · <button type="button" class="cff__reinit" data-reinit>${c.t('formation.catalogue.reinit')}</button></p>
      </div>
    </div>
    <div class="cff__grille fiches" data-grille data-effet="catalogue">
      ${f.map((x) => fiche(c, x, { filtres: true, prixMax }))}
      <p class="cff__vide" data-vide hidden>${c.t('formation.catalogue.vide')} <button type="button" data-reinit>${c.t('formation.catalogue.reinit')}</button></p>
    </div>
  </div>
</section>

<section class="formats bande bande--sable" id="formats">
  <div class="conteneur">
    <div class="tete-section">${surtitre(c, 'formation.formats.surtitre')}${titre(c, 'formation.formats')}</div>
    <div class="formats-grille" data-anime="cascade">
      <article class="format">
        ${c.media({ nom: 'grok/formation-intra', alt: c.s('formation.formats.altIntra'), classe: 'format-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
        <h3>${c.t('formation.formats.intra')}</h3><p>${c.t('formation.formats.intraT')}</p>
        ${c.lien('contact', { ancre: 'demande', params: 'sujet=formation', classe: 'lien-fleche', texte: c.t('formation.ouverture.action') })}
      </article>
      <article class="format">
        ${c.media({ nom: 'grok/formation-inter', alt: c.s('formation.formats.altInter'), classe: 'format-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
        <h3>${c.t('formation.formats.inter')}</h3><p>${c.t('formation.formats.interT')}</p>
        ${c.lien('contact', { ancre: 'demande', params: 'sujet=formation-inter', classe: 'lien-fleche', texte: c.t('formation.cycle.action') })}
      </article>
    </div>
  </div>
</section>

<section class="engagements bande" id="engagements">
  <div class="conteneur engagements-grille">
    <div>
      ${surtitre(c, 'formation.engagements.surtitre')}
      ${titre(c, 'formation.engagements')}
      <ul class="engagements-liste" data-anime="cascade">
        ${[1, 2, 3, 4].map((n) => html`<li><h3>${c.t(`formation.engagements.e${n}`)}</h3><p>${c.t(`formation.engagements.e${n}t`)}</p></li>`)}
      </ul>
    </div>
    <aside class="garanties" data-anime>
      <p class="garanties-note"><strong class="chiffre">9,3</strong> ${c.t('formation.engagements.satisfaction')}</p>
      <img src="/assets/images/qualiopi.jpg" alt="${c.s('commun.qualiopiTexte')}" width="500" height="406" loading="lazy" data-visuel>
      <p>${c.t('formation.engagements.financement')}</p>
      <p>${c.t('formation.engagements.handicap')}</p>
      <p class="garanties-nda">${c.t('commun.nda')}</p>
    </aside>
  </div>
</section>

${appel(c, { params: 'sujet=formation' })}
`;
};
