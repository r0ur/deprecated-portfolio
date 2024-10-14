const aboutLink = document.getElementById("about-link");
const aboutSection = document.getElementById("about-section");

aboutLink.addEventListener("click", (event) => {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
