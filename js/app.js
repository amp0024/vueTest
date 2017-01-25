// setting up vue constructor
new Vue({
	// controlling html ID element
	el: '#app',
	// Accesable in our app - can be outputed into html file.
	methods: {
		clickedButton: function(){
			alert('Ths button was clicked');
		}
	}
});


