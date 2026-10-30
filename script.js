(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navigation.classList.contains("is-open")) {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 701px)").matches) closeMenu();
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");

  // Replace this clearly marked placeholder with the company's monitored email address.
  const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

  if (form && feedback) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      feedback.textContent = "";

      const fields = [...form.querySelectorAll("input[required], select[required], textarea[required]")];
      let firstInvalid = null;

      fields.forEach((field) => {
        const valid = field.checkValidity();
        field.setAttribute("aria-invalid", String(!valid));
        if (!valid && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        feedback.textContent = "Please check the highlighted fields and complete the form.";
        firstInvalid.focus();
        return;
      }

      if (CONTACT_EMAIL === "YOUR_EMAIL@example.com") {
        feedback.textContent = "Form is valid. Website owner: replace YOUR_EMAIL@example.com in script.js before using the email action.";
        return;
      }

      const data = new FormData(form);
      const subject = `House Of BN enquiry — ${data.get("interest")}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Interest: ${data.get("interest")}`,
        "",
        "Message:",
        data.get("message")
      ].join("\n");

      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      feedback.textContent = "Your email app should open with the message prepared. Review and send it there.";
    });

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("input", () => {
        if (field.checkValidity()) field.removeAttribute("aria-invalid");
      });
      field.addEventListener("change", () => {
        if (field.checkValidity()) field.removeAttribute("aria-invalid");
      });
    });
  }
})();
