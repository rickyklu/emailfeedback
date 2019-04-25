const keys = require('./config/keys');

const localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: keys.localTunnelUrl }, function(err, tunnel) {
	if (err) {
		console.log('error', err);
	}
  console.log('LT running');
});
