//KATA 1: Anonymise the data! You will be given anonymising feedback to remove names. 
//You will be given an array of the feedback (strings) and an array of names that should be anonymised 
//You can replace all of the names with the word John Doe.

export const namesArray = [
    "John",
    "Sarah",
    "Michael",
    "Emily",
    "David",
    "Jessica",
    "Samuel",
    "Olivia",
    "Daniel",
    "Sophia",
  ]

export function replaceNames(feedbackArray, namesArray){
    for(let i = 0; i < feedbackArray.length; i++){
      feedbackArray[i].split(" ").map((word)=>{
        namesArray.forEach((name) => {
          if(name === word){
            word = "John Doe"
          }
        });
      })
    }

    
}


//PLAN
//split each index by word into an array
//cycle through each index and cross reference it against the name array 
//if the word does exist replace (reassign that value) it with J.Doe 
//then rejoin the sentence 
//once all the index's have been looped through
//return the updated feedback array