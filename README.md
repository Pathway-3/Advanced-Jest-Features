# advanced-jest-features

## Overview

This is a simple project to demonstrate some advanced features of Jest. It is a simple Node.js application
that fetches data from a URL and sends an email to a user.

## Dependencies

- Node.js
- Jest

## Usage

- Clone the repository
- Run `npm install`
- Run `npm run test`

## Fetch Data

This fetch data uses an sample API to use to get info.

```jsx
async function getData(url) {
  const response = await fetch(url);
}
```

## Fetch Data with Test

The test `fetchData.test.js` demonstrates how to fetch data from a URL and test the response. When the test ran it provides a passed test.

## Send Email

This sends an email using a mock email service. It uses the `nodemailer` library to send an email. It uses the `jest-mock` library to mock the email service and send an email.

```jsx
import { sendEmail } from "./emailService";
import { mockSendMail } from "jest-mock-mail-service";
```

## Send Email with Test

The test `emailService.test.js` demonstrates how to send an email to a user and test the response. When the test ran it provides a passed test.

## Conclusion

This project demonstrates some advanced features of Jest. It proves the function of getting info from an API and passes it. The email mock does not actually send an email it mocks it to see if the email functions will work.
