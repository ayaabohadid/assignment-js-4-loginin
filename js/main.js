var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var nameInput=document.getElementById("name");
var logininBtn = document.getElementById("loginin");


let userlist = localStorage.getItem("userConatiner")
        ? JSON.parse(localStorage.getItem("userContainer"))
        : [];


function login() {
    var account = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };
    console.log(account);
    clearForm();
}

function clearForm() {
    emailInput.value = "";
    passwordInput.value = "";
}

function addUser() {
    var isEmailValid = validateInput(emailInput);
    var isPasswordValid = validateInput(passwordInput);

    if (isEmailValid && isPasswordValid) {
        console.log("Valid inputs");
        login(); 
        window.open("file:///D:/assignment/assignment-js-4-loginin/home.html");
        welcome()
        
    } else {
        document.getElementById("msg").classList.remove("d-none");
        console.log("Invalid inputs");
    }

    let useraccount = { email: emailInput, password: passwordInput };
        userlist.push(useraccount);
        console.log("User list before saving:", userlist); 
        localStorage.setItem("userContainer", JSON.stringify(userlist)); 
        
        localStorage.setItem("userContainer", JSON.stringify(userlist)); 
        let savedData = JSON.parse(localStorage.getItem("userContainer"));
        
        if (savedData) {
            console.log("Data saved successfully:", savedData);
        } else {
            console.error("Failed to save data.");
        }
        
        msg.classList.add("d-none");
        console.log("User successfully signed up:", newUser);

        clearInput();
        window.open("file:///D:/assignment/assignment-js-4-loginin/home.html");
}

// logininBtn.onclick = addUser;

function validateInput(ele) {
    var regex = {
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        password: /^[0-9a-zA-z]{8,}$/,
    };
    var isValid = regex[ele.id].test(ele.value.trim());
    

    if (isValid) {
        ele.classList.add("is-valid");
        ele.classList.remove("is-invalid");
        document.getElementById("msg").classList.add("d-none");
    } else {
        ele.classList.remove("is-valid");
        ele.classList.add("is-invalid");
       
    }
    return isValid;
}



function welcome() {
    let cartona = `
        <div class="container mt-5 w-50 text-center shadow-">
            <h2 class="fs-1 p-5 t-color">Welcome ${nameInput.value}</h2>
        </div>
    `;
    document.getElementById("welcomee").innerHTML = cartona;
    return
}
   








//////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    let emailuser = document.getElementById("userEmai");
    let passworduser = document.getElementById("userPassword");
    let nameInput = document.getElementById("name");
    let signUpBtn = document.getElementById("signup");
    let msg = document.getElementById("ya");
    window.signUp = signUp;


    let userlist = localStorage.getItem("userConatiner")
        ? JSON.parse(localStorage.getItem("userContainer"))
        : [];

    function signUp() {
        let emailu = emailuser.value.trim().toLowerCase();
        let passwordu = passworduser.value.trim();
        let name = nameInput.value.trim();

        let isEmailValid = validate(emailuser);
        let isPasswordValid = validate(passworduser);
        let isNameValid = name.length > 0;

        if (!isNameValid) {
            nameInput.classList.add("is-invalid");
            nameInput.classList.remove("is-valid");
            msg.classList.remove("d-none");
            msg.textContent = "Name cannot be empty.";
            return;
        } else {
            nameInput.classList.remove("is-invalid");
            nameInput.classList.add("is-valid");
        }

        if (!isEmailValid || !isPasswordValid) {
            msg.classList.remove("d-none");
            msg.textContent = "Please provide valid email and password.";
            return;
        }

        let isUniqueEmail = !userlist.some(
            (account) => account.email === emailu
        );

        if (!isUniqueEmail) {
            msg.classList.remove("d-none");
            msg.textContent = "This email is already registered.";
            return;
        }

        let newUser = {name, email: emailu, password: passwordu };
        userlist.push(newUser);
        console.log("User list before saving:", userlist); 
        localStorage.setItem("userContainer", JSON.stringify(userlist)); 
        
        localStorage.setItem("userContainer", JSON.stringify(userlist)); 
        let savedData = JSON.parse(localStorage.getItem("userContainer"));
        
        if (savedData) {
            console.log("Data saved successfully:", savedData);
        } else {
            console.error("Failed to save data.");
        }
        
        msg.classList.add("d-none");
        console.log("User successfully signed up:", newUser);
        window.open("file:///D:/assignment/assignment-js-4-loginin/home.html");
   
        
        clearInput();
       
    }

    function validate(ele) {
        let regex = {
            userEmai: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            userPassword: /^[0-9a-zA-Z]{8,}$/,
        };
        let isValidu = regex[ele.id].test(ele.value.trim().toLowerCase());

        if (isValidu) {
            ele.classList.add("is-valid");
            ele.classList.remove("is-invalid");
            msg.classList.add("d-none");
        } else {
            ele.classList.remove("is-valid");
            ele.classList.add("is-invalid");
            msg.classList.remove("d-none");
        }
        return isValidu;
    }

    function clearInput() {
        emailuser.value = "";
        passworduser.value = "";
        nameInput.value = "";
    }

    if (signUpBtn) {
        signUpBtn.addEventListener("click", signUp);
        window.open("file:///D:/assignment/assignment-js-4-loginin/home.html");
    }else{
        console.log("not valid")
    }
});

