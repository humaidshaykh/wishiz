// Body Loader
var preloader = document.getElementById('loader-wrapper');

function onLoading(){
	preloader.style.display = 'none';
};


// navbar script

let navbar = document.querySelector('.links');

let header = document.querySelector('header');

document.querySelector('#menu-btnn').onclick = () => {
	navbar.classList.toggle('active');
	header.classList.toggle('active');
}

// change background color of navbar on scroll

function change() {
	var nav = document.getElementById('nav');

	var value = window.scrollY;

	if (value > 80) {
		nav.classList.add('nav-change');
	}
	else {
		nav.classList.remove('nav-change');
	}
}

window.addEventListener('scroll', change);

//Bottom to top button
const toTop = document.querySelector(".to-top")
window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
})

//Bottom to top arrow end



// PopUp Starts
document.querySelectorAll('.imgbox img').forEach(image => {
	image.onclick = () => {
		document.querySelector('.popup-img').style.display = 'block';
		document.querySelector('.popup-img img').src = image.getAttribute('src');
	}

});

document.querySelector('.popup-img span').onclick = () => {
	document.querySelector('.popup-img').style.display = 'none';
}

$(document).ready(function(){
	$('.imgbox img').click(function(){
	  $(header).hide();
	});
  });

  $(document).ready(function(){
	$('.popup-img span').click(function(){
	  $(header).show();
	});
  });


// PopUp Ends