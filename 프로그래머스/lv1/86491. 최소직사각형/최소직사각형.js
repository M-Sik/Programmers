function solution(sizes) {
    let wList = [];
    let hList = [];
    const test = sizes.map((item) => {
        if(item[1] > item[0]) return item.reverse();
        return item
    })
    // 가로의 max, 세로의 max 를 array로 저장 
    test.forEach((item) => {
        wList.push(item[0]);
        hList.push(item[1]);
    })
    // 가장큰 가로의 길이와 가장큰 세로의 길이를 곱함     
    return (Math.max(...wList) * Math.max(...hList));
}