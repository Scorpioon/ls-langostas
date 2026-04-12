(() => {
  const STORAGE_KEY = "wireframer.feedback.v0.0.3a";
  const DEFAULT_STATE = {
    isOpen: false,
    globalNote: "",
    pageNotesByKey: {}
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(raw);
      return {
        isOpen: !!parsed.isOpen,
        globalNote: typeof parsed.globalNote === "string" ? parsed.globalNote : "",
        pageNotesByKey: parsed.pageNotesByKey && typeof parsed.pageNotesByKey === "object" ? parsed.pageNotesByKey : {}
      };
    } catch {
      return { ...DEFAULT_STATE };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }

  function getCurrentScreenKey() {
    const fromKpi = document.getElementById("currentScreenKpi")?.textContent?.trim();
    if (fromKpi) return fromKpi.toLowerCase();
    const fromTitle = document.getElementById("screenTitle")?.textContent?.trim();
    if (fromTitle) return fromTitle.toLowerCase().replace(/\s+/g, "_");
    return "unknown";
  }

  function getCurrentScreenLabel() {
    const fromTitle = document.getElementById("screenTitle")?.textContent?.trim();
    if (fromTitle) return fromTitle;
    const fromKpi = document.getElementById("currentScreenKpi")?.textContent?.trim();
    if (fromKpi) return fromKpi;
    return "Pantalla no detectada";
  }

  function createShell() {
    const shell = document.createElement("aside");
    shell.id = "feedbackShell";
    shell.className = "feedback-shell";
    shell.innerHTML = `
      <div class="feedback-head">
        <div class="feedback-head-left">
          <div class="feedback-kicker">Feedback / Handoff</div>
          <div class="feedback-title">Kernel baseline</div>
        </div>
        <button id="feedbackCloseBtn" class="feedback-close" aria-label="Cerrar panel">Ã—</button>
      </div>
      <div class="feedback-meta">
        <div class="feedback-meta-line">Proyecto cargado: <strong>LOCALSCENE</strong></div>
        <div class="feedback-meta-line">Pantalla actual: <span id="feedbackCurrentScreen" class="feedback-screen-pill"></span></div>
      </div>
      <div class="feedback-body">
        <section class="feedback-card feedback-global">
          <div class="feedback-label">Global note</div>
          <textarea id="feedbackGlobalNote" placeholder="Apuntes globales del proyecto o de la sesiÃ³n..."></textarea>
        </section>
        <section class="feedback-card feedback-page">
          <div class="feedback-label">Page note</div>
          <textarea id="feedbackPageNote" placeholder="Feedback de la pÃ¡gina actual..."></textarea>
        </section>
      </div>
    `;
    document.body.appendChild(shell);
    return shell;
  }

  function setOpen(nextOpen) {
    state.isOpen = !!nextOpen;
    shell.classList.toggle("is-open", state.isOpen);
    document.querySelector(".desktop-shell")?.classList.toggle("has-feedback-open", state.isOpen);
    toggleButton?.classList.toggle("active", state.isOpen);
    saveState();
  }

  function renderMeta() {
    const label = getCurrentScreenLabel();
    const pill = document.getElementById("feedbackCurrentScreen");
    if (pill) pill.textContent = label;
  }

  function renderNotes() {
    const globalInput = document.getElementById("feedbackGlobalNote");
    const pageInput = document.getElementById("feedbackPageNote");
    if (!globalInput || !pageInput) return;

    if (document.activeElement !== globalInput) {
      globalInput.value = state.globalNote;
    }

    const key = getCurrentScreenKey();
    const note = state.pageNotesByKey[key] || "";
    if (document.activeElement !== pageInput) {
      pageInput.value = note;
    }

    renderMeta();
  }

  function bindInputs() {
    const globalInput = document.getElementById("feedbackGlobalNote");
    const pageInput = document.getElementById("feedbackPageNote");
    if (!globalInput || !pageInput) return;

    globalInput.addEventListener("input", (event) => {
      state.globalNote = event.target.value;
      saveState();
    });

    pageInput.addEventListener("input", (event) => {
      const key = getCurrentScreenKey();
      state.pageNotesByKey[key] = event.target.value;
      saveState();
    });
  }

  function bindButtons() {
    toggleButton?.addEventListener("click", () => setOpen(!state.isOpen));
    document.getElementById("feedbackCloseBtn")?.addEventListener("click", () => setOpen(false));
  }

  function watchScreenChanges() {
    const targets = [
      document.getElementById("currentScreenKpi"),
      document.getElementById("screenTitle"),
      document.getElementById("app")
    ].filter(Boolean);

    const observer = new MutationObserver(() => {
      renderNotes();
    });

    targets.forEach((node) => {
      observer.observe(node, {
        childList: true,
        characterData: true,
        subtree: true
      });
    });
  }

  const state = loadState();
  const toggleButton = document.getElementById("toggleFeedbackBtn");
  const shell = createShell();

  bindInputs();
  bindButtons();
  watchScreenChanges();
  renderNotes();
  setOpen(state.isOpen);
})();