// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl){
   // Here is the HTML formatting for our mission target div.
   let targetMission = document.getElementById('targetMission');
  
   targetMission.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
  `
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Not a Number";
   } else if (!isNaN(testInput)) {
    return "Is a Number";
   }
   }
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // complete the formSubmission() function. formSubmission() will take in a document parameter 
  // and strings representing the pilot, co-pilot, fuel level, and cargo mass. 
  // pilot, co-pilot, fuel level, and cargo mass
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let launchStatus = document.getElementById("launchStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let pilotStatus = document.getElementById("pilotStatus");

  if (validateInput(pilot.value) === "Empty" && "Is a Number",
  validateInput(copilot.value) === "Empty" && "Is a Number",
  validateInput(fuelLevel.value) === "Empty" && "Not a Number",
  validateInput(cargoLevel.value) === "Empty" && "Not a Number") {
    alert("Invalid input");
    

}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
