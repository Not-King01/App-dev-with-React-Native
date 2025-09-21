const user_val = 10

for (let i = 0; i < user_val; i++){
    for (let j = 0; j < user_val-(i+1); j++){
        console.log(" ")
        document.write('&nbsp; &nbsp;')
    }
    for (let k = 0; k < 1 + i * 2; k++){
        console.log("*")
        document.write('* ')
    }
    document.write('<br>')
}