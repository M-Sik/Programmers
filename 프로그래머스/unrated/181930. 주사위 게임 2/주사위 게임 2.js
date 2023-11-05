function solution(a, b, c) {
    const aa = a + b + c;
    const bb = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    const cc = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))

    if(a === b && b === c && c === a) {
        return cc;
    }
    else if(a !== b && b !== c && c !== a) {
        console.log("여기2")
        return aa;
    }
    else {
        console.log("여기3")
        return bb;
    }
}