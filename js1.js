

function post1 () {

document.getElementById('1p').className +="demo-card-wide mdl-card mdl-shadow--2dp";
document.getElementById('1p').style.display='block';
document.getElementById('1t').className +="mdl-card__supporting-text";
document.getElementById('1t').innerHTML = 'Приветствую Тебя на моём сайте!' ;
document.getElementById('11').className +="mdl-card__actions mdl-card--border";
document.getElementById('1b').className +="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect";
document.getElementById('1b').setAttribute('href', '#1');
document.getElementById('1b').innerHTML = 'Можешь нажать' ;
document.getElementById('1').className +="mdl-card__title";
document.getElementById('1').setAttribute('src', 'images/mainPost.jpg');
document.getElementById('a1').className +="window";
document.getElementById('wp1').className +="windowImg";
document.getElementById('wp1').setAttribute('src', 'images/mainPost.jpg');
document.getElementById('close1').className +="fa fa-times fa-lg";
document.getElementById('close1').setAttribute('aria-hidden', 'true');
document.getElementById('ob1').className +="windowOrderButtons";
document.getElementById('f1').className +="windowOrderButtonTelegram";
document.getElementById('f1').setAttribute('target', '_blank');
document.getElementById('f1').setAttribute('href', 'https://freelancehunt.com/freelancer/Koter9.html');
document.getElementById('f1').innerHTML = 'Freelancehunt' ;
document.getElementById('t1').className +="windowOrderButtonFrelanchat";
document.getElementById('t1').setAttribute('target', '_blank');
document.getElementById('t1').setAttribute('href', 'https://t.me/Koter9');
document.getElementById('t1').innerHTML = 'Telegram' ;
document.getElementById('wt1').className +="windowText";
document.getElementById('wt1').innerHTML = '<em>Привет!</em> Ты один из первых, кто сюда зашёл. Здесь пока пусто, но благодаря <em>Тебе</em>, всё изменится! Ты можешь заказать у меня <em>сайт или его дизайн</em>, и я размещу его тут. ' ;

}