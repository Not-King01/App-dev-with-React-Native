const value = [25, 3, 7, 8, 9, 12];
const length = value.length;
let ans = [];

function add_extreme_values(value) {
    for (let i = 0; i < Math.floor(length / 2); i++) {
        ans.push(value[i] + value[length - 1 - i]);
    }
}

add_extreme_values(value);

console.log(ans);
