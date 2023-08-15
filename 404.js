import lzString from 'lz-string';
let url = new URL(window.location.href);
console.log(url);
let body = document.body;
let heading = document.getElementById('happyBirthday');
let image = document.getElementById('birthdayImage');
let cardText = document.getElementById('text');

let foreground = lzString.decompress(url.searchParams.get('fg'));
let background = lzString.decompress(url.searchParams.get('bg'));
let fontSize = lzString.decompress(url.searchParams.get('fs'));
let fontFamily = lzString.decompress(url.searchParams.get('ff'));
let picture = lzString.decompress(url.searchParams.get('pic'));
let text = lzString.decompress(url.searchParams.get('text'));
let personName = lzString.decompress(url.pathname.slice(1));

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
