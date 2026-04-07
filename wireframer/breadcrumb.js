window.WIREFRAMER_BREADCRUMB = {
  render(container, current, onSelect) {
    const registry = window.WIREFRAMER_REGISTRY;
    const steps = registry.breadcrumbs[current] || ["home"];
    container.innerHTML = steps.map((id, idx) => {
      const label = registry.titleMap[id] || id;
      return `<button class="crumb-btn" data-crumb-go="${id}">${label}</button>${idx < steps.length - 1 ? '<span class="crumb-sep">/</span>' : ''}`;
    }).join("");
    container.querySelectorAll("[data-crumb-go]").forEach(btn => btn.addEventListener("click", () => onSelect(btn.dataset.crumbGo)));
  }
};