/* Page introuvable, aux couleurs du site, avec son image. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="ouverture ouverture--scindee introuvable" id="debut">
  <div class="ouverture-texte">
    <h1 class="titre titre--xl" data-anime="gsap" data-ouverture-titre>${c.t('introuvable.titre1')} <em class="mot">${c.t('introuvable.titreMot')}</em></h1>
    <p class="ouverture-info" data-anime="gsap" data-ouverture-suite data-info-cle>${c.t('introuvable.texte')}</p>
    <p class="ouverture-actions" data-anime="gsap" data-ouverture-suite>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
  </div>
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), priorite: true, classe: 'ouverture-media', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
</section>
`;
