(() => {
  const app = document.getElementById("app");
  const backBtn = document.getElementById("backBtn");
  const title = document.getElementById("screenTitle");
  const routeView = document.getElementById("routeView");
  const mapView = document.getElementById("mapView");
  const homeShortcut = document.getElementById("homeShortcut");
  const toggleHintsBtn = document.getElementById("toggleHintsBtn");
  const toggleFeedbackBtn = document.getElementById("toggleFeedbackBtn");
  const routeBackBtn = document.getElementById("routeBackBtn");
  const routeHomeBtn = document.getElementById("routeHomeBtn");
  const breadcrumbTrail = document.getElementById("breadcrumbTrail");
  const viewportStage = document.getElementById("viewportStage");
  const workspaceStage = document.getElementById("workspaceStage");
  const desktopShell = document.getElementById("desktopShell");
  const currentScreenKpi = document.getElementById("currentScreenKpi");
  const focusKpi = document.getElementById("focusKpi");
  const zoomKpi = document.getElementById("zoomKpi");
  const sidebarKpi = document.getElementById("sidebarKpi");
  const wfVersion = document.getElementById("wfVersion");
  const packVersion = document.getElementById("packVersion");
  const centerViewBtn = document.getElementById("centerViewBtn");
  const sidebarTabs = [...document.querySelectorAll(".sidebar-tab")];
  const sidebarRoutePanel = document.getElementById("sidebarRoutePanel");
  const sidebarMapPanel = document.getElementById("sidebarMapPanel");
  const sidebarChangelogPanel = document.getElementById("sidebarChangelogPanel");
  const changelogView = document.getElementById("changelogView");
  const buildSummary = document.getElementById("workspaceBuildSummary");
  const navBtns = [...document.querySelectorAll(".bottom-nav button")];
  const state = window.WIREFRAMER_UISTATE.create();

  wfVersion.textContent = window.WIREFRAMER_REGISTRY.version;
  packVersion.textContent = window.WIREFRAMER_REGISTRY.packVersion;
  buildSummary.textContent = window.WIREFRAMER_REGISTRY.buildSummary;

  function updateFooter() {
    currentScreenKpi.textContent = state.current;
    focusKpi.textContent = state.focusMode ? "on" : "off";
    zoomKpi.textContent = `${Math.round(state.zoom * 100)}%`;
    sidebarKpi.textContent = state.sidebarView;
  }

  function applyFocusMode() {
    desktopShell.classList.toggle("focus-mode", state.focusMode);
  }

  function applyZoom() {
    window.WIREFRAMER_VIEWPORT.apply(viewportStage, state.zoom);
  }

  function applySidebarView() {
    sidebarTabs.forEach(btn => btn.classList.toggle("active", btn.dataset.sidebarView === state.sidebarView));
    sidebarRoutePanel.classList.toggle("hidden", state.sidebarView !== "route");
    sidebarMapPanel.classList.toggle("hidden", state.sidebarView !== "map");
    sidebarChangelogPanel.classList.toggle("hidden", state.sidebarView !== "changelog");
  }

  function getParentRoute(screen) {
    const routeGroups = window.WIREFRAMER_REGISTRY.routeView[screen] || [];
    for (const group of routeGroups) {
      if (Array.isArray(group.items) && group.items.length > 0) {
        return group.items[0][0];
      }
    }
    return "home";
  }

  function applyPageIdentity(screen) {
    const meta = window.WIREFRAMER_REGISTRY.pageMeta?.[screen] || { pageId: screen, title: "Wireframe" };
    app.dataset.pageId = meta.pageId;
    desktopShell.dataset.currentPageId = meta.pageId;
    title.dataset.pageId = meta.pageId;
  }

  function saveFeedbackState() {
    window.WIREFRAMER_FEEDBACK.saveState({
      feedbackVisible: state.feedbackVisible,
      globalNote: state.globalNote,
      pageNotesByPageId: state.pageNotesByPageId
    });
  }

  function renderFeedback() {
    window.WIREFRAMER_FEEDBACK.render(state);
    toggleFeedbackBtn.classList.toggle("active", !!state.feedbackVisible);
  }

  function wireEvents() {
    document.querySelectorAll("[data-go]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        setScreen(el.dataset.go);
      });
    });
  }

  function renderTrees() {
    const routeGroups = window.WIREFRAMER_REGISTRY.routeView[state.current] || window.WIREFRAMER_REGISTRY.routeView.home;
    const mapGroups = window.WIREFRAMER_REGISTRY.appMapView;
    window.WIREFRAMER_TREEVIEW.render(routeView, routeGroups, state.current, setScreen);
    window.WIREFRAMER_TREEVIEW.render(mapView, mapGroups, state.current, setScreen);
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
    const maxTop = Math.max(0, workspaceStage.scrollHeight - workspaceStage.clientHeight);
    const maxLeft = Math.max(0, workspaceStage.scrollWidth - workspaceStage.clientWidth);
    workspaceStage.scrollTop = maxTop / 2;
    workspaceStage.scrollLeft = maxLeft / 2;
    updateFooter();
  }

  function goBackHistory() {
    if (state.history.length > 1) {
      state.history.pop();
      const prev = state.history.pop() || "home";
      setScreen(prev);
    } else {
      setScreen("home", false);
    }
  }

  function goUpRoute() {
    const parent = getParentRoute(state.current);
    if (parent === state.current) {
      setScreen("home");
      return;
    }
    setScreen(parent);
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
    renderTrees();
    renderBreadcrumb();
    renderChangelog();
    applySidebarView();
    applyFocusMode();
    applyZoom();
    applyPageIdentity(screen);
    renderFeedback();
    updateFooter();
  }

  navBtns.forEach(btn => btn.addEventListener("click", () => setScreen(btn.dataset.nav)));
  centerViewBtn.addEventListener("click", centerView);
  routeBackBtn.addEventListener("click", goUpRoute);
  routeHomeBtn.addEventListener("click", () => setScreen("home"));
  document.getElementById("backBtn")?.addEventListener("click", goBackHistory);

  document.addEventListener("wheel", (e) => {
    const insideTool = desktopShell.contains(e.target);
    const wantsZoom = insideTool && (e.ctrlKey || e.metaKey);
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

  homeShortcut.addEventListener("click", () => setScreen("home"));
  toggleHintsBtn.addEventListener("click", () => {
    state.focusMode = !state.focusMode;
    applyFocusMode();
    updateFooter();
  });

  toggleFeedbackBtn.addEventListener("click", () => {
    state.feedbackVisible = !state.feedbackVisible;
    saveFeedbackState();
    renderFeedback();
  });

  setScreen("home", false);
})();