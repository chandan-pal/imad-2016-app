// Create a request object
var req = new XMLHttpRequest();
// Capture the response and store it in a variable
req.onreadystatechange = function() {
	if (req.readyState == XMLHttpRequest.DONE) {
		if (req.status == 200) {
			var count = req.responseText;
			var counterSpan = document.getElementById('counter');
			counterSpan.innerHTML = count;
		}
	}
};
// Make the request
req.open('GET', 'http://chandan-pal.imad.hasura-app.io/counter', true);
req.send(null);
