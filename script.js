
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-fadein");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.2 }); // trigger when 20% visible

  cards.forEach(card => observer.observe(card));
});

  
  

