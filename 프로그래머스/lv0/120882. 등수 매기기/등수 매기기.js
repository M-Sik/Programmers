function solution(score) {
    const answer = new Array(score.length).fill(1);
    const avg = score.map((item) => {
        const [english, math] = item;
        return (english + math) / 2;
    });
    console.log(avg)

    avg.forEach((item1, i) => {
        avg.forEach((item2) => {
            if(item1 < item2) answer[i]++
        })
    })
    
    return answer;
}