(function () {
  var explore = document.querySelector(".canvas");
  if (!explore) return;

  /* Dimension highlight (explore mode) */
  var dimButtons = document.querySelectorAll(".filters button");
  dimButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dim = btn.getAttribute("data-dim");
      dimButtons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      if (dim === "all") explore.removeAttribute("data-focus");
      else explore.setAttribute("data-focus", dim);
    });
  });

  /* Fill-in mode */
  var fill = document.getElementById("fill");
  var fillHost = document.getElementById("fill-canvas");
  if (!fill || !fillHost) return;
  var KEY = "gbmc-canvas-v1";
  var nameInput = document.getElementById("fill-name");
  var status = document.getElementById("fill-status");
  var printName = document.querySelector(".print-name");
  var fields = [];

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  var saved = load();
  var saveTimer;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      var data = { name: nameInput.value, fields: fields.map(function (f) { return f.ta.value; }) };
      try { localStorage.setItem(KEY, JSON.stringify(data)); status.textContent = fill.dataset.saved; }
      catch (e) { status.textContent = ""; }
    }, 300);
  }

  function questionFor(href) {
    var row = href && document.getElementById(href.slice(1));
    var q = row && row.querySelector(".q");
    return q ? q.textContent : "";
  }

  function makeField(label, placeholder) {
    var wrap = document.createElement("span");
    wrap.className = "field";
    var ta = document.createElement("textarea");
    ta.id = "fill-field-" + fields.length;
    ta.setAttribute("aria-label", label);
    ta.placeholder = placeholder;
    ta.spellcheck = true;
    var pt = document.createElement("span");
    pt.className = "pt";
    wrap.appendChild(ta); wrap.appendChild(pt);
    var index = fields.length;
    var value = (saved.fields && saved.fields[index]) || "";
    ta.value = value; pt.textContent = value;
    ta.addEventListener("input", function () { pt.textContent = ta.value; save(); });
    fields.push({ ta: ta, pt: pt });
    return wrap;
  }

  var clone = explore.cloneNode(true);
  clone.classList.add("fill");
  clone.removeAttribute("data-focus");
  clone.removeAttribute("role");
  clone.removeAttribute("aria-label");
  clone.querySelectorAll("a.blk").forEach(function (a) {
    var div = document.createElement("div");
    div.className = a.className;
    var name = a.querySelector(".blk-name").textContent;
    var question = questionFor(a.getAttribute("href"));
    div.appendChild(a.querySelector(".blk-name"));
    var layers = a.querySelector(".layers");
    if (layers) {
      layers.querySelectorAll(".layer").forEach(function (layer) {
        var lname = layer.textContent;
        layer.textContent = "";
        var l = document.createElement("span");
        l.className = "lname"; l.textContent = lname;
        layer.appendChild(l);
        layer.appendChild(makeField(name + " – " + lname, ""));
      });
      layers.querySelector(".layer .field textarea").placeholder = question;
      div.appendChild(layers);
    } else {
      div.appendChild(makeField(name, question));
    }
    a.replaceWith(div);
  });
  fillHost.appendChild(clone);

  nameInput.value = saved.name || "";
  printName.textContent = nameInput.value;
  nameInput.addEventListener("input", function () { printName.textContent = nameInput.value; save(); });

  /* Mode switch */
  var modeButtons = document.querySelectorAll(".modes button");
  var exploreParts = document.querySelectorAll("[data-mode='explore']");
  var fillParts = document.querySelectorAll("[data-mode='fill']");
  function setMode(mode) {
    modeButtons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.target === mode)); });
    exploreParts.forEach(function (el) { el.hidden = mode !== "explore"; });
    fillParts.forEach(function (el) { el.hidden = mode !== "fill"; });
    document.body.classList.toggle("fill-mode", mode === "fill");
  }
  modeButtons.forEach(function (b) { b.addEventListener("click", function () { setMode(b.dataset.target); }); });
  if (location.hash === "#fill") setMode("fill");

  document.getElementById("fill-print").addEventListener("click", function () { window.print(); });

  var clearBtn = document.getElementById("fill-clear");
  var clearLabel = clearBtn.textContent;
  var armed = false, armTimer;
  clearBtn.addEventListener("click", function () {
    if (!armed) {
      armed = true; clearBtn.textContent = fill.dataset.confirm; clearBtn.classList.add("armed");
      armTimer = setTimeout(function () { armed = false; clearBtn.textContent = clearLabel; clearBtn.classList.remove("armed"); }, 4000);
      return;
    }
    clearTimeout(armTimer);
    armed = false; clearBtn.textContent = clearLabel; clearBtn.classList.remove("armed");
    fields.forEach(function (f) { f.ta.value = ""; f.pt.textContent = ""; });
    nameInput.value = ""; printName.textContent = "";
    try { localStorage.removeItem(KEY); } catch (e) {}
    status.textContent = fill.dataset.cleared;
  });
})();

/* Copy citation */
document.querySelectorAll("[data-copy]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var el = document.getElementById(btn.getAttribute("data-copy"));
    var text = el ? el.textContent : "";
    var label = btn.textContent;
    function done() { btn.textContent = btn.getAttribute("data-done"); setTimeout(function () { btn.textContent = label; }, 2000); }
    function fallback() { var r = document.createRange(); r.selectNodeContents(el); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); }
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  });
});
