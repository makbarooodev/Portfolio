const img = document.querySelector("#preview");

img.src =
  "https://api.webstractor.com/v1/screenshot?url=https%3A%2F%2Fmakbarooodev.page.gd%2F&width=1280&height=720&format=png&t=" +
  Date.now();