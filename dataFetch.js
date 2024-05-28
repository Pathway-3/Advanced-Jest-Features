"use strict";

async function getData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`fetch data from ${url}`);
    }, 1000); // simulate latency of 1 second
  });
}

getData("https://example.com");
// returns: fetch data from https://example

module.exports = { getData };
