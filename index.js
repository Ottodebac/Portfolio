document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("about-btn");
  const contactLink = document.getElementById("show-contact-btn");
  const workBtn = document.getElementById("work-btn");
  const aboutSection = document.getElementById("about-section");
  const contactSection = document.getElementById("contact-section");
  const projectSection = document.getElementById("projects");
  const heroSection = document.getElementById("hero-section");

  // Hide the other sections initially
  aboutSection.style.display = "none";
  contactSection.style.display = "none";

  // Add event listeners to the links
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("test");
    aboutSection.style.display = "block";
    contactSection.style.display = "none";
    projectSection.style.display = "none";
    heroSection.style.display = "none";
    activateLink("about-btn");
  });

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    contactSection.style.display = "block";
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    heroSection.style.display = "none";
    activateLink("show-contact-btn");
  });

  workBtn.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
    projectSection.style.display = "block";
    heroSection.style.display = "block";
    activateLink("work-btn");
  });

  function activateLink(linkId) {
    const activeLink = document.querySelector(".navbar a.active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }
    const link = document.getElementById(linkId);
    link.classList.add("active");
  }
});
