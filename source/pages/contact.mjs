/* Contact : ouverture scindée (coordonnées, Claire en portrait), demande en quatre étapes (module formulaire-par-etapes),
   préremplie par l'adresse (?sujet=…&formation=…), puis l'accès sur la carte de la Guadeloupe. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, surtitre } from '../gabarits/composants.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-ouverture-1280.webp' };

const ICONES = {
  conseil: '<circle cx="16" cy="16" r="11"/><path d="M16 9v7l5 3"/>',
  intra: '<rect x="6" y="9" width="20" height="15" rx="2"/><path d="M11 24v3M21 24v3M10 14h12M10 18h8"/>',
  inter: '<circle cx="11" cy="12" r="4"/><circle cx="21" cy="12" r="4"/><path d="M4 26c1-5 4-7 7-7s6 2 7 7M14 26c1-5 4-7 7-7s6 2 7 7"/>',
  petitdej: '<path d="M7 13h15v6a7 7 0 0 1-15 0z"/><path d="M22 15h2a3 3 0 0 1 0 6h-2M10 5v4M14 5v4M18 5v4"/>',
  individuel: '<path d="M6 25V15a10 10 0 0 1 20 0v10z"/><circle cx="16" cy="15" r="3"/>',
  equipe: '<circle cx="16" cy="9" r="3"/><circle cx="8" cy="20" r="3"/><circle cx="24" cy="20" r="3"/><path d="M16 12v4M11 19l3-2M21 19l-3-2"/>',
};
const SUJETS = [['conseil', 'conseil'], ['formation', 'intra'], ['formation-inter', 'inter'], ['petit-dejeuner', 'petitdej'], ['coaching-individuel', 'individuel'], ['coaching-equipe', 'equipe']];

export default (c) => {
  const k = c.site.contact;
  const carte = c.donnees.carte;
  const [ax, ay] = carte.sainteAnne, [jx, jy] = carte.jarry;
  return html`
<section class="ouverture ouverture--contact" id="debut">
  <div class="ouverture-texte">
    ${surtitre(c, 'contact.ouverture.surtitre')}
    <h1 class="titre titre--xl" data-anime="gsap" data-ouverture-titre>${c.t('contact.ouverture.titre1')} <em class="mot">${c.t('contact.ouverture.titreMot')}</em></h1>
    <div class="contact-claire" data-anime="gsap" data-ouverture-suite data-info-cle>${c.media({ nom: 'claire-portrait', alt: c.s('contact.ouverture.portraitAlt'), classe: 'contact-portrait', sizes: '72px', cadrage: '50% 26%', attrs: 'data-iris-centre="disque"' })}<span>${c.t('contact.ouverture.info')}</span></div>
    <p class="masque-ecran-bas" data-anime="gsap" data-ouverture-suite>${c.t('contact.ouverture.texte')}</p>
    <p class="ouverture-actions" data-anime="gsap" data-ouverture-suite><a class="bouton" href="#demande" data-action-principale data-survol="magnetique">${c.t('contact.ouverture.action')}</a></p>
    <div class="contact-coord" data-anime="gsap" data-ouverture-suite>
      <ul>
        <li><span>${c.t('commun.mobile')}</span> <a href="tel:${k.telephoneLien}">${k.telephone}</a></li>
        <li><span>${c.t('commun.fixe')}</span> <a href="tel:${k.fixeLien}">${k.fixe}</a></li>
        <li><span>${c.t('commun.email')}</span> <a class="contact-mail" href="mailto:${k.email}">${k.email}</a></li>
      </ul>
    </div>
  </div>
  ${c.media({ nom: 'grok/contact-ouverture', alt: c.s('contact.ouverture.alt'), priorite: true, classe: 'ouverture-media contact-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
</section>

<section class="fpe demande bande bande--sable" id="demande" data-module="formulaire-par-etapes" aria-labelledby="demande-titre">
  <div class="conteneur demande-grille">
    <div class="fpe__tete">
      ${surtitre(c, 'contact.demande.titre')}
      <h2 class="titre titre--l" id="demande-titre" data-anime="lignes">${c.t('contact.demande.titreSection')}</h2>
      <p class="fpe__note">${c.t('contact.demande.simule')}</p>
    </div>
    <div class="fpe__carton" data-effet="demande">
      <form class="fpe__form" action="#" method="post" novalidate>
        <div class="fpe__progression">
          <ol class="fpe__reperes" aria-label="Progression"></ol>
          <div class="fpe__barre" aria-hidden="true"><span></span></div>
          <p class="fpe__etat" aria-live="polite"></p>
        </div>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.demande.e1')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.demande.e1q')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('contact.demande.e1')}">
            ${SUJETS.map(([valeur, cle], i) => html`<label class="fpe__carte"><input type="radio" name="sujet" value="${valeur}"${i === 0 ? brut(' required') : ''}>
              <svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true">${brut(ICONES[cle])}</svg>
              <span class="fpe__carte-titre">${c.t(`contact.demande.${cle}`)}</span><span class="fpe__carte-texte">${c.t(`contact.demande.${cle}T`)}</span></label>`)}
          </div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.demande.e2')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.demande.e2q')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="d-entreprise">${c.t('contact.demande.entreprise')}</label><input id="d-entreprise" name="entreprise" autocomplete="organization"></div>
            <div class="fpe__champ"><label for="d-fonction">${c.t('contact.demande.fonction')}</label><input id="d-fonction" name="fonction" autocomplete="organization-title"></div>
            <div class="fpe__champ"><label for="d-personnes">${c.t('contact.demande.personnes')}</label><input id="d-personnes" name="personnes" type="number" min="1" max="500" inputmode="numeric"></div>
            <div class="fpe__champ"><label for="d-formation">${c.t('contact.demande.formation')}</label>
              <select id="d-formation" name="formation"><option value="">${c.t('contact.demande.formationAucune')}</option>${c.donnees.formations.map((f) => html`<option value="${f.id}">${f.titre}</option>`)}</select></div>
          </div>
          <div class="fpe__champ"><label for="d-message">${c.t('contact.demande.message')} <i aria-hidden="true">*</i></label>
            <textarea id="d-message" name="message" rows="5" minlength="10" required placeholder="${c.s('contact.demande.messageAide')}"></textarea></div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.demande.e3')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.demande.e3q')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="d-prenom">${c.t('contact.demande.prenom')} <i aria-hidden="true">*</i></label><input id="d-prenom" name="prenom" autocomplete="given-name" required></div>
            <div class="fpe__champ"><label for="d-nom">${c.t('contact.demande.nom')} <i aria-hidden="true">*</i></label><input id="d-nom" name="nom" autocomplete="family-name" required></div>
            <div class="fpe__champ"><label for="d-email">${c.t('contact.demande.mail')} <i aria-hidden="true">*</i></label><input id="d-email" name="email" type="email" autocomplete="email" required></div>
            <div class="fpe__champ"><label for="d-tel">${c.t('contact.demande.tel')}</label><input id="d-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\-]{8,20}"></div>
          </div>
          <p class="mention-donnees">${c.t('contact.demande.donnees')}</p>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.demande.e4')}" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.demande.e4q')}</h3></legend>
          <div class="fpe__recap"></div>
        </fieldset>
        <div class="fpe__nav">
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${c.t('contact.demande.retour')}</button>
          <button class="fpe__bouton" type="button" data-suivant>${c.t('contact.demande.suivant')}</button>
          <button class="fpe__bouton" type="submit">${c.t('contact.demande.envoyer')}</button>
        </div>
      </form>
      <div class="fpe__fin" hidden>
        <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true" data-grille="retour"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
        <h3>${c.t('contact.demande.merci')}</h3>
        <p data-resume></p>
        <p>${c.t('contact.demande.merciT')}</p>
        <div class="fpe__fin-actions"><button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${c.t('contact.demande.recommencer')}</button></div>
      </div>
    </div>
  </div>
</section>

<section class="acces bande" id="acces">
  <div class="conteneur acces-grille">
    <div>
      ${surtitre(c, 'contact.acces.surtitre')}
      ${titre(c, 'contact.acces')}
      <p data-anime>${c.t('contact.acces.texte')}</p>
    </div>
    <svg class="carte" viewBox="${carte.viewBox}" role="img" aria-label="${c.s('contact.acces.carte')}" data-fx="trace" data-visuel>
      <path class="carte-ile" d="${carte.d}" />
      <path class="carte-trajet" data-fx-trait d="M${String(jx)} ${String(jy)} C ${String(jx + 90)} ${String(jy - 90)}, ${String(ax - 110)} ${String(ay - 80)}, ${String(ax)} ${String(ay)}" />
      <circle class="carte-point" cx="${String(ax)}" cy="${String(ay)}" r="14" data-repere /><circle class="carte-point carte-point--2" cx="${String(jx)}" cy="${String(jy)}" r="11" data-repere />
      <text class="carte-nom" x="${String(ax + 26)}" y="${String(ay + 50)}">${c.t('contact.acces.sainteAnne')}</text>
      <text class="carte-nom" x="${String(jx - 26)}" y="${String(jy - 40)}" text-anchor="end">${c.t('contact.acces.jarry')}</text>
    </svg>
  </div>
</section>
`;
};
