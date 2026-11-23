/* Adaptateur : les modules de la bibliothèque attendent leur propre socle (pret(), socle.gsap…).
   Ici, ils reçoivent le GSAP, le ScrollTrigger et le recalcul regroupé du socle du site ; Flip est chargé à la demande.
   Pas de second défilement adouci : celui du site suffit. */
import { rafraichir } from '../socle/index.js?v=2';

const charges = {};
const script = (src) => (charges[src] ??= new Promise((ok, ko) => {
  const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = () => ko(new Error('introuvable : ' + src)); document.head.appendChild(s);
}));

function boucle(el, fn) {
  let visible = false, id = 0, avant = 0, fini = false;
  const tour = (t) => { if (!visible || fini || document.hidden) { id = 0; return; } const dt = avant ? Math.min(64, t - avant) : 16; avant = t; fn(t, dt); id = requestAnimationFrame(tour); };
  const relancer = () => { if (!id && visible && !document.hidden && !fini) { avant = 0; id = requestAnimationFrame(tour); } };
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; relancer(); }, { rootMargin: '100px' });
  io.observe(el);
  document.addEventListener('visibilitychange', relancer);
  return { arreter() { fini = true; io.disconnect(); cancelAnimationFrame(id); document.removeEventListener('visibilitychange', relancer); } };
}

export const socle = {
  gsap: null, ScrollTrigger: null, SplitText: null, Flip: null, OGL: null, lenis: null,
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() { return false; },
  /* Recalcul immédiat (le module l'appelle quand sa grille est posée) puis le recalcul regroupé du socle. */
  rafraichir() { window.ScrollTrigger?.refresh(); rafraichir(); }, boucle, mesurer() {},
};

export async function pret(besoins = []) {
  const voulus = new Set(besoins.map((b) => b.toLowerCase()));
  if (voulus.has('flip') && !window.Flip) await script('/assets/vendor/Flip.min.js');
  const g = window.gsap || null;
  socle.gsap = g;
  if (g && window.ScrollTrigger) socle.ScrollTrigger = window.ScrollTrigger;
  if (g && window.SplitText) socle.SplitText = window.SplitText;
  if (g && window.Flip && !socle.Flip) { g.registerPlugin(window.Flip); socle.Flip = window.Flip; }
  return socle;
}
