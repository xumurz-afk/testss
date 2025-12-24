const TEST = (function () {
  // определяем имя теста по пути: /.../tests/<name>/test.html
  const parts = location.pathname.split('/').filter(Boolean);
  // если путь заканчивается 'test.html', папка теста — предпоследний элемент
  if (parts[parts.length - 1] && parts[parts.length - 1].toLowerCase().includes('test')) {
    return parts[parts.length - 2];
  }
  // fallback к dbms
  return 'dbms';
})();

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const defaultState = {
  questions: shuffle(QUESTIONS),
  current: 0,
  answers: {}
};

let state = loadProgress(TEST) || structuredClone(defaultState);

const nav = document.getElementById("nav");
const content = document.getElementById("content");
const actions = document.getElementById("actions");

function renderNav() {
  nav.innerHTML = "";
  state.questions.forEach((q, i) => {
    const a = state.answers[q.id];
    const b = document.createElement("button");
    b.textContent = i + 1;

    if (a?.checked) {
      b.classList.remove("nav-good", "nav-bad");
      b.classList.add(a.correct ? "nav-good" : "nav-bad");
    }

    b.onclick = () => { state.current = i; render() };
    nav.appendChild(b);
  });
}

function renderQuestion() {
  const q = state.questions[state.current];
  const a = state.answers[q.id] || {};
  state.answers[q.id] = a;

  if (!a.qText) {
    a.qText = q.question[Math.floor(Math.random() * q.question.length)];
  }

  if (!a.order) {
    a.order = shuffle(q.options.map((_, i) => i));
  }

  const locked = a.checked === true;

  content.innerHTML = `
    <div class="card-box">
      <div class="question">${a.qText}</div>
      <div class="options">
        ${a.order.map((opt, i) => {
    let cls = "";
    if (locked) {
      if (opt === q.correct) cls = "correct";
      else if (a.choice === i) cls = "wrong";
    } else if (a.choice === i) {
      cls = "selected";
    }

    return `
            <div class="option ${locked ? 'locked' : ''} ${cls}"
              onclick="${locked ? '' : `answer(${i})`}">
              ${q.options[opt]}
            </div>
          `;
  }).join("")}
      </div>
      ${locked ? `<div class="explanation">${q.explanation}</div>` : ''}
    </div>`;
}

function renderActions() {
  const q = state.questions[state.current];
  const a = state.answers[q.id];
  actions.innerHTML = `
    <button onclick="check()" ${a?.checked ? 'disabled' : ''}>Проверить</button>
    <button class="secondary" onclick="finish()">Завершить тест</button>
    <button class="secondary" onclick="exitMenu()">В меню</button>`;
}

function render() {
  renderNav();
  renderQuestion();
  renderActions();
  saveProgress(TEST, state);
}

function answer(i) {
  const q = state.questions[state.current];
  state.answers[q.id].choice = i;
  render();
}

function check() {
  const q = state.questions[state.current];
  const a = state.answers[q.id];
  if (!a || a.choice === undefined) return;

  const realIndex = a.order[a.choice];
  a.correct = realIndex === q.correct;
  a.checked = true;

  render();
}

function finish() {
  let score = 0, detailed = {};

  state.questions.forEach(q => {
    const a = state.answers[q.id];
    if (!a || a.choice === undefined) {
      detailed[q.id] = { skipped: true };
    } else {
      const ok = a.correct === true;
      if (ok) score++;
      detailed[q.id] = { choice: a.choice, correct: ok };
    }
  });

  const id = crypto.randomUUID();
  saveAttempt(TEST, { id, date: Date.now(), score, total: state.questions.length, detailed });
  clearProgress(TEST);
  location.href = `results.html?id=${id}`;
}

function exitMenu() {
  saveProgress(TEST, state);
  location.href = '../../index.html';
}

render();
