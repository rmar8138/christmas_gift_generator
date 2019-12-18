const Question = require("../Question");

describe("Question class", () => {
  test("should set text when calling creating new question", () => {
    const expected = "What is your name?";

    const testQuestion = new Question(expected);
    const text = testQuestion.text;

    expect(text).toEqual(expected);
  });

  // test("addOption method should add option to array", () => {
  //   const option =
  // })
});
