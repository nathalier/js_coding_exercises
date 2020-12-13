const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum of all numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([3, 10, 7, 9])).toBe(22);
    expect(sumMultiples([2, 2, 4, 4, 5])).toBe(5);
  });

  test("zero returned if all numbers are not multiples of 3 or 5", () => {
    expect(sumMultiples([2, 2, 4, 4])).toBe(0);
  });

  test("zero returned for empty array", () => {
    expect(sumMultiples([2, 2, 4, 4])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("returns true if a string contains CTGA letters only", () => {
    expect(isValidDNA("CGTACGGGAACCCTCCC")).toBe(true);
    expect(isValidDNA("CCCCCCCCCCCCCCCCC")).toBe(true);
  });

  test("works with lower case as well", () => {
    expect(isValidDNA("aaaaatttttttt")).toBe(true);
    expect(isValidDNA("atCGTaaaAACgtg")).toBe(true);
  });

  test("returns false if a string is not a valid DNA", () => {
    expect(isValidDNA("CGTACGGGAACCCTCCCDTT")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("returns true if a string contains CTGA letters only", () => {
    expect(getComplementaryDNA("AACCGGTA")).toBe("TTGGCCAT");
    expect(getComplementaryDNA("G")).toBe("C");
  });

  test("works with lower case as well", () => {
    expect(getComplementaryDNA("atCGTaaaAACgtg")).toBe("TAGCATTTTTGCAC");
  });

  test("returns false if a string ireturns empty string for empty DNA string", () => {
    expect(getComplementaryDNA("")).toBe("");
  });

  test("throws error for incorrect DNA", () => {
    try {
      getComplementaryDNA("CCMCDTT");
    } catch (e) {
      expect(e.message).toBe("str should contain DNA symbols only");
    }
  });
});

describe("isItPrime", () => {
  test("returns the sum of all numbers which are a multiple of 3 or 5", () => {
    expect(isItPrime(1)).toBe(true);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(25)).toBe(false);
    expect(isItPrime(31)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("returns 3 x 3 array filled with a filler 'foo'", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]);
  });
});

describe("areWeCovered", () => {
  const staff = [
    { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Arthur", rota: ["Monday", "Sunday", "Tuesday", "Wednesday", "Monday"] },
    { name: "Anna", rota: ["Friday", "Sunday", "Tuesday", "Wednesday"] },
  ]

  test("not covered if there are no staff for a day", () => {
    expect(areWeCovered(staff, "Thursday")).toBe(false);
  });

  test("not covered if less then 3 of staff members are scheduled for a day", () => {
    expect(areWeCovered(staff, "Friday")).toBe(false);
  });

  test("days repeted for a staff member are not counted twice", () => {
    expect(areWeCovered(staff, "Monday")).toBe(false);
  });

  test("covered when 3 or more staff members scheduled", () => {
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
  });
});