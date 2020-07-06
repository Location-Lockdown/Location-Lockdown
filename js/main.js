function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  var fields = {};

    document.addEventListener("DOMContentLoaded", function(){
        fields.fullName = document.getElementById('fullName');
        fields.email = document.getElementById('email');
        fields.contactNumber = document.getElementById('contactNumber');
        fields.Continent = document.getElementById('Continent');
        fields.message = document.getElementById('message');
        fields.sendInfo = document.getElementById('sendInfo');
    })

function isNotEmpty(value) {
        if (value == null || typeof value == 'undefined' ) return false;
        return (value.length > 0);
       }

function isNumber(num) {
        return (num.length > 0) && !isNaN(num);
       }

function isEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

function fieldValidation(field, validationFunction) {
        if (field == null) return false;
       
        let isFieldValid = validationFunction(field.value)
        if (!isFieldValid) {
        field.className = 'placeholderRed';
        } else {
        field.className = '';
        }
       
        return isFieldValid;
       }

function isValid() {
        var valid = true;
        
        valid &= fieldValidation(fields.fullName, isNotEmpty);
        valid &= fieldValidation(fields.email, isEmail);
        valid &= fieldValidation(fields.contactNumber, isNumber);
        valid &= fieldValidation(fields.Continent, isNotEmpty);
        valid &= fieldValidation(fields.message, isNotEmpty);
       
        return valid;
       }

       class User {
        constructor(fullName, email, contactNumber, Continent) {
        this.fullName = fullName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.Continent = Continent;
        this.message = message;
        }
       }

function sendInfo(){
    if (isValid()) {
        let usr = new User(fullName.value, email.value, contactNumber.value, Continent.value, message.value);

        alert("Thank you for getting in touch")
    } else {
        alert("There was an error")
    }
}