function createSlider() {
  const createElements = (container) => {
    container.insertAdjacentHTML(
      'beforeend',
      `
    <label for="min" class="inputValue">Min:<input type="text" id="min" data-input="min"/></label>
    <label for="max" class="inputValue">Max:<input type="text" id="max" data-input="max"/></label>

    <div class="rangeslider">
      <input data-thumb="min" name="range_1" type="range" min="1" max="100" value="10"
      />
      <input data-thumb="max" name="range_1" type="range" min="1" max="100" value="90"
      />
    </div>
    `,
    );
  };
  createElements(document.querySelector('.component'));

  const thumbs = document.querySelectorAll('[data-thumb]');
  const inputs = document.querySelectorAll('[data-input]');

  const addValue = (inputs, thumbValue, elem) => {
    inputs.forEach((element) => {
      if (element.dataset.input === elem) {
        element.setAttribute('value', thumbValue);
      }
    });
  };

  thumbs.forEach((element) => {
    element.addEventListener('mousedown', (e) => {
      const thumbValue = e.target.value;
      const elem = element.dataset.thumb;

      addValue(inputs, thumbValue, elem);


      
      
      if (e) {
        
        element.addEventListener('mousemove', (e) => {
          let min = document.querySelector('[data-thumb="min"]');
          let max = document.querySelector('[data-thumb="max"]');
          let minVal = parseInt(min.value);
          let maxVal = parseInt(max.value);

          
          const scrollValue = e.target.value;
          addValue(inputs, scrollValue, elem);

          if (minVal > maxVal - 5) {
            min.value = maxVal.value - 5;
          } else if (max.value - 5 < min.value) {
            max.value = 5 + minVal.value;
          }
        });
      }
    });
  });
}
createSlider();
