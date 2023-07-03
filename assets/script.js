const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.querySelector('.banner-img')
const dots = document.querySelector('.dots')
const flechDroit = document.querySelector('.arrow_right')
const flechGauche = document.querySelector('.arrow_left')
const textBanner = document.querySelector('.text-banner')
let positionOne = 0

flechDroit.addEventListener('click', () =>{
	positionOne++
	if (positionOne == slides.length) {
		positionOne = 0
	}
	banner.src = slides[positionOne].image
	textBanner.innerHTML = slides[positionOne].tagLine
	console.log('click sur la fleche de droite')
	dotActive()
})

flechGauche.addEventListener('click', () => {
	positionOne--
	if(positionOne == -1) {
		positionOne = slides.length -1
	}
	banner.src = slides[positionOne].image
	textBanner.innerHTML = slides[positionOne].tagLine
	console.log('click sur la fleche gauche');
	dotActive()
})

for (i = 0; i < slides.length; i++){
	const nouveauDot = document.createElement('div')
	nouveauDot.classList = 'dot'
	dots.appendChild(nouveauDot)
	nouveauDot.addEventListener('click', () => {
		positionOne = i
		banner.src = slides[positionOne].image
		textBanner.innerHTML = slides[positionOne].tagLine
		dotActive()
	})
}

let dot = document.querySelectorAll('.dot')
dot[0].classList.add('dot_selected')

function dotActive() {
	 for(i = 0;i < dot.length; i++){
		if( i == positionOne ) {
			dot[i].classList.add('dot_selected')
		}else{
			dot[i].classList.remove('dot_selected')
		}
	 }
}
