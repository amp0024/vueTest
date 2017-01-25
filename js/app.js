// setting up vue constructor
new Vue({
	// controlling html ID element
	el: '#app',
	// Accesable in our app - can be outputed into html file.
	data: {

		movieName: 'Gone with the wind',
		releaseDate: 2001
	},
	methods: {
		isMovieOld: function(releaseDate){
			// return releaseDate < 2000 ? 'Old' : 'New';
			return releaseDate < 2000;
		}
	}
});


