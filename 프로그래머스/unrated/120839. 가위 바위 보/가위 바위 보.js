function solution(rsp) {
    const answer = [...rsp].map((item) => {
        if(item === "2") return "0";
        else if(item === "0") return "5";
        else return "2";
    }).join("");
    
    return answer;
}