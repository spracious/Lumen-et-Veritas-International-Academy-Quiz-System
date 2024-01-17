//Expiration timer 
let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2024, 4, 14, 18, 0);
let endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = (num) => (num < 10 ? `0${num}` : num);

    if (endTime <= todayTime) {
    
        clearInterval(i);
        alert("Oops! Free registration time is Up. You missed it..... Please proceed to pay late registration fee.")

        let tickingTime = document.querySelector(".container")
        let lateReg = document.querySelector(".btn.is-visible")
        tickingTime.classList.add("d_null")
        lateReg.classList.remove("d_null")
   
    } else{
    
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
    
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }   
  
}

let i = setInterval(countdown, 1000);
countdown();








//Data storing into localstorage
function validateForm(){

    let data=localStorage.getItem('participants') ? JSON.parse(localStorage.getItem('participants')) : [];;
    let formData ={
            "name":document.getElementById("uName").value,
            "email":document.getElementById("uEmail").value,
            "password":document.getElementById("uPassword").value,
            "confirmpassword":document.getElementById("confirmPassword").value
        }
        if("idno".length!=10){
        //   alert("Icomplete id")  
        }
        data.push(formData);
        if(localStorage){
            localStorage.setItem("participants", JSON.stringify(data));
        } 
}

//Check if password is matching
function verifyPassword(input){
    if(input.value != document.getElementById("uPassword").value){
        input.setCustomValidity("Password Must be Matching");
    }else{
        input.setCustomValidity("");
    }
}

//check already registered users
function emailExist(value){
    let existemail = JSON.parse(localStorage.getItem("participants"));

    let emailid = existemail.map((email,i,existemail) =>{
        return existemail[i].email;
    });

     let getexistemail = emailid.filter((email)=>{
        if(email == value.value){
            value.setCustomValidity('email exist. try something else');

        }else{
            value.setCustomValidity("");
        }
    });
}


let schools = JSON.parse(localStorage.getItem("schools"))

function addSchools(ele) {
    
    let option = "";
    let select = document.getElementById("select_school")
    ele.forEach((school) => {
        
      option += `
                  <option value"">Select School</option>
                  <option value"${school.sch_name}">${school.sch_name}</option>
          `;
    });
    select.innerHTML = option;
}
addSchools(schools);



//Handling bubbling
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        form.reset();
        document.getElementById("thankYou").style.display="block";
        form.style.display="none";
    });

    function showHide(show, hide){
        let showEle = document.getElementById(show);
        let hideEle = document.getElementById(hide);
        showEle.style.display="block";
        hideEle.style.display="none";
    }

    //login here
    function loginUser(){

        let loginEmail = document.getElementById("uemailId").value;
        let loginPass =  document.getElementById("ePassword").value;
        let matchEmail = JSON.parse(localStorage.getItem("participants"));
        let emailArray =[];
        let passArray=[];
         let result = matchEmail.map((email, i, matchEmail) =>{

           emailArray.push(matchEmail[i].email);
           passArray.push(matchEmail[i].password);
        });
       // console.log(emailArray);
        if(emailArray.indexOf(loginEmail) > -1 && passArray.indexOf(loginPass) > -1){
            window.location.href="quiz.html";
        }else{
            alert("User not found... Register now!!!");
        }

    }

    const loginForm = document.getElementById("logIn");
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
    });
 

  













 

     