(() => {
  const app = document.getElementById("app");
  const backBtn = document.getElementById("backBtn");
  const title = document.getElementById("screenTitle");
  const desktopTitle = document.getElementById("desktopScreenTitle");
  const navBtns = [...document.querySelectorAll(".bottom-nav button")];
  const treeView = document.getElementById("treeView");
  const homeShortcut = document.getElementById("homeShortcut");
  const toggleHintsBtn = document.getElementById("toggleHintsBtn");
  const hintCard = document.getElementById("hintCard");
  const state = { current: "home", history: ["home"], hintsVisible: true };
  const TITLE_MAP = { home:"Inicio / Portada de ciudad", discover:"Descubrir", collective:"Perfil colectivo", event:"Detalle evento", dj:"Perfil DJ", artist:"Perfil artista", saved:"Guardado", activity:"Actividad", profile:"Perfil", "create-event":"Crear evento", "create-set":"Añadir set / mix", "create-release":"Añadir release / track" };
  const TREE = [
    { label:"Core", items:[["home","Inicio","house"],["discover","Descubrir","compass"],["activity","Actividad","lightning"],["saved","Guardado","bookmark"],["profile","Perfil","person"]] },
    { label:"Nodos", items:[["collective","Colectivo","people"],["event","Evento","calendar-event"],["dj","DJ","disc"],["artist","Artista","vinyl"]] },
    { label:"Creación", items:[["create-event","Crear evento","calendar-plus"],["create-set","Añadir set","plus-circle"],["create-release","Añadir release","plus-square"]] }
  ];
  function renderTree(){ treeView.innerHTML = TREE.map(group => `<div class="tree-group"><div class="tree-group-label">${group.label}</div>${group.items.map(([id,label,icon]) => `<button class="tree-item ${state.current===id?"active":""}" data-tree-go="${id}"><i class="bi bi-${icon}"></i><span>${label}</span></button>`).join("")}</div>`).join(""); document.querySelectorAll("[data-tree-go]").forEach(btn => btn.addEventListener("click", () => setScreen(btn.dataset.treeGo))); }
  function applyHintVisibility(){ document.querySelectorAll("[data-hint-block]").forEach(node => node.classList.toggle("hidden", !state.hintsVisible)); if (hintCard) hintCard.classList.toggle("hidden", !state.hintsVisible); }
  function wireEvents(){ document.querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); setScreen(el.dataset.go); })); }
  function setScreen(screen, push=true){ const renderer = LS_SCREENS[screen] || LS_SCREENS.home; app.innerHTML = renderer(); state.current = screen; const label = TITLE_MAP[screen] || "Wireframe"; title.textContent = label; desktopTitle.textContent = label; if (push) state.history.push(screen); navBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.nav === screen)); app.scrollTop = 0; wireEvents(); renderTree(); applyHintVisibility(); }
  navBtns.forEach(btn => btn.addEventListener("click", () => setScreen(btn.dataset.nav)));
  backBtn.addEventListener("click", () => { if (state.history.length > 1) { state.history.pop(); const prev = state.history.pop() || "home"; setScreen(prev); } else { setScreen("home", false); } });
  homeShortcut.addEventListener("click", () => setScreen("home"));
  toggleHintsBtn.addEventListener("click", () => { state.hintsVisible = !state.hintsVisible; applyHintVisibility(); });
  setScreen("home", false);
})();