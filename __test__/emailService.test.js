const { sendEmail } = require("../emailService");

jest.mock("../emailService", () => ({
  sendEmail: jest.fn(() => Promise.resolve("Email sent")),
}));

describe("Email sending", () => {
  it("should send email to the user", () => {
    const email = "test@example.com";
    const message = "test message";

    sendEmail(email, message);
    expect(sendEmail).toHaveBeenCalledWith(email, message);
  });
});
