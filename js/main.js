


document.querySelector('button').onclick = function showdata() {
    let pfirstname = document.getElementById("name");
    let plastname = document.getElementById("surname");
    let pphonenumber = document.getElementById("phone");
    let name = document.getElementById("firstname");
    console.log(name.value);
    let surname = document.getElementById("lastname");
    console.log(surname.value);
    let phone = document.getElementById("phonenumber");
    console.log(phone.value);

    pfirstname.innerText = name.value
    plastname.innerText = surname.value
    pphonenumber.innerText = phone.value
}
