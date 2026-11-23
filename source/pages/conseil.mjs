/* Conseil : ouverture scindée, la photo apparaît derrière des persiennes qui s'ouvrent (et se referment
   quand on quitte l'ouverture), trois axes en tiroirs (module offre-a-tiroirs), une mission en quatre temps,
   le territoire en mots géants, l'appel final. */
import { html } from '../../outils/gabarit.mjs';
import { titre, surtitre, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'conseil', fichier: 'conseil', imagePartage: 'grok/conseil-ouverture-1280.webp' };

export default (c) => html`
<section class="ouverture ouverture--scindee" id="debut">
  <div class="ouverture-texte">
    ${surtitre(c, 'conseil.ouverture.surtitre')}
    <h1 class="titre titre--xl" data-anime="gsap" data-ouverture-titre>${c.t('conseil.ouverture.titre1')} <em class="mot">${c.t('conseil.ouverture.titreMot')}</em></h1>
    <p class="masque-ecran-bas" data-anime="gsap" data-ouverture-suite>${c.t('conseil.ouverture.texte')}</p>
    <p class="ouverture-actions" data-anime="gsap" data-ouverture-suite>${c.lien('contact', { ancre: 'demande', params: 'sujet=conseil', classe: 'bouton', texte: c.t('conseil.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="ouverture-info" data-anime="gsap" data-ouverture-suite data-info-cle><span class="point" aria-hidden="true"></span>${c.t('conseil.ouverture.info')}</p>
  </div>
  <div class="persiennes-cadre" data-iris-centre>
    ${c.media({ nom: 'grok/conseil-ouverture', alt: c.s('conseil.ouverture.alt'), priorite: true, classe: 'ouverture-media', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
    <div class="persiennes" data-persiennes aria-hidden="true">${[...Array(9)].map(() => html`<span class="lame" data-effet="persiennes"></span>`)}</div>
  </div>
</section>

<section class="ofr axes bande bande--sable" id="axes" data-module="offre-a-tiroirs" aria-labelledby="axes-titre">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne ofr__tete">
      <div>${surtitre(c, 'conseil.axes.surtitre')}${titre(c, 'conseil.axes', { id: 'axes-titre' })}</div>
      <p data-anime>${c.t('conseil.axes.texte')}</p>
    </div>
    <div class="ofr__corps">
      <ol class="ofr__tiroirs">
        ${c.donnees.listes.axes.map((a, i) => html`<li class="ofr__tiroir" id="${a.id}" data-sujet="conseil">
          <h3 class="ofr__titre"><button type="button" class="ofr__poignee">
            <span class="ofr__num">0${String(i + 1)}</span><span class="ofr__nom">${a.titre}</span>
            <span class="ofr__resume">${String(a.liste.length)} ${c.t('conseil.axes.missions')}</span>
          </button></h3>
          <div class="ofr__contenu"><div class="ofr__interieur">
            ${c.media({ nom: 'grok/' + a.image, alt: a.alt, classe: 'ofr__image', sizes: '(max-width: 760px) 100vw, 40vw' })}
            <ul class="liste-puces">${a.liste.map((l) => html`<li>${l}</li>`)}</ul>
            ${c.lien('contact', { ancre: 'demande', params: 'sujet=conseil', classe: 'bouton ofr__parler', texte: html`${c.t('conseil.axes.parler')}<span class="visuellement-cache"> : ${a.titre}</span>` })}
          </div></div>
        </li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="mission bande" id="mission">
  <div class="conteneur">
    <div class="tete-section">
      ${surtitre(c, 'conseil.mission.surtitre')}
      ${titre(c, 'conseil.mission')}
    </div>
    <div class="frise" data-frise>
      <div class="frise-piste" aria-hidden="true"><span class="frise-plein" data-effet="frise"></span></div>
      <ol class="mission-etapes" data-anime="cascade">
        ${[1, 2, 3, 4].map((n) => html`<li class="mission-etape"><span class="mission-num">0${String(n)}</span><h3>${c.t(`conseil.mission.e${n}`)}</h3><p>${c.t(`conseil.mission.e${n}t`)}</p></li>`)}
      </ol>
    </div>
    <div class="durees" data-anime>
      <p class="surtitre">${c.t('conseil.mission.durees')}</p>
      <ul class="durees-liste">${[1, 2, 3].map((n) => html`<li><span class="duree-barre duree-barre--${String(n)}" aria-hidden="true"></span>${c.t(`conseil.mission.d${n}`)}</li>`)}</ul>
      <p class="durees-texte">${c.t('conseil.mission.dureesTexte')}</p>
    </div>
  </div>
</section>

<section class="territoire bande bande--sable" id="territoire">
  <div class="mots-geants" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>${c.t('conseil.territoire.m1')} · ${c.t('conseil.territoire.m2')} · ${c.t('conseil.territoire.m3')} · ${c.t('conseil.territoire.m1')} · ${c.t('conseil.territoire.m2')} ·</p>
    <p data-fx-rangee data-sens="-1">${c.t('conseil.territoire.m3')} · ${c.t('conseil.territoire.m2')} · ${c.t('conseil.territoire.m1')} · ${c.t('conseil.territoire.m3')} · ${c.t('conseil.territoire.m2')} ·</p>
  </div>
  <div class="conteneur territoire-texte">
    <h2 class="titre titre--l" data-anime="lignes">${c.t('conseil.territoire.titre')}</h2>
    <p data-anime>${c.t('conseil.territoire.texte')}</p>
  </div>
</section>

${appel(c, { params: 'sujet=conseil' })}
`;
