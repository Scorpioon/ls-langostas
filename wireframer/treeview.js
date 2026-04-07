window.WIREFRAMER_TREEVIEW = {
  render(treeView, current, onSelect) {
    treeView.innerHTML = window.WIREFRAMER_REGISTRY.tree.map(group => `
      <div class="tree-group">
        <div class="tree-group-label">${group.label}</div>
        ${group.items.map(([id, label, icon]) => `
          <button class="tree-item ${current === id ? "active" : ""}" data-tree-go="${id}">
            <i class="bi bi-${icon}"></i>
            <span>${label}</span>
          </button>
        `).join("")}
      </div>
    `).join("");
    treeView.querySelectorAll("[data-tree-go]").forEach(btn => btn.addEventListener("click", () => onSelect(btn.dataset.treeGo)));
  }
};