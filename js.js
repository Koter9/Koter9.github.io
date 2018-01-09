function p () {
	post1();
	post2();
	post3();
	post4();
	post5();
	post6();
	post7();
	post8();
	post9();
	post10();
	post11();
	post12();
	post13();
	post14();
	post15();
	post16();
}


function windowOn(a) {
	var wind = document.getElementById(a);
	var body = document.getElementById('body');
	var bg = document.getElementsByClassName('bg');
	var header = document.getElementById('headerr');
	wind.style.top = '50px';
	wind.style.display = 'inline-block';
	body.style.height = '10000px';
	body.style.overflow = 'hidden';
	bg[0].style.display = 'inline';

	
}


function windowOff(a) {
	var wind = document.getElementById(a);
	var body = document.getElementById('body');
	var bg = document.getElementsByClassName('bg');
	var header = document.getElementById('headerr');
	wind.style.top = '-500000000px';
	wind.style.display = 'none';
	body.style.height = '100%';
	body.style.overflow = 'auto';
	bg[0].style.display = 'none';
	header.style.display = 'inline-block';
}




