window.WIREFRAMER_REGISTRY = {
  version: "v0.0.2f",
  packVersion: "v0.0.2f",
  buildSummary: "proyecto cargado Â· v0.0.2f Â· ruta actual + mapa app Â· zoom natural",
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
    "create-set": "AÃ±adir set / mix",
    "create-release": "AÃ±adir release / track"
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
      { label: "Caminos abiertos", items: [["collective","Colectivo anfitriÃ³n","people",1],["dj","DJ conectado","disc",1],["artist","Artista conectado","vinyl",1],["saved","Guardar","bookmark",1]] }
    ],
    dj: [
      { label: "Pantalla actual", items: [["dj","DJ","disc",0]] },
      { label: "Caminos abiertos", items: [["collective","Colectivo","people",1],["event","Evento","calendar-event",1],["create-set","AÃ±adir set","plus-circle",2]] }
    ],
    artist: [
      { label: "Pantalla actual", items: [["artist","Artista","vinyl",0]] },
      { label: "Caminos abiertos", items: [["collective","Colectivo","people",1],["event","Evento","calendar-event",1],["create-release","AÃ±adir release","plus-square",2]] }
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
      { label: "Pantalla actual", items: [["create-set","AÃ±adir set","plus-circle",0]] },
      { label: "Caminos abiertos", items: [["dj","Volver a DJ","disc",1]] }
    ],
    "create-release": [
      { label: "Pantalla actual", items: [["create-release","AÃ±adir release","plus-square",0]] },
      { label: "Caminos abiertos", items: [["artist","Volver a artista","vinyl",1]] }
    ]
  },
  appMapView: [
    { label: "Core", items: [["home","Inicio","house",0],["discover","Descubrir","compass",1],["activity","Actividad","lightning",1],["saved","Guardado","bookmark",1],["profile","Perfil","person",1]] },
    { label: "Nodos", items: [["collective","Colectivo","people",0],["event","Evento","calendar-event",1],["dj","DJ","disc",1],["artist","Artista","vinyl",1]] },
    { label: "CreaciÃ³n", items: [["create-event","Crear evento","calendar-plus",0],["create-set","AÃ±adir set","plus-circle",1],["create-release","AÃ±adir release","plus-square",1]] }
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
    summary: "El panel izquierdo ya no intenta ser una lista universal: separa ruta actual y mapa app.",
    blocks: [
      { title: "Nuevo en esta versiÃ³n", items: [
        "Ruta actual: muestra solo caminos abiertos para el usuario desde la pantalla actual.",
        "Mapa app: muestra la arquitectura global en una vista separada.",
        "Ctrl/Cmd + rueda hace zoom en cualquier parte del tool, tambiÃ©n encima del mÃ³vil.",
        "Breadcrumb compacta flotando bajo la barra superior.",
        "Focus ahora sÃ­ oculta la sidebar para dejar el stage limpio."
      ]},
      { title: "QuÃ© mirar", items: [
        "Si Ruta actual y Mapa app resuelven mejor la confusiÃ³n anterior.",
        "Si el zoom natural ya no dispara el zoom del navegador.",
        "Si el footer ahora roba menos protagonismo."
      ]},
      { title: "Pendiente", items: [
        "Refinar aÃºn mÃ¡s el modelo de rutas disponibles por pantalla.",
        "Ajustar sistema tipogrÃ¡fico global con mÃ¡s precisiÃ³n.",
        "Seguir bajando peso visual de chrome si hace falta."
      ]}
    ]
  }
};