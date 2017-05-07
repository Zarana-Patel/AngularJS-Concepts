var person = 'Zarana';

//logPerson();
abhiPerson.person='Zarana';
abhiPerson.logPerson();

/* 
1. Becuase The time I called the logPerson() - It overide person varible which is sitting in app.js .Both variables are define in global namespace level and both variables have same name. This can cause some terrible situations and some really hard to find bugs. 
 2. This is called - Global namespace pollution. Remove the comments in app.js and utilities.js and see the problem. and comment the opposite part.
 3. There are couple of ways to avoid : 
        3.1 create object in ulities.js and create variable inside that object. Then if you called the function - It will not overide the value of                  person. 

*/