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

setInterval(() => {
  if (
    carousel.scrollLeft + carousel.clientWidth >=
    carousel.scrollWidth
  ) {
    carousel.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    carousel.scrollBy({
      left: carousel.scrollLeft + 250,
      behavior: "smooth"
    });
  }
}, 5000);