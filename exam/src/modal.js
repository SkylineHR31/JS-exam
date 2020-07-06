import modalTemplate from './templates/add-new.html';
import template from 'lodash.template';

export default function() {
    const tmplModal = template(modalTemplate);
    const modal = tmplModal();

    return modal;
}