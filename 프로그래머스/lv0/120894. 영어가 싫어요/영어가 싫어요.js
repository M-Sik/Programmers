function solution(numbers) {
    let answer = numbers;
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i=0; i<arr.length; i++) {
      answer = answer.replaceAll(arr[i], i);
    }
    
    return parseInt(answer);
}
// function solution(numbers) {
//     const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
//     for(let i = 0 ; i<number.length; i++){
//         // numbers = numbers.split(number[i])
//         console.log(numbers.split(number[i]).join("??"))
//     }
//     return +numbers
// }