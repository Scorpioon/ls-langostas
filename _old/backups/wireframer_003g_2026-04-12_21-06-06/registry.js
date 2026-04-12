window.WIREFRAMER_REGISTRY = {
  pageMeta: {
    home: { pageId: "home", label: "Home", title: "Inicio / Portada de ciudad" },
    discover: { pageId: "discover", label: "Discover", title: "Descubrir" },
    collective: { pageId: "collective", label: "Collective", title: "Perfil colectivo" },
    event: { pageId: "event", label: "Event", title: "Detalle evento" },
    dj: { pageId: "dj", label: "DJ", title: "Perfil DJ" },
    artist: { pageId: "artist", label: "Artist", title: "Perfil artista" },
    saved: { pageId: "saved", label: "Saved", title: "Guardado" },
    activity: { pageId: "activity", label: "Activity", title: "Actividad" },
    profile: { pageId: "profile", label: "Profile", title: "Perfil" },
    "create-event": { pageId: "create-event", label: "Create event", title: "Crear evento" },
    "create-set": { pageId: "create-set", label: "Create set", title: "Anadir set / mix" },
    "create-release": { pageId: "create-release", label: "Create release", title: "Anadir release / track" }
  },
  version: "v0.0.3f",
  packVersion: "v0.0.3f",
  buildSummary: "project loaded - v0.0.3f - navigation truth pass + visible bump discipline",
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
    "create-set": "Anadir set / mix",
    "create-release": "Anadir release / track"
  },
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
  openPathsView: {
    home: [
      { label: "OPEN PATHS", items: [["discover","Descubrir","compass",0],["activity","Actividad","lightning",0],["saved","Guardado","bookmark",0],["profile","Perfil","person",0]] }
    ],
    discover: [
      { label: "OPEN PATHS", items: [["collective","Colectivo","people",0],["event","Evento","calendar-event",0],["dj","DJ","disc",0],["artist","Artista","vinyl",0]] }
    ],
    collective: [
      { label: "OPEN PATHS", items: [["event","Evento","calendar-event",0],["dj","DJ","disc",0],["artist","Artista","vinyl",0],["create-event","Crear evento","calendar-plus",1]] }
    ],
    event: [
      { label: "OPEN PATHS", items: [["collective","Colectivo anfitrion","people",0],["dj","DJ conectado","disc",0],["artist","Artista conectada","vinyl",0],["saved","Guardar","bookmark",0]] }
    ],
    dj: [
      { label: "OPEN PATHS", items: [["collective","Colectivo","people",0],["event","Evento","calendar-event",0],["create-set","Anadir set","plus-circle",1]] }
    ],
    artist: [
      { label: "OPEN PATHS", items: [["collective","Colectivo","people",0],["event","Evento","calendar-event",0],["create-release","Anadir release","plus-square",1]] }
    ],
    activity: [
      { label: "OPEN PATHS", items: [["event","Evento guardado","calendar-event",0],["dj","DJ","disc",0],["home","Inicio","house",0]] }
    ],
    saved: [
      { label: "OPEN PATHS", items: [["event","Evento","calendar-event",0],["collective","Colectivo","people",0],["home","Inicio","house",0]] }
    ],
    profile: [
      { label: "OPEN PATHS", items: [["saved","Guardado","bookmark",0],["activity","Actividad","lightning",0],["home","Inicio","house",0]] }
    ],
    "create-event": [
      { label: "OPEN PATHS", items: [["collective","Volver a colectivo","people",0]] }
    ],
    "create-set": [
      { label: "OPEN PATHS", items: [["dj","Volver a DJ","disc",0]] }
    ],
    "create-release": [
      { label: "OPEN PATHS", items: [["artist","Volver a artista","vinyl",0]] }
    ]
  },
  routeView: {
    home: [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0]] }
    ],
    discover: [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["discover","Descubrir","compass",1]] }
    ],
    collective: [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["collective","Colectivo","people",1]] }
    ],
    event: [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["collective","Colectivo","people",1],["event","Evento","calendar-event",2]] }
    ],
    dj: [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["collective","Colectivo","people",1],["dj","DJ","disc",2]] }
    ],
    artist: [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["collective","Colectivo","people",1],["artist","Artista","vinyl",2]] }
    ],
    saved: [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["saved","Guardado","bookmark",1]] }
    ],
    activity: [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["activity","Actividad","lightning",1]] }
    ],
    profile: [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["profile","Perfil","person",1]] }
    ],
    "create-event": [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["collective","Colectivo","people",1],["create-event","Crear evento","calendar-plus",2]] }
    ],
    "create-set": [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["dj","DJ","disc",1],["create-set","Anadir set","plus-circle",2]] }
    ],
    "create-release": [
      { label: "ROUTE CURRENT", items: [["home","Inicio","house",0],["artist","Artista","vinyl",1],["create-release","Anadir release","plus-square",2]] }
    ]
  },
  appMapView: [
    { label: "Inicio", items: [["home","Inicio","house",0],["discover","Descubrir","compass",1],["activity","Actividad","lightning",1],["saved","Guardado","bookmark",1],["profile","Perfil","person",1]] },
    { label: "Escena", items: [["collective","Colectivo","people",0],["event","Evento","calendar-event",1],["dj","DJ","disc",1],["artist","Artista","vinyl",1]] },
    { label: "Creacion", items: [["create-event","Crear evento","calendar-plus",0],["create-set","Anadir set","plus-circle",0],["create-release","Anadir release","plus-square",0]] }
  ],
  changelog: {
    summary: "Navigation truth pass: route current, open paths and app map now tell different but coherent truths.",
    blocks: [
      { title: "Closeout v0.0.3f", items: [
        "Visible version bump synced across title, summary, footer and registry.",
        "Route current now reflects structural hierarchy instead of available actions.",
        "Open paths remain visible but are separated from route current.",
        "Route-up shares the same breadcrumb truth as route current.",
        "App map reviewed to align better with the loaded project structure."
      ]},
      { title: "Checks", items: [
        "Verify route current remains stable while open paths vary by screen.",
        "Verify route-up goes to breadcrumb parent.",
        "Verify footer WF and PACK no longer show old versions."
      ]}
    ]
  }
};