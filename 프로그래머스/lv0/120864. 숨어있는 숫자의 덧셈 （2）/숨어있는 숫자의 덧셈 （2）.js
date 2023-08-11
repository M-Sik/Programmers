function solution(my_string) {
    const answer = [...my_string].map((m) => {
        if(isNaN(m)) return "*";
        else return m
    }).join("").split("*")
    
    return answer.reduce((acc, cur) => acc + Number(cur), 0);
}