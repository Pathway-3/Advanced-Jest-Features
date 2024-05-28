import sendEmail from "../emailService";

jest.mock("./sendEmail", () => ({
  sendEmail: jest.fn(() => Promise.resolve("Email sent")),
}));

describe("Email sending", () => {
  it("should send email to the user", () => {
    const mockSendEmail = jest.fn();
    const email = "test@example.com";
    const message = "test message";
    sendEmail.mockImplentation(mockSendEmail);
    sendEmail(email, message);
    expect(mockSendEmail).toHaveBeenCalledWith(email, message);
  });
});
