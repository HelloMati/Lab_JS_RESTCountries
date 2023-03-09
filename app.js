const getCountries = document.querySelector('#countries');
const header = document.querySelector('h1');

async function getCountryByName(countryName) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    const country = data[0];
    const name = country.name.common;
    const population = country.population;
    const countryDiv = document.createElement('div');
    countryDiv.innerHTML = `<h2>${name}</h2> <p>Population: ${population}</p>`;
    getCountries.appendChild(countryDiv);
    header.innerHTML = "Data Fetched";
  } catch (error) {
    console.log(error);
    header.innerHTML = "Error, cannot Fetch data";
  }
}

getCountryByName("Tunisia");


const countries = document.querySelector('#countries');

const getAllCountries = () => {
  header.innerHTML = "Fetching data...";
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      data.forEach(country => {
        const countryElement = document.createElement('div');
        countryElement.innerHTML = 
        `<h2>${country.name.common}</h2>
         <p>Population: ${country.population}</p>`;
        countries.appendChild(countryElement);
      });
    })
    .catch(error => {
      console.log(error);
      header.innerHTML = "Error, cannot Fetch data";
    });
}

getAllCountries();


// const getCountryByName = (countryName) => {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => response.json())
//     .then(data => {
//       const countryElement = document.createElement('div');
//       countryElement.innerHTML = 
//         `<h2>${data[0].name.common}</h2>
//          <p>Population: ${data[0].population}</p>`;
//       countries.appendChild(countryElement);
//     });
// }

// getCountryByName("Tunisia");


// const getCountryByName = (countryName) => {
//     fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         const countrySection = document.getElementById("countries");
//         const countryNameElement = document.createElement("h2");
//         const populationElement = document.createElement("p");
      
//         countryNameElement.innerText = data[0].name.common;
//         populationElement.innerText = `Population: ${data[0].population}`;
      
//         countrySection.append(countryNameElement, populationElement);
//       })
// }
// getCountryByName("Tunisia");


// STEP 5 with ext
// console.log("HI!");

// function getCountryByName(countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }

// getCountryByName("Tunisia");