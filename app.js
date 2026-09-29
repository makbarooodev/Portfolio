const projects = [
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/",
  "https://makbarooodev.page.gd/"
];

const imgs = document.querySelectorAll(".preview");

imgs.forEach(async (img, index) => {
  const endpoint = new URL(
    "https://api.webstractor.com/v1/screenshot"
  );

  endpoint.searchParams.set("url", projects[index]);
  endpoint.searchParams.set("width", "1280");
  endpoint.searchParams.set("height", "720");
  endpoint.searchParams.set("format", "png");

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: "Bearer ext_live_KUOV3rZ8tAkGNcq1Ho0tCWhG"
      }
    });

    if (!response.ok) {
      img.alt = `Error ${response.status}`;
      return;
    }

    const blob = await response.blob();

    img.src = URL.createObjectURL(blob);

  } catch (error) {
    img.alt = "Gagal mengambil screenshot";
  }
});

const links = document.querySelectorAll("nav a");
const main = document.querySelector("main");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const page = link.dataset.page;

        if (page === "about") {
            main.innerHTML = `
            <div class="box-about">
            <img src="/img/bg-profile.jpg">
            </div>
            `;
        }
      
        if (page === "contact") {
            main.innerHTML = "<h1>Contact</h1>";
        }

        if (page === "project") {
            main.innerHTML = "<h1>Home</h1>";
        }
    });
});