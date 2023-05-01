function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";

    return [...s].map((item) => {
        const sCase = item === item.toUpperCase() ? upper : lower;
        const findIndex = sCase.indexOf(item);
        const movedIndex = findIndex + n;
        
        console.log(movedIndex, sCase.length)
        
        if(findIndex === -1) return item
        else if(movedIndex > sCase.length - 1) return sCase[movedIndex - sCase.length];
        else return sCase[movedIndex]
    }).join("");
}