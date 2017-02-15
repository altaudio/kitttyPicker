var imgSrc = [
"http://buzzsharer.com/wp-content/uploads/2015/08/British-Shorthair-face-eyes.jpg",
"http://4.bp.blogspot.com/-C3_QFjecZak/T5bMfN4LHpI/AAAAAAAAAFI/W0IBpIVGqCI/s1600/Breaded+Cat.jpg",
"http://www.warrenphotographic.co.uk/photography/bigs/19634-Ginger-Maine-Coon-kitten-with-sombrero-hat-on-white-background.jpg,",
"https://altaudio.neocities.org/ceci1.png"];

var kittyName = ['Pickles', 'Bread Cat', 'Sombrero Kitty', 'Queen Cecilia'];
var kittyBio = ['Pickles is great at selfies.',  'Bread Cat is bread.', 'Sombrero Kitty likes to party all the time', 'Cecilia, or Queen Cecilia, is super-special rare kitty.']

$(document).ready(function() {
	$('#new-kitty').on('click', function () {
		var kittyIndex = _.random(0,_.size(imgSrc) - 1);

		$("#kitty-pic").attr('src', imgSrc[kittyIndex]);
		$('#kitty-name').text(kittyName[kittyIndex]);
		$('#bio').text(kittyBio[kittyIndex]);

	});

});