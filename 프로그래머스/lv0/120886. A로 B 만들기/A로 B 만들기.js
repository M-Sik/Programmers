function solution(before, after) {
    const beforeSort = [...before].sort().join("")
    const afterSort = [...after].sort().join("")
    console.log(beforeSort, afterSort)
    
    return beforeSort === afterSort ? 1 : 0;
}