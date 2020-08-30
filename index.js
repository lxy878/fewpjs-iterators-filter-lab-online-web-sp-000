// Code your solution here
function findMatching(array, target){
  return array.filter(driver => driver.toLowerCase()===target.toLowerCase());
}

function fuzzyMatch(array, target){
  return array.filter((driver) => {
    const firstTwo = driver.slice(0, 2)
  });
}

function matchName(array, target){

}
