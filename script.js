/* ============================================================
   AGENDA GENERAL – Eventos globales del festival
   ============================================================ */

const events = [
  // Recepción
  {
    time: "09:00",
    title: "Stand permanente",
    venue: "Recepción",
    type: "general",
    description: "Bienvenida, ingreso y orientación general."
  },
  {
    time: "13:00",
    title: "Cierre del evento",
    venue: "Recepción",
    type: "general",
    description: "Agradecimientos y despedida formal."
  },

  // Salón 1 – Talleres de baile (según tabla)
  {
    time: "09:00",
    title: 'Angie Nitola · "Taller de danza"',
    venue: "Salón 1 · Talleres de baile",
    type: "danza"
  },
  {
    time: "09:30",
    title: 'Laura Díaz · "Taller de danza"',
    venue: "Salón 1 · Talleres de baile",
    type: "danza"
  },
  {
    time: "10:00",
    title: 'Laura Sánchez · "Demostración Juego de cartas Musicala"',
    venue: "Salón 1 · Talleres de baile",
    type: "juego de mesa"
  },
  {
    time: "10:30",
    title: 'Laura Díaz · "Taller de danza"',
    venue: "Salón 1 · Talleres de baile",
    type: "danza"
  },
  {
    time: "11:00",
    title: 'Angie Nitola · "Taller de danza"',
    venue: "Salón 1 · Talleres de baile",
    type: "danza"
  },
  {
    time: "11:30",
    title: 'Laura Díaz · "Taller de danza"',
    venue: "Salón 1 · Talleres de baile",
    type: "danza"
  },
  {
    time: "12:00",
    title: 'Angie Nitola · "Taller de danza"',
    venue: "Salón 1 · Talleres de baile",
    type: "danza"
  },
  {
    time: "12:30",
    title: 'Laura Díaz · "Taller de danza"',
    venue: "Salón 1 · Talleres de baile",
    type: "danza"
  },
  {
    time: "13:00",
    title: "Cierre del evento",
    venue: "Salón 1 · Talleres de baile",
    type: "general"
  },

  // Salón 2 – Artes plásticas y Galería (según tabla)
  {
    time: "09:00",
    title: 'Laura Sánchez · "Taller de artes plásticas"',
    venue: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "artes"
  },
  {
    time: "09:30",
    title: 'Emily Bejarano · "Demostración Juego de cartas Musicala"',
    venue: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "juego de mesa"
  },
  {
    time: "10:00",
    title: 'Laura Díaz · "Taller de artes plásticas"',
    venue: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "artes"
  },
  {
    time: "10:30",
    title: 'Angie Nitola · "Taller de artes plásticas"',
    venue: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "artes"
  },
  {
    time: "11:00",
    title: 'Laura Díaz · "Demostración Juego de cartas Musicala"',
    venue: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "juego de mesa"
  },
  {
    time: "11:30",
    title: 'Angie Nitola · "Taller de artes plásticas"',
    venue: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "artes"
  },
  {
    time: "12:00",
    title: 'Laura Díaz · "Taller de artes plásticas"',
    venue: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "artes"
  },
  {
    time: "12:30",
    title: 'Angie Nitola · "Taller de artes plásticas"',
    venue: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "artes"
  },
  {
    time: "13:00",
    title: "Cierre del evento",
    venue: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "general"
  },

  // 🔥 SALÓN 3 – BLOQUES (con nombres de bloques A, B y C)
  {
    time: "09:30",
    title: "Bloque A · Apertura",
    venue: "Salón 3 · Muestras de proceso",
    type: "general",
    description:
      "Bloque A: Juan Martín Patiño; Alana Teuta Munevar; Fátima Celeste Torres; Juan Martín Patiño; Juan Martín Patiño."
  },
  {
    time: "10:30",
    title: "Bloque B · Central",
    venue: "Salón 3 · Muestras de proceso",
    type: "general",
    description:
      "Bloque B: Luciana Vacca; María Gabriela Rojas; Cristopher Quintero; Laura Valentina Caro; Julieta Rendón; Daniel León."
  },
  {
    time: "11:30",
    title: "Bloque C · Final",
    venue: "Salón 3 · Muestras de proceso",
    type: "general",
    description:
      "Bloque C: Daniel León; Nataly Yulixa Caro; Cristopherson Martinez; Aline Lamare; Eduardo Rendón."
  },

  // Salón 4 – Conversatorios
  {
    time: "10:00",
    title: "Alek Caballero",
    venue: "Salón 4 · Habla con tu profe Alek y Catalina",
    type: "general"
  },
  {
    time: "10:30",
    title: "Angie Nitola",
    venue: "Salón 4 · Habla con tu profe Alek y Catalina",
    type: "general"
  },
  {
    time: "11:00",
    title: "Alek Caballero",
    venue: "Salón 4 · Habla con tu profe Alek y Catalina",
    type: "general"
  },

  // Salón 5 – Conversatorios
  {
    time: "10:30",
    title: "Laura Sánchez",
    venue: "Salón 5 · Habla con tu profe Natalia y Laura",
    type: "general"
  },
  {
    time: "11:00",
    title: "Emily Bejarano",
    venue: "Salón 5 · Habla con tu profe Natalia y Laura",
    type: "general"
  },

  // Salón 6 – Conversatorios
  {
    time: "10:00",
    title: "Angie Nitola",
    venue: "Salón 6 · Habla con tu profe Angie y Emily",
    type: "general"
  },
  {
    time: "10:30",
    title: "Angie Nitola",
    venue: "Salón 6 · Habla con tu profe Angie y Emily",
    type: "general"
  },
  {
    time: "11:00",
    title: "Emily Bejarano",
    venue: "Salón 6 · Habla con tu profe Angie y Emily",
    type: "general"
  },

  // Cafetería
  {
    time: "09:00",
    title: "Cata de Café y Snacks",
    venue: "Cafetería",
    type: "general"
  },

  // Corazón Peludito (FUNDACIONES)
  {
    time: "09:00",
    title: "Stand permanente",
    venue: "Salón 7 · Corazón Peludito",
    type: "fundaciones"
  },

  // Juegos de mesa
  {
    time: "09:00",
    title: "Stand permanente",
    venue: "Salón 8 · Juegos de mesa",
    type: "juegos"
  },

  // Música
  {
    time: "09:00",
    title: "Stand permanente",
    venue: "Salón 9 · Talleres de música",
    type: "música"
  },

  // AMESE (FUNDACIONES)
  {
    time: "09:00",
    title: "Stand permanente",
    venue: "Salón 10 · AMESE",
    type: "fundaciones"
  }
];

/* ============================================================
   SALONES – Información completa de cada espacio
   ============================================================ */

const salones = [
  {
    id: "recepcion",
    name: "Recepción",
    type: "General",
    icon: "🎟️",
    capacity: "0",
    staff: "Max Medina, María Fernanda Leal",
    description: "Ingreso, bienvenida y orientación del Musicala Fest.",
    schedule: [
      { time: "09:00–13:00", title: "Stand permanente", detail: "Ingreso y bienvenida." },
      { time: "13:00", title: "Cierre del evento" }
    ]
  },

  {
    id: "salon1",
    name: "Salón 1 · Talleres de baile",
    type: "Danza",
    icon: "💃",
    capacity: "8",
    staff: "Angie Nitola, Laura Díaz, Laura Sánchez",
    description: "Talleres de baile, movimiento y expresión corporal.",
    schedule: [
      { time: "09:00", title: 'Angie Nitola · "Taller de danza"' },
      { time: "09:30", title: 'Laura Díaz · "Taller de danza"' },
      { time: "10:00", title: 'Laura Sánchez · "Demostración Juego de cartas Musicala"' },
      { time: "10:30", title: 'Laura Díaz · "Taller de danza"' },
      { time: "11:00", title: 'Angie Nitola · "Taller de danza"' },
      { time: "11:30", title: 'Laura Díaz · "Taller de danza"' },
      { time: "12:00", title: 'Angie Nitola · "Taller de danza"' },
      { time: "12:30", title: 'Laura Díaz · "Taller de danza"' },
      { time: "13:00", title: "Cierre del evento" }
    ]
  },

  {
    id: "salon2",
    name: "Salón 2 · Talleres de artes plásticas y Galería",
    type: "Artes plásticas",
    icon: "🎨",
    capacity: "8",
    staff: "Laura Sánchez, Laura Díaz, Angie Nitola, Emily Bejarano",
    description: "Talleres creativos y galería de arte estudiantil.",
    schedule: [
      { time: "09:00", title: 'Laura Sánchez · "Taller de artes plásticas"' },
      { time: "09:30", title: 'Emily Bejarano · "Demostración Juego de cartas Musicala"' },
      { time: "10:00", title: 'Laura Díaz · "Taller de artes plásticas"' },
      { time: "10:30", title: 'Angie Nitola · "Taller de artes plásticas"' },
      { time: "11:00", title: 'Laura Díaz · "Demostración Juego de cartas Musicala"' },
      { time: "11:30", title: 'Angie Nitola · "Taller de artes plásticas"' },
      { time: "12:00", title: 'Laura Díaz · "Taller de artes plásticas"' },
      { time: "12:30", title: 'Angie Nitola · "Taller de artes plásticas"' },
      { time: "13:00", title: "Cierre del evento" }
    ]
  },

  {
    id: "salon3",
    name: "Salón 3 · Muestras de proceso",
    type: "General",
    icon: "🖼️",
    capacity: "20",
    staff: "Todos",
    description: "Presentaciones artísticas agrupadas en bloques.",
    schedule: [
      {
        time: "09:30",
        title: "Bloque A · Apertura",
        detail:
          "Juan Martín Patiño; Alana Teuta Munevar; Fátima Celeste Torres; Juan Martín Patiño; Juan Martín Patiño."
      },
      {
        time: "10:30",
        title: "Bloque B · Central",
        detail:
          "Luciana Vacca; María Gabriela Rojas; Cristopher Quintero; Laura Valentina Caro; Julieta Rendón; Daniel León."
      },
      {
        time: "11:30",
        title: "Bloque C · Final",
        detail:
          "Daniel León; Nataly Yulixa Caro; Cristopherson Martinez; Aline Lamare; Eduardo Rendón."
      }
    ]
  },

  {
    id: "salon4",
    name: "Salón 4 · Habla con tu profe Alek y Catalina",
    type: "General",
    icon: "💬",
    capacity: "6",
    staff: "Alek Caballero, Catalina Medina",
    description: "Espacio de conversación y retroalimentación.",
    schedule: [
      { time: "10:00", title: "Alek Caballero" },
      { time: "10:30", title: "Angie Nitola" },
      { time: "11:00", title: "Alek Caballero" }
    ]
  },

  {
    id: "salon5",
    name: "Salón 5 · Habla con tu profe Natalia y Laura",
    type: "General",
    icon: "👥",
    capacity: "4",
    staff: "Natalia Alarcón, Laura Sánchez",
    description: "Espacio para conversar con las docentes.",
    schedule: [
      { time: "10:30", title: "Laura Sánchez" },
      { time: "11:00", title: "Emily Bejarano" }
    ]
  },

  {
    id: "salon6",
    name: "Salón 6 · Habla con tu profe Angie y Emily",
    type: "General",
    icon: "🗣️",
    capacity: "6",
    staff: "Angie Nitola, Emily Bejarano",
    description: "Conversaciones individuales y orientación.",
    schedule: [
      { time: "10:00", title: "Angie Nitola" },
      { time: "10:30", title: "Angie Nitola" },
      { time: "11:00", title: "Emily Bejarano" }
    ]
  },

  {
    id: "cafeteria",
    name: "Cafetería · Cata de Café y Snacks",
    type: "General",
    icon: "☕",
    capacity: "6",
    staff: "Equipo Cata de Café",
    description: "Zona de descanso con bebidas y snacks.",
    schedule: [{ time: "09:00", title: "Apertura de cafetería" }]
  },

  {
    id: "salon7",
    name: "Salón 7 · Corazón Peludito",
    type: "Fundaciones",
    icon: "🐾",
    capacity: "6",
    staff: "Corazón Peludito",
    description: "Adopciones, bienestar animal y más.",
    schedule: [{ time: "09:00", title: "Stand permanente" }]
  },

  {
    id: "salon8",
    name: "Salón 8 · Juegos de mesa",
    type: "Juegos",
    icon: "🎲",
    capacity: "16",
    staff: "Son Geniales",
    description: "Zona de juegos guiados para toda la familia.",
    schedule: [{ time: "09:00", title: "Stand permanente" }]
  },

  {
    id: "salon9",
    name: "Salón 9 · Talleres de música",
    type: "Música",
    icon: "🎶",
    capacity: "8",
    staff: "Laura Sánchez, Natalia Alarcón",
    description: "Exploración instrumental y práctica musical.",
    schedule: [{ time: "09:00", title: "Stand permanente" }]
  },

  {
    id: "salon10",
    name: "Salón 10 · AMESE",
    type: "Fundaciones",
    icon: "🤝",
    capacity: "6",
    staff: "AMESE",
    description: "Charlas y sensibilización.",
    schedule: [{ time: "09:00", title: "Stand permanente" }]
  }
];

/* ============================================================
   FUNCIONES DE RENDER Y LÓGICA DE INTERACCIÓN
   ============================================================ */

function init() {
  renderTimeline("all");
  renderSalones();
  setupFilters();
  setupHeroButtons();
}

function renderTimeline(filter) {
  const container = document.getElementById("timeline-list");
  container.innerHTML = "";

  const sorted = [...events].sort((a, b) => (a.time > b.time ? 1 : -1));

  sorted.forEach(ev => {
    if (filter !== "all" && ev.type !== filter) return;

    const item = document.createElement("div");
    item.className = "timeline-item";

    const time = document.createElement("div");
    time.className = "timeline-time";
    time.textContent = ev.time;

    const main = document.createElement("div");
    const title = document.createElement("div");
    title.className = "timeline-main-title";
    title.textContent = ev.title;

    const meta = document.createElement("div");
    meta.className = "timeline-meta";
    meta.textContent = ev.venue;

    const desc = document.createElement("div");
    desc.className = "timeline-meta";
    desc.textContent = ev.description;

    main.appendChild(title);
    main.appendChild(meta);
    if (ev.description) main.appendChild(desc);

    item.appendChild(time);
    item.appendChild(main);

    container.appendChild(item);
  });
}

function renderSalones() {
  const grid = document.getElementById("salon-grid");
  grid.innerHTML = "";

  salones.forEach(salon => {
    const card = document.createElement("div");
    card.className = "salon-card";
    card.dataset.salonId = salon.id;

    const name = document.createElement("div");
    name.className = "salon-name";
    name.textContent = `${salon.icon} ${salon.name}`;

    const type = document.createElement("div");
    type.className = "salon-type";
    type.textContent = salon.type;

    const cap = document.createElement("div");
    cap.className = "salon-meta-small";
    cap.textContent = `Capacidad: ${salon.capacity}`;

    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(cap);

    card.addEventListener("click", () => {
      selectSalon(salon.id);
      document
        .getElementById("salon-detail")
        .scrollIntoView({ behavior: "smooth" });
    });

    grid.appendChild(card);
  });

  // salón inicial por defecto
  selectSalon("recepcion");
}

function selectSalon(id) {
  const salon = salones.find(s => s.id === id);
  if (!salon) return;

  document.querySelectorAll(".salon-card").forEach(card => {
    card.classList.toggle("salon-card-active", card.dataset.salonId === id);
  });

  document.getElementById("salon-detail-name").textContent = salon.name;
  document.getElementById("salon-detail-description").textContent =
    salon.description;
  document.getElementById("salon-detail-extra").textContent =
    `Capacidad: ${salon.capacity} · Staff: ${salon.staff}`;

  const scheduleEl = document.getElementById("salon-detail-schedule");
  scheduleEl.innerHTML = "";

  salon.schedule.forEach(item => {
    const row = document.createElement("div");
    row.className = "salon-detail-item";

    const time = document.createElement("div");
    time.className = "salon-detail-time";
    time.textContent = item.time;

    const info = document.createElement("div");
    const title = document.createElement("div");
    title.className = "salon-detail-title";
    title.textContent = item.title;

    info.appendChild(title);

    if (item.detail) {
      const detail = document.createElement("div");
      detail.className = "salon-detail-extra";
      detail.textContent = item.detail;
      info.appendChild(detail);
    }

    row.appendChild(time);
    row.appendChild(info);

    scheduleEl.appendChild(row);
  });
}

function setupFilters() {
  const chips = document.querySelectorAll(".chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("chip-active"));
      chip.classList.add("chip-active");
      renderTimeline(chip.dataset.filter);
    });
  });
}

function setupHeroButtons() {
  document
    .getElementById("btn-ver-agenda")
    ?.addEventListener("click", () =>
      document
        .getElementById("section-agenda")
        .scrollIntoView({ behavior: "smooth" })
    );

  document
    .getElementById("btn-ver-salones")
    ?.addEventListener("click", () =>
      document
        .getElementById("section-salones")
        .scrollIntoView({ behavior: "smooth" })
    );
}

document.addEventListener("DOMContentLoaded", init);
