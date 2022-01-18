// Code your solution here
function findMatching(array, name){
    let match = array.filter(element => element.toUpperCase() === name.toUpperCase())
    return match
}

function fuzzyMatch(array, string){
    console.log(string.substring(0,2))
    return array.filter(element => element.substring(0,2).toUpperCase() === string.substring(0,2).toUpperCase())
     
      
}    

function matchName(array, string){
    return array.filter(element => element.name === string);
  }