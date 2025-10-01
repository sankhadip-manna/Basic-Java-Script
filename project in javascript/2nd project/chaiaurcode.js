const forms = document.querySelector('form');

forms.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a vailed height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a vailed weight ${weight}`;
  } else {
    const dmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    result.innerHTML = `${dmi}`;
    if (dmi == 18.6 || dmi < 18.6) {
      result.innerHTML = ` You are Under Weight:${dmi}`;
    } else if (dmi === 24.9 || dmi < 24.9) {
      result.innerHTML = ` You are Normal Range:${dmi}`;
    } else if (dmi > 24.9 || dmi === 24.9) {
      result.innerHTML = ` You are OverWegiht:${dmi}`;
    }
  }
});

