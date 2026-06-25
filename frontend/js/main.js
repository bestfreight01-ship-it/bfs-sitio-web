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
    footerCopy: "© 2026 Best Freight Solutions. All rights reserved."
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
    footerCopy: "© 2026 Best Freight Solutions. Todos los derechos reservados."
  }
};

const cardImgs = ['images/Imagen2.png', 'images/Imagen3-9fd2565e.png', 'images/Imagen4.png', 'images/5.png'];
const imgPos = ['center 30%', 'center 20%', 'center 60%', 'center 40%'];

let lang = localStorage.getItem('bfs-lang') || 'en';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
}

function render() {
  const c = content[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.langBtn === lang);
  });

  const sectionIds = ['services', 'about', 'contact'];
  document.getElementById('nav-links').innerHTML = c.navLinks
    .map((l, i) => `<a href="#" data-scroll-to="${sectionIds[i]}">${l}</a>`).join('');
  document.getElementById('mobile-menu-links').innerHTML = c.navLinks
    .map((l, i) => `<a href="#" data-scroll-to="${sectionIds[i]}">${l}</a>`).join('');
  document.getElementById('nav-cta').textContent = c.navCta;
  document.getElementById('mobile-menu-cta').textContent = c.navCta;

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

  document.getElementById('footer-copy').textContent = c.footerCopy;

  document.querySelectorAll('[data-scroll-to]').forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      document.getElementById('mobile-menu').classList.remove('open');
      document.getElementById('nav-toggle').classList.remove('open');
      scrollTo(el.dataset.scrollTo);
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

document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-toggle').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
});

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

render();
