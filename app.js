let cintaAbai = prompt('Cinta abai berapa persen?')
let cintNupie = prompt('Cinta nupie berapa persen?')

if (cintaAbai == cintNupie) 
{
  alert('Kita pacaran')
}
else 
{
  
}

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