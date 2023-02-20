// Subscribe Validation
function subscribe(){
	var subscribe = document.getElementById("emailid").value;

    if(subscribe == ""){
        document.getElementById("suberror").innerHTML="required";
        return false;
    }

	if(subscribe.indexOf('@')<= 0){
        document.getElementById("suberror").innerHTML="invalid email";
        return false;
    }

    if(subscribe.indexOf('gmail')<= 0){
        document.getElementById("suberror").innerHTML="invalid email";
        return false;
    }

    if(subscribe.charAt(b.length-4)!='.'){
        document.getElementById("suberror").innerHTML="invalid email";
        return false;
    }

}


// Popup
$(document).ready(function(){
	setTimeout(function(){
		$('#popUpMain').css('display','block'); }, 5000);
});

$('.submitId').click(function(){
	$('#popUpMain').css('display','none');
});


// Body Loader
	var preloader = document.getElementById('loader-wrapper');

	function onLoading(){
		preloader.style.display = 'none';
	};


// navbar script

let navbar = document.querySelector('.links');

let header = document.querySelector('header');

document.querySelector('#menu-btnn').onclick = () =>{
	navbar.classList.toggle('active');
	header.classList.toggle('active');
}

// change background color of navbar on scroll

function change() {
	var nav = document.getElementById('nav');

	var value=window.scrollY;

	if (value>80) 
	{
		nav.classList.add('nav-change');
	}
	else
	{
		nav.classList.remove('nav-change');
	}
}

window.addEventListener('scroll',change);


//Animate Number Total Event Coverage

	const workSection = document.querySelector(".section-work-data");

	const workObserver = new IntersectionObserver(
		(entries, observer) => {
		const [entry] = entries;
		console.log(entry);

		// if(entry.isIntersecting == false)
		if(!entry.isIntersecting) return;

		//Animate Counter Data
const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) =>{

	const updateNumber = () => {
		const targetNumber = parseInt(curElem.dataset.number);
		// console.log(targetNumber);
		const intialNum = parseInt(curElem.innerText);
		// console.log(intialNum);

		const increamentNumber = Math.trunc(targetNumber / speed);
		// console.log(increamentNumber);

		if(intialNum < targetNumber) {
			curElem.innerText = `${intialNum + increamentNumber}+` ;
			setTimeout(updateNumber, 8);
		}

	};
	updateNumber();

});

observer.unobserve(workSection)

	}, 
	{
		root: null,
		threshold: 0,
	}
	);

	workObserver.observe(workSection);
//Animate Number Total Event Coverage

function basic(){
	alert("Login your accout");
}

//Bottom to top button
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", ()=>{
  if(window.pageYOffset > 100){
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

//Bottom to top arrow end