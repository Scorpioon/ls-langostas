window.WIREFRAMER_REGISTRY = {
  version: "v0.0.2e",
  packVersion: "v0.0.2e",
  buildLabel: "LOCALSCENE loaded · Wireframer v0.0.2e",
  buildSummary: "proyecto cargado · 0.0.2e · árbol sutil · zoom natural · breadcrumb compacta",
  titleMap: {
    home: "Inicio / Portada de ciudad",
    discover: "Descubrir",
    collective: "Perfil colectivo",
    event: "Detalle evento",
    dj: "Perfil DJ",
    artist: "Perfil artista",
    saved: "Guardado",
    activity: "Actividad",
    profile: "Perfil",
    "create-event": "Crear evento",
    "create-set": "Añadir set / mix",
    "create-release": "Añadir release / track"
  },
  tree: [
    { label: "Core", items: [["home","Inicio","house",0],["discover","Descubrir","compass",1],["activity","Actividad","lightning",1],["saved","Guardado","bookmark",1],["profile","Perfil","person",1]] },
    { label: "Nodos", items: [["collective","Colectivo","people",0],["event","Evento","calendar-event",1],["dj","DJ","disc",1],["artist","Artista","vinyl",1]] },
    { label: "Creación", items: [["create-event","Crear evento","calendar-plus",2],["create-set","Añadir set","plus-circle",2],["create-release","Añadir release","plus-square",2]] }
  ],
  breadcrumbs: {
    home: ["home"],
    discover: ["home","discover"],
    collective: ["home","collective"],
    event: ["home","collective","event"],
    dj: ["home","collective","dj"],
    artist: ["home","collective","artist"],
    saved: ["home","saved"],
    activity: ["home","activity"],
    profile: ["home","profile"],
    "create-event": ["home","collective","create-event"],
    "create-set": ["home","dj","create-set"],
    "create-release": ["home","artist","create-release"]
  },
  changelog: {
    version: "v0.0.2e",
    summary: "Compactamos el chrome y hacemos el árbol más útil sin comerse espacio.",
    blocks: [
      { title: "Nuevo en esta versión", items: [
        "Se elimina el panel visible de zoom: ahora el zoom es natural con Ctrl/Cmd + rueda fuera del móvil.",
        "Un único botón centra y devuelve el viewport a 100%.",
        "Árbol más sutil con indentación real e iconos, sin puntos ni líneas raras.",
        "Breadcrumb compacta en una sola línea."
      ]},
      { title: "Qué mirar", items: [
        "Si el árbol ya se lee más como arquitectura.",
        "Si la breadcrumb ocupa menos y sigue siendo útil.",
        "Si el zoom natural se siente mejor que botones persistentes."
      ]},
      { title: "Pendiente después", items: [
        "Refinar aún más jerarquía real del árbol.",
        "Más inteligencia de mapeo entre pantallas y subpantallas.",
        "Viewport avanzado solo si de verdad hace falta."
      ]}
    ]
  }
};