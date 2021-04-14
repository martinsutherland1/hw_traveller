const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    const startList = this.journeys.map((location) => {
      return location.startLocation;
    })
    return startList;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endList = this.journeys.map((location) => {
    return location.endLocation;
  })
  return endList;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let transportList = this.journeys.filter((type) => {
    return type.transport == transport;
  })
  return transportList;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    let journeyDistances = this.journeys.filter((dist) => {
      return dist.distance > minDistance;
    })
    return journeyDistances;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    let total = this.journeys.reduce((runningtotal, journey) => {
      return runningtotal + journey.distance;
    }, 0)
    return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
  const transportList = this.journeys.map((mode) => {
    return mode.transport;
  })

  
  unique = [...new Set(transportList)];
return unique;

}

module.exports = Traveller;
