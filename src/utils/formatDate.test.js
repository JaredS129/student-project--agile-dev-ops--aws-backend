import { formatDate } from "./formatDate";

const testDates = [
  {
    inputString: "1997-07-16T19:20:30.45+01:00",
    expectedString: "16 Jul 1997",
  },
];

test.each(testDates)(
  "Formats an ISO8601 string to Day Month Year string",
  ({ inputString, expectedString }) => {
    expect(formatDate(inputString)).toBe(expectedString);
  }
);
