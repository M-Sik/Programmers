function solution(arr, queries) {
    queries.forEach(([a, e, k]) => {
        for(let i=a; i<=e; i++) {
            if(i % k === 0) arr[i] += 1;
        }
    })
    
    return arr;
}