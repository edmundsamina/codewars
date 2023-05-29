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

export function replaceNames(feedbackArray){
    const placeholder = "J.Doe";
    const anonymizedFeedbackArray = feedbackArray.map(feedback => {
        const words = feedback.split(" ");
        const anonymizedWords = words.map(word => {
          if (word.match(/^[a-zA-Z]+$/)) {
            return placeholder;
          }
          return word;
        });
        return anonymizedWords.join(" ");
      });
    
      return anonymizedFeedbackArray;
}