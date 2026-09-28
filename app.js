let cintaAbai = prompt('Cinta abai berapa persen?')
let cintNupie = prompt('Cinta nupie berapa persen?')

if (cintaAbai == cintaNupie) 
{
  alert('Kita pacaran')
}
else 
{
  alert('Maaf berarti kita bukan jodoh :(') 
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
    "https://api.site-shot.com/?url=" +
    encodeURIComponent(projects[index]) +
    "userkey="+ "&width=1280&height=720&format=png";
});

