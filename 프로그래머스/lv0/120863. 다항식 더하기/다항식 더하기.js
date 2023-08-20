function solution(polynomial) {
    // " + "를 기준으로 배열 생성
    let arr = polynomial.split(" + ")
    let xNum = 0; // 계수
    let num = 0; // 상수항
    let addNum = false;
    
    for(let i=0; i<arr.length; i++) {
        // 배열 요소중 x가 포함될 경우
        if(arr[i].includes("x")) {
            // 배열 안에 요소를 x를 기준으로 배열로 만들어 ""로 조인하였을때 숫자가 없다면 xNum(계수에) 1을 더함
            // 숫자가 있을경우 그 숫자를 xNum(계수)에 더한다.
            arr[i].split("x").join("") === "" ? xNum += 1 : xNum += Number(arr[i].split("x").join(""))
        } 
        // 배열 안에 요소에 x가 없을경우 숫자를 num(상수항)에 더한다.
        else {
            addNum = true;
            num += Number(arr[i])
        }
    }
    // 계수가 없었을 경우 상수항만 존재하기에 상수항만 리턴 
    if(xNum === 0) return `${num}`;
    // 계수가 1일 경우에는 1x 가 아닌 x 이기에 x 및 x + 상수를 리턴
    else if(xNum === 1) return addNum ? `x + ${num}` : "x";
    // 계수가 0 혹인 1이 아닐경우 중 
    // 상수가 있었다면 "계수 + 상수", 없었다면 "계수" 를 리턴
    else return addNum ? `${xNum}x + ${num}` : `${xNum}x`   
}