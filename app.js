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

            <a href="index.html" id="to-home">
            <i class="ph-bold ph-arrow-left"></i>
            Home
            </a>
            
            <img src="/img/bg-profile.jpg" alt="Background-profile"
            id="bg-image">
            
            <img src="/img/circle-photo.png" alt="circle-photo" id="photo-profile">

            <div id="circle-bg"></div>

            <p>
            Frontend Developer & Web Designer focused on creating responsive, visually engaging, and interactive web experiences.
I approach projects from a visual perspective. Before implementing a website, I often develop illustrations or design concepts first, allowing me to build interfaces with a clear visual direction rather than simply writing code.
My strengths are in visual design, responsive layouts, smooth animations, and attention to interface details. I also pay attention to how a website actually behaves by testing interactions, checking functionality, and reviewing the interface across different screen sizes.
When working with code, I approach problems systematically. I carefully trace my code from top to bottom to identify inconsistencies and reduce avoidable errors. When something doesn't work as expected, I'm willing to revise, restructure, or rebuild parts of the project to achieve a cleaner result.
I already have experience building and deploying my own websites, maintaining projects through GitHub, and developing designs and illustrations alongside the implementation.
Currently, my main focus is frontend development, while I continue expanding my skills into JavaScript, PHP, backend development, and databases to eventually build more complete and functional web applications.
            </p>
            
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