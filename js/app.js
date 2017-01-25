// setting up vue constructor
new Vue({
	// controlling html ID element
	el: '#app',
	// Accesable in our app - can be outputed into html file.
	data: {
		firstName: 'Adam',
		lastName: 'Poulsen'
	},
	methods: {
		// key        //value
		// getFullName: function(){
		// 	return this.firstName + ' ' + this.lastName;
		// }

		// using parameters - these values are asigned in the template file
		// getFullName: function(first, last){
		// 	return first + ' ' + last;
		// }

		getFullName: function(first, last){
			return {
				name: first + ' ' + last
			};
		}		
	}
});


