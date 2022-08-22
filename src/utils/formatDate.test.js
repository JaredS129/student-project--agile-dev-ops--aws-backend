import { formatDate } from "./formatDate";

test("Formats an ISO8601 string to Day Month Year string", () => {
  const inputString = "blah blah blah";
  const outputString = "bloo bloo bloo";
  expect(formatDate(inputString)).toBe(outputString);
});
