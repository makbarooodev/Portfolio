let hari = new Date().getDate()

hari[1] = 'senin'
hari[2] = 'selasa'
hari[3] = 'rabu'
hari[3] = 'rabu'
hari[3] = 'rabu'

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

carousel.innerHTML += carousel.innerHTML;

setInterval(() => {
  carousel.scrollBy({
    left: 200,
    behavior: "smooth"
  });
  
  if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
    carousel.scrollLeft = 0;
  }
}, 8000);