function solution(arr)
{
    const answer = [];

    for(let i=0; i<arr.length; i++) {
        if(i !== 0 && arr[i-1] === arr[i]) {
            continue;
        }
        answer.push(arr[i])
    }
    
    return answer;
}