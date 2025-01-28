window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Add scroll-to-top button behavior
  document.addEventListener("scroll", function () {
    const scrollDistance = window.scrollY;
    const scrollTopButton = document.querySelector(".scroll-to-top");
    if (scrollTopButton) {
      if (scrollDistance > 100) {
        scrollTopButton.style.display = "block";
      } else {
        scrollTopButton.style.display = "none";
      }
    }
  });

  // Smooth scrolling for anchor links
  document
    .querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          const target =
            document.querySelector(this.hash) ||
            document.querySelector(`[name=${this.hash.slice(1)}]`);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 71,
              behavior: "smooth",
            });
          }
        }
      });
    });

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Floating label form behavior
  const floatingLabelGroups = document.querySelectorAll(
    ".floating-label-form-group"
  );
  floatingLabelGroups.forEach((group) => {
    const inputs = group.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        group.classList.toggle(
          "floating-label-form-group-with-value",
          input.value.length > 0
        );
      });
      input.addEventListener("focus", () => {
        group.classList.add("floating-label-form-group-with-focus");
      });
      input.addEventListener("blur", () => {
        group.classList.remove("floating-label-form-group-with-focus");
      });
    });
  });

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
