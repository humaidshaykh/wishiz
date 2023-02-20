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
function validation(){
    var a = document.getElementById("user_name").value;
    var b = document.getElementById("user_email").value;
    var c = document.getElementById("user_phone").value;
    var d = document.getElementById("get_services").value;
    var e = document.getElementById("user_message").value;

    if(a == ""){
        document.getElementById("error1").innerHTML="**Username must be required";
        return false;
    }

    if((a.length <= 2) || (a.length > 20)){
        document.getElementById("error1").innerHTML="**User length must be between 2 and 20";
        return false;
    }

    if(!isNaN(a)){
        document.getElementById("error1").innerHTML="**Only characters are allowed";
        return false;
    }

    if(b == ""){
        document.getElementById("error2").innerHTML="**Email must be required";
        return false;
    }

    if(b.indexOf('@')<= 0){
        document.getElementById("error2").innerHTML="**@ invalid position";
        return false;
    }

    if(b.indexOf('gmail')<= 0){
        document.getElementById("error2").innerHTML="**gmail invalid position";
        return false;
    }

    if(b.charAt(b.length-4)!='.'){
        document.getElementById("error2").innerHTML="**. invalid position";
        return false;
    }

    if(c == ""){
        document.getElementById("error3").innerHTML="**Phone number must be required";
        return false;
    }

    if(isNaN(c)){
        document.getElementById("error3").innerHTML="**Only numbers are allowed not characters";
        return false;
    }

    if(c.length != 11){
        document.getElementById("error3").innerHTML="**Phone number must be 11 digits";
        return false;
    }

    if(d == "Select Services"){
        document.getElementById("error4").innerHTML="**User must select any option";
        return false;
    }

    if(e == ""){
        document.getElementById("error5").innerHTML="**Message required";
        return false;
    }

    if(e.length < 18){
        document.getElementById("error5").innerHTML="**Message must be above 18 Letters";
        return false;
    }else{        
        swal("Good job!", "Your Form has been submitted!", "success");

    }


localStorage.setItem("Contact-Username",a);
localStorage.setItem("Contact-Email",b);
localStorage.setItem("Contact-Phone",c);
localStorage.setItem("Contact-GetServices",d);
localStorage.setItem("Contact-Message",e);
    
}



function onfocss(){
var innn = document.getElementById("error1");
innn.innerHTML=""

var innn = document.getElementById("error2");
innn.innerHTML=""

var innn = document.getElementById("error3");
innn.innerHTML=""

var innn = document.getElementById("error4");
innn.innerHTML=""

var innn = document.getElementById("error5");
innn.innerHTML=""

}