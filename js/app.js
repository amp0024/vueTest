// setting up vue constructor
new Vue({
	// controlling html ID element
	el: '#app',
	// Accesable in our app - can be outputed into html file.
	methods: {
		clickedButton: function(message, event){
			console.log(event);
			alert(message);
		}
	}
});


