function p () {
	var header = document.getElementById('headerrr');
	var body = document.getElementById('body');
	header.style.display = 'none';
	body.style.height = '100000px';
	body.style.overflow = 'hidden';
	setTimeout(wellOn, 500);
	setTimeout(wellOff, 5000);
	


}
	
function wellOn() {

		var wellCome = document.getElementsByClassName('wellCome');
		var wellText = document.getElementsByClassName('wellText');
		wellText[0].style.animation = 'wellcomeT 0.5s linear forwards';
		
	
}


function wellOff() {
	var wellCome = document.getElementsByClassName('wellCome');
	var wellBg = document.getElementsByClassName('wellBg');
		var wellText = document.getElementsByClassName('wellText');
		var header = document.getElementById('headerrr');
	var body = document.getElementById('body');
	header.style.display = 'inline-block';
		
		wellText[0].style.animation = 'wellcomeTOff 0.5s linear forwards';
		
					

	wellBg[0].style.animation = 'wellcomeOff 1.5s linear forwards'
	

		setTimeout(function() {
					var wellCome = document.getElementsByClassName('wellCome');
					var wellBg = document.getElementsByClassName('wellBg');
					var body = document.getElementById('body');					
					wellCome[0].style.display = 'none'
					body.style.height = 'auto';
					body.style.overflow = 'auto';
					setTimeout(function() {wellBg[0].style.display = 'none'}, 400);
					
				}, 900);

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




// wellText[0].style.animation = 'wellcomeTOff 0.5s linear forwards';
		
// 	wellBg[0].style.animation = 'wellcomeOff 4 linear forwards'
	

// 		setTimeout(function() {
// 					var wellCome = document.getElementsByClassName('wellCome');
// 					var wellBg = document.getElementsByClassName('wellBg');
// 					var body = document.getElementById('body');
// 					wellCome[0].style.display = 'none'
// 					body.style.height = 'auto';
// 					body.style.overflow = 'auto';
// 					wellBg[0].style.animation = 'wellcomeOff 4 linear forwards'
// 				}, 900);