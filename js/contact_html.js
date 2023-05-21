const contact = document.querySelector(".section");


/*  **********************   *
        ONE  CONTACT  FORM 
 *  **********************   */
contact.innerHTML = `

<!--      Titulo - title       -->
<div class="section-1">
    <h1>Listo para un nuevo desafio?</h1>
    <!--    Descripcion - description  -->
    <p><b> Hablanos y hacenos saber como podemos ayudarte . . .</b></p>
    <p> <b>Nuestros especialistas se pondran en contacto para intercambiar ideas.</b></p>
</div>

<!--   main     contact     form    -->
<div class=" section-2 codear-info">
    <h2><span>CodeAr</span>Tech</h2>
    <ul>
        <li><i class="fa-solid fa-road"></i><i> Junto al lago, Cordoba</i></li>
        <li><i class="fa-brands fa-whatsapp fa-lg"></i><i> (+54) 9 11 555-5555</i></li>
        <li><i class="fa-solid fa-envelope"></i> <i>codear-info@email.com</i></li>
    </ul>
</div>

<div class="section-3 contact">
    <h3>Completa el formulario</h3>
    <br>
    <form action="https://formspree.io/f/xeqwdyjo" method="POST" class="formulario" id="formulario" autocomplete="off">

        <!-- NOMBRE -->
        <div class="formulario__grupo" id="grupo__nombre">
            <label for="nombre" class="formulario__label">Apellido y Nombre <span>*</span></label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="nombre" id="nombre" required
                    placeholder="n o m b r e   c o m p l e t o . . .">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El apellido y nombre debe ocupar de 3 a 16 dígitos y solo puede contener
                letras.</p>
        </div>

        <!-- COMPAÑIA -->
        <div class="formulario__grupo" id="grupo__compania">
            <label for="compania" class="formulario__label">Compañia <span>*</span></label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="compania" id="compania" required
                    placeholder="c o m p a ñ i a . . .">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El nombre de la compañia debe ocupar de 2 a 16 dígitos y solo
                puede contener letras.</p>
        </div>

        <!-- EMAIL -->
        <div class="formulario__grupo" id="grupo__correo">
            <label for="correo" class="formulario__label">Email <span>*</span></label>
            <div class="formulario__grupo-input">
                <input type="email" class="formulario__input" name="correo" id="correo" required
                    placeholder="e m a i l . . .">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos y
                guiones.</p>
        </div>

        <!-- TELEFONO -->
        <div class="formulario__grupo" id="grupo__telefono">
            <label for="telefono" class="formulario__label">Teléfono</label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="telefono" id="telefono"
                    placeholder="n u m e r o . . .">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14
                dígitos.</p>
        </div>

        <!-- MENSAJE -->
        <div class="formulario__grupo" id="grupo__mensaje">
            <label for="mensaje" class="formulario__label">Mensaje <span>*</span></label>
            <div class="formulario__grupo-input">
                <input name="mensaje" cols="30" type="text" class="formulario__input" id="mensaje" required
                    placeholder="m e n s a j e . . ."></input>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El mensaje tiene que ser de 10 a 70 dígitos y solo puede
                contener letras.</p>
        </div>


        <div class="formulario__mensaje" id="formulario__mensaje">
            <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario
                correctamente. </p>
        </div>

        <div class="formulario__grupo" id="formulario__grupo-btn-enviar">
            <button type="submit" class="formulario__btn">Enviar</button>
            <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado
                exitosamente!</p>
        </div>

    </form>

</div>

<div class="maps">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1704.0246057972815!2d-64.3281699!3d-31.330014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329de33f7a1b4f%3A0x221536ab9a6dfabd!2sCodeAr%20Tech!5e0!3m2!1ses-419!2sar!4v1684056343639!5m2!1ses-419!2sar"
        width="" height="" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

`