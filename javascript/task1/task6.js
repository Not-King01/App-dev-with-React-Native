function add(a, b){
    console.log(a+b)
}
function sub(a, b){
    console.log(a-b)
}
function mul(a, b){
    console.log(a*b)
}
function div(a, b){
    console.log(a/b)
}
function mod(a, b){
    console.log(a%b)
}

let loop = true
while (loop){
    let operation = Number(prompt("Enter operation (1.Add, 2.Sub, 3.Mul, 4.Div): "))
    if (operation == 5){
        console.log("Exiting the calculator!!")
        loop = false
    }
    else{
        let a = Number(prompt("Enter number 1: "))
        let b = Number(prompt("Enter number 2: "))
        if (operation == 1){
            add(a, b)
        }
        if (operation == 2){
            sub(a, b)
        }
        if (operation == 3){
            mul(a, b)
        }
        if (operation == 4){
            div(a, b)
        }
    }
}