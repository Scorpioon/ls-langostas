(() => {
  const app = document.getElementById("app");
  const backBtn = document.getElementById("backBtn");
  const title = document.getElementById("screenTitle");
  const treeView = document.getElementById("treeView");
  const homeShortcut = document.getElementById("homeShortcut");
  const toggleHintsBtn = document.getElementById("toggleHintsBtn");
  const breadcrumbTrail = document.getElementById("breadcrumbTrail");
  const viewportStage = document.getElementById("viewportStage");
  const workspaceStage = document.getElementById("workspaceStage");
  const phoneShell = document.getElementById("phoneShell");
  const currentScreenKpi = document.getElementById("currentScreenKpi");
  const focusKpi = document.getElementById("focusKpi");
  const zoomKpi = document.getElementById("zoomKpi");
  const sidebarKpi = document.getElementById("sidebarKpi");
  const wfVersion = document.getElementById("wfVersion");
  const packVersion = document.getElementById("packVersion");
  const centerViewBtn = document.getElementById("centerViewBtn");
  const sidebarTabs = [...document.querySelectorAll(".sidebar-tab")];
  const sidebarTreePanel = document.getElementById("sidebarTreePanel");
  const sidebarChangelogPanel = document.getElementById("sidebarChangelogPanel");
  const changelogView = document.getElementById("changelogView");
  const buildPill = document.getElementById("workspaceBuildPill");
  const buildSummary = document.getElementById("workspaceBuildSummary");
  const navBtns = [...document.querySelectorAll(".bottom-nav button")];
  const state = window.WIREFRAMER_UISTATE.create();

  wfVersion.textContent = window.WIREFRAMER_REGISTRY.version;
  packVersion.textContent = window.WIREFRAMER_REGISTRY.packVersion;
  buildPill.textContent = window.WIREFRAMER_REGISTRY.buildLabel;
  buildSummary.textContent = window.WIREFRAMER_REGISTRY.buildSummary;

  function updateFooter() {
    currentScreenKpi.textContent = state.current;
    focusKpi.textContent = state.hintsVisible ? "off" : "on";
    zoomKpi.textContent = `${Math.round(state.zoom * 100)}%`;
    sidebarKpi.textContent = state.sidebarView;
  }

  function applyZoom() {
    window.WIREFRAMER_VIEWPORT.apply(viewportStage, state.zoom);
  }

  function applySidebarView() {
    sidebarTabs.forEach(btn => btn.classList.toggle("active", btn.dataset.sidebarView === state.sidebarView));
    sidebarTreePanel.classList.toggle("hidden", state.sidebarView !== "tree");
    sidebarChangelogPanel.classList.toggle("hidden", state.sidebarView !== "changelog");
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

  function renderChangelog() {
    window.WIREFRAMER_CHANGELOG.render(changelogView);
  }

  function centerView() {
    state.zoom = 1;
    applyZoom();
    workspaceStage.scrollTop = 0;
    workspaceStage.scrollLeft = 0;
    updateFooter();
  }

  function setScreen(screen, push = true) {
    const renderer = LS_SCREENS[screen] || LS_SCREENS.home;
    app.innerHTML = renderer();
    state.current = screen;
    const label = window.WIREFRAMER_REGISTRY.titleMap[screen] || "Wireframe";
    title.textContent = label;
    if (push) state.history.push(screen);
    navBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.nav === screen));
    app.scrollTop = 0;
    wireEvents();
    renderTree();
    renderBreadcrumb();
    renderChangelog();
    applySidebarView();
    applyZoom();
    updateFooter();
  }

  navBtns.forEach(btn => btn.addEventListener("click", () => setScreen(btn.dataset.nav)));
  centerViewBtn.addEventListener("click", centerView);

  workspaceStage.addEventListener("wheel", (e) => {
    const wantsZoom = (e.ctrlKey || e.metaKey) && !phoneShell.contains(e.target);
    if (!wantsZoom) return;
    e.preventDefault();
    state.zoom = window.WIREFRAMER_VIEWPORT.normalize(e.deltaY, state.zoom);
    applyZoom();
    updateFooter();
  }, { passive: false });

  sidebarTabs.forEach(btn => btn.addEventListener("click", () => {
    state.sidebarView = btn.dataset.sidebarView;
    applySidebarView();
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
    focusKpi.textContent = state.hintsVisible ? "off" : "on";
  });

  setScreen("home", false);
})();