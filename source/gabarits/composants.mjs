/* Composants communs du site : titres, surtitres, mobile en équilibre, appel final, fiche de formation,
   prochain rendez-vous. Un seul système pour toutes les pages. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Titre de section : première partie, puis le mot en corail. */
export function titre(c, base, { h = 'h2', classe = '', anime = 'lignes', id = '' } = {}) {
  const ouvre = brut(`<${h}${id ? ` id="${id}"` : ''} class="titre ${classe}"${anime ? ` data-anime="${anime}"` : ''}>`);
  const ferme = brut(`</${h}>`);
  return html`${ouvre}${c.t(`${base}.titre1`)} <em class="mot">${c.t(`${base}.titreMot`)}</em>${ferme}`;
}

export const surtitre = (c, cle, classe = '') => html`<p class="surtitre ${classe}">${c.t(cle)}</p>`;

/* Mobile suspendu (à la manière d'un mobile d'atelier) : chaque [data-pivot] tourne autour de son point d'accroche,
   piloté par assets/js/site.js (ressort amorti, vitesse du défilement, souffle de la souris). Les pièces sont des liens. */
export function mobile(c, { complet = true, iris = false } = {}) {
  const piece = (cle, forme, image, alt, page, attrs = '') => html`<a class="piece piece--${forme}" href="${c.url(page)}" data-libelle="${c.libelle(page)}"${brut(attrs ? ' ' + attrs : '')}>
      <span class="piece-forme">${complet ? c.media({ nom: image, alt, classe: 'piece-media', sizes: '200px' }) : ''}</span>
      <span class="piece-nom">${c.t(`mobile.${cle}`)}</span>
    </a>`;
  return html`<div class="mobile${complet ? '' : ' mobile--simple'}" data-grille="${complet ? 'manipuler' : 'fil'}" data-mobile data-effet="${complet ? 'mobile' : 'mobile-appel'}" data-souris data-visuel role="group" aria-label="${c.s('mobile.label')}">
  <span class="mobile-crochet" aria-hidden="true"></span>
  <div class="pivot pivot--a" data-pivot data-omega="3.4" data-gain="1">
    <span class="mobile-barre mobile-barre--a" aria-hidden="true"></span>
    <div class="pivot pivot--a1" data-pivot data-omega="4.6" data-gain="-1.2">
      <span class="mobile-fil mobile-fil--a1" aria-hidden="true"></span>
      ${piece('formation', 'cadre', 'grok/piece-formation', c.s('mobile.formation'), 'formation', iris ? 'data-iris-centre' : '')}
    </div>
    <div class="pivot pivot--a2" data-pivot data-omega="4" data-gain="1.4" data-tombe>
      <span class="mobile-fil mobile-fil--a2" aria-hidden="true"></span>
      <div class="pivot pivot--b" data-pivot data-omega="4.4" data-gain="-1.6">
        <span class="mobile-barre mobile-barre--b" aria-hidden="true"></span>
        <div class="pivot pivot--b1" data-pivot data-omega="5" data-gain="1.8">
          <span class="mobile-fil mobile-fil--b1" aria-hidden="true"></span>
          ${piece('conseil', 'rond', 'grok/piece-conseil', c.s('mobile.conseil'), 'conseil')}
          <span class="mobile-fil mobile-fil--perle" aria-hidden="true"></span><span class="mobile-perle" aria-hidden="true"></span>
        </div>
        <div class="pivot pivot--b2" data-pivot data-omega="4.2" data-gain="-2">
          <span class="mobile-fil mobile-fil--b2" aria-hidden="true"></span>
          ${piece('coaching', 'arche', 'grok/piece-coaching', c.s('mobile.coaching'), 'coaching')}
        </div>
      </div>
    </div>
  </div>
</div>`;
}

/* Appel final, le même sur toutes les pages : fond océan, petit mobile, action. */
export function appel(c, { params = '' } = {}) {
  const k = c.site.contact;
  return html`<section class="appel bande bande--ocean" id="appel">
  <div class="conteneur appel-grille">
    <div class="appel-texte">
      ${surtitre(c, 'appel.surtitre')}
      <h2 class="titre titre--xl" data-anime="lignes">${c.t('appel.titre1')} ${c.t('appel.titre2')} <em class="mot">${c.t('appel.titreMot')}</em></h2>
      <p data-anime>${c.t('appel.texte')}</p>
      <p class="appel-actions" data-anime>
        ${c.lien('contact', { ancre: 'demande', params, classe: 'bouton bouton--clair', texte: c.t('appel.action'), attrs: 'data-survol="magnetique"' })}
        <span class="appel-tel">${c.t('appel.ou')} <a href="tel:${k.telephoneLien}">${k.telephone}</a></span>
      </p>
    </div>
    ${mobile(c, { complet: false })}
  </div>
</section>`;
}

const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ') + ' €';

/* Fiche de formation (catalogue et formations à la une). Données dans donnees/formations.json. */
export function fiche(c, f, { filtres = false, prixMax = 99999 } = {}) {
  const attrs = filtres ? brut(` data-categorie="${f.categorie}" data-duree="${f.dureeCle}" data-prix="${f.prix ?? prixMax}" data-heures="${f.heures}" data-ordre="${f.ordre}"`) : '';
  return html`<article class="fiche fiche--${f.categorie}${filtres ? ' cff__fiche' : ''}" id="${filtres ? 'f-' + f.id : 'une-' + f.id}"${attrs}>
  <p class="fiche-cat">${c.t('fiche.categorie_' + f.categorie)}${f.date ? html` · <span class="fiche-date">${c.t('fiche.date')}</span>` : ''}</p>
  <h3 class="fiche-titre">${f.titre}</h3>
  ${f.sousTitre ? html`<p class="fiche-sous">${f.sousTitre}</p>` : ''}
  <ul class="fiche-infos">
    <li><strong>${f.duree}</strong>${f.heures >= 7 ? html` · ${String(f.heures)} h` : ''}</li>
    <li>${f.groupe} ${c.t('fiche.groupe')}</li>
    ${f.note ? html`<li>${f.note} ${c.t('fiche.satisfaction')} · ${String(f.avis)} ${c.t('fiche.avis')}</li>` : ''}
  </ul>
  <p class="fiche-public"><span>${c.t('fiche.public')}</span> ${f.public}</p>
  <p class="fiche-prix" data-prix>${f.prix ? html`${euros(f.prix)} <small>${c.t('fiche.net')}</small>` : c.t('fiche.devis')}</p>
  ${c.lien('contact', { ancre: 'demande', params: `sujet=${f.id === 'petit-dejeuner' ? 'petit-dejeuner' : 'formation'}&formation=${f.id}`, classe: 'fiche-lien', texte: html`${c.t('fiche.demander')}<span class="visuellement-cache"> : ${f.titre}</span>` })}
</article>`;
}

/* Prochain rendez-vous : le petit-déjeuner du 11 décembre 2026. Après la date, le compte à rebours
   laisse place à une phrase au passé (assets/js/site.js, heure de la Guadeloupe). */
export function rendezVous(c, { image = true, id = 'rendez-vous' } = {}) {
  const jours = Math.max(0, Math.ceil((Date.UTC(2026, 11, 11, 4) - Date.now()) / 86400000));
  return html`<section class="rdv bande${image ? ' rdv--photo' : ''}" id="${id}" data-rdv data-date="2026-12-11" data-aujourdhui="${c.s('rdv.aujourdhui')}">
  ${image ? c.media({ nom: 'grok/petit-dejeuner', alt: c.s('rdv.titre'), classe: 'rdv-media', sizes: '100vw', cadrage: '62% 50%', attrs: 'data-fx="zoom"' }) : ''}
  <div class="conteneur rdv-grille">
    <div class="rdv-carte" data-anime>
      ${surtitre(c, 'rdv.surtitre')}
      <h2 class="titre titre--l">${c.t('rdv.titre')}</h2>
      <p class="rdv-date"><strong>${c.t('rdv.date')}</strong><br>${c.t('rdv.lieu')}</p>
      <p class="rdv-details">${c.t('rdv.details')}</p>
      <p class="rdv-texte">${c.t('rdv.texte')}</p>
      <div class="rdv-avant">
        <p class="rdv-compte" data-effet="compte-a-rebours" aria-live="off"><span class="rdv-dans">${c.t('rdv.dans')}</span> <strong data-rdv-jours>${String(jours)}</strong> <span data-rdv-mot>${c.t(jours > 1 ? 'rdv.jours' : 'rdv.jour')}</span></p>
        <p>${c.lien('contact', { ancre: 'demande', params: 'sujet=petit-dejeuner&formation=petit-dejeuner', classe: 'bouton', texte: c.t('rdv.action'), attrs: 'data-survol="magnetique"' })}</p>
      </div>
      <div class="rdv-apres" hidden>
        <p>${c.t('rdv.passe')}</p>
        <p>${c.lien('contact', { ancre: 'demande', params: 'sujet=petit-dejeuner', classe: 'bouton', texte: c.t('rdv.passeAction') })}</p>
      </div>
      <p class="rdv-note">${c.t('rdv.note')}</p>
    </div>
  </div>
</section>`;
}
