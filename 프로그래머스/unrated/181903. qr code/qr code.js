function solution(q, r, code) {
    if(q === 1) return code;
    return [...code].filter((v, i) => i % q === r).join('');
}