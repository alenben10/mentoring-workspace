const commonsSource = (file) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(" ", "_"))}`;

function photo(file, alt, credit = "Wikimedia Commons", src) {
  return {
    src,
    source: commonsSource(file),
    file,
    alt,
    credit,
  };
}

const photos = {
  sage: photo("Sage Chapel at Cornell University.jpg", "Exterior de Sage Chapel en Cornell.", "Tomwsulcer / Wikimedia Commons", "./assets/photos/sage-chapel.jpg"),
  sageInterior: photo("Sage Chapel interior view.jpg", "Interior de Sage Chapel con vitrales y bancos.", "John Morgan / Wikimedia Commons", "./assets/photos/sage-interior.jpg"),
  commons: photo("Pedestrian mall of Ithaca 20240526.jpg", "Zona peatonal de Ithaca Commons.", "颐园居 / Wikimedia Commons", "./assets/photos/ithaca-commons.jpg"),
  games: photo("Two men and two women sit at a table playing a board game wi Wellcome V0040234.jpg", "Personas jugando un juego de mesa.", "Wellcome Collection / Wikimedia Commons", "./assets/photos/board-games.jpg"),
  market: photo("Ithaca, NY - Farmers Market 02.jpg", "Ithaca Farmers Market en Steamboat Landing.", "Joe Mabel / Wikimedia Commons", "./assets/photos/farmers-market.jpg"),
  vineyard: photo("Vineyard and Cayuga Lake, New York, 1991.jpg", "Viñedo frente a Cayuga Lake.", "Phillip Capper / Wikimedia Commons", "./assets/photos/cayuga-vineyard.jpg"),
  cayuga: photo("Cayuga Lake, May 2025.jpg", "Cayuga Lake en primavera.", "Wikimedia Commons", "./assets/photos/cayuga-lake.jpg"),
  botanic: photo("Nevin Welcome Center at the Cornell Botanic Gardens.jpg", "Nevin Welcome Center en Cornell Botanic Gardens.", "Kenneth C. Zirkel / Wikimedia Commons", "./assets/photos/cornell-botanic-gardens.jpg"),
  ithacaFalls: photo("Ithaca Falls 03.jpg", "Ithaca Falls con agua cayendo sobre roca.", "Wikimedia Commons", "./assets/photos/ithaca-falls.jpg"),
  skaneateles: photo("Skaneateles lake pier, Skaneateles New York.jpg", "Muelle de Skaneateles Lake.", "Kiran891 / Wikimedia Commons", "./assets/photos/skaneateles.jpg"),
  buttermilk: photo("Buttermilk Falls, Ithaca, NY, April.jpg", "Buttermilk Falls en Ithaca.", "Sdetwiler / Wikimedia Commons", "./assets/photos/buttermilk-falls.jpg"),
  taughannock: photo("Taughannock Falls State Park - 20171001 - 06.jpg", "Taughannock Falls State Park.", "Andre Carrotflower / Wikimedia Commons", "./assets/photos/taughannock-falls.jpg"),
  stewart: photo("Stewart Park Ithaca July 2015 001.jpg", "Stewart Park en Ithaca.", "King of Hearts / Wikimedia Commons", "./assets/photos/stewart-park.jpg"),
  sunset: photo("End Of The Day (72658421).jpeg", "Atardecer sobre Cayuga Lake.", "Wikimedia Commons", "./assets/photos/cayuga-sunset.jpeg"),
  niagara: photo("American Falls and Horseshoe Falls seen from Rainbow Bridge.jpg", "Niagara Falls vistas desde Rainbow Bridge.", "Wikimedia Commons", "./assets/photos/niagara-falls.jpg"),
  buffalo: photo("Aerial photo of Buffalo, NY Skyline.jpg", "Skyline de Buffalo, New York.", "Pete716 / Wikimedia Commons", "./assets/photos/buffalo-skyline.jpg"),
  greekPeak: photo("Greek Peak - Main Base Area 2024.jpg", "Base principal de Greek Peak Mountain Resort.", "Wikimedia Commons", "./assets/photos/greek-peak.jpg"),
  hammondsport: photo("Keuka Lake from Depot Park in Hammondsport, New York.jpg", "Keuka Lake desde Depot Park en Hammondsport.", "Wikimedia Commons", "./assets/photos/hammondsport-keuka.jpg"),
  cake: photo("Creative Commons Birthday Cake and Candles (4825652728).jpg", "Torta de cumpleaños con velas.", "D. Sharon Pruitt / Wikimedia Commons", "./assets/photos/birthday-cake.jpg"),
  familyMeal: photo("Family eating meal.jpg", "Familia compartiendo una comida.", "National Cancer Institute / Wikimedia Commons", "./assets/photos/family-meal.jpg"),
  pachamanca: photo("Pachamanca in Peru.jpg", "Pachamanca peruana servida en hojas.", "Wikimedia Commons", "./assets/photos/pachamanca.jpg"),
  treman: photo("Robert H. Treman State Park - Lower Falls 01.jpg", "Lower Falls en Robert H. Treman State Park.", "Wikimedia Commons", "./assets/photos/treman-lower-falls.jpg"),
  nyc: photo("The New York City Skyline at Dusk.jpg", "Skyline de New York City al atardecer.", "Bruce Emmerling / Wikimedia Commons", "./assets/photos/nyc-skyline.jpg"),
};

const llamas = {
  walking: "./assets/llamas/llama-walking.png",
  eating: "./assets/llamas/llama-eating.png",
  blanket: "./assets/llamas/llama-blanket.png",
  laptop: "./assets/llamas/llama-laptop.png",
  flower: "./assets/llamas/llama-flower.png",
  resting: "./assets/llamas/llama-resting.png",
};

const days = [
  {
    date: "13",
    weekday: "Sábado",
    title: "Llegada, Ithaca Commons y noche de juegos",
    place: "Ithaca Commons + cena familiar",
    summary: "Llegar, instalarnos y empezar la semana con algo simple: caminar, cenar y jugar.",
    motif: "llama",
    sticker: llamas.walking,
    hero: photos.commons,
    activities: [
      { time: "Llegada", title: "Llegar y acomodarnos", place: "Ithaca", detail: "Check-in, maletas y primera coordinación familiar.", photo: photos.commons },
      { time: "Tarde", title: "Pasear por Ithaca", place: "Downtown / Commons", detail: "Cafés, tiendas y caminata tranquila por el centro.", photo: photos.commons },
      { time: "Noche", title: "Cena + juegos", place: "Personal Best o Airbnb de Paty", detail: "Lugar por confirmar; idea central: cena relajada y juegos.", photo: photos.games, llama: llamas.resting },
    ],
  },
  {
    date: "14",
    weekday: "Domingo",
    title: "Farmers Market, viñedos y Cayuga Lake",
    place: "Steamboat Landing + ruta del lago",
    summary: "Día de sabores locales: mercado por la mañana y viñedos por Cayuga Lake.",
    motif: "quinoa",
    sticker: llamas.eating,
    hero: photos.market,
    activities: [
      { time: "Mañana", title: "Ithaca Farmers Market", place: "Steamboat Landing", detail: "Desayuno, productos locales y puestos frente al agua.", photo: photos.market, llama: llamas.eating },
      { time: "Almuerzo", title: "Vineyards + lunch", place: "Cayuga Lake", detail: "Wine tasting y almuerzo con vista al lago.", photo: photos.vineyard },
      { time: "Tarde", title: "Ruta frente al lago", place: "Cayuga Lake", detail: "Paseo lento, fotos y regreso a Ithaca.", photo: photos.cayuga },
    ],
  },
  {
    date: "15",
    weekday: "Lunes",
    title: "Cornell, jardines, Ithaca Falls y Skaneateles",
    place: "Cornell + Ithaca Falls + Skaneateles",
    summary: "Una mezcla de campus, botánica, cataratas y un pueblo precioso junto al lago.",
    motif: "mountain",
    sticker: llamas.blanket,
    hero: photos.botanic,
    activities: [
      { time: "Mañana", title: "Cornell Botanic Gardens", place: "Cornell", detail: "Jardines y caminata por el campus.", photo: photos.botanic },
      { time: "Mediodía", title: "Ithaca Falls", place: "Fall Creek", detail: "Parada corta para ver una de las cataratas más icónicas de Ithaca.", photo: photos.ithacaFalls },
      { time: "Tarde", title: "Skaneateles", place: "Skaneateles Lake", detail: "Pueblo junto al lago; podemos llevar almuerzo propio.", photo: photos.skaneateles },
    ],
  },
  {
    date: "16",
    weekday: "Martes",
    title: "Trekking, BBQ y paddle al sunset",
    place: "Buttermilk / Taughannock + Stewart Park + Cayuga Lake",
    summary: "Día de aire libre: cataratas, grill frente al lago y atardecer en el agua.",
    motif: "alpaca",
    sticker: llamas.walking,
    hero: photos.buttermilk,
    activities: [
      { time: "Mañana", title: "Trekking y cataratas", place: "Buttermilk o Taughannock", detail: "Elegimos parque según clima, energía y logística.", photo: photos.taughannock, llama: llamas.walking },
      { time: "Almuerzo", title: "BBQ grill", place: "Stewart Park", detail: "Parrilla familiar frente a Cayuga Lake.", photo: photos.stewart },
      { time: "Sunset", title: "Paddle tour", place: "Cayuga Lake", detail: "Tour al atardecer sobre el lago.", photo: photos.sunset },
    ],
  },
  {
    date: "17",
    weekday: "Miércoles",
    title: "Niagara Falls, Buffalo y cumple de José",
    place: "Niagara Falls + Buffalo, NY",
    summary: "Excursión grande de todo el día y cumpleaños de José, papá de Belen.",
    motif: "chakana",
    sticker: llamas.flower,
    hero: photos.niagara,
    activities: [
      { time: "Todo el día", title: "Niagara Falls", place: "Niagara Falls, NY", detail: "Salida temprano para aprovechar el día.", photo: photos.niagara },
      { time: "Tarde", title: "Buffalo", place: "Buffalo, NY", detail: "Paseo por la ciudad antes o después de las cataratas.", photo: photos.buffalo },
      { time: "Celebración", title: "Cumple de José", place: "Plan por definir", detail: "Celebramos al papá de Belen durante la excursión.", photo: photos.cake, llama: llamas.flower },
    ],
  },
  {
    date: "18",
    weekday: "Jueves",
    title: "Día flexible: Greek Peak, Hammondsport o bote",
    place: "Plan según clima",
    summary: "Mantenemos el día abierto y decidimos con el clima en mano.",
    motif: "mountain",
    sticker: llamas.blanket,
    hero: photos.hammondsport,
    activities: [
      { time: "Opción 1", title: "Greek Peak Adventure Park", place: "Greek Peak", detail: "Aventura de montaña si queremos algo activo.", photo: photos.greekPeak },
      { time: "Opción 2", title: "Hammondsport", place: "Keuka Lake", detail: "Pueblo pequeño, lago y paseo tranquilo.", photo: photos.hammondsport },
      { time: "Opción 3", title: "Paseo en bote", place: "Finger Lakes", detail: "Rentar bote o caminar por el waterfront.", photo: photos.cayuga },
    ],
  },
  {
    date: "19",
    weekday: "Viernes",
    title: "Preparativos de boda",
    place: "Ithaca / Cornell",
    summary: "Bajar el ritmo, ordenar detalles y descansar antes del día principal.",
    motif: "quinoa",
    sticker: llamas.laptop,
    hero: photos.sageInterior,
    activities: [
      { time: "Mañana", title: "Checklist final", place: "Ithaca", detail: "Horarios, ropa, transporte y contactos.", photo: photos.sage, llama: llamas.laptop },
      { time: "Tarde", title: "Flores, ropa y detalles", place: "Ithaca", detail: "Última revisión de lo necesario para la ceremonia.", photo: photos.sageInterior },
      { time: "Noche", title: "Descanso", place: "Casa / alojamiento", detail: "Cena ligera y dormir temprano.", photo: photos.familyMeal },
    ],
  },
  {
    date: "20",
    weekday: "Sábado",
    title: "Ceremonia en Sage Chapel y recepción",
    place: "Sage Chapel, Cornell",
    summary: "El centro de la semana: ceremonia, fotos, recepción y celebración.",
    motif: "alpaca",
    sticker: llamas.flower,
    hero: photos.sage,
    activities: [
      { time: "Fotos", title: "Familia y pareja", place: "Cornell", detail: "Fotos alrededor de Sage Chapel y campus.", photo: photos.sage },
      { time: "Ceremonia", title: "Sage Chapel", place: "Cornell", detail: "Ceremonia de Alen & Belen.", photo: photos.sageInterior, llama: llamas.flower },
      { time: "Recepción", title: "Celebración", place: "Lugar por confirmar", detail: "Cena, brindis, baile y familia.", photo: photos.familyMeal },
    ],
  },
  {
    date: "21",
    weekday: "Domingo",
    title: "Pachamanca en Robert H. Treman State Park",
    place: "Lowe Falls / Enfield Glen",
    summary: "Cierre peruano al aire libre: comida, cataratas y bosque.",
    motif: "llama",
    sticker: llamas.eating,
    hero: photos.treman,
    activities: [
      { time: "Almuerzo", title: "Pachamanca familiar", place: "Robert H. Treman", detail: "Comida peruana para compartir después de la boda.", photo: photos.pachamanca, llama: llamas.eating },
      { time: "Tarde", title: "Lowe Falls + Enfield Glen", place: "Robert H. Treman", detail: "Caminata por la zona de cataratas.", photo: photos.treman },
      { time: "Opcional", title: "Baño en cataratas", place: "Lower Falls", detail: "Sólo si clima, parque y seguridad lo permiten.", photo: photos.treman },
    ],
  },
  {
    date: "22",
    weekday: "Lunes",
    title: "Cumple de Paty y retorno a NYC",
    place: "Ithaca -> New York City",
    summary: "Últimos abrazos, cumpleaños de Paty y regreso a la ciudad.",
    motif: "chakana",
    sticker: llamas.resting,
    hero: photos.nyc,
    activities: [
      { time: "Mañana", title: "Cumple de Paty", place: "Ithaca", detail: "Celebramos a la mamá de Alen.", photo: photos.cake, llama: llamas.flower },
      { time: "Viaje", title: "Retorno a NYC", place: "Ruta a New York City", detail: "Carretera de vuelta y cierre de semana.", photo: photos.nyc },
      { time: "Cierre", title: "Gracias familia", place: "NYC / casa", detail: "Nos despedimos con muchas fotos y recuerdos.", photo: photos.familyMeal },
    ],
  },
];

const dayNav = document.querySelector("#dayNav");
const dayView = document.querySelector("#dayView");
const agendaGrid = document.querySelector("#agendaGrid");
const currentDayLabel = document.querySelector("#currentDayLabel");
const prevDay = document.querySelector("#prevDay");
const nextDay = document.querySelector("#nextDay");
const heroImage = document.querySelector("#heroImage");
const creditsList = document.querySelector("#creditsList");

let activeIndex = 0;

function motifMarkup(name, className = "motif-icon") {
  return `<svg class="${className}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function imageMarkup(item, className = "") {
  return `
    <figure class="${className}">
      <img src="${item.photo.src}" alt="${item.photo.alt}" loading="lazy">
      <figcaption>
        <a href="${item.photo.source}" target="_blank" rel="noreferrer">${item.photo.credit}</a>
      </figcaption>
    </figure>
  `;
}

function activityMarkup(activity) {
  return `
    <li class="activity-card${activity.llama ? " has-llama" : ""}">
      ${imageMarkup(activity, "activity-photo")}
      <div class="activity-copy">
        <span>${activity.time}</span>
        <h4>${activity.title}</h4>
        <p class="place">${activity.place}</p>
        <p>${activity.detail}</p>
        ${activity.llama ? `<img class="activity-llama" src="${activity.llama}" alt="" aria-hidden="true">` : ""}
      </div>
    </li>
  `;
}

function dayMarkup(day) {
  return `
    <div class="day-hero">
      <figure class="day-photo">
        <img src="${day.hero.src}" alt="${day.hero.alt}">
        <figcaption>
          <a href="${day.hero.source}" target="_blank" rel="noreferrer">${day.hero.credit}</a>
        </figcaption>
      </figure>
      <div class="day-copy">
        <div class="day-ornament" aria-hidden="true">
          ${motifMarkup(day.motif)}
          <span></span>
          ${motifMarkup("chakana")}
        </div>
        <p class="date-kicker">${day.weekday} ${day.date} JUN</p>
        <h3>${day.title}</h3>
        <p class="day-place">${day.place}</p>
        <p>${day.summary}</p>
        <img class="day-sticker" src="${day.sticker}" alt="" aria-hidden="true">
      </div>
    </div>
    <ul class="activity-grid">
      ${day.activities.map(activityMarkup).join("")}
    </ul>
  `;
}

function agendaMarkup(day, index) {
  return `
    <button class="agenda-card" type="button" data-agenda-index="${index}">
      <img src="${day.hero.src}" alt="" loading="lazy">
      <em class="agenda-motif" aria-hidden="true">${motifMarkup(day.motif)}</em>
      <span>${day.weekday} ${day.date} JUN</span>
      <strong>${day.title}</strong>
      <small>${day.place}</small>
    </button>
  `;
}

function updateActive(index, scroll = false, syncHash = true) {
  activeIndex = (index + days.length) % days.length;
  const day = days[activeIndex];
  dayView.innerHTML = dayMarkup(day);
  currentDayLabel.textContent = `${day.date} JUN`;
  heroImage.src = photos.sage.src;
  heroImage.alt = photos.sage.alt;

  document.querySelectorAll(".day-button").forEach((button, buttonIndex) => {
    button.setAttribute("aria-current", buttonIndex === activeIndex ? "true" : "false");
  });

  if (syncHash) {
    history.replaceState(null, "", `#dia-${day.date}`);
  }

  if (scroll) {
    document.querySelector("#itinerario").scrollIntoView({ block: "start" });
  }
}

function indexFromHash() {
  const match = window.location.hash.match(/^#dia-(\d{2})$/);
  if (!match) return 0;
  const found = days.findIndex((day) => day.date === match[1]);
  return found >= 0 ? found : 0;
}

function scrollToHashSection() {
  if (!window.location.hash || window.location.hash.startsWith("#dia-")) return;
  const target = document.getElementById(window.location.hash.slice(1));
  if (target) target.scrollIntoView({ block: "start" });
}

function renderCredits() {
  const unique = new Map();
  days.forEach((day) => {
    unique.set(day.hero.file, day.hero);
    day.activities.forEach((activity) => unique.set(activity.photo.file, activity.photo));
  });

  creditsList.innerHTML = [...unique.values()].map((item) => `
    <a href="${item.source}" target="_blank" rel="noreferrer">
      <span>${item.file}</span>
      <small>${item.credit}</small>
    </a>
  `).join("");
}

function render() {
  dayNav.innerHTML = days.map((day, index) => `
    <button class="day-button" type="button" data-day-index="${index}" aria-label="${day.weekday} ${day.date} de junio">
      <strong>${day.date}</strong>
      <small>${day.weekday.slice(0, 3)}</small>
    </button>
  `).join("");
  agendaGrid.innerHTML = days.map(agendaMarkup).join("");
  renderCredits();
  const hasDayHash = window.location.hash.startsWith("#dia-");
  updateActive(indexFromHash(), hasDayHash, hasDayHash);
  requestAnimationFrame(() => requestAnimationFrame(scrollToHashSection));
}

render();

dayNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day-index]");
  if (!button) return;
  updateActive(Number(button.dataset.dayIndex), true);
});

agendaGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-agenda-index]");
  if (!card) return;
  updateActive(Number(card.dataset.agendaIndex), true);
});

prevDay.addEventListener("click", () => updateActive(activeIndex - 1, true));
nextDay.addEventListener("click", () => updateActive(activeIndex + 1, true));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") updateActive(activeIndex - 1, true);
  if (event.key === "ArrowRight") updateActive(activeIndex + 1, true);
});

window.addEventListener("hashchange", () => {
  if (window.location.hash.startsWith("#dia-")) {
    updateActive(indexFromHash(), true, false);
  } else {
    requestAnimationFrame(scrollToHashSection);
  }
});
