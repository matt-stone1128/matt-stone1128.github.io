const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

document.querySelector("#year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation",
  );
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    siteNav.classList.remove("is-open");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const fields = new FormData(contactForm);
  const subject = encodeURIComponent(
    `Remodeling inquiry: ${fields.get("project")}`,
  );
  const body = encodeURIComponent(
    `Name: ${fields.get("name")}\nEmail: ${fields.get("email")}\nProject: ${fields.get("project")}\n\n${fields.get("message") || "No additional details provided."}`,
  );
  formStatus.textContent =
    "Your email app is opening with your project details ready to send.";
  window.location.href = `mailto:matt@stoneconstruction.biz?subject=${subject}&body=${body}`;
});
