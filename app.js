const projects = [
  "https://makbarooodev.page.gd/",
  "https://example-project-2.com/",
  "https://example-project-3.com/"
];

const imgs = document.querySelectorAll(".preview");

imgs.forEach((img, index) => {
  img.src =
    "https://api.webstractor.com/v1/screenshot?url=" +
    encodeURIComponent(projects[index]) +
    "&width=1280&height=720&format=png";
});