
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');

module.exports = app => {
	app.get('/api/surveys/thanks', (req, res) => {
		res.send('Thank you for your feedback!');
	});

	// webhook so when user clicks on response in email, response is logged
	app.post('/api/surveys/webhooks', (req, res) => {
		console.log(req.body);
		res.send({});
	});

	// send survey data to sendgrid so email can be sent out
	app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			body,
			subject,
			recipients: recipients.split(',').map(email => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});

		try {
			// send email
			const mailer = new Mailer(survey, surveyTemplate(survey));
			await mailer.send();

			// save survey into mongodb and deduct credit
			await survey.save();
			req.user.credits = req.user.credits - 1;
			const user = await req.user.save();

			// send back user model, updates header
			res.send(user);
		}	catch (err) {
			res.status(422).send(err);
		}
	});
};
