var age = 18
if (age >= 65) {
  console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary")
} else if (age < 18) {
  console.log("You get an allowance")
} else {
  console.log("The value of the age variable is not numerical")
}

var day = "sunday"

switch (day) {
  case "monday":
    console.log("Arms day")
    break
  case "tuesday":
    console.log("Leg day")
    break
  case "wednesday":
    console.log("rest")
    break
  case "thursday":
    console.log("Chest day")
    break
  case "friday":
    console.log("Back day")
    break
  case "saturday":
    console.log("rest")
    break
  case "sunday":
    console.log("rest or complementary training")
    break
  default:
    console.log("unknown day")
    break
}
