const map = {
  P0: {
    title: "Turistico AR",
  },
  P1: {
    title: "1° Grado AR",
  },
  P2: {
    title: "2° Grado AR",
  },
  P3: {
    title: "3° Grado AR",
  },
  PAiAr: {
    title: "Assistente Istruttore AR",
  },
  POn: { title: "Orientamento e Navigazione Sub" },
  PNot: { title: "Immersione Notturna" },
  PNx1: { title: "Nitrox Base" },
  PBio1: { title: "Biologia Marina di 1° Grado" },
  PBio2: { title: "Biologia Marina di 2° Grado" },
  PBioL: { title: "Biologia delle Acque Dolci" },
  PBioT: { title: "Biologia Marina Tropicale" },
  PFs: { title: "Fotografia Subacquea" },
  PVs: { title: "Video Sub" },
  PMs: { title: "Muta Stagna" },
  PRs: { title: "Immersione su Relitti e Secche" },
  PAs0: { title: "Introduzione all’Archeologia Subacquea" },
  PAs1: { title: "Archeologia Subacquea Base" },
  PAs2: { title: "Archeologia Subacquea Avanzato" },
  PDpv1: { title: "Scooter Subacqueo di 1° Grado" },
  PSp1: { title: "Speleologia Subacquea di 1° Grado (Caverna)" },
  PSm1: { title: "Sidemount" },
  PQt: { title: "Immersione in Quota" },
  PSg: { title: "Immersione Sotto i Ghiacci" },
  POpc1: { title: "Aiuto Operatore Subacqueo di Protezione Civile" },
  PAro: { title: "ARO" },
  PSd1: { title: "Advanced Skills Diver" },
  PSd2: { title: "Technical Skills Diver" },
};

module.exports = (config) => {
  // Copy `img/` to `_site/img`
  config.addPassthroughCopy({
    "src/assets": "assets",
    "src/img": "img",
    "src/js": "js",
  });

  // Universal Shortcodes (Adds to Liquid, Nunjucks, JavaScript, Handlebars)
  config.addShortcode("card", function (codice, bg = "bg-white") {
    return `    
    <article class="card w-sm p-6 ${bg} border border-gray-200 rounded-lg shadow h-full hover:bg-gray-100 flex flex-col">
      <h5 class="mb-2 text-xl  tracking-tight text-gray-900"><span class="font-mono font-bold">${codice}</span>
      - ${map[codice]?.title}</h5>
      <div class="flex-1"></div>
      <footer class="flex justify-end">
      <button type="button" data-tooltip="${codice}">
       <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-info-hexagon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
       </button>
        </footer>
    </article>`;
  });

  return {
    /*     markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",*/
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "../public",
    },
  };
};
