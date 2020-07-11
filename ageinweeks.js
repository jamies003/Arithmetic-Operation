function lifeInWeeks(age) {

  let yearsRemaining = 90 - age;
  let days = yearsRemaining * 365;
  let months = yearsRemaining * 12;
  let weeks = yearsRemaining * 52;
//     alert("Your Age"); 

  console.log("You Have " + days + " Days " + weeks + " weeks " + months + " months" + " Left.")
}

lifeInWeeks(35);