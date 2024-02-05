'use strict';

import {showHideNavItems} from '../helpers.js';


//////// ELEMENTS ////////
const btnChangeLanguagePortuguese = document.getElementById('btnChangeLanguagePortuguese');
const btnChangeLanguageSpanish = document.getElementById('btnChangeLanguageSpanish');
const btnShowHideNavItems = document.getElementById('btnShowHideNavItems');

const formOrderHome = document.getElementById('formOrderHome');
const formOrderOrder = document.getElementById('formOrderOrder');
const orderInputName = document.getElementById('orderInputName');
const orderInputSurnames = document.getElementById('orderInputSurnames');
const orderInputEmail = document.getElementById('orderInputEmail');

const formContactFooter = document.getElementById('formContactFooter');
const formContactContact = document.getElementById('formContactContact');
const contactFooterInputName = document.getElementById('contactFooterInputName');
const contactFooterInputSurnames = document.getElementById('contactFooterInputSurnames');
const contactFooterInputEmail = document.getElementById('contactFooterInputEmail');
const contactFooterInputComments = document.getElementById('contactFooterInputComments');
const contactContactInputName = document.getElementById('contactContactInputName');
const contactContactInputSurnames = document.getElementById('contactContactInputSurnames');
const contactContactInputEmail = document.getElementById('contactContactInputEmail');
const contactContactInputComments = document.getElementById('contactContactInputComments');


//////// EVENT LISTENERS ////////
btnChangeLanguageSpanish.addEventListener('click', () => i18next.changeLanguage('es'));

btnChangeLanguagePortuguese.addEventListener('click', () => i18next.changeLanguage('pt'));

btnShowHideNavItems.addEventListener('click', showHideNavItems);

formOrderHome?.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderProductCheckboxes = document.querySelectorAll('input[name="productType[]"]:checked');
    let order = {name: '', surnames: '', email: '', products: []};
    order.name = orderInputName.value.trim();
    order.surnames = orderInputSurnames.value.trim();
    order.email = orderInputEmail.value.trim();
    orderProductCheckboxes.forEach(p => order.products.push(p.value));
    console.log(order);
})

formOrderOrder?.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderProductCheckboxes = document.querySelectorAll('input[name="productType[]"]:checked');
    let order = {name: '', surnames: '', email: '', products: []};
    order.name = orderInputName.value.trim();
    order.surnames = orderInputSurnames.value.trim();
    order.email = orderInputEmail.value.trim();
    orderProductCheckboxes.forEach(p => order.products.push(p.value));
    console.log(order);
});

formContactFooter.addEventListener('submit', (e) => {
    e.preventDefault();
    let inquiryData = {name: '', surnames: '', email: '', comments: ''};
    inquiryData.name = contactFooterInputName.value.trim();
    inquiryData.surnames = contactFooterInputSurnames.value.trim();
    inquiryData.email = contactFooterInputEmail.value.trim();
    inquiryData.comments = contactFooterInputComments.value.trim();
    console.log(inquiryData);
});

formContactContact?.addEventListener('submit', (e) => {
    e.preventDefault();
    let inquiryData = {name: '', surnames: '', email: '', comments: ''};
    inquiryData.name = contactContactInputName.value.trim();
    inquiryData.surnames = contactContactInputSurnames.value.trim();
    inquiryData.email = contactContactInputEmail.value.trim();
    inquiryData.comments = contactContactInputComments.value.trim();
    console.log(inquiryData);
});