/* Effets propres à Claire Glorot (direction « L'équilibre »). Le socle gère l'ouverture, les transitions, l'en-tête,
   le menu, les boucles, les mesures et la bibliothèque d'effets (posés par attributs dans les pages).
   Ici : le mobile en équilibre (accueil et appel final), l'intro qui finit sur son cadre, l'orienteur et sa balance,
   les étapes qui s'empilent, les persiennes du conseil, les situations qui s'allument, le chiffre géant du coaching,
   le compte à rebours du rendez-vous, et le branchement des trois modules de la bibliothèque. */
import { demarrer, boucle, versObjet, rafraichir } from './socle/index.js?v=2';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const souris = matchMedia('(hover: hover) and (pointer: fine)').matches;
const etroit = () => innerWidth <= 760;

/* ---------- Mobile en équilibre ----------
   Chaque [data-pivot] est un ressort amorti (pulsation data-omega) ; le défilement et le souffle de la souris
   le poussent (data-gain, avec un signe pour que les étages se contrarient). Sans action depuis 0,6 s,
   l'amortissement devient fort : le mobile se pose en moins d'une seconde, puis s'endort (rien ne dérive). */
const mobiles = [];
function creerMobile(root) {
  const pivots = $$('[data-pivot]', root).map((el) => ({ el, w: +el.dataset.omega || 4, g: +el.dataset.gain || 1, a: 0, v: 0 }));
  const m = { root, pivots, force: 0, derniere: 0, dort: true, libre: true };
  const appliquer = () => pivots.forEach((p) => { p.el.style.rotate = `${p.a.toFixed(3)}deg`; });
  m.pousser = (f) => { m.force += f; m.derniere = performance.now(); m.dort = false; m.indice?.classList.add('vu'); };
  /* Effleurer une pièce (souris) ou la viser au clavier la fait tourner sur son fil. */
  m.indice = root.parentElement?.querySelector('[data-indice]') || null;
  const pichenette = (piece, sens) => {
    const p = pivots.find((x) => x.el === piece.closest('[data-pivot]'));
    if (!p) return;
    p.v += 70 * sens; m.derniere = performance.now(); m.dort = false; m.indice?.classList.add('vu');
  };
  $$('.piece', root).forEach((piece, i) => {
    piece.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') pichenette(piece, e.movementX < 0 ? -1 : 1); });
    piece.addEventListener('focus', () => pichenette(piece, i % 2 ? -1 : 1));
  });
  m.lancer = (angles) => { pivots.forEach((p, i) => { p.a = angles[i] || 0; p.v = 0; }); m.derniere = performance.now() + 900; m.dort = false; appliquer(); };
  m.poser = () => { pivots.forEach((p) => { p.a = 0; p.v = 0; }); m.dort = true; appliquer(); };
  boucle(root, (dt) => {
    if (m.dort) return;
    /* Sans action depuis 0,4 s : ressort plus raide et amorti critique, le mobile se pose en moins d'une seconde. */
    const calme = performance.now() - m.derniere > 400;
    const zeta = calme ? 1 : 0.2, raideur = calme ? 2.4 : 1;
    if (calme) m.force = 0;
    const f = Math.max(-40, Math.min(40, m.force));
    m.force *= Math.pow(0.02, dt);
    let actif = false;
    const pas = Math.max(1, Math.ceil(dt / 0.008)), h = dt / pas;
    for (let k = 0; k < pas; k++) {
      for (const p of pivots) {
        const w = p.w * raideur;
        const acc = -w * w * p.a - 2 * zeta * w * p.v + f * p.g;
        p.v += acc * h; p.a += p.v * h;
        p.a = Math.max(-9, Math.min(9, p.a));
      }
    }
    for (const p of pivots) if (Math.abs(p.a) > 0.03 || Math.abs(p.v) > 0.08) actif = true;
    if (!actif && calme && Math.abs(m.force) < 0.05) { m.poser(); return; }
    appliquer();
  });
  /* Souffle de la souris : seulement avec une souris, sur la section du mobile. */
  if (souris) {
    const zone = root.closest('section') || root;
    let x0 = null, t0 = 0;
    zone.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const t = performance.now();
      if (x0 !== null && t - t0 < 100) m.pousser(Math.max(-14, Math.min(14, ((e.clientX - x0) / Math.max(8, t - t0)) * 9)));
      x0 = e.clientX; t0 = t;
    });
    zone.addEventListener('pointerleave', () => { x0 = null; });
  }
  mobiles.push(m);
  return m;
}
function suivreDefilement() {
  let y0 = scrollY, t0 = performance.now();
  addEventListener('scroll', () => {
    const t = performance.now(), dy = scrollY - y0, d = Math.max(8, t - t0);
    y0 = scrollY; t0 = t;
    const v = Math.max(-6, Math.min(6, dy / d));
    if (Math.abs(v) > 0.05) mobiles.forEach((m) => m.pousser(v * (etroit() ? 1.6 : 3.2)));
  }, { passive: true });
}
const ANGLES_DEPART = [-8, 6, 9, -9, 8, -8];

/* ---------- Ouverture de chaque page : ce qui arrive quand le panneau ou le voile s'ouvre ---------- */
function animOuverture(tl, t0) {
  const accueil = $('.hero');
  if (accueil) {
    tl.set('.hero-titre', { opacity: 1 }, t0 - 0.05)
      .fromTo('.hero-ligne', { y: 0, yPercent: 110 }, { y: 0, yPercent: 0, duration: 0.85, stagger: 0.11, ease: 'power3.out' }, t0)
      .fromTo('.hero-intro, .hero-actions, .hero-info', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.09, ease: 'power3.out' }, t0 + 0.25);
    const m = mobiles.find((x) => x.root.closest('.hero'));
    const tombe = $('.hero .pivot--a2');
    if (tombe) tl.fromTo(tombe, { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' }, t0 + 0.05);
    if (m) tl.call(() => m.lancer(ANGLES_DEPART), null, t0 + 0.1);
    return tl;
  }
  const titre = $('[data-ouverture-titre]');
  if (titre) tl.fromTo(titre, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, t0);
  const suite = $$('[data-ouverture-suite]');
  if (suite.length) tl.fromTo(suite, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, t0 + 0.2);
  if (persiennes) tl.to(persiennes.etat, { ouvert: 1, duration: 1.1, ease: 'power2.inOut', onUpdate: persiennes.rendre }, t0 - 0.05);
  const geant = $('.geant-chiffre');
  if (geant) {
    const fin = parseInt(geant.textContent, 10) || 10, o = { n: 0 };
    tl.call(() => gsap.fromTo(o, { n: 0 }, { n: fin, duration: 1.1, ease: 'power2.out', onUpdate: () => { geant.textContent = String(Math.round(o.n)); } }), null, t0 + 0.1);
  }
  return tl;
}
function etatFinalOuverture() {
  gsap.set('.hero-titre, .hero-intro, .hero-actions, .hero-info, [data-ouverture-titre], [data-ouverture-suite]', { opacity: 1, y: 0 });
  gsap.set('.hero-ligne', { y: 0, yPercent: 0 });
  gsap.set('.hero .pivot--a2', { y: 0, opacity: 1 });
  mobiles.forEach((m) => m.poser());
  if (persiennes) { persiennes.etat.ouvert = 1; persiennes.rendre(); }
  const geant = $('.geant-chiffre');
  if (geant) geant.textContent = geant.dataset.fin || geant.textContent;
}

/* ---------- Persiennes du conseil : elles s'ouvrent à l'arrivée, se referment à moitié quand on quitte l'ouverture ---------- */
let persiennes = null;
function preparerPersiennes() {
  const cadre = $('[data-persiennes]');
  if (!cadre) return;
  const lames = $$('.lame', cadre);
  const etat = { ouvert: 0, defile: 0 };
  const rendre = () => lames.forEach((l, i) => {
    const ferme = Math.max(0, Math.min(1, 1 - etat.ouvert * 1.25 + (lames.length - i) * 0.025 * (1 - etat.ouvert)));
    const s = Math.max(ferme * 1.02, etat.defile * 0.62);
    l.style.transform = `scaleY(${s.toFixed(4)})`;
  });
  persiennes = { etat, rendre };
  ST.create({ trigger: cadre.closest('section'), start: 'top top', end: 'bottom 15%', scrub: 0.4, onUpdate: (s) => { etat.defile = s.progress; rendre(); } });
}

/* ---------- Orienteur : cinq situations, la balance penche vers le métier qui répond ---------- */
function preparerOrienteur() {
  const zone = $('[data-orienteur]');
  if (!zone) return;
  const boutons = $$('[data-situation]', zone), reponses = $$('[data-reponse]', zone);
  const fleau = $('[data-balance]', zone), svg = $('.balance', zone);
  const ANGLE = { conseil: -10, formation: 0, coaching: 10 };
  const choisir = (b, anime = true) => {
    boutons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    reponses.forEach((r) => {
      const ici = r.dataset.reponse === b.dataset.situation;
      r.toggleAttribute('data-cache', !ici);
      if (ici && anime) { r.classList.remove('entre'); void r.offsetWidth; r.classList.add('entre'); }
    });
    $$('[data-plateau]', zone).forEach((p) => p.classList.toggle('actif', p.dataset.plateau === b.dataset.metier));
    gsap.to(fleau, { rotation: ANGLE[b.dataset.metier] ?? 0, svgOrigin: '160 40', duration: anime ? 1.4 : 0, ease: 'elastic.out(1, 0.4)' });
  };
  boutons.forEach((b) => b.addEventListener('click', () => choisir(b)));
  choisir(boutons[0], false);
  gsap.set(fleau, { rotation: 0, svgOrigin: '160 40' });
  ST.create({ trigger: zone, start: 'top 75%', once: true, onEnter: () => gsap.fromTo(fleau, { rotation: 14 }, { rotation: ANGLE[boutons[0].dataset.metier] ?? 0, svgOrigin: '160 40', duration: 1.6, ease: 'elastic.out(1, 0.35)' }) });
  gsap.fromTo(svg, { y: 26 }, { y: -26, ease: 'none', scrollTrigger: { trigger: zone, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
}

/* ---------- Méthode : chaque carte recule quand la suivante vient se poser dessus ---------- */
function preparerEtapes() {
  const cartes = $$('[data-etapes] .etape');
  cartes.forEach((c, i) => {
    const suivante = cartes[i + 1];
    if (!suivante) {
      gsap.fromTo(c, { y: 40 }, { y: 0, ease: 'none', scrollTrigger: { trigger: c, start: 'top bottom', end: 'top 60%', scrub: 0.4 } });
      return;
    }
    gsap.fromTo(c, { scale: 1 }, { scale: 0.93, ease: 'none', immediateRender: false, scrollTrigger: { trigger: suivante, start: 'top 92%', end: 'top 35%', scrub: 0.4 } });
  });
}

/* ---------- Conseil : la frise d'une mission se remplit, chaque étape s'allume quand elle est atteinte ---------- */
function preparerFrise() {
  const frise = $('[data-frise]');
  if (!frise) return;
  const plein = $('.frise-plein', frise), etapes = $$('.mission-etape', frise);
  gsap.fromTo(plein, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: frise, start: 'top 78%', end: 'bottom 45%', scrub: 0.4,
    onUpdate: (s) => etapes.forEach((e, i) => e.classList.toggle('atteinte', s.progress >= i / etapes.length + 0.02)) } });
}

/* ---------- Coaching : les situations s'allument une à une au défilement ; chiffres géants en parallaxe ---------- */
function preparerNuage() {
  const nuage = $('[data-nuage]');
  if (nuage) {
    const items = $$('li', nuage);
    ST.create({ trigger: nuage, start: 'top 80%', end: 'bottom 45%', scrub: true, onUpdate: (s) => {
      const n = Math.round(s.progress * items.length);
      items.forEach((li, i) => li.classList.toggle('allume', i < n));
    } });
    gsap.fromTo(items, { y: (i) => (i % 3 - 1) * 18 }, { y: (i) => (1 - i % 3) * 18, ease: 'none', scrollTrigger: { trigger: nuage, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
  }
  const soleil = $('.hero-soleil');
  if (soleil) gsap.fromTo(soleil, { y: 0, scale: 1 }, { y: 90, scale: 1.12, ease: 'none', scrollTrigger: { trigger: soleil.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.5 } });
  const pastille = $('.pastille-anneau');
  if (pastille) gsap.fromTo(pastille, { rotation: 0 }, { rotation: 140, ease: 'none', scrollTrigger: { trigger: pastille.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.5 } });
  $$('.geant').forEach((g, i) => gsap.fromTo(g, { y: 0 }, { y: -50 - i * 40, ease: 'none', immediateRender: false, scrollTrigger: { trigger: g.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.4 } }));
}

/* ---------- Rendez-vous : compte à rebours à l'heure de la Guadeloupe (UTC−4), « a eu lieu » après la date ---------- */
function preparerRendezVous() {
  const debut = Date.UTC(2026, 11, 11, 4, 0), fin = debut + 86400000;
  const maintenant = Date.now();
  const passe = maintenant >= fin, jour = maintenant >= debut && !passe;
  const jours = Math.max(0, Math.ceil((debut - maintenant) / 86400000));
  $$('[data-rdv]').forEach((s) => {
    const avant = $('.rdv-avant', s), apres = $('.rdv-apres', s);
    if (passe) { avant.hidden = true; apres.hidden = false; return; }
    const n = $('[data-rdv-jours]', s), mot = $('[data-rdv-mot]', s), dans = $('.rdv-dans', s);
    if (jour) { dans.textContent = ''; n.textContent = ''; mot.textContent = s.dataset.aujourdhui || mot.textContent; return; }
    n.textContent = String(jours);
    const o = { v: 0 };
    ST.create({ trigger: s, start: 'top 80%', once: true, onEnter: () => gsap.fromTo(o, { v: Math.min(99, jours + 30) }, { v: jours, duration: 1.4, ease: 'power3.out', onUpdate: () => { n.textContent = String(Math.round(o.v)); } }) });
  });
  if (passe) $$('[data-rdv-info]').forEach((p) => { $('[data-rdv-avant]', p).hidden = true; $('[data-rdv-apres]', p).hidden = false; });
}

/* ---------- Modules de la bibliothèque ---------- */
function preparerModules() {
  const tiroirs = $('[data-module="offre-a-tiroirs"]');
  if (tiroirs) import('./modules/offre-a-tiroirs/module.js?v=2').then((m) => m.init(tiroirs, {})).catch((e) => console.error(e));
  const catalogue = $('[data-module="catalogue-filtres-flip"]');
  if (catalogue) import('./modules/catalogue-filtres-flip/module.js?v=2').then((m) => m.init(catalogue, { duree: 0.4, mots: ['formation', 'formations'], format: (n) => n.toLocaleString('fr-FR').replace(/ /g, ' ') + ' €' })).catch((e) => console.error(e));
  const demande = $('[data-module="formulaire-par-etapes"]');
  if (demande) {
    const p = new URLSearchParams(location.search);
    const sujet = p.get('sujet'), formation = p.get('formation');
    const radio = sujet && $(`input[name="sujet"][value="${CSS.escape(sujet)}"]`, demande);
    if (radio) radio.checked = true;
    const choix = $('#d-formation', demande);
    if (choix && formation && $(`option[value="${CSS.escape(formation)}"]`, choix)) choix.value = formation;
    import('./modules/formulaire-par-etapes/module.js?v=2').then((m) => m.init(demande, {})).catch((e) => console.error(e));
    demande.addEventListener('formulaire:envoye', () => setTimeout(() => {
      const f = $('.fpe__fin', demande);
      if (f && f.getBoundingClientRect().top < 0) f.scrollIntoView({ block: 'start' });
    }, 400));
  }
}

demarrer({
  preparer() {
    $$('[data-mobile]').forEach(creerMobile);
    suivreDefilement();
    const g = $('.geant-chiffre'); if (g) g.dataset.fin = g.textContent;
    if (!gsap || !ST) return;
    preparerPersiennes();
    preparerOrienteur();
    preparerEtapes();
    preparerNuage();
    preparerFrise();
    preparerRendezVous();
    preparerModules();
  },
  /* Intro (2,3 s) : le logo au centre du panneau sable, le trait se dessine, puis le logo glisse jusqu'à l'objet
     d'ouverture de la page (le cadre « Formation » du mobile sur l'accueil) et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-logo', { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45 }, 0)
      .fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0.15)
      .fromTo('.ouverture-nom, .ouverture-ligne', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08 }, 0.2)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-trait', { opacity: 0, duration: 0.25 }, 0.85);
    versObjet(tl, { a: 1.0 });
    animOuverture(tl, 1.5);
    return tl;
  },
  etatFinal() { if (gsap) etatFinalOuverture(); },
  arrivee() {
    if (!gsap) return;
    animOuverture(gsap.timeline(), 0.2);
  },
});
rafraichir();
