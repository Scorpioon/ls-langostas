window.WIREFRAMER_VIEWPORT = {
  apply(stage, zoom) {
    stage.style.setProperty("--phone-scale", String(zoom));
  },
  fitCenter(stage) {
    stage.style.setProperty("--phone-scale", "1");
  }
};