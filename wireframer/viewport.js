window.WIREFRAMER_VIEWPORT = {
  apply(stage, zoom) {
    stage.style.setProperty("--phone-scale", String(zoom));
  }
};