(() => {
  const STORAGE_KEY = "wireframer.feedback.v0.0.3c";

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { feedbackVisible: false, globalNote: "", pageNotesByPageId: {} };
      const parsed = JSON.parse(raw);
      return {
        feedbackVisible: !!parsed.feedbackVisible,
        globalNote: typeof parsed.globalNote === "string" ? parsed.globalNote : "",
        pageNotesByPageId: parsed.pageNotesByPageId && typeof parsed.pageNotesByPageId === "object" ? parsed.pageNotesByPageId : {}
      };
    } catch {
      return { feedbackVisible: false, globalNote: "", pageNotesByPageId: {} };
    }
  }

  function saveState(nextState) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    } catch {}
  }

  function ensureShell() {
    let shell = document.getElementById("feedbackShell");
    if (shell) return shell;

    shell = document.createElement("aside");
    shell.id = "feedbackShell";
    shell.className = "feedback-shell";
    shell.innerHTML = `
      <div class="feedback-head">
        <div class="feedback-head-left">
          <div class="feedback-kicker">Feedback / Handoff</div>
          <div class="feedback-title">Kernel baseline</div>
        </div>
        <button id="feedbackCloseBtn" class="feedback-close" aria-label="Close panel">x</button>
      </div>
      <div class="feedback-meta">
        <div class="feedback-meta-line">Project loaded: <strong>LOCALSCENE</strong></div>
        <div class="feedback-meta-line">Current page: <span id="feedbackCurrentScreen" class="feedback-screen-pill"></span></div>
      </div>
      <div class="feedback-body">
        <section class="feedback-card feedback-global">
          <div class="feedback-label">Global note</div>
          <textarea id="feedbackGlobalNote" placeholder="Global project or session notes..."></textarea>
        </section>
        <section class="feedback-card feedback-page">
          <div class="feedback-label">Page note</div>
          <textarea id="feedbackPageNote" placeholder="Notes for the current page..."></textarea>
        </section>
      </div>
    `;
    document.body.appendChild(shell);
    return shell;
  }

  function getCurrentPageId() {
    const fromApp = document.getElementById("app")?.dataset?.pageId;
    if (fromApp) return fromApp;
    const fromKpi = document.getElementById("currentScreenKpi")?.textContent?.trim();
    if (fromKpi) return fromKpi;
    return "unknown";
  }

  function getCurrentScreenLabel() {
    const fromTitle = document.getElementById("screenTitle")?.textContent?.trim();
    if (fromTitle) return fromTitle;
    const fromKpi = document.getElementById("currentScreenKpi")?.textContent?.trim();
    if (fromKpi) return fromKpi;
    return "Unknown page";
  }

  function render(state) {
    const shell = ensureShell();
    const globalInput = document.getElementById("feedbackGlobalNote");
    const pageInput = document.getElementById("feedbackPageNote");
    const pill = document.getElementById("feedbackCurrentScreen");
    const pageId = getCurrentPageId();

    shell.classList.toggle("is-open", !!state.feedbackVisible);
    if (pill) pill.textContent = getCurrentScreenLabel();
    if (globalInput && document.activeElement !== globalInput) globalInput.value = state.globalNote || "";
    if (pageInput && document.activeElement !== pageInput) pageInput.value = state.pageNotesByPageId?.[pageId] || "";

    globalInput?.addEventListener("input", (event) => {
      state.globalNote = event.target.value;
      saveState(state);
    });

    pageInput?.addEventListener("input", (event) => {
      state.pageNotesByPageId[pageId] = event.target.value;
      saveState(state);
    });

    document.getElementById("feedbackCloseBtn")?.addEventListener("click", () => {
      state.feedbackVisible = false;
      saveState(state);
      render(state);
      document.getElementById("toggleFeedbackBtn")?.classList.remove("active");
    }, { once: true });
  }

  window.WIREFRAMER_FEEDBACK = {
    loadState,
    saveState,
    render
  };
})();