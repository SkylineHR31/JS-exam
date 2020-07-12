// import {filmsList, defaultFunction} from "./list.js";

export default function addFilmHandler() {
    if (document.querySelector("#modal-form")) {
        const form = document.querySelector("#modal-form");
        console.log(form);
    
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
        });
    }
}