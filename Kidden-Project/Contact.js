let form = document.querySelector("form");
let userName = document.querySelectorAll("input")[0];
let Email = document.querySelectorAll("input")[1];
let Phone = document.querySelectorAll("input")[2];
let Subject = document.querySelectorAll("input")[3];
let Message = document.querySelectorAll("input")[4];

let euser = document.querySelectorAll("span")[0];
let eemail = document.querySelectorAll("span")[1];
let ephone = document.querySelectorAll("span")[2];
let esubject = document.querySelectorAll("span")[3];
let emessage = document.querySelectorAll("span")[4];
let eform = document.querySelectorAll("span")[5];

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    euser.innerHTML = "";
    eemail.innerHTML = "";
    ephone.innerHTML = "";
    esubject.innerHTML = "";
    emessage.innerHTML = "";
    eform.innerHTML = "";

    if (userName.value === "" || Email.value === "" || Phone.value === "" || Subject.value === "" || Message.value === "") {
        if (userName.value === "") euser.innerHTML = "Username required";
        if (Email.value === "") eemail.innerHTML = "Email is required";
        if (Phone.value === "") ephone.innerHTML = "Phone number is required";
        if (Subject.value === "") esubject.innerHTML = "Subject is required";
        if (Message.value === "") emessage.innerHTML = "Message is required";
        return;
    }

    if (
        userName.value === "mohsin sayyed" &&
        Email.value === "mohsinsayyed206@gmail.com" &&
        Phone.value === "8879866020" &&
        Subject.value === "javascript" &&
        Message.value === "i want to know the details of the javascript"
    ) {
        alert("Message Sent! Will update you on your email address");
    } else {
        eform.innerHTML = "Credentials not matching";
    }
});
