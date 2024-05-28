"use strict";

const sendEmail = function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Email sent");
    }, 1000); // simulate latency of 1 second
  });
};

export default sendEmail;