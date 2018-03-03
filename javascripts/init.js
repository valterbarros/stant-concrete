import * as $ from 'jquery';
import 'bootstrap-sass/assets/javascripts/bootstrap';
import 'multiselect-two-sides'
import { handlerInputFileClick } from './input_file'

const init = () => {
    $('#multiselect').multiselect();
}

class StantConcrete{
  start(){
    init()
    handlerInputFileClick()
  }
}

export { StantConcrete }
