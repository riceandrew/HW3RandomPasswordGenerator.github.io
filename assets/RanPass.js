var special = ["!", "#", "$", "%", "(", ")", "+"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var 




//function to gerate ramdom password
function createpassword() {

//This is a statement to control how long the password should be

    var passwordlength = prompt("How long would you like your password to be?")

    if (passwordlength < 8 || passwordlength > 128){
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

while ()













   

    //create for loop to choose password characters

    for (var i = 0; i <= values.length; i++) {
        let password = values.charAt(Math.floor(Math.random()*(values.length - 1)));

        

        console.log (password);
    }
}