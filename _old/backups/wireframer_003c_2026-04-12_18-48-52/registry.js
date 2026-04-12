window.WIREFRAMER_REGISTRY = {
  version: "v0.0.2g",
  packVersion: "v0.0.2g",
  buildSummary: "proyecto cargado · v0.0.2g · polish closeout · phase 1 baseline",
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
  routeView: {
    home: [
      { label: "Pantalla actual", items: [["home","Inicio","house",0]] },
      { label: "Caminos abiertos", items: [["discover","Descubrir","compass",1],["activity","Actividad","lightning",1],["saved","Guardado","bookmark",1],["profile","Perfil","person",1]] }
    ],
    discover: [
      { label: "Pantalla actual", items: [["discover","Descubrir","compass",0]] },
      { label: "Caminos abiertos", items: [["collective","Colectivo","people",1],["event","Evento","calendar-event",1],["dj","DJ","disc",1],["artist","Artista","vinyl",1]] }
    ],
    collective: [
      { label: "Pantalla actual", items: [["collective","Colectivo","people",0]] },
      { label: "Caminos abiertos", items: [["event","Evento","calendar-event",1],["dj","DJ","disc",1],["artist","Artista","vinyl",1],["create-event","Crear evento","calendar-plus",2]] }
    ],
    event: [
      { label: "Pantalla actual", items: [["event","Evento","calendar-event",0]] },
      { label: "Caminos abiertos", items: [["collective","Colectivo anfitrión","people",1],["dj","DJ conectado","disc",1],["artist","Artista conectada","vinyl",1],["saved","Guardar","bookmark",1]] }
    ],
    dj: [
      { label: "Pantalla actual", items: [["dj","DJ","disc",0]] },
      { label: "Caminos abiertos", items: [["collective","Colectivo","people",1],["event","Evento","calendar-event",1],["create-set","Añadir set","plus-circle",2]] }
    ],
    artist: [
      { label: "Pantalla actual", items: [["artist","Artista","vinyl",0]] },
      { label: "Caminos abiertos", items: [["collective","Colectivo","people",1],["event","Evento","calendar-event",1],["create-release","Añadir release","plus-square",2]] }
    ],
    activity: [
      { label: "Pantalla actual", items: [["activity","Actividad","lightning",0]] },
      { label: "Caminos abiertos", items: [["event","Evento guardado","calendar-event",1],["dj","DJ","disc",1],["home","Inicio","house",1]] }
    ],
    saved: [
      { label: "Pantalla actual", items: [["saved","Guardado","bookmark",0]] },
      { label: "Caminos abiertos", items: [["event","Evento","calendar-event",1],["collective","Colectivo","people",1],["home","Inicio","house",1]] }
    ],
    profile: [
      { label: "Pantalla actual", items: [["profile","Perfil","person",0]] },
      { label: "Caminos abiertos", items: [["saved","Guardado","bookmark",1],["activity","Actividad","lightning",1],["home","Inicio","house",1]] }
    ],
    "create-event": [
      { label: "Pantalla actual", items: [["create-event","Crear evento","calendar-plus",0]] },
      { label: "Caminos abiertos", items: [["collective","Volver a colectivo","people",1]] }
    ],
    "create-set": [
      { label: "Pantalla actual", items: [["create-set","Añadir set","plus-circle",0]] },
      { label: "Caminos abiertos", items: [["dj","Volver a DJ","disc",1]] }
    ],
    "create-release": [
      { label: "Pantalla actual", items: [["create-release","Añadir release","plus-square",0]] },
      { label: "Caminos abiertos", items: [["artist","Volver a artista","vinyl",1]] }
    ]
  },
  appMapView: [
    { label: "Inicio", items: [["home","Inicio","house",0],["discover","Descubrir","compass",1],["activity","Actividad","lightning",1],["saved","Guardado","bookmark",1],["profile","Perfil","person",1]] },
    { label: "Nodos", items: [["collective","Colectivo","people",0],["event","Evento","calendar-event",1],["dj","DJ","disc",1],["artist","Artista","vinyl",1]] },
    { label: "Creación", items: [["create-event","Crear evento","calendar-plus",0],["create-set","Añadir set","plus-circle",1],["create-release","Añadir release","plus-square",1]] }
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
    summary: "Cierre de la primera fase: identidad clara del tool, navegación auxiliar y limpieza del chrome.",
    blocks: [
      { title: "Cierre de 0.0.2g", items: [
        "COLLAPSE SYSTEMS / WIREFRAMER / proyecto cargado separados correctamente.",
        "Breadcrumb compacta con distinción de pantalla actual.",
        "Ruta actual gana back y home.",
        "Focus revisado y sidebar ocultable de forma clara.",
        "Footer con menos protagonismo y bordes más suaves."
      ]},
      { title: "Comprobaciones", items: [
        "Revisar que no quede mojibake visible en el chrome principal.",
        "Confirmar scroll interno estable del changelog.",
        "Confirmar que Mapa app sigue legible con overflow."
      ]}
    ]
  }
};