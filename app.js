const image = document.querySelector("#project-image");

const apiKey = "lYFxCqtE9qt5lw";
const websiteUrl = "https://makbarooodev.netlify.app/";

const apiUrl =
  "https://api.screenshotone.com/take" +
  "?access_key=" + apiKey +
  "&url=" + encodeURIComponent(websiteUrl);

image.src = apiUrl;