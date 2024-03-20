const data = require("./data.json");

describe("JSON data validation", () => {
  it("should have an id that is a number", () => {
    data; //?
    expect(typeof data.id).toBe("number");
  });

  it("should have a name that is a string", () => {
    expect(typeof data.name).toBe("string");
  });

  it("should have an email that is a string", () => {
    expect(typeof data.email).toBe("string");
  });
});
