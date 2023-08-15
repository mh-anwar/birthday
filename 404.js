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
let picture = url.searchParams.get('pic');
let text = url.searchParams.get('text');
let personName = url.pathname.split('/')[1];
console.log(
	foreground,
	background,
	fontSize,
	fontFamily,
	picture,
	text,
	personName
);
body.style.background = background;
body.style.color = foreground;
body.style.textAlign = 'center';

heading.style.fontSize = fontSize;
heading.textContent = 'Dear ' + personName + ', Happy Birthday!';
cardText.textContent = text;

if (picture !== undefined && picture !== null) {
	image.src = picture;
} else {
	document.removeChild(image);
}
