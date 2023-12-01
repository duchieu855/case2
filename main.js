let slideIndex = 0;
showSlides(slideIndex);

// eslint-disable-next-line no-unused-vars
function pushSlides(n) {
	showSlides((slideIndex += n));
}

function showSlides(index) {
	const mySlides = document.querySelectorAll(".slideItem");
	mySlides.forEach((element) => {
		element.style.display = "none";
	});

	if (index > mySlides.length - 1) {
		index = 0;
		slideIndex = 0;
	}
	if (index < 0) {
		index = mySlides.length - 1;
		slideIndex = mySlides.length - 1;
	}

	console.log(index);
	mySlides[index].style.display = "block";
}
