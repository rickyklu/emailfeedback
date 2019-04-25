// takes list of emails (comma separated)
// and validates as correct emails

// email regex from http://emailregex.com/
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {

	// user enters a long string of comma separated emails
	// pasrse out emails, replacing commas and spaces and returning a
	// list of invalid emails for user to correct
	const invalidEmails = emails
	.split(',')
	.map(email => email.trim().replace(/^[,\s]+|[,\s]+$/g, '').replace(/,[,\s]*,/g, ','))
	.filter(item => item !== "")
	.filter(email => re.test(email) === false);

	if (invalidEmails.length) {
		return `These emails are invalid: ${invalidEmails}.`;
	}
}