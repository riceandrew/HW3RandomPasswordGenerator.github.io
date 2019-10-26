var special = ["!", "#", "$", "%", "(", ")", "+"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var password = [];




//function to gerate ramdom password
function createpassword() {

    //This is a statement to control how long the password should be

    var passwordlength = prompt("How long would you like your password to be?")

    if (passwordlength < 8 || passwordlength > 128) {
        alert("Your password must be longer than 8 characters and less than 128 characters")
        return createpassword();
    }

    //This is a statement to control whether or not the password will contain a special character
    var confirmspecial = confirm("Would you like special characters in your password?");

    //This is a statement to control whether or not the password will contian a number
    var confirmnumbers = confirm("Would you like numbers in your password?");

    //This is a statement to control whether or not the password will contian a uppercase letter
    var confirmuppercase = confirm("Would you like uppercase letters in your password?");

    //This is a statement to control whether or not the password will contain a lowercase letter    
    var confirmlowercase = confirm("Would you like lowercase letter in your password?");
    var i = 0;
    while (i < passwordlength) {
        if (confirmspecial == true && i < passwordlength) {
            var index = Math.floor(Math.random() * 7)
            password.push(special[index])
            i++
        }
        if (confirmnumbers == true && i < passwordlength) {
            var index = Math.floor(Math.random() * 9)
            password.push(numbers[index])
            i++
        }
        if (confirmuppercase == true && i < passwordlength) {
            var index = Math.floor(Math.random() * 26)
            password.push(uppercase[index])
            i++
        }
        if (confirmlowercase == true && i < passwordlength) {
            var index = Math.floor(Math.random() * 26)
            password.push(lowercase[index])
            i++
        }
    }
    //Joined password
    password = password.join("");

    //Password to display

    document.getElementById("Password").value = password;
    console.log(password);
}

function copypassword() {
    

}


