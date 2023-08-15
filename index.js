let copier = document.getElementById('copyURL');
let finalData = document.getElementById('generatedURL');
let fg = document.getElementById('fg');
let bg = document.getElementById('bg');
let fs = document.getElementById('fs');
let ff = document.getElementById('ff');
let cardText = document.getElementById('cardText');
let person = document.getElementById('person');

function updateURL() {
	const url = new URL(person.value, 'https://b.anwar.app');
	const searchParams = new URLSearchParams(url.search);
	console.log(fg.value);
	if (fg.value) {
		searchParams.set('fg', fg.value);
	}
	if (bg.value) {
		searchParams.set('bg', bg.value);
	}
	if (fs.value) {
		searchParams.set('fs', fs.value);
	}
	if (ff.value) {
		searchParams.set('ff', ff.value);
	}
	if (cardText.value) {
		searchParams.set('t', cardText.value);
	}
	url.search = searchParams.toString();

	copier.addEventListener('click', () => {
		copyData(url);
	});
}

function copyData(url) {
	// https://bugzilla.mozilla.org/show_bug.cgi?id=1560373
	// Firefox throws an error if we write to the clipboard without the user's permission
	// Then when we ask for permission, it throws an error again that `clipboard-write` isn't supported
	// So first, we play nice, request permission, then we write to the clipboard no matter what
	navigator.permissions
		.query({ name: 'clipboard-write' })
		.then(() => {
			// Assume we got permission
			navigator.clipboard.writeText(url);
		})
		.catch((err) => {
			// No one cares, we just catch it to keep the console clean, LOL (not our fault)
			navigator.clipboard.writeText(url);
		});
}

fg.addEventListener('input', updateURL);
ff.addEventListener('input', updateURL);
fs.addEventListener('input', updateURL);
bg.addEventListener('input', updateURL);
cardText.addEventListener('input', updateURL);
