let url = new URL(window.location.href);
console.log(url);
let body = document.body;
let heading = document.getElementById('happyBirthday');
let image = document.getElementById('birthdayImage');
let cardText = document.getElementById('text');

let foreground = url.searchParams.get('fg');
let background = url.searchParams.get('bg');
let fontSize = url.searchParams.get('fs');
let fontFamily = url.searchParams.get('ff');
let picture = url.searchParams.get('p');
let text = url.searchParams.get('t');
let personName = url.pathname.split('/')[1];

body.style.background = background;
body.style.color = foreground;
body.style.fontFamily = fontFamily;
body.style.fontSize = fontSize;

heading.textContent = 'Dear ' + personName + ', Happy Birthday!';
cardText.textContent = text;

if (picture !== undefined && picture !== null) {
	image.src = picture;
} else {
	image.remove();
}
