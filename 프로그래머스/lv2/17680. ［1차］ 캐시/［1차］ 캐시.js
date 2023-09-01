function solution(cacheSize, cities) {
    let answer = 0;
    let a = [];

    cities.forEach((item) => {
        const str = item.toLowerCase();
        // cache.splice(cache.indexOf(lowerCity),1)
        if(a.includes(str)) {
             a.splice(a.indexOf(str),1)
             answer += 1;
        }
        else answer += 5;
        
        a.push(str)
        if(a.length > cacheSize) a.shift();
    })
    
    
    return answer;
}