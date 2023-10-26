const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    answer = [];
    str.split('').forEach((v) => {
        if(v === v.toLowerCase()) answer.push(v.toUpperCase());
        else answer.push(v.toLowerCase());
    })
    console.log(answer.join(''));
});