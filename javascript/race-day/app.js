let raceNumber = Math.floor(Math.random() * 1000);

let early = true;

let runnerAge = 25;

if (early && runnerAge > 18) {
  raceNumber += 1000;
}
if (early && runnerAge > 18) {
  console.log(`They will race at 9:30 am,your race number is: ${raceNumber}.`);
} else if (!early && runnerAge > 18) {
  console.log(`They will race at 11:00 am,your race number is: ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`They will race at 12:30 am,your race number is: ${raceNumber}.`);
} else {
  console.log(`Please approach the registration desk.`);
}
