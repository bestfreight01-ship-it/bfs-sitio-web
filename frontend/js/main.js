const BACKEND_URL = 'https://bfs-sitio-web-production.up.railway.app';

const content = {
  en: {
    navLinks: ["Services", "About", "Contact"],
    navCta: "Get a Quote",
    heroTitle: ["Best Freight", " Solutions", "Always", " Moving"],
    heroSub: ["We find your loads", "We negotiate the best rates", "We manage your entire dispatch"],
    heroCta2: "Learn More",
    servLabel: "What We Do",
    servTitle: ["Our ", "Services"],
    servDesc: "We connect your truck with the best market opportunities",
    services: [
      { title: "Load Finding", desc: "We analyze the market and secure profitable loads with reliable brokers." },
      { title: "Broker Negotiation", desc: "We negotiate every load to secure the best rates and maximize your profit" },
      { title: "Route Planning", desc: "Strategic route optimization to reduce deadhead miles and increase profitability." },
      { title: "Documentation & Invoicing", desc: "We take care of all your documentation and invoicing" }
    ],
    aboutLabel: "Who We Are",
    aboutTitle: ["Built for ", "Carriers & Operators"],
    aboutDesc: "At Best Freight Solutions, we help carriers operate more efficiently, profitably, and organized within the US transportation industry.",
    mission: { title: "Our Mission", text: "To provide a reliable and strategic dispatch service focused on maximizing every truck's performance through smart negotiations, efficient planning, and complete back-office management." },
    vision: { title: "Our Vision", text: "To become a key ally for independent carriers and small fleets, recognized for our transparency, commitment, and ability to generate real results in every operation." },
    focus: { title: "Our Approach", text: "Every truck is a priority. We don't work by volume — we work by results. We focus on building solid, long-term relationships with our clients." },
    testiLabel: "Testimonials",
    testiTitle: ["What Our ", "Clients Say"],
    testiSubtitle: "Rated 5.0 by carriers who trust us with their operation",
    testimonials: [
      { text: "Since working with BFS, my truck stays loaded and my income is finally predictable. They treat my business like their own.", name: "Jorge Cardenas", role: "Cardenas Hotshot LLC" },
      { text: "They take care of the calls, the rates, and the paperwork. I just drive. It's the freedom I was looking for as a carrier.", name: "Jimmy Alfaro", role: "Star Valley Trucking Corp" },
      { text: "Professional from start to finish. They get good rates and keep my operation running without setbacks.", name: "Franklin Toribio", role: "Jaguar Trucking LLC" },
      { text: "The difference is the communication. They answer fast, solve problems on the road, and always have my back.", name: "Luis Mora", role: "DIM Express Corp" }
    ],
    contactLabel: "Get In Touch",
    contactTitle: ["Request a ", "Free Quote"],
    contactDesc: "Ready to maximize your operation? Fill out the form and we'll get back to you within 24 hours.",
    formTitle: "Get Your Free Quote",
    formName: "Full Name",
    formCompany: "Company",
    formEmail: "Email Address",
    formPhone: "Phone",
    formMsg: "Tell us about your operation",
    formSubmit: "Send Request →",
    formSubmitting: "Sending…",
    formError: "Something went wrong. Please try again or contact us directly.",
    formSuccess: { title: "Request Sent!", text: "We'll contact you within 24 hours. Thank you for choosing BFS." },
    banner1Title: "Real Results on Every Load",
    banner1Sub: "Optimization, negotiation and precise execution on every move.",
    footerCopy: "© 2026 Best Freight Solutions. All rights reserved.",
    navDropdownLabel: "Company",
    navJourney: "Our Journey",
    jpLabel: "Best Freight Solutions",
    jpTitle: ["Our Track Record & ", "Company Story"],
    jpDesc: "5+ years. 5,000+ loads. $6M+ in secured freight revenue. The numbers, the relationships, and the values behind every mile we've coordinated.",
    authStatsLabels: ["Loads Dispatched", "Freight Revenue Secured", "Miles Coordinated", "Broker Connections", "Recurring Partners"],
    authJourneyLabel: "Our Journey",
    authJourneyTitle: ["Growing Since ", "2021"],
    authJourneyDesc: "From 23 loads in our first year to over 1,800 in 2025 — built on relationships, expertise, and real results for every carrier we serve.",
    authTimeline: [
      { year: "2021", metric: "23 Loads", title: "Founded", desc: "Launched with one mission: build the freight operations partner that carriers actually deserved." },
      { year: "2022", metric: "180+ Loads", title: "First Roots", desc: "Key broker relationships established across PA, NJ, NY. Northeast Corridor became our operational base." },
      { year: "2023", metric: "600+ Loads", title: "Network Built", desc: "Crossed 85+ recurring broker relationships. Reputation built load by load, mile by mile." },
      { year: "2024", metric: "1,200+ Loads", title: "Consolidated", desc: "1,000+ active broker connections. $4M+ in freight revenue secured for carriers across the US." },
      { year: "2025", metric: "1,800+ Loads", title: "At Scale", desc: "5,000+ total loads dispatched. 26+ carriers served. 1.9M+ miles coordinated nationwide." }
    ],
    authTrustLabel: "Why Carriers Choose Us",
    authTrustTitle: ["Built From the ", "Carrier's Perspective"],
    authTrustItems: [
      { icon: "📊", title: "We Know the Freight Market", desc: "We monitor rate volatility daily and position your truck where the market pays best." },
      { icon: "🤝", title: "We Understand How Brokers Think", desc: "85+ recurring broker relationships built on trust — not cold calls. We know how to negotiate." },
      { icon: "💰", title: "We Protect Your Profitability", desc: "Every rate negotiated with your costs in mind. No load accepted at a loss." },
      { icon: "🗺️", title: "Northeast Corridor Expertise", desc: "Deep operational presence in PA, NJ, NY, MA, CT — one of the densest freight corridors in the US." },
      { icon: "🔄", title: "Sustainable Operations", desc: "We don't push volume. We build consistency. Sustainable trucking always beats fast miles." },
      { icon: "📋", title: "Full Back-Office Management", desc: "Docs, invoices, broker communication — fully handled so you focus on driving." }
    ],
    authPhilLabel: "Our Operating Philosophy",
    authPhilText: ["Every truck is a ", "business.", " We understand that every mile, every rate, and every broker directly impacts your bottom line."],
    authPhilItems: [
      "We don't just find loads — we build your operation",
      "Profitability over volume, always",
      "Your growth is our measurement of success",
      "Relationships built over years, not transactions"
    ],
    authBrokersLabel: "Trusted Broker Network",
    authBrokersTitle: ["1,000+ Broker Connections. ", "85+ Recurring."],
    authBrokersDesc: "Years of real relationships with some of the most recognized names in US freight.",
    authBrokers: [
      { icon: "🏆", name: "TQL", type: "Top 10 US Broker" },
      { icon: "⭐", name: "Landstar", type: "Agent-Based Network" },
      { icon: "🚛", name: "PLS Logistics", type: "Full Truckload" },
      { icon: "🔧", name: "ATS Logistics", type: "Specialized Freight" },
      { icon: "📦", name: "Ryan Transportation", type: "Flatbed Specialist" },
      { icon: "🗺️", name: "Armstrong Transport", type: "Flatbed & Van" },
      { icon: "🔗", name: "Trinity Logistics", type: "Multimodal" },
      { icon: "⚡", name: "Axle Logistics", type: "Tech-Driven Broker" }
    ],
    authBrokersFooter: "Plus <strong>900+ additional brokers</strong> in our active network across all 48 states.",
    authCommLabel: "Latino Community",
    authCommTitle: ["We Speak Your ", "Language — In Every Way"],
    authCommDesc: "BFS was built understanding the daily reality of Latino carriers in the United States. We know your culture, your challenges, and your ambition. That's why we communicate differently.",
    authCommTags: ["🗣️ Spanish & English", "🤝 Cultural Understanding", "🚛 Trucking Community", "💼 Latino Business"],
    authCommCardHeading: ["Hablamos tu idioma. ", "We speak your language."],
    authCommCardText: "Whether you're a first-generation owner-operator or scaling your fleet, BFS understands where you come from and where you're headed. We serve all carriers — and we're especially proud of our roots in the Latino trucking community.",
    authCommLangs: ["English", "Español"],
    authCtaLabel: "Your Next Move",
    authCtaHeading: ["We're Not Just Dispatch. ", "We're Part of Your Growth."],
    authCtaSub: "5,000+ loads. $6M+ in secured freight revenue. 1.9M miles coordinated. The track record is real — let's build yours.",
    authCtaBtn: "Start Working With BFS →",
    loadsLabel: "Real Loads. Real Results.",
    loadsTitle: ["Verified ", "Completed Shipments"],
    loadsDesc: "Every slide is a real load we dispatched — real routes, real rates, real delivery. This is what we do, every day."
  },
  es: {
    navLinks: ["Servicios", "Nosotros", "Contacto"],
    navCta: "Cotizar",
    heroTitle: ["Best Freight", " Solutions", "Siempre en", " Movimiento"],
    heroSub: ["Encontramos tus cargas", "Negociamos las mejores tarifas", "Gestionamos todo tu despacho"],
    heroCta2: "Conocer Más",
    servLabel: "Lo Que Hacemos",
    servTitle: ["Nuestros ", "Servicios"],
    servDesc: "Conectamos tu camión con las mejores oportunidades del mercado",
    services: [
      { title: "Búsqueda de Cargas", desc: "Analizamos el mercado y aseguramos cargas rentables con brokers confiables" },
      { title: "Negociación con Brokers", desc: "Negociamos cada carga para asegurar las mejores tarifas y maximizar tu ganancia" },
      { title: "Planificación de Rutas", desc: "Planificamos rutas eficientes para mejorar tu operación y aumentar tu rentabilidad" },
      { title: "Documentación e Invoices", desc: "Nos ocupamos de toda tu documentación y facturación" }
    ],
    aboutLabel: "Quiénes Somos",
    aboutTitle: ["Impulsamos tu ", "operación en carretera"],
    aboutDesc: "En Best Freight Solutions conseguimos cargas, negociamos mejores tarifas y gestionamos todo el back office para que tú solo te enfoques en manejar y generar dinero.",
    mission: { title: "Nuestra Misión", text: "Brindar un servicio de dispatch confiable y estratégico, enfocado en maximizar el rendimiento de cada camión mediante negociaciones inteligentes, planificación eficiente y una gestión completa del back office." },
    vision: { title: "Nuestra Visión", text: "Convertirnos en un aliado clave para carriers independientes y pequeñas flotas, siendo reconocidos por nuestra transparencia, compromiso y capacidad de generar resultados reales en cada operación." },
    focus: { title: "Nuestro Enfoque", text: "Cada camión es una prioridad. No trabajamos por volumen, trabajamos por resultados. Nos enfocamos en construir relaciones sólidas y generar ganancias constantes." },
    testiLabel: "Testimonios",
    testiTitle: ["Lo que Dicen ", "Nuestros Clientes"],
    testiSubtitle: "Calificación 5.0 por carriers que confían en nosotros",
    testimonials: [
      { text: "Desde que trabajo con BFS mi camión siempre está cargado y mis ingresos por fin son estables. Tratan mi negocio como si fuera de ellos.", name: "Jorge Cardenas", role: "Cardenas Hotshot LLC" },
      { text: "Ellos se encargan de las llamadas, las tarifas y el papeleo. Yo solo manejo. Esa es la libertad que buscaba como carrier.", name: "Jimmy Alfaro", role: "Star Valley Trucking Corp" },
      { text: "Profesionales de principio a fin. Consiguen buenas tarifas y mantienen mi operación rodando sin contratiempos.", name: "Franklin Toribio", role: "Jaguar Trucking LLC" },
      { text: "La diferencia está en la comunicación. Responden rápido, resuelven los problemas en carretera y siempre están de mi lado.", name: "Luis Mora", role: "DIM Express Corp" }
    ],
    contactLabel: "Contáctanos",
    contactTitle: ["Solicita una ", "Cotización Gratis"],
    contactDesc: "¿Listo para maximizar tu operación? Llena el formulario y te contactaremos dentro de las 24 horas.",
    formTitle: "Obtén tu Cotización Gratis",
    formName: "Nombre Completo",
    formCompany: "Empresa",
    formEmail: "Correo Electrónico",
    formPhone: "Teléfono",
    formMsg: "Cuéntanos sobre tu operación",
    formSubmit: "Enviar Solicitud →",
    formSubmitting: "Enviando…",
    formError: "Algo salió mal. Intenta de nuevo o contáctanos directamente.",
    formSuccess: { title: "¡Solicitud Enviada!", text: "Te contactaremos dentro de 24 horas. Gracias por elegir BFS." },
    banner1Title: "Resultados Reales en Cada Carga",
    banner1Sub: "Optimización, negociación y ejecución precisa en cada movimiento",
    footerCopy: "© 2026 Best Freight Solutions. Todos los derechos reservados.",
    navDropdownLabel: "Empresa",
    navJourney: "Nuestra Trayectoria",
    jpLabel: "Best Freight Solutions",
    jpTitle: ["Nuestra Trayectoria & ", "Historia de la Empresa"],
    jpDesc: "5+ años. 5,000+ cargas. $6M+ en freight revenue asegurado. Los números, las relaciones y los valores detrás de cada milla coordinada.",
    authStatsLabels: ["Cargas Despachadas", "Revenue Asegurado", "Millas Coordinadas", "Conexiones con Brokers", "Socios Recurrentes"],
    authJourneyLabel: "Nuestra Trayectoria",
    authJourneyTitle: ["Creciendo Desde ", "2021"],
    authJourneyDesc: "De 23 cargas en nuestro primer año a más de 1,800 en 2025 — construido sobre relaciones, experiencia y resultados reales para cada carrier.",
    authTimeline: [
      { year: "2021", metric: "23 Cargas", title: "Fundación", desc: "Lanzamos con una misión: crear el socio de operaciones freight que los carriers realmente merecen." },
      { year: "2022", metric: "180+ Cargas", title: "Primeras Raíces", desc: "Relaciones clave con brokers establecidas en PA, NJ, NY. El Northeast Corridor se convirtió en nuestra base." },
      { year: "2023", metric: "600+ Cargas", title: "Red Construida", desc: "Cruzamos 85+ relaciones recurrentes con brokers. Reputación construida carga por carga, milla por milla." },
      { year: "2024", metric: "1,200+ Cargas", title: "Consolidación", desc: "+1,000 conexiones activas con brokers. +$4M en freight revenue asegurado para carriers en todo EE.UU." },
      { year: "2025", metric: "1,800+ Cargas", title: "Escala Operativa", desc: "+5,000 cargas despachadas en total. 26+ carriers atendidos. +1.9M millas coordinadas a nivel nacional." }
    ],
    authTrustLabel: "Por Qué Confían en Nosotros",
    authTrustTitle: ["Construido Desde la ", "Perspectiva del Carrier"],
    authTrustItems: [
      { icon: "📊", title: "Conocemos el Mercado Freight", desc: "Monitoreamos la volatilidad de tarifas diariamente y posicionamos tu camión donde más paga." },
      { icon: "🤝", title: "Entendemos Cómo Piensan los Brokers", desc: "85+ relaciones recurrentes construidas en confianza — no llamadas en frío. Sabemos negociar." },
      { icon: "💰", title: "Protegemos tu Rentabilidad", desc: "Cada tarifa negociada con tus costos en mente. Ninguna carga aceptada a pérdida." },
      { icon: "🗺️", title: "Especialistas en Northeast Corridor", desc: "Presencia operativa profunda en PA, NJ, NY, MA, CT — uno de los corredores más densos de EE.UU." },
      { icon: "🔄", title: "Operaciones Sostenibles", desc: "No empujamos volumen. Construimos consistencia. Un trucking sostenible siempre gana a largo plazo." },
      { icon: "📋", title: "Back-Office Completo", desc: "Documentos, facturas, comunicación con brokers — todo manejado para que te enfoques en manejar." }
    ],
    authPhilLabel: "Nuestra Filosofía Operativa",
    authPhilText: ["Cada camión es un ", "negocio.", " Entendemos que cada milla, cada tarifa y cada broker impactan directamente tu rentabilidad."],
    authPhilItems: [
      "No solo conseguimos cargas — construimos tu operación",
      "Rentabilidad sobre volumen, siempre",
      "Tu crecimiento es nuestra medida de éxito",
      "Relaciones construidas en años, no en transacciones"
    ],
    authBrokersLabel: "Red de Brokers de Confianza",
    authBrokersTitle: ["1,000+ Conexiones con Brokers. ", "85+ Recurrentes."],
    authBrokersDesc: "Años de relaciones reales con algunos de los nombres más reconocidos en el freight de EE.UU.",
    authBrokers: [
      { icon: "🏆", name: "TQL", type: "Top 10 Broker EE.UU." },
      { icon: "⭐", name: "Landstar", type: "Red de Agentes" },
      { icon: "🚛", name: "PLS Logistics", type: "Full Truckload" },
      { icon: "🔧", name: "ATS Logistics", type: "Carga Especializada" },
      { icon: "📦", name: "Ryan Transportation", type: "Especialista Flatbed" },
      { icon: "🗺️", name: "Armstrong Transport", type: "Flatbed y Van" },
      { icon: "🔗", name: "Trinity Logistics", type: "Multimodal" },
      { icon: "⚡", name: "Axle Logistics", type: "Broker Tecnológico" }
    ],
    authBrokersFooter: "Más <strong>900+ brokers adicionales</strong> en nuestra red activa en los 48 estados.",
    authCommLabel: "Comunidad Latina",
    authCommTitle: ["Hablamos tu Idioma ", "— En Todos los Sentidos"],
    authCommDesc: "BFS fue construido entendiendo la realidad diaria de los carriers latinos en Estados Unidos. Conocemos tu cultura, tus desafíos y tu ambición. Por eso nos comunicamos diferente.",
    authCommTags: ["🗣️ Español e Inglés", "🤝 Comprensión Cultural", "🚛 Comunidad Trucking", "💼 Negocio Latino"],
    authCommCardHeading: ["Hablamos tu idioma. ", "We speak your language."],
    authCommCardText: "Ya seas un owner-operator de primera generación o estés escalando tu flota, BFS entiende de dónde vienes y hacia dónde vas. Servimos a todos los carriers — y estamos especialmente orgullosos de nuestras raíces en la comunidad latina del trucking.",
    authCommLangs: ["English", "Español"],
    authCtaLabel: "Tu Próximo Paso",
    authCtaHeading: ["No Somos Solo Dispatch. ", "Somos Parte de Tu Crecimiento."],
    authCtaSub: "5,000+ cargas. $6M+ en freight revenue asegurado. 1.9M millas coordinadas. El historial es real — construyamos el tuyo.",
    authCtaBtn: "Empieza a Trabajar con BFS →",
    loadsLabel: "Cargas Reales. Resultados Reales.",
    loadsTitle: ["Envíos ", "Completados y Verificados"],
    loadsDesc: "Cada slide es una carga real que despachamos — rutas reales, tarifas reales, entrega real. Esto es lo que hacemos, cada día."
  }
};

const cardImgs = ['images/Imagen2.webp', 'images/Imagen3-9fd2565e.webp', 'images/Imagen4.webp', 'images/5.webp'];
const imgPos = ['center 30%', 'center 20%', 'center 60%', 'center 40%'];

let lang = localStorage.getItem('bfs-lang') || 'en';
let authLayoutDone = false;
let loadsSliderDone = false;

const AUTH_STATS = [
  { num: 5000, prefix: '', suffix: '+', decimals: 0 },
  { num: 6, prefix: '$', suffix: 'M+', decimals: 0 },
  { num: 1.9, prefix: '', suffix: 'M+', decimals: 1 },
  { num: 1000, prefix: '', suffix: '+', decimals: 0 },
  { num: 85, prefix: '', suffix: '+', decimals: 0 }
];

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const decimals = parseInt(el.dataset.decimals) || 0;
  const duration = 2000;
  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = target * ease;
    const display = decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString();
    el.textContent = prefix + display + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initAuthority() {
  if (!document.getElementById('auth-stats-grid')) return;
  const c = content[lang];

  document.getElementById('auth-stats-grid').innerHTML = AUTH_STATS.map((s, i) => `
    <div class="auth-stat-item">
      <div class="auth-stat-num"
        data-target="${s.num}" data-prefix="${s.prefix}"
        data-suffix="${s.suffix}" data-decimals="${s.decimals}">
        ${s.prefix}0${s.suffix}
      </div>
      <div class="auth-stat-label">${c.authStatsLabels[i]}</div>
    </div>`).join('');

  document.getElementById('auth-journey-label').textContent = c.authJourneyLabel;
  document.getElementById('auth-journey-title').innerHTML = `${c.authJourneyTitle[0]}<span>${c.authJourneyTitle[1]}</span>`;
  document.getElementById('auth-journey-desc').textContent = c.authJourneyDesc;
  document.getElementById('auth-timeline').innerHTML = c.authTimeline.map((item) => `
    <div class="auth-tl-item">
      <div class="auth-tl-dot">${item.year}</div>
      <div class="auth-tl-body">
        <div class="auth-tl-metric">${item.metric}</div>
        <div class="auth-tl-title">${item.title}</div>
        <div class="auth-tl-desc">${item.desc}</div>
      </div>
    </div>`).join('');

  document.getElementById('auth-trust-label').textContent = c.authTrustLabel;
  document.getElementById('auth-trust-title').innerHTML = `${c.authTrustTitle[0]}<span>${c.authTrustTitle[1]}</span>`;
  document.getElementById('auth-trust-list').innerHTML = c.authTrustItems.map((item) => `
    <div class="auth-trust-item">
      <div class="auth-trust-icon">${item.icon}</div>
      <div>
        <div class="auth-trust-ttl">${item.title}</div>
        <div class="auth-trust-dsc">${item.desc}</div>
      </div>
    </div>`).join('');

  document.getElementById('auth-philosophy').innerHTML = `
    <div class="auth-phil-label">${c.authPhilLabel}</div>
    <div class="auth-phil-text">${c.authPhilText[0]}<span>${c.authPhilText[1]}</span>${c.authPhilText[2]}</div>
    <div class="auth-phil-items">
      ${c.authPhilItems.map((item) => `<div class="auth-phil-item">${item}</div>`).join('')}
    </div>`;

  document.getElementById('auth-brokers-label').textContent = c.authBrokersLabel;
  document.getElementById('auth-brokers-title').innerHTML = `${c.authBrokersTitle[0]}<span style="color:var(--gold)">${c.authBrokersTitle[1]}</span>`;
  document.getElementById('auth-brokers-desc').textContent = c.authBrokersDesc;
  document.getElementById('auth-brokers-grid').innerHTML = c.authBrokers.map((b) => `
    <div class="auth-broker-card">
      <div class="auth-broker-icon">${b.icon}</div>
      <div class="auth-broker-name">${b.name}</div>
      <div class="auth-broker-type">${b.type}</div>
    </div>`).join('');
  document.getElementById('auth-brokers-footer-row').innerHTML = c.authBrokersFooter;

  document.getElementById('auth-comm-label').textContent = c.authCommLabel;
  document.getElementById('auth-comm-title').innerHTML = `${c.authCommTitle[0]}<span>${c.authCommTitle[1]}</span>`;
  document.getElementById('auth-comm-desc').textContent = c.authCommDesc;
  document.getElementById('auth-comm-tags').innerHTML = c.authCommTags.map((tag) => `<span class="auth-comm-tag">${tag}</span>`).join('');
  document.getElementById('auth-comm-card').innerHTML = `
    <div class="auth-comm-heading">${c.authCommCardHeading[0]}<span>${c.authCommCardHeading[1]}</span></div>
    <div class="auth-comm-body">${c.authCommCardText}</div>
    <div class="auth-comm-langs">
      <span class="auth-comm-lang en">${c.authCommLangs[0]}</span>
      <span class="auth-comm-lang es">${c.authCommLangs[1]}</span>
    </div>`;

  document.getElementById('auth-cta-inner').innerHTML = `
    <div class="auth-cta-pill">${c.authCtaLabel}</div>
    <div class="auth-cta-heading">${c.authCtaHeading[0]}<span>${c.authCtaHeading[1]}</span></div>
    <div class="auth-cta-sub">${c.authCtaSub}</div>
    <button class="auth-cta-btn" data-scroll-to="contact">${c.authCtaBtn}</button>`;

  // Loads gallery text (bilingual)
  const loadsLabel = document.getElementById('loads-label');
  if (loadsLabel) {
    loadsLabel.textContent = c.loadsLabel;
    document.getElementById('loads-title').innerHTML = `${c.loadsTitle[0]}<span>${c.loadsTitle[1]}</span>`;
    document.getElementById('loads-desc').textContent = c.loadsDesc;
  }

  setupCounters();
  if (!authLayoutDone) {
    authLayoutDone = true;
    setupAuthorityAnimations();
    initLoadsSlider();
  }
}

function initLoadsSlider() {
  const track = document.getElementById('loads-track');
  if (!track || loadsSliderDone) return;
  loadsSliderDone = true;

  const slides = track.querySelectorAll('.loads-slide');
  const total = slides.length;
  let current = 0;

  const dotsEl = document.getElementById('loads-dots');
  const counterEl = document.getElementById('loads-counter');

  dotsEl.innerHTML = Array.from({ length: total }, (_, i) =>
    `<button class="loads-dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl.querySelectorAll('.loads-dot').forEach((d, i) => d.classList.toggle('active', i === current));
    if (counterEl) counterEl.textContent = `${current + 1} / ${total}`;
  }

  document.getElementById('loads-prev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('loads-next').addEventListener('click', () => goTo(current + 1));
  dotsEl.addEventListener('click', (e) => {
    const dot = e.target.closest('.loads-dot');
    if (dot) goTo(parseInt(dot.dataset.idx));
  });
}

function setupCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.auth-stat-num[data-target]').forEach((el) => obs.observe(el));
}

function setupAuthorityAnimations() {
  const wrappers = ['auth-stats-belt', 'auth-journey-wrap', 'auth-trust-wrap', 'auth-brokers-wrap', 'auth-community-wrap', 'loads-gallery-wrap', 'auth-cta-wrap'];
  wrappers.forEach((id) => {
    const el = document.querySelector('.' + id);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
  });

  document.querySelectorAll('.auth-tl-item, .auth-broker-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}

function render() {
  const c = content[lang];
  const isHome = !!document.getElementById('hero-title');
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.langBtn === lang);
  });

  // Nav: dropdown grouping home sections + standalone journey link
  const sectionIds = ['services', 'about', 'contact'];
  const dropdownItems = c.navLinks.map((l, i) =>
    isHome
      ? `<a href="#" data-scroll-to="${sectionIds[i]}">${l}</a>`
      : `<a href="/#${sectionIds[i]}">${l}</a>`
  ).join('');
  const journeyLink = isHome
    ? `<a href="our-journey">${c.navJourney}</a>`
    : `<a href="/" class="nav-link-active">${c.navJourney}</a>`;
  document.getElementById('nav-links').innerHTML =
    `<div class="nav-dropdown" id="nav-dropdown">` +
    `<button class="nav-dropdown-btn" id="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">` +
    `${c.navDropdownLabel}<span class="nav-dropdown-arrow">▾</span></button>` +
    `<div class="nav-dropdown-menu" role="menu">${dropdownItems}</div></div>` +
    journeyLink;
  document.getElementById('mobile-menu-links').innerHTML = dropdownItems + journeyLink;
  document.getElementById('nav-cta').textContent = c.navCta;
  document.getElementById('mobile-menu-cta').textContent = c.navCta;

  if (isHome) {
    document.getElementById('hero-title').innerHTML =
      `${c.heroTitle[0]}<span>${c.heroTitle[1]}</span><br>${c.heroTitle[2]}<span>${c.heroTitle[3]}</span>`;
    document.getElementById('hero-sub').innerHTML = c.heroSub
      .map((item) => `<li style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,0.85);font-size:16px"><span style="color:var(--green);font-weight:700;font-size:18px">✓</span> ${item}</li>`)
      .join('');
    document.getElementById('hero-cta2').textContent = c.heroCta2;

    document.getElementById('serv-label').textContent = c.servLabel;
    document.getElementById('serv-title').innerHTML = `${c.servTitle[0]}<span>${c.servTitle[1]}</span>`;
    document.getElementById('serv-desc').textContent = c.servDesc;
    document.getElementById('services-grid').innerHTML = c.services.map((s, i) => `
      <div class="service-card">
        <img src="${cardImgs[i]}" alt="${s.title}" class="service-card-photo" style="object-position:${imgPos[i]}"/>
        <div class="service-card-body">
          <div class="service-card-header"><div class="service-title">${s.title}</div></div>
          <p class="service-desc">${s.desc}</p>
        </div>
      </div>`).join('');

    document.getElementById('banner1-title').textContent = c.banner1Title;
    document.getElementById('banner1-sub').textContent = c.banner1Sub;

    document.getElementById('about-label').textContent = c.aboutLabel;
    document.getElementById('about-title').innerHTML = `${c.aboutTitle[0]}<span>${c.aboutTitle[1]}</span>`;
    document.getElementById('about-desc').textContent = c.aboutDesc;
    document.getElementById('about-cards').innerHTML = [c.mission, c.vision, c.focus].map((item) => `
      <div class="about-card">
        <div class="about-card-title">${item.title}</div>
        <p class="about-card-text">${item.text}</p>
      </div>`).join('');

    document.getElementById('testi-label').textContent = c.testiLabel;
    document.getElementById('testi-title').innerHTML = `${c.testiTitle[0]}<span>${c.testiTitle[1]}</span>`;
    document.getElementById('testi-subtitle').textContent = c.testiSubtitle;
    document.getElementById('testimonials-grid').innerHTML = c.testimonials.map((t) => `
      <div class="testimonial-card">
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.name[0]}</div>
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-role">${t.role}</div>
          </div>
        </div>
      </div>`).join('');

    document.getElementById('contact-label').textContent = c.contactLabel;
    document.getElementById('contact-title').innerHTML = `${c.contactTitle[0]}<span>${c.contactTitle[1]}</span>`;
    document.getElementById('contact-desc').textContent = c.contactDesc;
    document.getElementById('form-title').textContent = c.formTitle;
    document.getElementById('form-label-name').textContent = c.formName;
    document.getElementById('form-label-company').textContent = c.formCompany;
    document.getElementById('form-label-email').textContent = c.formEmail;
    document.getElementById('form-label-phone').textContent = c.formPhone;
    document.getElementById('form-label-message').textContent = c.formMsg;
    document.getElementById('form-submit-btn').textContent = c.formSubmit;
    document.getElementById('form-success-title').textContent = c.formSuccess.title;
    document.getElementById('form-success-text').textContent = c.formSuccess.text;
  }

  // Journey page header (only on our-journey.html)
  const jpTitle = document.getElementById('jp-title');
  if (jpTitle) {
    document.getElementById('jp-label').textContent = c.jpLabel;
    jpTitle.innerHTML = `${c.jpTitle[0]}<span>${c.jpTitle[1]}</span>`;
    document.getElementById('jp-desc').textContent = c.jpDesc;
  }

  document.getElementById('footer-copy').textContent = c.footerCopy;

  initAuthority();

  document.querySelectorAll('[data-scroll-to]').forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      toggleMobileMenu(false);
      if (isHome) {
        scrollToSection(el.dataset.scrollTo);
      } else {
        window.location.href = '/#' + el.dataset.scrollTo;
      }
    };
  });
}

function setLang(next) {
  lang = next;
  localStorage.setItem('bfs-lang', lang);
  render();
}

document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.langBtn));
});

window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

function toggleMobileMenu(force) {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const open = force !== undefined ? force : !menu.classList.contains('open');
  toggle.classList.toggle('open', open);
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  menu.setAttribute('aria-hidden', !open);
}

document.getElementById('nav-toggle').addEventListener('click', () => toggleMobileMenu());

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    toggleMobileMenu(false);
    closeDropdown();
  }
});

function closeDropdown() {
  const dd = document.getElementById('nav-dropdown');
  if (!dd) return;
  dd.classList.remove('open');
  const btn = dd.querySelector('.nav-dropdown-btn');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// Dropdown toggle — delegated on nav to survive innerHTML replacement in render()
document.getElementById('nav').addEventListener('click', (e) => {
  const btn = e.target.closest('#nav-dropdown-btn');
  if (!btn) return;
  const dd = document.getElementById('nav-dropdown');
  if (!dd) return;
  const open = !dd.classList.contains('open');
  dd.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
  e.stopPropagation();
});

// Close dropdown on outside click
document.addEventListener('click', closeDropdown);

document.querySelectorAll('.hero-inner, .services-header, .about-grid, .testimonials-header, .contact-grid').forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'all 0.6s ease';
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      el.style.opacity = 1;
      el.style.transform = 'none';
      obs.disconnect();
    }
  }, { threshold: 0.15 });
  obs.observe(el);
});

const form = document.getElementById('quote-form');

if (form) {
const formError = document.getElementById('form-error');
const submitBtn = document.getElementById('form-submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const c = content[lang];
  const data = Object.fromEntries(new FormData(form).entries());

  formError.style.display = 'none';
  submitBtn.disabled = true;
  submitBtn.textContent = c.formSubmitting;

  try {
    const res = await fetch(`${BACKEND_URL}/api/quote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Request failed');

    document.getElementById('form-card').querySelector('form').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  } catch (err) {
    formError.textContent = c.formError;
    formError.style.display = 'block';
    submitBtn.disabled = false;
    submitBtn.textContent = c.formSubmit;
  }
});
} // end if (form)

render();
