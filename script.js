function getFormvalue() {
  var firstName = document.querySelector('input[name="fname"]').value;
  var lastName = document.querySelector('input[name="lname"]').value;

  alert(firstName + " "+lastName);
}

// Add event listener to the form submit event
document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector('#form1');
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    getFormValue(); // Call the function to retrieve form values
  });
});
