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
};

class Card extends HTMLElement {
  constructor() {
    // always call super() first
    super();
    console.log("constructed!");
  }
  // component attributes
  static get observedAttributes() {
    return ["codice"];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // connect component
  connectedCallback() {
    this.innerHTML = `    
    <div class="card w-sm p-6 bg-white border border-gray-200 rounded-lg shadow h-full hover:bg-gray-100">
      <h5 class="mb-2 text-xl  tracking-tight text-gray-900"><span class="font-mono font-bold">${
        this.codice
      }</span>
      - ${map[this.codice]?.title}</h5>
    </div>`;
  }
}
/*       <p class="font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
 */
// register component
customElements.define("corso-card", Card);
