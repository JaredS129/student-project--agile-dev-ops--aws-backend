import questions from "./data/questions.json";

describe("getQuestions", () => {
  test("When the api call is successful, getQuestions returns data", async () => {
    //Given
    const expectedResponse = {
      body: questions,
      error: undefined,
    };
    const getQuestions = jest.fn();
    getQuestions.mockReturnValueOnce(expectedResponse);
    // When
    const response = await getQuestions();
    //Then
    expect(response.body).toEqual(expectedResponse.body);
  });
});
