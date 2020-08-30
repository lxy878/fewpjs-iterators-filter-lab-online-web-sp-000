// Code your solution here
function findMatching(array, target){
  return array.filter(driver => driver.toLowerCase()===target.toLowerCase());
}

function fuzzyMatch(array, target){
  return array.filter(driver => driver.slice(0, 2) === target);
}

function matchName(array, target){
  const obj = []
  return array.filter(driver => {driver.name === target}, );
}

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
]
console.log(matchName(drivers, 'Sally'))
