// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.first && drivers[1];
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.last && drivers[-2];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


