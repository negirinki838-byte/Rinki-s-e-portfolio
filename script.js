// TYPING
const text = "Rinki Negi";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#00ffcc" },
    size: { value: 3 },
    move: { speed: 2 }
  }
});
