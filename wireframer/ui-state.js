window.WIREFRAMER_UISTATE = {
  create() {
    const saved = window.WIREFRAMER_FEEDBACK.loadState();
    return {
      current: "home",
      history: ["home"],
      focusMode: false,
      zoom: 1,
      sidebarView: "route",
      feedbackVisible: !!saved.feedbackVisible,
      globalNote: typeof saved.globalNote === "string" ? saved.globalNote : "",
      pageNotesByPageId: saved.pageNotesByPageId && typeof saved.pageNotesByPageId === "object" ? saved.pageNotesByPageId : {}
    };
  }
};