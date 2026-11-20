/* Parcours propres à Claire Glorot : orienteur (la réponse suit la situation), catalogue (filtres et budget),
   demande préremplie par l'adresse, compte à rebours cohérent avec la date réelle. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(page);
    const b = page.locator('[data-situation="transition"]');
    await b.scrollIntoViewIfNeeded(); await b.click(); await attendre(400);
    const visible = await page.evaluate(() => !document.querySelector('[data-reponse="transition"]').hasAttribute('data-cache') && document.querySelector('[data-reponse="managers"]').hasAttribute('data-cache'));
    if (!visible) R.echec('orienteur', 'la réponse ne suit pas la situation choisie', { page: '/', taille: '390×844' });
    const jours = await page.evaluate(() => { const n = document.querySelector('[data-rdv-jours]'); return n ? n.textContent : null; });
    const attendu = Math.max(0, Math.ceil((Date.UTC(2026, 11, 11, 4) - Date.now()) / 86400000));
    if (jours !== null && Date.now() < Date.UTC(2026, 11, 12, 4)) {
      await page.locator('[data-rdv]').first().scrollIntoViewIfNeeded(); await attendre(1800);
      const lu = await page.evaluate(() => document.querySelector('[data-rdv-jours]').textContent);
      if (String(attendu) !== lu.trim()) R.echec('compte à rebours', `affiche ${lu} jours au lieu de ${attendu}`, { page: '/', taille: '390×844' });
    }

    await page.goto(BASE + '/formation#catalogue', { waitUntil: 'load' });
    await attendrePret(page); await attendre(600);
    const total = await page.locator('.cff__fiche:not([hidden])').count();
    if (total !== 13) R.echec('catalogue', `${total} fiches visibles au lieu de 13 sans filtre`, { page: '/formation', taille: '390×844' });
    await page.locator('[data-filtre-groupe="categorie"] [data-valeur="rh"]').click(); await attendre(900);
    const rh = await page.locator('.cff__fiche:not([hidden])').count();
    if (rh !== 2) R.echec('catalogue', `filtre Management et RH : ${rh} fiches au lieu de 2`, { page: '/formation', taille: '390×844' });

    await page.goto(BASE + '/contact?sujet=petit-dejeuner&formation=petit-dejeuner#demande', { waitUntil: 'load' });
    await attendrePret(page); await attendre(600);
    const pre = await page.evaluate(() => ({ r: document.querySelector('input[name="sujet"]:checked')?.value, f: document.querySelector('#d-formation')?.value }));
    if (pre.r !== 'petit-dejeuner' || pre.f !== 'petit-dejeuner') R.echec('demande préremplie', `sujet ${pre.r}, formation ${pre.f}`, { page: '/contact', taille: '390×844' });
  } finally { await ctx.close(); }
}
