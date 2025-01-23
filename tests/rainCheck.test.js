// Complete the test cases below by adding the expected inputs and returns
// All test cases should pass

const rainCheck = require("../src/rainCheck");

describe("Weather check", () => {
  test(`should return "Bring an umbrella" when it is raining`, () => {
    expect(rainCheck(true, (windSpeed = 0), (temperature = 20))).toBe(
      "Bring an umbrella."
    );
  });

  test(`should return "No need for an umbrella" when it is not raining`, () => {
    // expect here
    expect(rainCheck(false, (windSpeed = 0), (temperature = 20))).toBe(
      "No need for an umbrella."
    );
  });

  test(`should return "Bring a sturdy umbrella, it's windy." when it's raining and windy`, () => {
    // expect here
    expect(rainCheck(true, (windSpeed = 21), (temperature = 20))).toBe(
      "Bring a sturdy umbrella, it's windy."
    );
  });

  test(`should return "Bring an umbrella and a warm coat, it's cold." when it's raining and cold`, () => {
    // expect here
    expect(rainCheck(true, (windSpeed = 0), (temperature = 9))).toBe(
      "Bring an umbrella and a warm coat, it's cold."
    );
  });

  test(`should return "No umbrella needed, but stay hydrated—it's hot outside!" when it's hot and not raining`, () => {
    // expect here
    expect(rainCheck(false, (windSpeed = 0), (temperature = 31))).toBe(
      "No umbrella needed, but stay hydrated—it's hot outside!"
    );
  });

  test(`should return "No need for an umbrella, but it's quite windy. Hold onto your hat!" when it's windy and not raining`, () => {
    // expect here
    expect(rainCheck(false, (windSpeed = 31), (temperature = 20))).toBe(
      "No need for an umbrella, but it's quite windy. Hold onto your hat!"
    );
  });
});
