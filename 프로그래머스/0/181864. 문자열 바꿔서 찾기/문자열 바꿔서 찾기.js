function solution(myString, pat) {
    const changeMyStr = [...myString].map((str) => str === 'A' ? 'B' : 'A').join("");
    
    return changeMyStr.includes(pat) ? 1 : 0;
}