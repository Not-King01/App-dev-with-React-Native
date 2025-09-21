let year = Number(prompt("Enter the year to check if it is leap year or not: "))
if (year % 4 == 0){
    if (year % 100 == 0 & year % 400 == 0){
        console.log("It is a leap year")
    }else if (year % 100 == 0){
        console.log("It is not a leap year")
    }else{
        console.log("It is a leap year")
    }
}else{
    console.log("It is not a leap year")
}