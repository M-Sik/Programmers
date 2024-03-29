function solution(maps) {
    const n = maps[0].length - 1;
    const m = maps.length - 1;
    const queue = [[0, 0, 1]];
    let i = 0;
    
    while(queue.length) {
        i++;
        const [x,y,move] = queue.shift();
        // 최종 목적지 도달시 움직인 수 리턴
        if (x == n && y == m) return move;
        
        if (!maps[y][x]) continue;
        maps[y][x] = 0;

        if (x-1 >= 0 && maps[y][x-1]) queue.push([x-1,y,move+1]); // 왼쪽으로 한칸 이동
        if (x+1 <= n && maps[y][x+1]) queue.push([x+1,y,move+1]); // 오른쪽으로 한칸 이동
        if (y-1 >= 0 && maps[y-1][x]) queue.push([x,y-1,move+1]); // 아래로 한칸 이동
        if (y+1 <= m && maps[y+1][x]) queue.push([x,y+1,move+1]); // 위로 한칸 이동
        
        
        // console.log(queue, i)
    }
    return -1;
}