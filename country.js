document.addEventListener("DOMContentLoaded", function(){
    var searchButton = document.getElementById("search-button");
    var countryInp = document.getElementById("country-inp");
    var result = document.getElementById("result");

    searchButton.addEventListener("click", () => {
        let countryName = countryInp.value;

        let url = `https://restcountries.com/v3.1/name/${countryName}?
        fullText=true`;

        // Fetch the country info from the api

        fetch(url).then((response) => response.json())
        .then((data) => {
            console.log(data);

            result.innerHTML = `
              <img src="${data[0].flags.svg}" alt="flag" class="flag-img"  />

              <h2>${data[0].name.common}</h2>
 
              <div class="wrapper">
                  <h4>Capital:</h4>
                  <span>${data[0].capital[0]}</span>
                </div>
              
              </div>
            
              
              <div class="wrapper">
                <div class="data-wrapper">
                  <h4>Continent:</h4>
                  <span>${data[0].continents[0]}</span>
                </div>
              
              </div>

              
              <div class="wrapper">
                <div class="data-wrapper">
                  <h4>Population:</h4>
                  <span>${data[0].population}</span>
                </div>
              
              </div>

              <div class="wrapper">
                <div class="data-wrapper">
                  <h4>coatofarms:</h4>
                  <img src="${data[0].coatOfArms.svg}" class="flag-img"/>
                </div>

                </div>

                <div class="wrapper">
                <div class="data-wrapper">
                  <h4>languages:</h4>
                  <span>${data[0].languages}</span>
                </div>

                </div>

                <div class="wrapper">
                <div class="data-wrapper">
                  <h4>currencies:</h4>
                  <span>${data[0].currencies}</span>
                </div>

                </div>

                <div class="wrapper">
                <div class="data-wrapper">
                  <h4>independent:</h4>
                  <span>${data[0].independent}</span>
                </div>
            
              `
        })





    })
})