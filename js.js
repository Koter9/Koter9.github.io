function p () {
	var header = document.getElementById('headerrr');
	var body = document.getElementById('body');
	header.style.display = 'none';
	body.style.height = '10000px';
	body.style.overflow = 'hidden';
	setTimeout(wellOn, 1000);
	setTimeout(wellOff, 3000);


}

		function wellOff ()  {
			var wtext = document.getElementsByClassName('wellText');
			
			wtext[0].style.animation = 'wellcomeTOff 3.5s linear forwards';

			setTimeout(function() {var header = document.getElementById('headerrr');
				var body = document.getElementById('body');
				var wbg = document.getElementsByClassName('wellBg');
				header.style.display = 'inline-block';
				body.style.height = 'auto';
				body.style.overflow = 'auto';
			wbg[0].style.animation = 'wbgoff 3.9s linear forwards';
			wbg[0].style.display = 'none';}, 3400);
			}
		
		


function windowOn(a) {
	var wind = document.getElementById(a);
	var body = document.getElementById('body');
	var bg = document.getElementsByClassName('bg');
	var header = document.getElementById('headerr');
	wind.style.animation = 'postOn 0.3s ease-out forwards';
	wind.style.display = 'inline-block';
	body.style.height = '10000px';
	body.style.overflow = 'hidden';
	bg[0].style.animation = 'bgOn 2s ease-out forwards';

	
}


function windowOff(a) {
	var wind = document.getElementById(a);
	var body = document.getElementById('body');
	var bg = document.getElementsByClassName('bg');
	var header = document.getElementById('headerr');
	wind.style.animation = 'postOff 1s ease forwards';
	body.style.height = '100%';
	body.style.overflow = 'auto';
	bg[0].style.animation = 'bgOff 0.5s ease-out forwards';
	header.style.display = 'inline-block';
}




