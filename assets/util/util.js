/* VALIDACIÓN INPUT */
function proyectDetail(proyectName) {
    /* var nombre = document.getElementById('inputName');
    var mail = document.getElementById('userMail'); */
    const modal = document.getElementById('comunModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBodyInput = modal.querySelector('.modal-body p');
    const modalImage=modal.querySelector('.modal-body img');
    const modalFooter=modal.querySelector('.modal-footer');
   /*  const modalButton=modal.querySelector() */
    /* Validacion Nombre */
    if (proyectName.id=="cv") {
        modalTitle.textContent = "Currículum Vitae";
        modalBodyInput.textContent = "Primer proyecto para bootcamp Desarrollo FullStack JavaScript realizado con HTML, CSS y Bootstrap ";
        modalImage.src="assets/img/cv.png";
        modalImage.className="img-fluid pb-2";
        modalFooter.children.repositorio.href="https://github.com/kvel83/Ejercicios-Desafio-Latam/tree/main/Proyecto1(CV)";
        modalFooter.children.repositorio.target="_blank"
        return false;
      
    }
    modalTitle.textContent = "CUPPON";
    modalBodyInput.textContent = "Gracias por su registro";
}