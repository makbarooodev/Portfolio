const projects = [
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/"
];

const imgs = document.querySelectorAll(".preview");

imgs.forEach(async (img, index) => {
  const url = new URL(
    "https://api.webstractor.com/v1/screenshot"
  );

  url.searchParams.set("url", projects[index]);
  url.searchParams.set("width", "1280");
  url.searchParams.set("height", "720");
  url.searchParams.set("format", "png");

  const response = await fetch(url, {
    headers: {
      Authorization: "Bearer ext_live_KUOV3rZ8tAkGNcq1Ho0tCWhG"
    }
  });

  if (!response.ok) {
    console.error(`Project ${index + 1}:`, response.status);
    return;
  }

  const blob = await response.blob();

  img.src = URL.createObjectURL(blob);
});

