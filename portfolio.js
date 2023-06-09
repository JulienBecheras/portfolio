const nav = document.querySelector('.nav');
const imgNav = document.querySelector('.imgNav');
let height = imgNav.clientHeight;
window.addEventListener('scroll', () => {
	if(window.scrollY > height){
		nav.classList.add('scroll');
	}else{
		nav.classList.remove('scroll');
	}
});