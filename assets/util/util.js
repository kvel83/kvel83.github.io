/* MODAL DINÁMICO PROYECTOS */
function proyectDetail(proyectName) {
    const modal = document.getElementById('comunModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBodyInput = modal.querySelector('.modal-body p');
    const modalImage=modal.querySelector('.modal-body img');
    const modalFooter=modal.querySelector('.modal-footer');
    //let json=JSON.parse(projects);
    modalFooter.children.repositorio.target="_blank";
    for (let index = 0; index < projectItem.length; index++) {
        if (proyectName.id == projectItem[index].id){
            modalTitle.textContent = projectItem[index].title;
            modalBodyInput.textContent = projectItem[index].txt;
            modalImage.src=projectItem[index].src;
            modalImage.className="img-fluid pb-2";
            modalFooter.children.repositorio.href=projectItem[index].repo;
            modalFooter.children.web.href=projectItem[index].web;
            break;
        }
    }
}
/*VALIDACIÓN FORMULARIO CONTACTO*/
function validateInput() {
    var nombre = document.getElementById('inputName');
    var mail = document.getElementById('userMail');
    var message=document.getElementById('userMessage');
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
    /* Validacion Message */
    if (message.value.length == 0) {

        modalTitle.textContent = "¡Falta el mensaje!";
        modalBodyInput.textContent = "Por favor ingresa el mensaje que quieres dirigirme.";
        return false;
    }
    modalTitle.textContent = "ENVIO EXITOSO";
    modalBodyInput.textContent = "Gracias por contactarme, te responderé cuanto antes.";
};

// /*GENERACION DE PROYECTOS*/
function projects(){
    let elem = document.querySelector('#project');

    for (let index = 0; index < projectItem.length; index++) {
            let clone = elem.cloneNode(true);
            clone.getElementsByClassName("card-img-top")[0].src = projectItem[index].src;
            clone.getElementsByClassName("card-title")[0].textContent = projectItem[index].title;
            clone.getElementsByClassName("card-text")[0].textContent = projectItem[index].shortTxt;
            clone.getElementsByClassName("btn")[0].id = projectItem[index].id;
            clone.classList.remove("d-none");
            elem.after(clone);
    }
}










