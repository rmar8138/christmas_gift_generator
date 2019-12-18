class Question {
  constructor(text) {
    this.text = text;
    this.options = [];
  }

  addOption(option) {
    if (!option.value || !option.query) {
      throw new Error("option must have value and query");
    }

    this.options.push(option);
  }
}

module.exports = Question;
