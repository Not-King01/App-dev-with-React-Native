let val = prompt("Enter string to check palindrome: ")
const rev = val.split('').reverse().join('')
if(val == rev){
    console.log("It is palindrome")
}else{
    console.log("It is not a palindrome")
}