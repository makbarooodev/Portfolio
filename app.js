const projects = [
  "https://makbarooo.pages.dev",
  "https://makbarooo.pages.dev",
  "https://makbarooo.pages.dev",
  "https://makbarooo.pages.dev",
  "https://makbarooo.pages.dev"
];

const API_KEY = "ubx_sk_3JdtzE17LnEHwoW27kWvfDMrDmtR4vbr";

const imgs = document.querySelectorAll(".preview");

imgs.forEach((img, index) => {

  const refresh = Date.now();

  const target = new URL(projects[index]);

  target.searchParams.set("preview", refresh);

  const url = encodeURIComponent(target.toString());

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

      <section class="about-english">

  <header>
    <h3>Frontend Developer &amp; Web Designer</h3>

    <p>
      I build
      <strong>responsive, visually engaging, and interactive websites</strong>
      with a strong focus on visual design, user experience, and interface details.
    </p>
  </header>


  <section>
    <h4>What I Do</h4>

    <ul>
      <li>Build responsive websites with HTML and CSS</li>
      <li>Design clean and engaging web interfaces</li>
      <li>Create visual concepts and illustrations</li>
      <li>Develop smooth animations and interactions</li>
      <li>Adapt interfaces across different screen sizes</li>
      <li>Test and refine website functionality</li>
    </ul>
  </section>


  <section>
    <h4>Skills</h4>

    <ul>
      <li>
        <strong>Frontend:</strong>
        HTML, CSS, responsive layouts
      </li>

      <li>
        <strong>UI &amp; Visual Design:</strong>
        interface design, visual composition, illustrations
      </li>

      <li>
        <strong>Motion Design:</strong>
        animations, transitions, interaction concepts
      </li>

      <li>
        <strong>Problem Solving:</strong>
        debugging, code organization, systematic development
      </li>

      <li>
        <strong>Deployment &amp; Version Control:</strong>
        GitHub, website deployment
      </li>
    </ul>
  </section>


  <section>
    <h4>Design Approach</h4>

    <p>
      I often begin with a <strong>visual concept</strong> before implementing
      a website. I use visual and motion design to explore layouts,
      interactions, and animations, then translate those concepts into
      functional web interfaces.
    </p>
  </section>


  <section>
    <h4>Tools</h4>

    <ul>
      <li><strong>Acode:</strong> web development</li>
      <li><strong>Alight Motion:</strong> visual concepts and motion design</li>
      <li><strong>GitHub:</strong> project management and version control</li>
    </ul>
  </section>


  <section>
    <h4>Experience</h4>

    <p>
      I have built and deployed my own websites, maintained projects through
      GitHub, and developed visual concepts alongside their implementation.
    </p>
  </section>


  <section>
    <h4>Currently Learning</h4>

    <p>
      My current focus is frontend development while expanding into
      <strong>JavaScript, PHP, backend development, and databases</strong>
      to eventually build more complete and functional web applications.
    </p>
  </section>

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
Bandung, Indonesia.
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

<form>

<select name="input-type" class="input-option" required>

<option value="" disabled selected>
Select a purpose
</option>

<option value="wa"><i class="fa-brands fa-whatsapp"></i>WhatsApp</option>
<option value="mail">Email</option>
<option value="sms">SMS</option>
<option value="dis">Discord</option>
<option value="ig">Instagram</option>

</select>

<br>

<input class="input-name" type="text" name="name" placeholder="Name" required>

<br>

<textarea 
class="input-message" 
placeholder="Write your feedback" required>
</textarea>

<br>

<button class="input-submit" type="submit">
Send
<i class="ph-fill ph-paper-plane-right"></i>
</button>

</form>

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