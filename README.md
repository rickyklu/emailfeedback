# Email Feedback App
A SaaS(software as a service) web application where users can sign in, purchase credits, and send out simple marketing-like emails survey to customers. Users sign up with their Google account and purchase credits to use the service. User can send out simple emails to customers. Customers will receive a simple email where they can click "Yes" or "No" to respond to the question that the User sends out.

# Link To Site
[https://lit-hamlet-49204.herokuapp.com/](https://lit-hamlet-49204.herokuapp.com/)

# Usage
### Sign In
Click on  "Sign In" at the top right of the page and use your own Google account to sign in. No information or permissions is taken from your Google account. Upon sign in the nav bar should update with your current credits displayed and a "Logout" button.
### Buying credits
To simulate the a SaaS, you have to "purchase" credits ($5 for 5 credits) in order to send a survey. Each survey sent out is 1 credit. You can sent 1 survey to 1 person for 1 credit, or send out 1 survey to 100+ people for 1 credit.
To add credits to your account, click on the "Add Credits". A Stripe(TM) popup window should appear requiring you to put in credit card and email information to purchase credits. Since this is not an official money service, a real credit card is not required. *Do not put in your real credit card information.* You can use a [Stripe test credit card number](https://stripe.com/docs/testing#cards) to add credits to your account.
### Dashboard
Upon signin, you should be directed to your [dashboard](https://lit-hamlet-49204.herokuapp.com/surveys/) with all the surveys you have created. If you have not created or sent out any surveys, you will not see anything.
Clicked responses to the survey email are also tallied and shown (current functionality allows for only "Yes" or "No" responses).
### Creating survey
To being creating the email survey, you should be sent to [the dashboard](https://lit-hamlet-49204.herokuapp.com/surveys/) upon login.
Click on the "plus" symbol and see a form and fill out the form. Enter the "Recipients List" field as a comma separated list. Upon clicking "Send Survey" the form will send out an email to the each of the recipients. (Note: survey emails may end up in the Spam or Junk Mail folder of your respective email service e.g. Gmail, Outlook, Yahoo!)
### Customer response
Customers will receive an email and will receive a simple text email with the subject and email body from the previous survey form. There will be two linkes in the email with the text "Yes" and "No". The links will be processed by SendGrid and then processed to log and store their responses. 


# Set up for development
* Clone or download the files
* `cd` the `server` directory.
* run `npm run dev` to run the development server. It will run the Node.js backend and React front end
* Under `/server/config` copy the `prod.js` file and rename the copy file as `dev.js'`. Replace the `proccess.env` keys with your own:
** Google 2.0 OAuth keys
** MongoDB URI
** Cookies key
** Stripe Account Keys
** SendGrid Keys
** Localtunnel URL
* In a different terminal, `cd` into the `server/client` directory and run `npm run webhook` (To be fixed because of localtunnel always crashing...)

# Bugs/errors
* For development purposes, fix problem of localtunnel always crashing and the need to run a separate terminal window to run `localtunnel` (localtunnel used to receive click responses in emails and log their responses and information into the MongoDB)
* When entering multiple email addresses in the recipients list (comma separated list) the first email does not go through

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

