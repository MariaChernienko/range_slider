(function anon() {
  const thumbs = document.querySelectorAll('[data-thumb]');
  const inputs = document.querySelectorAll('[data-input]');

  const addValue = (inputs, thumbValue, elem) => {
    inputs.forEach(element => {
      if(element.dataset.input === elem) {
        element.setAttribute('value', thumbValue);
      }
    });
  }


  thumbs.forEach(element => {

    element.addEventListener('mousedown', (e) => {
      let thumbValue = e.target.value;
      let elem = element.dataset.thumb;

      addValue(inputs, thumbValue, elem);
      if(e) {
        element.addEventListener('mousemove', (e) => {
          let scrollValue = e.target.value;
          addValue(inputs, scrollValue, elem);
        });
      }
    });
  }); 
}());