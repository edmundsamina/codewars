import { test, expect } from "@jest/globals";
import { replaceNames, namesArray } from "./filterNames";

const feedbackArray = [
"Great job, John! Your dedication and hard work are paying off. I appreciate your consistent effort and willingness to go the extra mile. Keep up the excellent work!",
"Sarah, I wanted to take a moment to acknowledge your outstanding progress. Your commitment to learning and eagerness to challenge yourself have truly paid off. I'm impressed with how far you've come!",
"Michael, I am incredibly impressed with your skills and work ethic. You consistently demonstrate a high level of professionalism and attention to detail. Your dedication to continuous improvement is admirable. Keep it up!",
"Emily, your determination and perseverance are truly inspiring. I've noticed how you consistently strive for excellence in your work. Your attention to detail and ability to think critically make you stand out. Keep pushing yourself!",
"David, I wanted to let you know how proud I am of your progress. Your commitment to learning and your ability to overcome challenges is admirable. Your positive attitude and eagerness to learn make you a standout student. Keep up the fantastic work!",
"Jessica, I wanted to take a moment to recognize your exceptional growth. Your hard work, enthusiasm, and attention to detail have not gone unnoticed. Your willingness to take on new challenges and seek feedback sets you apart. Keep up the amazing work!",
"Samuel, I'm incredibly impressed with your dedication and the strides you've made. Your ability to grasp complex concepts and apply them effectively is remarkable. Your eagerness to learn and grow is evident in your work. Keep pushing yourself to new heights!",
"Olivia, your progress has been nothing short of remarkable. Your attention to detail, critical thinking skills, and willingness to go above and beyond are truly commendable. Your work ethic and determination are an inspiration. Keep up the exceptional work!",
"Daniel, I wanted to express my appreciation for your consistent efforts and growth. Your ability to grasp new concepts quickly and apply them effectively is impressive. Your positive attitude and willingness to take on challenges make you a valuable member of our team. Keep up the outstanding work!",
"Sophia, your commitment to learning and your enthusiasm for tackling new challenges are truly impressive. Your work reflects a high level of professionalism and dedication. Your ability to think critically and find innovative solutions sets you apart. Keep pushing the boundaries of your knowledge!"
];

const feedbackArrayAnon = [
"Great job, J.Doe! Your dedication and hard work are paying off. I appreciate your consistent effort and willingness to go the extra mile. Keep up the excellent work!",
"J.Doe, I wanted to take a moment to acknowledge your outstanding progress. Your commitment to learning and eagerness to challenge yourself have truly paid off. I'm impressed with how far you've come!",
"J.Doe, I am incredibly impressed with your skills and work ethic. You consistently demonstrate a high level of professionalism and attention to detail. Your dedication to continuous improvement is admirable. Keep it up!",
"J.Doe, your determination and perseverance are truly inspiring. I've noticed how you consistently strive for excellence in your work. Your attention to detail and ability to think critically make you stand out. Keep pushing yourself!",
"J.Doe, I wanted to let you know how proud I am of your progress. Your commitment to learning and your ability to overcome challenges is admirable. Your positive attitude and eagerness to learn make you a standout student. Keep up the fantastic work!",
"J.Doe, I wanted to take a moment to recognize your exceptional growth. Your hard work, enthusiasm, and attention to detail have not gone unnoticed. Your willingness to take on new challenges and seek feedback sets you apart. Keep up the amazing work!",
"J.Doe, I'm incredibly impressed with your dedication and the strides you've made. Your ability to grasp complex concepts and apply them effectively is remarkable. Your eagerness to learn and grow is evident in your work. Keep pushing yourself to new heights!",
"J.Doe, your progress has been nothing short of remarkable. Your attention to detail, critical thinking skills, and willingness to go above and beyond are truly commendable. Your work ethic and determination are an inspiration. Keep up the exceptional work!",
"J.Doe, I wanted to express my appreciation for your consistent efforts and growth. Your ability to grasp new concepts quickly and apply them effectively is impressive. Your positive attitude and willingness to take on challenges make you a valuable member of our team. Keep up the outstanding work!",
"J.Doe, your commitment to learning and your enthusiasm for tackling new challenges are truly impressive. Your work reflects a high level of professionalism and dedication. Your ability to think critically and find innovative solutions sets you apart. Keep pushing the boundaries of your knowledge!"
]

const negativeFeedbackArray = [
"John, your performance has been consistently disappointing. Your lack of dedication and effort is evident in your work. You need to step up and improve significantly.",
"Sarah, I'm extremely disappointed with your progress. The quality of your work is far below expectations. It's crucial that you make a serious effort to improve immediately.",
"Michael, your work has been consistently subpar. Your lack of attention to detail and poor time management are major concerns. You need to make significant improvements to meet the required standards.",
"Emily, your performance has been consistently unsatisfactory. Your work lacks creativity and effort. It's crucial that you take your responsibilities seriously and strive for better results.",
"David, I'm extremely dissatisfied with your performance. Your inability to resolve issues and lack of problem-solving skills are causing significant problems. Immediate improvement is necessary.",
"Jessica, your progress has been extremely disappointing. Your lack of motivation and poor attitude have hindered your development. It's imperative that you make a drastic change and put in more effort.",
"Samuel, I have serious concerns about your work ethic and commitment. Your consistent mistakes and lack of attention to detail are unacceptable. You need to demonstrate significant improvement immediately.",
"Olivia, your work has consistently fallen short of expectations. Your lack of professionalism and careless approach are unacceptable. You must take your responsibilities more seriously.",
"Daniel, I'm deeply dissatisfied with your performance. Your inability to meet deadlines and lack of initiative are major concerns. It's essential that you make immediate and substantial improvements.",
"Sophia, your progress has been incredibly disappointing. Your lack of focus and poor performance reflect a serious lack of effort. You need to show significant improvement to meet the required standards."
];

const negativeFeedbackArrayAnon = [
"J.Doe, your performance has been consistently disappointing. Your lack of dedication and effort is evident in your work. You need to step up and improve significantly.",
"J.Doe, I'm extremely disappointed with your progress. The quality of your work is far below expectations. It's crucial that you make a serious effort to improve immediately.",
"J.Doe, your work has been consistently subpar. Your lack of attention to detail and poor time management are major concerns. You need to make significant improvements to meet the required standards.",
"J.Doe, your performance has been consistently unsatisfactory. Your work lacks creativity and effort. It's crucial that you take your responsibilities seriously and strive for better results.",
"J.Doe, I'm extremely dissatisfied with your performance. Your inability to resolve issues and lack of problem-solving skills are causing significant problems. Immediate improvement is necessary.",
"J.Doe, your progress has been extremely disappointing. Your lack of motivation and poor attitude have hindered your development. It's imperative that you make a drastic change and put in more effort.",
"J.Doe, I have serious concerns about your work ethic and commitment. Your consistent mistakes and lack of attention to detail are unacceptable. You need to demonstrate significant improvement immediately.",
"J.Doe, your work has consistently fallen short of expectations. Your lack of professionalism and careless approach are unacceptable. You must take your responsibilities more seriously.",
"J.Doe, I'm deeply dissatisfied with your performance. Your inability to meet deadlines and lack of initiative are major concerns. It's essential that you make immediate and substantial improvements.",
"J.Doe, your progress has been incredibly disappointing. Your lack of focus and poor performance reflect a serious lack of effort. You need to show significant improvement to meet the required standards."
]

const positiveFeedbackArray = [
"Great job, John! Your dedication and hard work are paying off. Your contributions to the team have been invaluable.",
"I wanted to recognize your outstanding progress, Sarah. Your commitment to learning and growth is inspiring. Keep up the excellent work!",
"Michael, your skills and expertise have greatly benefited the team. Your positive attitude and willingness to help others are commendable.",
"I'm impressed with the level of professionalism and attention to detail you bring to your work, Emily. Your contributions have made a significant impact.",
"David, your problem-solving abilities and resourcefulness have been instrumental in overcoming challenges. Your contributions are highly valued.",
"Great job on your recent achievements, Sarah! Your dedication and perseverance have paid off. Keep up the excellent work!",
"John, I appreciate your positive attitude and willingness to go the extra mile. Your contributions to the team are highly valued.",
"I wanted to acknowledge the exceptional work you've done, Michael. Your expertise and willingness to take on challenges make you a valuable asset.",
"Emily, your creativity and innovative thinking have had a significant impact on our projects. Your contributions are greatly appreciated.",
"David, your leadership skills and ability to motivate others have been instrumental in our team's success. Keep up the great work!"
];

const positiveFeedbackArrayAnon = [
"J.Doe, your performance has been consistently disappointing. Your lack of dedication and effort is evident in your work. You need to step up and improve significantly.",
"J.Doe, I'm extremely disappointed with your progress. The quality of your work is far below expectations. It's crucial that you make a serious effort to improve immediately.",
"J.Doe, your work has been consistently subpar. Your lack of attention to detail and poor time management are major concerns. You need to make significant improvements to meet the required standards.",
"J.Doe, your performance has been consistently unsatisfactory. Your work lacks creativity and effort. It's crucial that you take your responsibilities seriously and strive for better results.",
"J.Doe, I'm extremely dissatisfied with your performance. Your inability to resolve issues and lack of problem-solving skills are causing significant problems. Immediate improvement is necessary.",
"J.Doe, your progress has been extremely disappointing. Your lack of motivation and poor attitude have hindered your development. It's imperative that you make a drastic change and put in more effort.",
"J.Doe, I have serious concerns about your work ethic and commitment. Your consistent mistakes and lack of attention to detail are unacceptable. You need to demonstrate significant improvement immediately.",
"J.Doe, your work has consistently fallen short of expectations. Your lack of professionalism and careless approach are unacceptable. You must take your responsibilities more seriously.",
"J.Doe, I'm deeply dissatisfied with your performance. Your inability to meet deadlines and lack of initiative are major concerns. It's essential that you make immediate and substantial improvements.",
"J.Doe, your progress has been incredibly disappointing. Your lack of focus and poor performance reflect a serious lack of effort. You need to show significant improvement to meet the required standards."

]

//TEST FOR KATA ONE
test.each([
  [feedbackArray, feedbackArrayAnon, namesArray],
  [negativeFeedbackArray, negativeFeedbackArrayAnon, namesArray],
  [positiveFeedbackArray, positiveFeedbackArrayAnon, namesArray]
])("Calculates the correct average", (feedback, expected, namesArray) => {
  const actual = replaceNames(feedback, namesArray);
  expect(actual).toBe(expected);
});
