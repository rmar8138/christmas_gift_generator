const questionJSON = require("./questions.json");
const Questionnaire = require("./Questionnaire");

const kidsXmasGiftsQuestionnaire = new Questionnaire();
kidsXmasGiftsQuestionnaire.translateRawQuestionJSON(questionJSON);

kidsXmasGiftsQuestionnaire.run();
