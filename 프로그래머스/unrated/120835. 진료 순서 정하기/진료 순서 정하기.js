function solution(emergency) {
    var answer = new Array(emergency.length).fill(0);
    let copyArr = [...emergency]
    
    console.log(emergency.slice())
    
    emergency.forEach((item, index) => {
        const maxIndex = emergency.findIndex((item) => item === Math.max(...copyArr))
        copyArr = copyArr.filter((item) => item !== Math.max(...copyArr))
        answer[maxIndex] = index + 1
    })
    return answer;
}
// function solution(emergency) {
//     let sorted = [...emergency].sort((a,b)=>b-a);
//     console.log(sorted, emergency)
//     return emergency.map(v=>sorted.indexOf(v)+1);
// }