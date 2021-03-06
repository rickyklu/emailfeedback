const express = require('express');
const passport = require('passport')

module.exports = (app) => {
	// when user hits route, authenticate with password google oath

	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));
	
	app.get('/api/login', (req, res) => {
		res.redirect('/auth/google');
	});

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
}

