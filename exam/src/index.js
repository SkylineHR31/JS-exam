import modal from "./modal";
import list from "./list";
import movie from "./movie";
import addFilmHandler from "./addFilmHandler.js";

import $ from "jquery";
import '@popperjs/core';
import 'bootstrap';
import "lodash";
import "./style.css";
import html from './index.html';

import template from 'lodash.template';
import menuTemplate from './templates/menu-template.html';

const mainSection = document.querySelector("#content");
window.onhashchange = () => {
    if (document.location.hash === "#list") {
        mainSection.innerHTML = list();
    }

    if (document.location.hash === "#list-film") {
        mainSection.innerHTML = movie();
    }
};

// mainSection.innerHTML = modal();
modal();
addFilmHandler();