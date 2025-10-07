// When the page loads, show the current year in the footer
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector("footer p");
  footer.innerHTML = `© ${year} My Portfolio. All rights reserved.`;
});
