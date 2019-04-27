const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');

module.exports = app => {
	// dashboard route upon login
	app.get('/api/surveys', requireLogin, async (req, res) => {
		const surveys = await Survey.find({ _user: req.user.id })
			// prevents DB query from pulling ALL surveys (incl ones not from the user)
			.select({ recipients: false });

		res.send(surveys);
	});

	// after customer responds to a survey
	app.get('/api/surveys/:surveyId/:choice', (req, res) => {
		res.send('Thank you for your feedback!');
	});

	// webhook so when user clicks on response in email, response is logged
	app.post('/api/surveys/webhooks', (req, res) => {
		//testing
		// console.log(req.body);
		const p = new Path('/api/surveys/:surveyId/:choice');

		_.chain(req.body)
			.map(({ email, url }) => {
				const match = p.test(new URL(url).pathname);
				if (match) {
					return { email, surveyId: match.surveyId, choice: match.choice };
				}
			})
			.compact()
			.uniqBy()
			.each(({ surveyId, email, choice }) => {
				Survey.updateOne({
					_id: surveyId,
					recipients: {
						$elemMatch: { email: email, responded: false }
					}
				}, {
					$inc: { [choice]: 1 },
					$set: { 'recipients.$.responded': true },
					lastResponded: new Date()
				}).exec();
			})
			.value();

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

