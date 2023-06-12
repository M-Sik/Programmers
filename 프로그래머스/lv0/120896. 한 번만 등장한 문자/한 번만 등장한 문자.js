function solution(s) {
    const a = [...s].map((item) => [...s].filter((v) => item === v)).filter((v) => v.length === 1)
    const b = [...a.join("")].sort().join("")

    return b;
}