```javascript
// Change Theme Function

function changeTheme() {

    var body = document.getElementById("body");

    if (body.style.backgroundColor == "rgb(20, 20, 20)") {

        body.style.backgroundColor = "#000000";

    } 
    
    else {

        body.style.backgroundColor = "#141414";

    }

}
```
```javascript
// Form Validation

function validateForm(){

    var name = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var message = document.getElementById("message").value;


    if(name == "" || email == "" || message == ""){

        alert("Please fill all fields.");

        return false;

    }

    else{

        alert("Welcome to VELORA!");

        return true;

    }

}
```
