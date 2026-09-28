let saldoAwal = prompt('Masukan saldo awal anda ');
let saldoTerpakai = prompt('Masuka saldo yang ingin di pakai ')
let saldoAkhir

saldoAkhir = saldoAwal - saldoTerpakai

alert('Sisa saldo anda adalah ' + saldoAkhir)

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

// Gandakan semua card
carousel.innerHTML += carousel.innerHTML;

setInterval(() => {
  carousel.scrollBy({
    left: 200,
    behavior: "smooth"
  });

  // Kalau sudah melewati setengah carousel,
  // kembali ke posisi awal tanpa terlihat
  if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
    carousel.scrollLeft = 0;
  }
}, 8000);