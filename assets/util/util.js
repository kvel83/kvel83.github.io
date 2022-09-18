/* MODAL DINÁMICO PROYECTOS */
function proyectDetail(proyectName) {
    const modal = document.getElementById('comunModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBodyInput = modal.querySelector('.modal-body p');
    const modalImage=modal.querySelector('.modal-body img');
    const modalFooter=modal.querySelector('.modal-footer');
    if (proyectName.id=="cv") {
        modalTitle.textContent = "Currículum Vitae";
        modalBodyInput.textContent = "Primer proyecto para bootcamp Desarrollo FullStack JavaScript realizado con HTML, CSS y Bootstrap aplicando buenas prácticas de codificación y etiquetas semánticas para una correcta interpretación y revisión del código fuente. ";
        modalImage.src="assets/img/cv.png";
        modalImage.className="img-fluid pb-2";
        modalFooter.children.repositorio.href="https://github.com/kvel83/Ejercicios-Desafio-Latam/tree/main/Proyecto1(CV)";
        modalFooter.children.repositorio.target="_blank"
        return false;

    };
    if (proyectName.id=="iguana") {
        modalTitle.textContent = "Iguana Page";
        modalBodyInput.textContent = "Segundo proyecto para bootcamp Desarrollo FullStack JavaScript realizado con HTML y CSS aplicando conocimientos de posicionamiento utilizando la propiedad display y haciendo uso de clases y modelo de cajas para aplicar los formatos requeridos para cumplir con la maqueta entregada y que se debía replicar.";
        modalImage.src="assets/img/iguana.png";
        modalImage.className="img-fluid pb-2";
        modalFooter.children.repositorio.href="https://github.com/kvel83/Ejercicios-Desafio-Latam/tree/main/Proyecto3(Iguana%20Page)";
        modalFooter.children.repositorio.target="_blank"
        return false;

    };
    if (proyectName.id=="cuppon") {
        modalTitle.textContent = "Cuppon Page";
        modalBodyInput.textContent = "Tercer proyecto para bootcamp Desarrollo FullStack JavaScript realizado con HTML, CSS y Bootstrap donde la codificación de CSS se redujo al máximo usandose sólo para las propiedades que no se podían manejar con Bootstrap directamente. Se aplica diseño 'Mobile First' haciendo la página totalmente responsiva y se implementa el uso de Modal dinámico y JS para validación de formulario de contacto.";
        modalImage.src="assets/img/cuppon.png";
        modalImage.className="img-fluid pb-2";
        modalFooter.children.repositorio.href="";
        modalFooter.children.repositorio.target="_blank"
        return false;

    };
    if (proyectName.id=="plantilla") {
        modalTitle.textContent = "Katia Velasquez";
        modalBodyInput.textContent = "Cuarto proyecto para bootcamp Desarrollo FullStack JavaScript realizado con HTML, CSS y Bootstrap realizandose modificaciones a una plantilla pre-existente colocando la información personal requerida, optimizando el uso de Bootstrap y eliminando el uso de estilos in-line existentes en la página. También se realizó el respaldo y versionamiento del trabajo usando GIT+GitHub.";
        modalImage.src="assets/img/plantilla.jpg";
        modalImage.className="img-fluid pb-2";
        modalFooter.children.repositorio.href="https://github.com/kvel83/fdsw-github";
        modalFooter.children.repositorio.target="_blank"
        return false;

    };
}
/*VALIDACIÓN FORMULARIO CONTACTO*/
function validateInput() {
    var nombre = document.getElementById('inputName');
    var mail = document.getElementById('userMail');
    const modal = document.getElementById('contactModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBodyInput = modal.querySelector('.modal-body p');
    /* Validacion Nombre */
    if (nombre.value.length == 0) {
        modalTitle.textContent = "¡Falta tu nombre!";
        modalBodyInput.textContent = "Por favor ingresa tu nombre!!!!";
        return false;
    }
    /* Validacion Mail */
    if (mail.value.length == 0) {

        modalTitle.textContent = "¡Falta tu mail!";
        modalBodyInput.textContent = "Por favor ingresa tu mail!!!!";
        return false;
    }
    modalTitle.textContent = "ENVIO EXITOSO";
    modalBodyInput.textContent = "Gracias por contactarme, te responderé cuanto antes.";
};
