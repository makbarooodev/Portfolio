const projects = [
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/"
];

const imgs = document.querySelectorAll(".preview");

imgs.forEach((img, index) => {
  img.src =
    "https://api.webstractor.com/v1/screenshot?url=" +
    encodeURIComponent(projects[index]) +
    "&width=1280&height=720&format=png";
});

const carousel = document.querySelector(".list-project");

// Simpan card asli
const cards = [...carousel.children];

// Gandakan otomatis
cards.forEach(card => {
  carousel.appendChild(card.cloneNode(true));
});

let position = 0;

setInterval(() => {
  position += 200;

  carousel.scrollTo({
    left: position,
    behavior: "smooth"
  });

  // Setelah melewati kumpulan pertama,
  // pindahkan posisi tanpa mengubah tampilan
  if (position >= carousel.scrollWidth / 2) {
    position = 0;

    setTimeout(() => {
      carousel.scrollLeft = 0;
    }, 500);
  }
}, 5000);