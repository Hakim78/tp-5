/****************************************
 * Checker functions
 ***************************************/

 /*const Checker = {
  lastname: function() {
      const lastname = document.querySelector('#lastname');
      return lastname.value.length >= 2;
  },
  firstname: function() {
      const firstname = document.querySelector('#firstname');
      return firstname.value.length >=2;  
  }
};*/

const Checker = {};

Checker.lastname = function() {
  const lastname = document.querySelector('#lastname');
  return lastname.value.length >= 2;
};

Checker.firstname = function() {
  const firstname = document.querySelector('#firstname');
  return firstname.value.length >=2;    
};

Checker.email = function() {
  const email = document.querySelector('#email').value;
  console.log(email);
  const parts = email.split('@');
  const possede2mots = parts.length ==2
  const motsNonVide = parts[0].length >0 && parts[1].length >0 
  return possede2mots && motsNonVide; 
}


function isLeapYear(year){
  return (year%4 === 0 && year%100 !==0) || year%400 === 0;
};
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2019)); // false