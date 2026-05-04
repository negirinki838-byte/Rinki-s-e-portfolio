// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// PDF VIEW
function openPDF(file) {
  document.getElementById("pdfModal").style.display = "block";
  document.getElementById("pdfFrame").src = file;
}

function closePDF() {
  document.getElementById("pdfModal").style.display = "none";
}
