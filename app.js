(function () {
  "use strict";

  var el = function (id) { return document.getElementById(id); };
  var screens = {
    start: el("screen-start"),
    quiz: el("screen-quiz"),
    done: el("screen-done")
  };

  var state = { deck: [], index: 0, score: 0, locked: false, missed: [] };

  /* ---------- pomocné ---------- */

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function show(name) {
    Object.keys(screens).forEach(function (k) { screens[k].hidden = k !== name; });
    window.scrollTo(0, 0);
  }

  // "b__t" + "ý" -> "být"
  function fill(text, choice) {
    var parts = String(choice).split("…").map(function (s) { return s.trim(); });
    var i = 0;
    return text.replace(/__/g, function () {
      var p = parts.length > 1 ? parts[i] : parts[0];
      i++;
      return p;
    });
  }

  function readBest() {
    try { return Number(localStorage.getItem("vsb-best")) || 0; } catch (e) { return 0; }
  }
  function writeBest(pct) {
    try { localStorage.setItem("vsb-best", String(pct)); } catch (e) { /* nic */ }
  }
  function renderBest() {
    var b = readBest();
    if (b > 0) {
      el("best").textContent = "Tvůj nejlepší výsledek: " + b + " %";
      el("best").hidden = false;
    }
  }

  /* ---------- běh kvízu ---------- */

  function start(count) {
    var all = shuffle(window.QUESTIONS);
    state.deck = count === "all" ? all : all.slice(0, Number(count));
    state.index = 0;
    state.score = 0;
    state.missed = [];
    show("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    var q = state.deck[state.index];
    state.locked = false;

    el("counter").textContent = (state.index + 1) + " / " + state.deck.length;
    el("score").textContent = state.score + (state.score === 1 ? " bod" : state.score >= 2 && state.score <= 4 ? " body" : " bodů");
    el("progress").style.width = (state.index / state.deck.length * 100) + "%";
    el("qtype").textContent = q.type === "iy" ? "Doplň i/y" : "Vyber správnou odpověď";

    // zadání
    if (q.type === "iy") {
      el("question").innerHTML = q.text
        .replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/__/g, '<span class="gap"></span>');
    } else {
      el("question").textContent = q.text;
    }

    // možnosti v náhodném pořadí
    var source = q.type === "iy" ? q.gap : q.options;
    var items = shuffle(source.map(function (label, i) {
      return { label: label, correct: i === q.answer };
    }));

    var box = el("options");
    box.innerHTML = "";
    items.forEach(function (item, i) {
      var b = document.createElement("button");
      b.className = "option";
      b.type = "button";
      b.innerHTML = '<span class="key">' + (i + 1) + "</span><span></span>";
      b.lastChild.textContent = item.label;
      b.addEventListener("click", function () { answer(b, item.correct); });
      box.appendChild(b);
    });

    el("feedback").hidden = true;
    el("next").hidden = true;
  }

  function answer(button, correct) {
    if (state.locked) return;
    state.locked = true;

    var q = state.deck[state.index];
    var buttons = el("options").querySelectorAll(".option");
    var right = q.type === "iy" ? q.gap[q.answer] : q.options[q.answer];

    Array.prototype.forEach.call(buttons, function (b) {
      b.disabled = true;
      var label = b.lastChild.textContent;
      if (label === right) b.classList.add("correct");
      else if (b === button) b.classList.add("wrong");
      else b.classList.add("dim");
    });

    var fb = el("feedback");
    fb.classList.toggle("is-ok", correct);
    fb.classList.toggle("is-bad", !correct);

    if (correct) {
      state.score++;
      el("feedback-head").textContent = "Správně";
    } else {
      el("feedback-head").textContent = "Správná odpověď: " + right;
      state.missed.push(q);
    }

    el("feedback-hint").textContent = q.type === "iy"
      ? fill(q.text, right) + " — " + q.hint
      : q.hint;

    fb.hidden = false;
    el("score").textContent = state.score + (state.score === 1 ? " bod" : state.score >= 2 && state.score <= 4 ? " body" : " bodů");

    var next = el("next");
    next.textContent = state.index + 1 < state.deck.length ? "Další otázka" : "Zobrazit výsledek";
    next.hidden = false;
    next.focus();
  }

  function advance() {
    if (state.index + 1 < state.deck.length) {
      state.index++;
      renderQuestion();
    } else {
      finish();
    }
  }

  function finish() {
    var total = state.deck.length;
    var pct = Math.round(state.score / total * 100);

    el("final-score").textContent = state.score;
    el("final-of").textContent = "/" + total;

    var msg;
    if (pct === 100) msg = "Všechno správně. Vyjmenovaná slova po B máš v kapse.";
    else if (pct >= 80) msg = "Velmi dobře. Pár chytáků tě ještě dostalo — projdi si je níž.";
    else if (pct >= 50) msg = "Dobrý základ. Zopakuj si slova, která ti nesedla, a zkus to znovu.";
    else msg = "Zatím to drhne. Přečti si řadu vyjmenovaných slov a dej si další kolo.";
    el("result-msg").textContent = pct + " % správně. " + msg;

    var list = el("review-list");
    list.innerHTML = "";
    state.missed.forEach(function (q) {
      var right = q.type === "iy" ? q.gap[q.answer] : q.options[q.answer];
      var li = document.createElement("li");
      var b = document.createElement("b");
      b.textContent = q.type === "iy" ? fill(q.text, right) : q.text + " → " + right;
      var s = document.createElement("span");
      s.textContent = q.hint;
      li.appendChild(b);
      li.appendChild(s);
      list.appendChild(li);
    });
    el("review").hidden = state.missed.length === 0;

    if (pct > readBest()) writeBest(pct);
    show("done");
  }

  /* ---------- ovládání ---------- */

  Array.prototype.forEach.call(document.querySelectorAll("[data-start]"), function (b) {
    b.addEventListener("click", function () { start(b.dataset.start); });
  });

  el("next").addEventListener("click", advance);
  el("again").addEventListener("click", function () { start(state.deck.length); });
  el("home").addEventListener("click", function () { renderBest(); show("start"); });

  document.addEventListener("keydown", function (e) {
    if (screens.quiz.hidden) return;
    if (!state.locked && /^[1-4]$/.test(e.key)) {
      var b = el("options").querySelectorAll(".option")[Number(e.key) - 1];
      if (b) b.click();
    } else if (state.locked && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      advance();
    }
  });

  renderBest();
})();
