let btnToggleDarkMode = document.querySelector("#btn-toggle-dark-mode");

function toggleDarkMode() {
  document.querySelector("html").classList.toggle("dark-mode");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon-fill");
}

function init() {
  btnToggleDarkMode.addEventListener("click", toggleDarkMode);

}

window.onload = init();

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.sort((element1, element2) => {
      const nameA = element1.name.common.toLowerCase();
      const nameB = element2.name.common.toLowerCase();

      return nameA.localeCompare(nameB);
    });

    data.forEach(element => {
      
      console.log(element.name.common);

      const countryDiv = document.createElement('div');
      countryDiv.innerHTML = `<button class="country-flag" aria-label="open Afghanistan details" style="background-image: url(${element.flags.png});"></button>
          
      <div class="country-info-box">
        <h2 class="country-name"> ${element.name.common} </h2>
        <p>
          <span>Population: </span><span> ${element.population} </span></p>
          <p><span>Region: </span><span> ${element.region} </span></p>
          <p><span>Capital: </span><span> ${element.capital} </span></p>
        </div>`;
      
      document.querySelector('#countries-selection-box').appendChild(countryDiv);
      countryDiv.classList.add('card');

      document.querySelector('#input-field-country').value;


    });

  });