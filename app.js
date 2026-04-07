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
  const desktopShell = document.getElementById("desktopShell");
  const breadcrumbTrail = document.getElementById("breadcrumbTrail");
  const viewportStage = document.getElementById("viewportStage");
  const currentScreenKpi = document.getElementById("currentScreenKpi");
  const focusKpi = document.getElementById("focusKpi");
  const zoomKpi = document.getElementById("zoomKpi");
  const wfVersion = document.getElementById("wfVersion");
  const packVersion = document.getElementById("packVersion");
  const zoomBtns = [...document.querySelectorAll(".zoom-btn")];
  const state = window.WIREFRAMER_UISTATE.create();

  wfVersion.textContent = window.WIREFRAMER_REGISTRY.version;
  packVersion.textContent = window.WIREFRAMER_REGISTRY.packVersion;

  function updateFooter() {
    currentScreenKpi.textContent = state.current;
    focusKpi.textContent = state.hintsVisible ? "off" : "on";
    zoomKpi.textContent = `${Math.round(state.zoom * 100)}%`;
  }

  function applyHintVisibility() {
    const hideNoise = !state.hintsVisible;
    if (hintCard) hintCard.classList.toggle("hidden", hideNoise);
    desktopShell.classList.toggle("focus-mode", hideNoise);
  }

  function applyZoom() {
    window.WIREFRAMER_VIEWPORT.apply(viewportStage, state.zoom);
    zoomBtns.forEach(btn => btn.classList.toggle("active", Number(btn.dataset.zoom) === state.zoom));
  }

  function wireEvents() {
    document.querySelectorAll("[data-go]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        setScreen(el.dataset.go);
      });
    });
  }

  function renderTree() {
    window.WIREFRAMER_TREEVIEW.render(treeView, state.current, setScreen);
  }

  function renderBreadcrumb() {
    window.WIREFRAMER_BREADCRUMB.render(breadcrumbTrail, state.current, setScreen);
  }

  function setScreen(screen, push = true) {
    const renderer = LS_SCREENS[screen] || LS_SCREENS.home;
    app.innerHTML = renderer();
    state.current = screen;
    const label = window.WIREFRAMER_REGISTRY.titleMap[screen] || "Wireframe";
    title.textContent = label;
    desktopTitle.textContent = label;
    if (push) state.history.push(screen);
    navBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.nav === screen));
    app.scrollTop = 0;
    wireEvents();
    renderTree();
    renderBreadcrumb();
    applyHintVisibility();
    applyZoom();
    updateFooter();
  }

  navBtns.forEach(btn => btn.addEventListener("click", () => setScreen(btn.dataset.nav)));
  zoomBtns.forEach(btn => btn.addEventListener("click", () => {
    state.zoom = Number(btn.dataset.zoom);
    applyZoom();
    updateFooter();
  }));

  backBtn.addEventListener("click", () => {
    if (state.history.length > 1) {
      state.history.pop();
      const prev = state.history.pop() || "home";
      setScreen(prev);
    } else {
      setScreen("home", false);
    }
  });

  homeShortcut.addEventListener("click", () => setScreen("home"));
  toggleHintsBtn.addEventListener("click", () => {
    state.hintsVisible = !state.hintsVisible;
    applyHintVisibility();
    updateFooter();
  });

  setScreen("home", false);
})();