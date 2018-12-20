function createSlider() {
  const createElements = (container) => {
    container.insertAdjacentHTML(
      'beforeend', `
      <label for="min" class="inputValue">Min: 
        <input type="text" id="min" data-input="min" />
      </label>
      <label for="max" class="inputValue">Max:
        <input type="text" id="max" data-input="max" />
      </label>
      <div class="rangeslider">
        <input
          data-thumb="min"
          name="range_1"
          type="range"
          min="1"
          max="100"
          value="10"
        />
        <input
          data-thumb="max"
          name="range_1"
          type="range"
          min="1"
          max="100"
          value="90"
        />
      </div>
    `,
    );
  };
  createElements(document.querySelector('.component'));

  const thumbs = document.querySelectorAll('[data-thumb]');

  const addValue = (minValue, maxValue) => {
    const minInput = document.querySelector('[data-input="min"]');
    const maxInput = document.querySelector('[data-input="max"]');
    minInput.value = minValue;
    maxInput.value = maxValue;
  };
  addValue(
    document.querySelector('[data-thumb="min"]').value,
    document.querySelector('[data-thumb="max"]').value,
  );

  thumbs.forEach((element) => {
    element.addEventListener('input', (e) => {
      const elem = element.dataset.thumb;
      const min = document.querySelector('[data-thumb="min"]');
      const max = document.querySelector('[data-thumb="max"]');
      const minVal = parseInt(min.value);
      const maxVal = parseInt(max.value);

      addValue(min.value, max.value);

      if (elem === 'min' && minVal > maxVal - 5) {
        min.value = maxVal - 5;
        addValue(min.value, max.value);
      } else if (elem === 'max' && maxVal < minVal + 5) {
        max.value = minVal + 5;
        addValue(min.value, max.value);
      }
    });
  });
}
createSlider();