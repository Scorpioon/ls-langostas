window.WIREFRAMER_REGISTRY = {
  version: "v0.0.2d",
  packVersion: "v0.0.2d",
  buildLabel: "LOCALSCENE loaded · Wireframer v0.0.2d",
  buildSummary: "proyecto cargado · 0.0.2d rebuild · workspace-first · changelog + viewport",
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
    { label: "Core", items: [["home","Inicio","house","section"],["discover","Descubrir","compass","section"],["activity","Actividad","lightning","section"],["saved","Guardado","bookmark","section"],["profile","Perfil","person","section"]] },
    { label: "Nodos", items: [["collective","Colectivo","people","screen"],["event","Evento","calendar-event","screen"],["dj","DJ","disc","screen"],["artist","Artista","vinyl","screen"]] },
    { label: "Creación", items: [["create-event","Crear evento","calendar-plus","flow"],["create-set","Añadir set","plus-circle","flow"],["create-release","Añadir release","plus-square","flow"]] }
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
    version: "v0.0.2d",
    summary: "Rebuild desde 0.0.2c. Sacamos el ruido del workspace y tratamos el gris como área de trabajo.",
    blocks: [
      { title: "Nuevo en esta versión", items: [
        "Workspace-first: todo el gris vuelve a ser stage útil.",
        "Sidebar doble: Árbol / Changelog.",
        "Top chrome más limpio con build label y breadcrumb arriba.",
        "Footer fija con KPIs siempre visibles."
      ]},
      { title: "Qué mirar", items: [
        "Si el workspace se siente más herramienta y menos página.",
        "Si el breadcrumb ya está en el sitio correcto.",
        "Si el panel derecho ya no invade el área de trabajo."
      ]},
      { title: "Pendiente para 0.0.2e", items: [
        "Jerarquía real del árbol.",
        "Viewport más serio: fit/lock/pan refinados.",
        "Mejor mapping de la arquitectura de app."
      ]}
    ]
  }
};