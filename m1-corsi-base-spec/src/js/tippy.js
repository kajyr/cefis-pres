(function () {
  tippy("[data-tooltip]", {
    content: (reference) => {
      const code = reference.getAttribute("data-tooltip");

      return `<div class="w-[700px] bg-slate-600">
      <img src="img/table-${code.toLowerCase()}.png" /></div>`;
    },
    allowHTML: true,
    hideOnClick: true,
    trigger: "click",
    maxWidth: "none",
    placement: "auto-end",
  });
})();
