const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("sum of digits of a single-digit number is this number itself", () => {
    expect(sumDigits(7)).toBe(7);
  });

  test("returns the sum of all its digits", () => {
    expect(sumDigits(55)).toBe(10);
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(101)).toBe(2);
    expect(sumDigits(9999)).toBe(36);
  });

  test("the sum of digits of 0 is 0", () => {
    expect(sumDigits(0)).toBe(0);
  });
});

describe("createRange", () => {
  test("start < end, step not provided => list from start to end INCLUSIVE with step = 1", () => {
    expect(createRange(2, 5)).toEqual([2, 3, 4, 5]);
  });

  test("start < end, step is defined => list from start to end INCLUSIVE with defined step", () => {
    expect(createRange(2, 5, 1)).toEqual([2, 3, 4, 5]);
    expect(createRange(2, 5, 2)).toEqual([2, 4]);
  });

  test("works for negative ranges => list from start to end INCLUSIVE with defined step", () => {
    expect(createRange(-3, -5, -2)).toEqual([-3, -5]);
    expect(createRange(-3, -11, -3)).toEqual([-3, -6, -9]);
  });

  test("if start == end, the range contains one element only", () => {
    expect(createRange(2, 2, 7)).toEqual([2]);
    expect(createRange(-100, -100, 2)).toEqual([-100]);
  });

  test("for endless range Error thrown", () => {
    //  expect(createRange(-3, 7, -5)).toThrow(Error);
    try {
      createRange(-3, 7, -5);
    } catch (e) {
      expect(e.message).toBe("infinite range");
    }
    //  expect(createRange(200, 7)).toThrow(Error);
    try {
      createRange(200, 7);
    } catch (e) {
      expect(e.message).toBe("infinite range");
    }
  });
});

describe("getScreentimeAlertList", () => {
  const data = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
        { date: "2019-06-13", usage: { twitter: 10, instagram: 56, facebook: 61 } },
      ]
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
        { date: "2019-06-13", usage: { mapMyRun: 110, whatsApp: 0, facebook: 0, safari: 16 } },
        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
      ]
    },
  ]
  test("no users get alert if there are no data for the date", () => {
    expect(getScreentimeAlertList(data, "2019-05-07")).toEqual([]);
  });

  test("no users get alert if there are not much screentime", () => {
    expect(getScreentimeAlertList(data, "2019-05-01")).toEqual([]);
  });

  test("a user gets alert for a date if there are too much screentime", () => {
    expect(getScreentimeAlertList(data, "2019-05-02")).toEqual(['beth_1234']);
  });

  test("more than one user gets alert for a date", () => {
    expect(getScreentimeAlertList(data, "2019-06-13")).toEqual(['beth_1234', 'sam_j_1989']);
  });
});

describe("hexToRGB", () => {
  test("Convert a hexadecimal color code in the form of #xxxxxx to rgb form in the rgb format ", () => {
    expect(hexToRGB("#FF1132")).toBe("rgb(255,17,50)");
  });

  test("Convert a hexadecimal black color code #000000 to rgb form in the rgb format ", () => {
    expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
  });

  test("Convert a hexadecimal white color code #FFFFFF to rgb form in the rgb format ", () => {
    expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
  });
});

describe("findWinner", () => {
  test("no winner on 3x3 board", () => {
    const game = [
      ["X", "0", null],
      ["X", null, "0"],
      [null, null, "0"]
    ]
    expect(findWinner(game)).toBe(null);
  });

  test("'X' wins on the last row of 5x5 board", () => {
    const game = [
      ["X", "0", "X", null, null],
      ["X", null, "0", "0", "0"],
      ["X", null, "0", "X", "0"],
      ["0", null, "0", "0", "0"],
      ["X", "X", "X", "X", "X",]
    ]
    expect(findWinner(game)).toBe("X");
  });

  test("'0' wins on a diagonal of 5x5 board", () => {
    const game = [
      ["0", "0", "X", null, null],
      ["X", "0", "0", "0", "0"],
      ["X", null, "0", "X", "0"],
      ["X", null, "0", "0", "0"],
      ["X", "X", "X", "X", "0",]
    ]
    expect(findWinner(game)).toBe("0");
  });

  test("'X' wins on a vertical of 3x3 board", () => {
    const game = [
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"]
    ]
    expect(findWinner(game)).toBe("X");
  });

});
