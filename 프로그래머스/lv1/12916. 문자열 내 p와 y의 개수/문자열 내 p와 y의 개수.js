function solution(s){
    let input = s.toLowerCase();
    let pCount = input.split("").filter((string) => string === "p").length;
    let yCount = input.split("").filter((string) => string === "y").length;
    
    console.log(pCount, yCount)

    return pCount === yCount ? true : false;
}