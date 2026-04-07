window.WIREFRAMER_TREEVIEW = {
  render(treeView, groups, current, onSelect) {
    treeView.innerHTML = groups.map(group => `
      <div class="tree-group">
        <div class="tree-group-label">${group.label}</div>
        ${group.items.map(([id, label, icon, level]) => `
          <button class="tree-item level-${level || 0} ${current === id ? "active" : ""}" data-tree-go="${id}">
            <span class="tree-icon"><i class="bi bi-${icon}"></i></span>
            <span class="tree-label-text">${label}</span>
          </button>
        `).join("")}
      </div>
    `).join("");
    treeView.querySelectorAll("[data-tree-go]").forEach(btn => btn.addEventListener("click", () => onSelect(btn.dataset.treeGo)));
  }
};