'use strict';

import {messages} from "./messages.js";

const updateContent = function () {
    document.querySelectorAll('[data-trans]').forEach(el => {
        if (el.firstChild?.type === 'checkbox') {
            const temp = el.firstChild;
            el.innerHTML = i18next.t(el.getAttribute('data-trans'));
            el.prepend(temp);
        } else if (el.tagName === 'BUTTON') {
            el.innerText = i18next.t(el.getAttribute('data-trans'));
        } else if (el.type === 'submit') {
            el.value = i18next.t(el.getAttribute('data-trans'));
        } else {
            el.innerHTML = i18next.t(el.getAttribute('data-trans'));
        }
    });
}

const init = function () {
    i18next.init({fallbackLng: 'es', debug: true, resources: messages}, updateContent);
    i18next.on('languageChanged', updateContent);
}

init();
