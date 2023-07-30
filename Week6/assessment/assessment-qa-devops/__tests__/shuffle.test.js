const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an empty array if the input array is empty", () => {
    expect(shuffle()).toEqual([]);
  });

  test("return a shuffled version of the input array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(shuffledArray.length).toEqual(inputArray.length);
  });
});

