// 출발지, 목적지 설정
// bfs 큐에 있는걸 먼저 탐색 -> 가장 빨리 도착한것 선택
// 큐가 비어있을때 까지 상하좌우 이동할 수 있는곳 있는지 탐색, 이동할 수 있다면 이동 후 이동표시
function solution(maps) {
    const n = maps.length -1;
    const m = maps[0].length -1;
    const queue = [[0, 0, 1]];
    let nextRow = 0;
    let nextCol = 0;
    const dRow = [0, 1, 0, -1];
    const dCol = [1, 0, -1, 0];
    
    while(queue.length !== 0) {
        const [curRow, curCol, distance] = queue.shift();
        // 목적지 도달시 리턴
        if(curRow === n && curCol === m) return distance;
        
        for(let i=0; i<4; i++) {
            nextRow = curRow + dRow[i];
            nextCol = curCol + dCol[i];
            // 지도밖에 안나가게
            if(0<=nextRow && nextRow<=n && 0<=nextCol && nextCol<=m) {
                // console.log(nx, ny);
                // 움직일 좌표가 벽이 아니라면
                if(maps[nextRow][nextCol] === 1) {
                    queue.push([nextRow, nextCol, distance + 1]);
                    maps[nextRow][nextCol] = 0;
                }
            }
        }
    }
    
    return -1;
}