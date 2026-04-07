window.WIREFRAMER_VIEWPORT = {
  apply(stage, zoom) {
    stage.style.setProperty("--phone-scale", String(zoom));
  },
  normalize(deltaY, currentZoom) {
    const step = deltaY < 0 ? 0.05 : -0.05;
    const next = Math.max(0.5, Math.min(1.75, currentZoom + step));
    return Number(next.toFixed(2));
  }
};