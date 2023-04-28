document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("show-about-btn");
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
    console.log(test);
    aboutSection.style.display = "block";
    contactSection.style.display = "none";
    projectSection.style.display = "none";
    heroSection.style.display = "none";
  });

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    contactSection.style.display = "block";
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    heroSection.style.display = "none";
  });

  workBtn.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
    projectSection.style.display = "block";
    heroSection.style.display = "block";
  });
});
