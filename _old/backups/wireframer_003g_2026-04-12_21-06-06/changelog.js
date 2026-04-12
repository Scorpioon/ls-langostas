window.WIREFRAMER_CHANGELOG = {
  render(container) {
    const data = window.WIREFRAMER_REGISTRY.changelog;
    container.innerHTML = `
      <div class="changelog-summary">${data.summary}</div>
      ${data.blocks.map(block => `
        <div class="changelog-block">
          <div class="changelog-block-title">${block.title}</div>
          <ul class="changelog-list">${block.items.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
      `).join("")}
    `;
  }
};