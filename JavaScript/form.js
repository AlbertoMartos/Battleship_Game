document.getElementById("appId").style.display = "none";

let form = document.forms["formId"];
let elements = form.elements;
let errorField = document.getElementById("errorId");

elements["formButton"].addEventListener("click", sendHideForm);


function sendHideForm(e) {
    var name = document.myForm.name.value;
    var surname = document.myForm.surname.value;
    var age = document.myForm.age.value;

    if (!name) {
        Swal.fire({
            title: "Error!",
            text: `Field: "name" can not be empty`,
            icon: "error",
            confirmButtonText: "OK",
        });
    } else if (!surname) {
        Swal.fire({
            title: "Error!",
            text: `Field: "surname" can not be empty`,
            icon: "error",
            confirmButtonText: "OK",
        });
    } else if (!age || isNaN(age)) {
        Swal.fire({
            title: "Error!",
            text: `Field: "age" can not be empty or it's not a number`,
            icon: "error",
            confirmButtonText: "OK",
        });
    } else {
        let inputName = document.getElementById("nameId").value
        let inputSurname = document.getElementById("surnameId").value
        let inputAge = document.getElementById("ageId").value

        let player1 = fillInfoPlayer(inputName, inputSurname, inputAge, 0, 0, 0)

        document.getElementById("formId").style.display = "none";
        document.getElementById("idRules").style.display = "none";
        document.getElementById("idRules2").style.display = "none";
        document.getElementById('appId').style.display = "block";
    }
    e.preventDefault();
}


