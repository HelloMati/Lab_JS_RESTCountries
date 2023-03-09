const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const countrySection = document.getElementById("countries");
        const countryNameElement = document.createElement("h2");
        const populationElement = document.createElement("p");
      
        countryNameElement.innerText = data[0].name.common;
        populationElement.innerText = `Population: ${data[0].population}`;
      
        countrySection.append(countryNameElement, populationElement);
      })
}
getCountryByName("Tunisia");


// STEP 5
// console.log("HI!");

// function getCountryByName(countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// getCountryByName("Tunisia");