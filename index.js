// Code your solution here
function findMatching(array, name){
    let match = array.filter(element => element.toUpperCase() === name.toUpperCase())
    return match
  }

  function fuzzyMatch(array, string){
    const stringArray = Object.assign([], string)
     
     for (let item of array){
       let nameObject = Object.assign([],item.name)
      let firstLetters = nameObject.slice(0,2)
      let firstArrayLetters = stringArray.slice(0,2)
       console.log(firstLetters)
       console.log(firstArrayLetters)
       if (firstLetters === firstArrayLetters){
      return item
     }
    }
    
  }
  
