"use strict";

const { getData } = require("../dataFetch");

describe(getData, () => {
  test("should fetch data from a URL", async () => {
    const url = "https://example.com";
    const data = await getData(url);
    expect(data).toEqual(`fetch data from ${url}`);
  });
});
