// Code your solution here
function findMatching(array, target){
  return array.filter(driver => driver.toLowerCase()===target.toLowerCase());
}

function fuzzyMatch(array, target){
  return array.filter((driver) => return firstTwo = driver.slice(0, 2) === target);
}

function matchName(array, target){

}
