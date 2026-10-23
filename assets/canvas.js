(function () {
  var canvas = document.querySelector(".canvas");
  var buttons = document.querySelectorAll(".filters button");
  if (!canvas || !buttons.length) return;
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dim = btn.getAttribute("data-dim");
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      if (dim === "all") canvas.removeAttribute("data-focus");
      else canvas.setAttribute("data-focus", dim);
    });
  });
})();
