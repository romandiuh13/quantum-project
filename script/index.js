import {headerRender} from "./header/headerRender.js";
import {mainRender} from './main/mainRender.js';
import {started} from "./started/started.js";
import {sliderRender} from "./slider/sliderRender.js";
import {sliderAction} from './slider/sliderAction.js';
import {questionsRender} from "./questions/questionsRender.js";
import {questionsAction} from "./questions/questionsAction.js";
import {contactRender} from "./contact/contactReander.js";
import {contactAction} from "./contact/contactAction.js";
import {headerAction} from "./header/headerAction.js";
import {aboutRender} from "./about/aboutRender.js";

$('.header').html(headerRender());
$('.main').html(mainRender());
$('.started').html(started());
$('.slider').html(sliderRender());
$('.questions').html(questionsRender());
$('.contact').html(contactRender());
$('.about').html(aboutRender());

$(document).ready(function () {
    sliderAction()
    questionsAction()
    contactAction()
    headerAction()
});