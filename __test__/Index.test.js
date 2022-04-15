const { wageComputer, input } = require("../index");

describe("Test for Wage / Salary computation", () => {
  it("Compute RENE's wage", () => {
    expect(wageComputer(input[0])).toBe(`"The amount to pay RENE is: 215 USD"`);
  });

  it("Compute ASTRID's wage", () => {
    expect(wageComputer(input[1])).toBe(
      `"The amount to pay ASTRID is: 85 USD"`
    );
  });

  it("Compute MICHAEL's wage", () => {
    expect(wageComputer(input[2])).toBe(
      `"The amount to pay MICHAEL is: 250 USD"`
    );
  });

  it("Compute ZOE's wage", () => {
    expect(wageComputer(input[3])).toBe(`"The amount to pay ZOE is: 315 USD"`);
  });

  it("Compute BELLA's wage", () => {
    expect(wageComputer(input[4])).toBe(
      `"The amount to pay BELLA is: 355 USD"`
    );
  });
});
