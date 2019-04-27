const ngrok = require('ngrok');
const PORT = 5000;
(async function (err, url) {
	console.log('starting ngrokking');
	if (err) {
		console.log('Error', err);
	}
  const erl = await ngrok.connect({
  	addr: PORT
  });
  console.log('ngrok URL is', erl);
})();
