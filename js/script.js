const header = document.querySelector("header");
const footer = document.querySelector("footer"); 


/*  **********************   *
        ONE     HEADER
 *  **********************   */
header.innerHTML = `

<div class="logo">
<img class="img" src="assets/imgs/triqueta.png" alt="triqueta">
<a href="index.html">
    <h2><span>CodeAr</span>Tech</h2>
</a>
</div>

<button class="abrir" id="abrir">
<i class="fa-solid fa-bars" style="color: #000000;"></i>
</button>

<!-- Menú -->
<nav class="nav" id="nav">
<button class="cerrar" id="cerrar">
    <i class="fa-solid fa-xmark" style="color: #e3eaf4;"></i>
</button>
<ul class="nav-list">
    <li id="myLinks"><a href="know_us.html"><i>Conocenos</i></a></li>
    <li id="myLinks"><a href="success_stories.html"><i>Casos de éxito</i></a></li>
    <li id="myLinks"><a href="contact_us.html"><i>Contactanos</i></a></li>
    <li id="myLinks"><a href=""><i>Codeemos</i></a></li>
</ul>
</nav>
<!--  THEME  -->
<label class="switch">
<input type="checkbox" id="deslizar" checked>
<span class="deslizar"></span>
</label>
`;

/*  **********************   *
        ONE     FOOTER
 *  **********************   */
footer.innerHTML = `

<div class="footer_img">
<img src="assets/imgs/triqueta.png" alt="triqueta">
</div>
<div class="copyright">
<h2><span>CodeAr</span>Tech</h2></a> <br>
<i>
    <p>Code Argentina Tech S.R.L </p> <br>
    <p> <!--  script que actualiza el año al actual  -->
        <script type="text/javascript">
            copyright = new Date();
            update = copyright.getFullYear(); document.write("© " + update + " " + "@All rights reserved");
        </script>
    </p><br>
</i>
</div>
<div class="casos">
<a href="success_stories.html">Casos de éxito</a>
</div>
<div class="valor">
<a href="">Aportando valor...</a>
</div>
<div class="conocenos">
<a href="know_us.html">Conocenos!</a>
</div>
<div class="contactanos">
<a href="">Contactanos</a>
</div>
<div class="redes">
<a href="https://www.instagram.com/" target="_blank">
    <i class="fa-brands fa-instagram fa-lg" style="color: #ffffff;"></i>
</a>
<a href="https://twitter.com" target="_blank">
    <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
</a>
<a href="https://www.linkedin.com" target="_blank">
    <i class="fa-brands fa-linkedin" style="color: #ffffff;"></i>
</a>
<a href="https://discord.com" target="_blank">
    <i class="fa-brands fa-discord" style="color: #ffffff;"></i>
</a>
<a href="https://web.telegram.org" target="_blank">
    <i class="fa-brands fa-telegram" style="color: #ffffff;"></i>
</a>
<br>
<a href="">English </a>|<a href=""> Español</a>

</div>
`;