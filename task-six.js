
function validate() {

    let name = document.getElementById("fullname").value;
    let user = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phonenumber").value;
    let pass = document.getElementById("pass").value;
    let confirmpass = document.getElementById("confirmpass").value;
    let type = document.getElementById("usertype").value;
    let namePattern = /^[A-Za-z ]+$/;
    let phonePattern = /^[789][0-9]{9}$/;

    document.getElementById("fullnameError").innerHTML="";
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("phoneError").innerHTML="";
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("confirmpassError").innerHTML="";
    document.getElementById("usertypeError").innerHTML="";

    let valid = true;
    if (!namePattern.test(name)) {
        document.getElementById("fullnameError").innerHTML = "Please Enter characters";
        valid = false;
        
    }
    if (name === "") {
        document.getElementById("fullnameError").innerHTML = "Name is required";
        valid = false;
        
    }
    if (user === "") {
        document.getElementById("usernameError").innerHTML = "Username is required";
        valid = false;
    }
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }
    if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").innerHTML = "Email Format is incorrect.";
        valid = false;
    }

    
    if(!phonePattern.test(phone)){
        document.getElementById("phoneError").innerHTML="Number Should be start with 7, 8, 9 and must be 10 digits";
        valid = false;
    } 
    
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Phone Number is required";
        valid = false;
    }
    if (pass === "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        valid = false;

    }else if (pass.length<8) {
        document.getElementById("passwordError").innerHTML = "Password must have 8 characters";
        valid = false;
    }else if (pass.length>8) {
        document.getElementById("passwordError").innerHTML = "Password must have 8 characters";
        valid = false;
    }
    if (confirmpass != pass) {
        document.getElementById("confirmpassError").innerHTML = "Password do not match";
        valid = false;
    }
    if(type === ""){
        document.getElementById("usertypeError").innerHTML = "Please Select the User.";
        valid = false;
    }

    if(valid){
        alert("Form Submitted");
    }else{
        alert("Form Not Submitted. Please Re-fill the form.");
    }
    return valid;
}

