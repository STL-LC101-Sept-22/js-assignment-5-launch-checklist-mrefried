// Write your JavaScript code here!

window.addEventListener("load", function() {

    myFetch().then(function(planets) {
      let planet = pickPlanet(planets);
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
   
  });
  Footer
  