console.log("Fibonnaci Series up to n")
console.log(0)
console.log(1)
var val = 1
var val1 = 1
while(true){
    console.log(val);
    let next_val = val + val1;
    val = val1;
    val1 = next_val;
}