// Hamburger menu toggle logic
class Navbar {
    constructor(hamburgerId, navLinksId) {
      this.hamburger = document.getElementById(hamburgerId);
      this.navLinks = document.getElementById(navLinksId);
      this.initEvents();
    }
  
    // Setup event listener
    initEvents() {
      this.hamburger.addEventListener('click', () => {
        this.toggleNavbar();
      });
    }
  
    // Toggle 'active' class to show/hide menu
    toggleNavbar() {
      this.navLinks.classList.toggle('active');
      console.log("Hamburger menu toggled");
    }
  }
  
  // Initialize the navbar when DOM content is loaded
  document.addEventListener("DOMContentLoaded", () => {
    new Navbar('hamburger', 'nav-links');
  });
  