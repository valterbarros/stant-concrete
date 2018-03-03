import * as $ from 'jquery';
import 'bootstrap-sass/assets/javascripts/bootstrap';
import 'multiselect-two-sides'
import { handlerInputFileClick } from './input_file'

const multiSelectStart = () => {
  $('select[multiple="multiple"]').multiselect();
}

class stantConcrete{
  start(){
    multiSelectStart()
    handlerInputFileClick()
  }
}

export { stantConcrete }

