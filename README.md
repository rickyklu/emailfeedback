# Email Feedback App
A web application where users can sign up and send out simple marketing-like emails survey to customers (i.e. Constant Contact surveys). Users sign up with their Google account and must pay to use the service. Customers will receive a simple email where they can click "Yes" or "No" to respond to the question that the User sends out.

# Link To Site
[https://lit-hamlet-49204.herokuapp.com/](https://lit-hamlet-49204.herokuapp.com/)

# Usage
## Sign In
Click on the top right and use your own Google account to sign in. No information or permissions is taken from your Google account. Upon sign in the nav bar should update with your current credits displayed and a "Logout" button.
To being creating the simple email survey, you should be sent to [the survey home page](https://lit-hamlet-49204.herokuapp.com/surveys/).
Click on the "plus" symbol and see a form and fill out the form. Enter the "Recipients List" field as a comma separated list. Upon clicking "Send Survey" the form will send out an email to the each of the recipients. (Note: survey emails may end up in the Spam or Junk Mail folder of your respective email service e.g. Gmail, Outlook, Yahoo!)

## Buying credits
Click on the "Add Credits". A Stripe(TM) popup window should appear requiring you to put in credit card and email informationt to purchase credits. Since this is not an official marketable service, a real credit card is not required. You can use a [Stripe test credit card number](https://stripe.com/docs/testing#cards) to add credits to your account.

# Set up for development
* Clone or download the files
* `cd` the `server` directory.
* run `npm run dev` to run the development server. It will run the Node.js backend and React front end
* In a different terminal, `cd` into the `server/client` directory and run `npm run webhook` (To be fixed because of localtunnel always crashing...)

# Bugs/errors
to be filled...

# Main Technologies and Services Used
* JavaScript
* React
* Redux
* Express.js
* Mongoose
* MongoDB
* Stripe
* Google OAuth 2.0
* SendGrid


# License
The MIT License (MIT)

Copyright (c) 2019 Ricky Lu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.