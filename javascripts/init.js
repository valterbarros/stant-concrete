import * as $ from 'jquery';
import 'bootstrap-sass/assets/javascripts/bootstrap';
import 'multiselect-two-sides'

export const init = () => {
    $('#multiselect').multiselect();
}

init()