window.WIREFRAMER_REGISTRY = {
  version: "v0.0.2c",
  packVersion: "v0.0.2c",
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
    { label: "Core", items: [["home","Inicio","house"],["discover","Descubrir","compass"],["activity","Actividad","lightning"],["saved","Guardado","bookmark"],["profile","Perfil","person"]] },
    { label: "Nodos", items: [["collective","Colectivo","people"],["event","Evento","calendar-event"],["dj","DJ","disc"],["artist","Artista","vinyl"]] },
    { label: "Creación", items: [["create-event","Crear evento","calendar-plus"],["create-set","Añadir set","plus-circle"],["create-release","Añadir release","plus-square"]] }
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
  }
};