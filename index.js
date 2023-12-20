// Code your solution here
function findMatching(drivers, names) {
  const matchingDrivers = drivers.filter(
    (driver) => driver.toLowerCase() === names.toLowerCase()
  );
  return matchingDrivers;
}

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function fuzzyMatch(drivers, letters) {
  const results = drivers.filter((driver) => driver.slice(0, 2) === letters);
  //console.log(results);
  return results;
}


function matchName(drivers,surname) {
  const results = drivers.filter((driver)=>driver.name ===surname)
  return results
}
