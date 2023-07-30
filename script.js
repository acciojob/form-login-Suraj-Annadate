function getFormvalue() {
    //Write your code here
 const Formele=document.getElementById("form1");
	const name=Formele.elements['fname'].value;
	const lname=Formele.elements['lname'].value;
	alert(`${name} ${lname}`);
}