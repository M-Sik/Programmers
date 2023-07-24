function solution(k, tangerine) {
    var answer = 0;
    const 중복제거한귤들 = [...new Set(tangerine)];
    const 귤크기갯수들 = [];
    
    중복제거한귤들.forEach((item) => {
        let 갯수 = 0;
        tangerine.forEach((귤크기) => {
            item === 귤크기 && 갯수++;
        })
        귤크기갯수들.push({귤크기: item, 갯수: 갯수});
    })
    
    귤크기갯수들.sort((a, b) => b.갯수 - a.갯수);
    // console.log(귤크기갯수들);
    
    for(let i=0; i<귤크기갯수들.length-1; i++) {
        if(k <= 0) {
            return i;
        };
        k = k - 귤크기갯수들[i].갯수;
        
    }
    
    return answer;
}