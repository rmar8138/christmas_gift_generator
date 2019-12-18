const readlineSync = require("readline-sync");
const Question = require("./Question");

class Questionnaire {
  constructor() {
    this.questions = [];
  }

  addQuestion(question) {
    // check if argument is of Question class
    if (question.constructor.name === "Question") {
      this.questions.push(question);
    }
  }

  translateRawQuestionJSON(questionJSON) {
    const data = JSON.parse(questionJSON);

    data.forEach(question => {
      const { text, options } = question;
      const newQuestion = new Question(text);

      options.forEach(option => {
        newQuestion.addOption(option);
      });

      this.addQuestion(newQuestion);
    });
  }

  run() {
    const queries = [];

    this.questions.forEach(({ options, text }) => {
      const answer = readlineSync.keyInSelect(
        options.map(option => option.value),
        text,
        { cancel: false }
      );
      queries.push(options[answer].query);
    });

    return queries;
  }
}

module.exports = Questionnaire;
