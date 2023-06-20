function getFormvalue() {
    //Write your code here
 var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;

  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  getFormValue(); // Call the function to retrieve form values
});
