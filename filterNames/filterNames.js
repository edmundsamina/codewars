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

  export function replaceNames(feedbackArray, namesArray) {
    //Initialize an empty array anonArray to store the anonymized feedback.
    const anonArray = [];
    
    //Start a loop to iterate through each feedback string in the feedbackArray.
    for (let i = 0; i < feedbackArray.length; i++) {

      //Split the current feedback string into an array of words using the space character as the delimiter. 
      //Store this array in the words variable.
      const words = feedbackArray[i].split(" ");

      //Map over each word in the words array using the map function to replace names with "John Doe" if they exist in the namesArray.
      const anonFeedback = words.map((word) => {
        //Inside the map callback, check if the namesArray includes the current word using the includes function
        //If the word is found in the namesArray, replace it with "John Doe" using the return statement.
        if (namesArray.includes(word)) {
          return "J.Doe";
        } else {
          return word;
        }

        //Use join(" ") to convert the modified words array back into a string with words separated by spaces. Assign this anonymized feedback string to the anonFeedback variable.
      }).join(" ");
      
      //Push the anonymized feedback string into the anonArray using the push method.
      anonArray.push(anonFeedback);
    }
    console.log(anonArray)
    //return the newArray
    return anonArray;
  }

//PLAN
//dont mutate original array 
//split each index by word into an array
//cycle through each index and cross reference it against the name array 
//if the word does exist replace (reassign that value) it with J.Doe => if we reassign the parameter  
//then rejoin the sentence 
//once all the index's have been looped through
//return the updated feedback array


//first parameter is each item
//return array at the end, don't mutate original