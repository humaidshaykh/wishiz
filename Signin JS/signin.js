// Registration Sign Up
function SUBMIT(){
    var registerUser = document.getElementById('username').value;
    var registerage = document.getElementById('userage').value;
    var registeremail = document.getElementById('usere-mail').value;
    var registerPassword = document.getElementById('userpassword').value;
    var registerNic = document.getElementById('usercnicnumber').value;

    if(registerUser.length > 0){
        if(registerage.length > 0){
            if(registeremail.length > 0){
                if(registerPassword.length > 5){
                    if(registerNic > 13){
                    alert("Registration Succesfull")
                    }else{
                        alert("Fill Nic Correctly");
                    }
                }else{
                    alert("Create Password Above 5 letters");
                }
            }else{
                alert("Fill E-mail Correctly");
            }
        }else{
            alert("Kindly Select Your Age")
        }
    }else{
        alert("Fill Username Correctly");
    }



localStorage.setItem("localUsername",registerUser);
localStorage.setItem("localUserage",registerage);
localStorage.setItem("localemail",registeremail);
localStorage.setItem("localpass",registerPassword);
localStorage.setItem("localnic",registerNic);
}

// Registration Login

function LOGIN(){
    var registeremail = document.getElementById("usere-mail").value;
    var registerPassword = document.getElementById("userpassword").value;

    var localemail = localStorage.getItem("localemail");
    var localpass = localStorage.getItem("localpass");


    if(registeremail == localemail && registerPassword == localpass){
        window.location.href = "index.html";
    }else{
        alert("Kindly fill correct credientials");
    }

}
