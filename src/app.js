import Forecast from './forecast';

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const forecast = new Forecast();

const updateUI = (data) => {
  const { cityDets, weather } = data;

  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h3>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-3 my-3">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span></br>
      <span>${weather.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
    </div>
  `;

  const timeSrc = weather.IsDayTime ? '../img/day.svg' : '../img/night.svg';
  time.setAttribute('src', timeSrc);

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  forecast.updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));

  localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
  forecast.updateCity(localStorage.getItem('city'))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
