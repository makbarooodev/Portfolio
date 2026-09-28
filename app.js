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
    "&api_key=ext_live_KUOV3rZ8tAkGNcq1Ho0tCWhG&width=1280&height=720&format=png";
});

