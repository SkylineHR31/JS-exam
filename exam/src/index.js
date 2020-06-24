import defaultFunction from "./modal";
// import defaultFunction from "./list";
import $ from "jquery";
import '@popperjs/core';
import 'bootstrap';
import "lodash";
import "./style.css";
import html from './index.html';

import template from 'lodash.template';
import menuTemplate from './templates/menu-template.html';
import cardTemplate from './templates/card.html';

const users = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Constantine" }
];

const tmplMenu = template(menuTemplate);
const menu = tmplMenu({ title: "Заголовок", users, buttonTitle: "PRESS ME" });

const tmplCard = template(cardTemplate);
const card = tmplCard();

const mainSection = document.querySelector("#content");
mainSection.innerHTML = card;