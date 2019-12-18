const questionJSON = require("./questions.json");
const Questionnaire = require("./Questionnaire");
const GiftList = require("./GiftLift");

const kidsXmasGiftsQuestionnaire = new Questionnaire();
kidsXmasGiftsQuestionnaire.translateRawQuestionJSON(questionJSON);

const queries = kidsXmasGiftsQuestionnaire.run();

const newList = new GiftList(queries);

console.log(newList);
