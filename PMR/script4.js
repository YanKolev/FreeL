// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector(".mobile-nav");

mobileMenuButton.addEventListener("click", () => {
  // Toggle mobile menu
  mobileNav.classList.toggle("show");

  // Toggle icon (bars/times)
  const icon = mobileMenuButton.querySelector("i");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking on a link
const mobileNavLinks = mobileNav.querySelectorAll("a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");

    // Reset icon
    const icon = mobileMenuButton.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    // Skip if it's just a "#" link
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
