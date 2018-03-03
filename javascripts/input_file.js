const Selector = {
  DATA_TOGGLE: '[data-toggle="inputfile"]'
}

function inputFileAction(e){
  const inputs = document.querySelectorAll('.inputfile')
  const labelText = document.querySelector('.inputfile-label .text')
  const labelContent = labelText.innerHTML

  for (var i = 0; i < inputs.length; i++) {
    const input = inputs[i]
    let filename
    input.addEventListener('change', function(e){
      if (e.target.value){
        filename = e.target.value.split('\\').pop()
      }

      if(filename){
        labelText.innerHTML = filename
      }else{
        label.innerHTML = labelContent
      }
    })
  }
}

function handlerInputFileClick(){
  let selector;
  if(selector = document.querySelector(Selector.DATA_TOGGLE)){
    selector.addEventListener('click', inputFileAction);
  }
}

export { handlerInputFileClick }
