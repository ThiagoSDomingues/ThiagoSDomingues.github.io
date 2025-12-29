const translations = {
  en: {
    nav_about: "About",
    nav_research: "Research",
    nav_projects: "Projects",
    nav_contact: "Contact",
    about_title: "About Me",
    about_text:
      "I am a physicist working at the intersection of Bayesian inference, high-energy nuclear physics, and modern computational methods.",
    research_title: "Research Interests",
    r1: "Bayesian inference and uncertainty quantification",
    r2: "Relativistic hydrodynamics and heavy-ion collisions",
    r3: "Emulators, surrogate models, and AI for physics",
    projects_title: "Projects",
    projects_text:
      "Selected research projects, open-source codes, and scientific visualizations.",
    contact_title: "Contact"
  },

  pt: {
    nav_about: "Sobre",
    nav_research: "Pesquisa",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    about_title: "Sobre mim",
    about_text:
      "Sou físico e trabalho na interseção entre inferência Bayesiana, física nuclear de altas energias e métodos computacionais modernos.",
    research_title: "Interesses de Pesquisa",
    r1: "Inferência Bayesiana e quantificação de incertezas",
    r2: "Hidrodinâmica relativística e colisões de íons pesados",
    r3: "Emuladores, modelos substitutos e IA para física",
    projects_title: "Projetos",
    projects_text:
      "Projetos de pesquisa selecionados, códigos open-source e visualizações científicas.",
    contact_title: "Contato"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}
