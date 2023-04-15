function solution(s) {
    var answer = s.split(" ").map((word) => {
      return  [...word].map((str, index) => {
            return index % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
        }).join("")
    }).join(" ")
    console.log(answer)
    return answer;
}