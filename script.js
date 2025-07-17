// ScrollReveal Animations
ScrollReveal().reveal('section h2', { origin: 'left', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('section p, .project-card, form', { origin: 'bottom', distance: '50px', duration: 1000, delay: 300 });

// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
      card.style.display = (category === "all" || cardCategory === category) ? "block" : "none";
    });
  });
});
