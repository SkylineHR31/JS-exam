import modal from "./modal";
import list from "./list";
import movie from "./movie";

import $ from "jquery";
import '@popperjs/core';
import 'bootstrap';
import "lodash";
import "./style.css";
import html from './index.html';

import template from 'lodash.template';
import menuTemplate from './templates/menu-template.html';

const mainSection = document.querySelector("#content");
mainSection.innerHTML = list();
// mainSection.innerHTML = movie();
// mainSection.innerHTML = modal();
