// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  const day = new Date(dateString);
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekDays[day.getDay()];
}


function main() {
  const d = +(readLine());
  
  for (let i = 0; i < d; i++) {
      const date = readLine();
      
      console.log(getDayName(date));
  }
}