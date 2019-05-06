const localtunnel = require('localtunnel');
const forever = require('forever');
const keys = require('./config/keys');
const ltUrl = 'https://qazpolamsj.localtunnel.me'

const tunn = localtunnel(5000, { subdomain: ltUrl }, function (err, tunnel) {
	if (err) {
		console.log('error', err);
	}
  console.log('LT running');
});
