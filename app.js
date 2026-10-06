const projects = [
  "https://makbarooo.pages.dev",
  "https://makbarooo.pages.dev",
  "https://makbarooo.pages.dev",
  "https://makbarooo.pages.dev",
  "https://makbarooo.pages.dev"
];

const API_KEY = "ubx_wf5f2fJ3ZWQPeMVG";

const imgs = document.querySelectorAll(".preview");

imgs.forEach((img, index) => {

  const url = encodeURIComponent(projects[index]);

  const screenshot = 
    `https://api.urlbox.com/v1/${API_KEY}/png` +
    `?url=${url}` +
    `&width=1280` +
    `&height=720`;

  img.src = screenshot;

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

    <img
      src="/img/bg-profile.jpg"
      alt="Background-profile"
      id="bg-image"
    >

    <img
      src="/img/circle-photo.png"
      alt="circle-photo"
      id="photo-profile"
    >

    <div id="circle-bg"></div>

    <article id="about-me">

      <h2>About Me</h2>

      <!-- English Version -->
      <section class="about-english">

        <h3>Frontend Developer &amp; Web Designer</h3>

        <br>

        <p>
          I am a Frontend Developer &amp; Web Designer focused on creating
          responsive, visually engaging, and interactive web experiences.
        </p>

        <br>

        <p>
          I approach projects from a visual perspective. Before implementing
          a website, I often develop illustrations or design concepts first,
          allowing me to build interfaces with a clear visual direction
          rather than simply writing code.
        </p>

        <br>

        <p>
          My strengths are in
          <strong>
            visual design, responsive layouts, smooth animations,
            and attention to interface details
          </strong>.
          I also pay attention to how a website actually behaves by testing
          interactions, checking functionality, and reviewing the interface
          across different screen sizes.
        </p>

        <br>

        <p>
          When working with code, I approach problems systematically.
          I carefully trace my code from top to bottom to identify
          inconsistencies and reduce avoidable errors. When something
          doesn't work as expected, I'm willing to revise, restructure,
          or rebuild parts of the project to achieve a cleaner result.
        </p>

        <br>

        <p>
          I already have experience building and deploying my own websites,
          maintaining projects through GitHub, and developing designs and
          illustrations alongside the implementation.
        </p>

        <br>

        <p>
          Currently, my main focus is frontend development, while I continue
          expanding my skills into
          <strong>
            JavaScript, PHP, backend development, and databases
          </strong>
          to eventually build more complete and functional web applications.
        </p>

      </section>

    </article>

    <p class="quote">
      My goal is not simply to make a website work, but to create an
      interface that looks intentional, feels responsive, and represents
      the purpose of the project clearly.
    </p>

  </div>
`;
        }
      
        if (page === "contact") {
            main.innerHTML = `
<section class="box-contact">


<div class="card-contact">

<div class="list-contact">

<h4>Muhammad Akbar Oktabian</h4>

<a href="#" class="tlp">
<i class="fa-brands fa-whatsapp"></i>
+62 838 2738 2781
</a>
<br>
<a href="#" class="git">
<i class="fa-brands fa-github"></i>
Makbarooodev
</a>
<br>
<a href="#" class="loc">
<i class="fa-solid fa-location-dot"></i>
Bandung, indonesia.
</a>
<br>
<a href="#" class="mail">
<i class="fa-regular fa-envelope"></i>
makbarooo2009@gmail.com
</a>

</div>

<img src="img/pass-photo.jpg" alt="Muhammad Akbar Oktabian in junior high school">

</div>



<div class="box-critics">

<h2>Criticism &<br>Suggestions</h2>

<div class="input-critics">

<option name="input-type" class="option">
<select value="wa"></select>
<select value="mail"></select>
<select value="sms"></select>
<select value="dis"></select>
<select value=""></select>
</option>

</div>

</div>

</section>
            `;
        }

        if (page === "project") {
            main.innerHTML = "<h1>Home</h1>";
        }
    });
});