// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});



// PARTICLES
const container = document.querySelector(".particles");

for(let i=0;i<40;i++){
  let span = document.createElement("span");
  span.style.left = Math.random()*100+"vw";
  span.style.animationDuration = (5+Math.random()*5)+"s";
  container.appendChild(span);
}

// TYPING EFFECT
const text = "Hi I'm Rinki 🌸";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// CURSOR GLOW
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
