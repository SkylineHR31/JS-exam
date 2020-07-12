import modalTemplate from './templates/add-new.html';
import template from 'lodash.template';
import $ from "jquery";

export default function() {
    const tmplModal = template(modalTemplate);
    const modalInner = tmplModal();
    let modal = document.createElement('div');
    modal.innerHTML = modalInner;
    modal.classList.add("modal");
    modal.addEventListener("click", (event) => {
        console.log(event.target);

        if (event.target.id === "modal-form-cancel") {
            $(modal).modal('dispose');
        }
    });

    document.querySelector("#add-new").addEventListener("click", () => {
        $(modal).modal('show'); 
    });
    
    // return modal;
}