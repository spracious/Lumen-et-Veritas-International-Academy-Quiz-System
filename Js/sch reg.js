
function validateSchForm(){

    let data_data=localStorage.getItem('schools') ? JSON.parse(localStorage.getItem('schools')) : [];;
    let form_Data ={
            "sch_name":document.getElementById("sch_name").value,
            "d_o_e":document.getElementById("doe").value,
            "sch_email":document.getElementById("sch_mail").value,
            "password":document.getElementById("pwd").value,
        }
       
        data_data.push(form_Data);
        if(localStorage){
            localStorage.setItem("schools", JSON.stringify(data_data));
        } alert("Registration Successful. Please proceed to Registering Participant.")
}

// localStorage.getItem('schools');

// function addSchools(ele) {
//     let option = "";
//     let select = document.getElementById("select_school")
//     ele.forEach((school) => {
        
//       option += `
//                   <option value"${school.sch_name}">${school.sch_name}</option>
//           `;
//     });
//     select.innerHTML = option;
// }
// addSchools(school);