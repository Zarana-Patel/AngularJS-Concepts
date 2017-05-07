//Dependency Injection : Giving function an object. Rather than creating an object inside the function , you pass it to the function
var Person = function(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
/*function logPerson()
{
    var zarana = new Person('Zarana','Patel');
    console.log(zarana);
}*/
  // If we need to change anything , we need to change inside the function here - It is bad . To do this we need to apply Dependancy injection , Pass the object to the function and , create person outside the function and pass it to the function. Now logPerson function is not dependant on the new person object. Angular JS is using dependency Injection alot.


function logPerson(person){
    
    console.log(person);
}
var zarana = new Person('Zarana','Patel');
logPerson(zarana);