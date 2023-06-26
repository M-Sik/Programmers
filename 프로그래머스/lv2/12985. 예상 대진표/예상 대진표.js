function solution(n,a,b)
{
    let answer = 1;
    
    // console.log(Math.ceil(a/2), Math.ceil(b/2))
    
    for(let i=0; i<n; i++) {
        if(Math.ceil(a/2) === Math.ceil(b/2)) {
            return answer;
        }
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }

    return answer;
}