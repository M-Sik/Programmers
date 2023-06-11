function solution(my_string) {
    var answer = 0;
    my_string = my_string.split(" ");
    // console.log(my_string)
    
    for(let i=0; i<my_string.length; i++) {
        if((i === 0) && (!isNaN(my_string[i]))) {
            answer += Number(my_string[i])
        }
        if(my_string[i] === "+") {
            answer += Number(my_string[i + 1]);
        } else if(my_string[i] === "-") {
            answer -= Number(my_string[i + 1]);
        }
    }

    return answer;
}