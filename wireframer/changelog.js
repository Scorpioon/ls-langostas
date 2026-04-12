window.WIREFRAMER_CHANGELOG = {
  render(root) {
    root.innerHTML = `
      <div class="notes-card">
        <div class="notes-kicker">CHANGELOG</div>
        <p>Cierre del kernel inicial con persistencia por pagina corregida y semantica de ruta mas clara.</p>
      </div>
      <div class="notes-card">
        <div class="notes-kicker">CLOSEOUT v0.0.3d</div>
        <ul>
          <li>Version visible sincronizada a v0.0.3d.</li>
          <li>Page note persiste por pageId estable.</li>
          <li>Ruta actual cambia a subir un nivel, no back history.</li>
          <li>Feedback kernel mantiene global note y page note.</li>
        </ul>
      </div>
      <div class="notes-card">
        <div class="notes-kicker">CHECKS</div>
        <ul>
          <li>Verificar global note persistente.</li>
          <li>Verificar page note diferente por pantalla.</li>
          <li>Verificar icono y accion de subir nivel en ruta actual.</li>
        </ul>
      </div>
    `.trim();
  }
};