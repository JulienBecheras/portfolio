const nav = document.querySelector('.nav');
const header = document.querySelector('.imgNav');
let height = header.clientHeight;

window.addEventListener('scroll', () => {
	if(window.scrollY > height) {
		nav.classList.add('scroll');
	}
	else{
		nav.classList.remove('scroll');
	}
})