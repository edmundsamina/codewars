import { test, expect } from "@jest/globals";
import { replaceNames__unstable as replaceNames, namesArray } from "./filterNames";

//basic test
const unanonymisedFeedback = [
  "Great job John Smith-Jones! Your dedication and hard work are paying off. I appreciate your consistent effort and willingness to go the extra mile. Keep up the excellent work!",
  "Sarah, I wanted to take a moment to acknowledge your outstanding progress. Your commitment to learning and eagerness to challenge yourself have truly paid off. I'm impressed with how far you've come!",
  "Michael Davis, I am incredibly impressed with your skills and work ethic. You consistently demonstrate a high level of professionalism and attention to detail. Your dedication to continuous improvement is admirable. Keep it up!",
  "Emily, your determination and perseverance are truly inspiring. I've noticed how you consistently strive for excellence in your work. Your attention to detail and ability to think critically make you stand out. Keep pushing yourself!",
  "Well done, Mr. Brown! I wanted to let you know how proud I am of your progress. Your commitment to learning and your ability to overcome challenges is admirable. Your positive attitude and eagerness to learn make you a standout student. Keep up the fantastic work!",
  "Great job, Jessica! I wanted to take a moment to recognize your exceptional growth. Your hard work, enthusiasm, and attention to detail have not gone unnoticed. Your willingness to take on new challenges and seek feedback sets you apart. Keep up the amazing work!",
  "Samuel, I'm incredibly impressed with your dedication and the strides you've made. Your ability to grasp complex concepts and apply them effectively is remarkable. Your eagerness to learn and grow is evident in your work. Keep pushing yourself to new heights!",
  "Well done, Olivia! Your progress has been nothing short of remarkable. Your attention to detail, critical thinking skills, and willingness to go above and beyond are truly commendable. Your work ethic and determination are an inspiration. Keep up the exceptional work!",
  "Good job, Daniel! I wanted to express my appreciation for your consistent efforts and growth. Your ability to grasp new concepts quickly and apply them effectively is impressive. Your positive attitude and willingness to take on challenges make you a valuable member of our team. Keep up the outstanding work!",
  "Sophia Rodriguez, your commitment to learning and your enthusiasm for tackling new challenges are truly impressive. Your work reflects a high level of professionalism and dedication. Your ability to think critically and find innovative solutions sets you apart. Keep pushing the boundaries of your knowledge!",
  "Keep up the great work, Michael! Your dedication and hard work are paying off. I appreciate your consistent effort and willingness to go the extra mile.",
  "Sarah, you're doing an excellent job! I wanted to take a moment to acknowledge your outstanding progress. Your commitment to learning and eagerness to challenge yourself have truly paid off.",
  "Davis, your skills and work ethic are impressive. You consistently demonstrate a high level of professionalism and attention to detail. Keep up the great work!",
  "Emily, your determination is inspiring. I've noticed how you consistently strive for excellence in your work. Keep pushing yourself to reach new heights!",
  "David, I wanted to let you know how proud I am of your progress. Your commitment to learning and your ability to overcome challenges is admirable. Keep up the fantastic work!",
  "Jessica, your exceptional growth is commendable. Your hard work, enthusiasm, and attention to detail have not gone unnoticed. Keep up the amazing work!",
  "Samuel Anderson, your dedication and strides are impressive. Your ability to grasp complex concepts and apply them effectively is remarkable. Keep pushing yourself to new heights!",
  "Olivia, your progress has been remarkable. Your attention to detail, critical thinking skills, and willingness to go above and beyond are truly commendable. Keep up the exceptional work!",
  "Daniel, your consistent efforts and growth are appreciated. Your ability to grasp new concepts quickly and apply them effectively is impressive. Keep up the outstanding work!",
  "Way to go, Sophia! Your commitment to learning and enthusiasm for tackling new challenges are truly impressive. Keep pushing the boundaries of your knowledge!",
];

//basic output
const anonymisedFeedback = [
  "Great job J. Doe! Your dedication and hard work are paying off. I appreciate your consistent effort and willingness to go the extra mile. Keep up the excellent work!",
  "J. Doe, I wanted to take a moment to acknowledge your outstanding progress. Your commitment to learning and eagerness to challenge yourself have truly paid off. I'm impressed with how far you've come!",
  "J. Doe, I am incredibly impressed with your skills and work ethic. You consistently demonstrate a high level of professionalism and attention to detail. Your dedication to continuous improvement is admirable. Keep it up!",
  "J. Doe, your determination and perseverance are truly inspiring. I've noticed how you consistently strive for excellence in your work. Your attention to detail and ability to think critically make you stand out. Keep pushing yourself!",
  "Well done, Mr. J. Doe! I wanted to let you know how proud I am of your progress. Your commitment to learning and your ability to overcome challenges is admirable. Your positive attitude and eagerness to learn make you a standout student. Keep up the fantastic work!",
  "Great job, J. Doe! I wanted to take a moment to recognize your exceptional growth. Your hard work, enthusiasm, and attention to detail have not gone unnoticed. Your willingness to take on new challenges and seek feedback sets you apart. Keep up the amazing work!",
  "J. Doe, I'm incredibly impressed with your dedication and the strides you've made. Your ability to grasp complex concepts and apply them effectively is remarkable. Your eagerness to learn and grow is evident in your work. Keep pushing yourself to new heights!",
  "Well done, J. Doe! Your progress has been nothing short of remarkable. Your attention to detail, critical thinking skills, and willingness to go above and beyond are truly commendable. Your work ethic and determination are an inspiration. Keep up the exceptional work!",
  "Good job, J. Doe! I wanted to express my appreciation for your consistent efforts and growth. Your ability to grasp new concepts quickly and apply them effectively is impressive. Your positive attitude and willingness to take on challenges make you a valuable member of our team. Keep up the outstanding work!",
  "J. Doe, your commitment to learning and your enthusiasm for tackling new challenges are truly impressive. Your work reflects a high level of professionalism and dedication. Your ability to think critically and find innovative solutions sets you apart. Keep pushing the boundaries of your knowledge!",
  "Keep up the great work, J. Doe! Your dedication and hard work are paying off. I appreciate your consistent effort and willingness to go the extra mile.",
  "J. Doe, you're doing an excellent job! I wanted to take a moment to acknowledge your outstanding progress. Your commitment to learning and eagerness to challenge yourself have truly paid off.",
  "J. Doe, your skills and work ethic are impressive. You consistently demonstrate a high level of professionalism and attention to detail. Keep up the great work!",
  "J. Doe, your determination is inspiring. I've noticed how you consistently strive for excellence in your work. Keep pushing yourself to reach new heights!",
  "J. Doe, I wanted to let you know how proud I am of your progress. Your commitment to learning and your ability to overcome challenges is admirable. Keep up the fantastic work!",
  "J. Doe, your exceptional growth is commendable. Your hard work, enthusiasm, and attention to detail have not gone unnoticed. Keep up the amazing work!",
  "J. Doe, your dedication and strides are impressive. Your ability to grasp complex concepts and apply them effectively is remarkable. Keep pushing yourself to new heights!",
  "J. Doe, your progress has been remarkable. Your attention to detail, critical thinking skills, and willingness to go above and beyond are truly commendable. Keep up the exceptional work!",
  "J. Doe, your consistent efforts and growth are appreciated. Your ability to grasp new concepts quickly and apply them effectively is impressive. Keep up the outstanding work!",
  "Way to go, J. Doe! Your commitment to learning and enthusiasm for tackling new challenges are truly impressive. Keep pushing the boundaries of your knowledge!",
];

//checking whether whitespaces affects the implementation
const unanonymisedFeedbackWhiteSpace = [
  "Impressed by the dedication shown by John Smith-Jones in his work.",
  "RecognizingSarah Johnson-Wright for her exceptional leadership skills.",
  "Michael,please ensure attention to detail in your work.",
  "EmilyWilson's unique perspective adds value to discussions and problem-solving.",
  "David Brown'spresentations captivate and effectively engage the audience.",
  "Jessica, your commitment and contributions to the team are commendable.",
  "Collaboration is one of Samuel Anderson's strengths.",
  "Olivia Martinez, effective time management is essential for improved productivity.",
  "Daniel Taylor's meticulousness ensures accurate results.",
  "Sophia Rodriguez, please review your report for any grammatical errors and proofread carefully."
];

//whitespace test output
const anonymisedFeedbackWhiteSpace = [
  "Impressed by the dedication shown by J. Doe in his work.",
  "RecognizingJ. Doe for her exceptional leadership skills.",
  "J. Doe,please ensure attention to detail in your work.",
  "J. Doe's unique perspective adds value to discussions and problem-solving.",
  "J. Doe'spresentations captivate and effectively engage the audience.",
  "J. Doe, your commitment and contributions to the team are commendable.",
  "Collaboration is one of J. Doe's strengths.",
  "J. Doe, effective time management is essential for improved productivity.",
  "J. Doe's meticulousness ensures accurate results.",
  "J. Doe, please review your report for any grammatical errors and proofread carefully."
];

//making sure the implementation takes into account case insensitivity 
const unanonymisedFeedbackMixedCase = [
  "Impressed by the dedication shown by jOhn sMiTh-JoNes in his work.",
  "Recognizing sAraH JohNsoN-WriGht for her exceptional leadership skills.",
  "mIchaEl, please ensure attention to detail in your work.",
  "EmiLy wilsOn's unique perspective adds value to discussions and problem-solving.",
  "davId bRowN's presentations captivate and effectively engage the audience.",
  "jEssica, your commitment and contributions to the team are commendable.",
  "Collaboration is one of saMuEl aNdeRsoN's strengths.",
  "oLiviA mArtiNez, effective time management is essential for improved productivity.",
  "dAnieL tAyloR's meticulousness ensures accurate results.",
  "soPhia rOdRiguez, please review your report for any grammatical errors and proofread carefully."
];

//case insenstivity output
const anonymisedFeedbackMixedCase = [
  "Impressed by the dedication shown by J. Doe in his work.",
  "Recognizing J. Doe for her exceptional leadership skills.",
  "J. Doe, please ensure attention to detail in your work.",
  "J. Doe's unique perspective adds value to discussions and problem-solving.",
  "J. Doe's presentations captivate and effectively engage the audience.",
  "J. Doe, your commitment and contributions to the team are commendable.",
  "Collaboration is one of J. Doe's strengths.",
  "J. Doe, effective time management is essential for improved productivity.",
  "J. Doe's meticulousness ensures accurate results.",
  "J. Doe, please review your report for any grammatical errors and proofread carefully."
];

//checking if the feedback doesn't contain any names that it does not needlessly replace any words.
const feedbackArrayWithoutNames = [
  "Great job on completing the project ahead of schedule!",
  "Your attention to detail is impressive.",
  "The presentation was clear and concise.",
  "Your contributions have greatly improved the team's performance.",
  "Well done on finding a creative solution to the problem.",
  "Your hard work and dedication are much appreciated.",
  "Excellent teamwork and collaboration on this project.",
  "Your innovative ideas have made a significant impact.",
  "The report is well-researched and comprehensive.",
  "Your professionalism and strong work ethic are commendable.",
];


//TEST FOR KATA ONE
test.each([
  [unanonymisedFeedback, anonymisedFeedback],
  [unanonymisedFeedbackWhiteSpace, anonymisedFeedbackWhiteSpace],
  [unanonymisedFeedbackMixedCase, anonymisedFeedbackMixedCase], 
  [feedbackArrayWithoutNames, feedbackArrayWithoutNames]
])("Checks if the feedback has been correctly anonymised", (feedback, expected) => {
  const actual = replaceNames(feedback, namesArray);
  expect(actual).toStrictEqual(expected);
});

//namesArray doesnt need to be paramaterized
//edge cases - jest sometimes transforms array if its one-dimennsional

//combine the anonymised version and the non anonymised version
// object of two
// {input: , output: }
//customise the test description
