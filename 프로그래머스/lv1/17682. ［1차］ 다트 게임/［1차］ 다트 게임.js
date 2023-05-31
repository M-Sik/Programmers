// S: 1제곱, D: 2 제곱, T: 3제곱
// *: 현재 점수와 직전 점수 2배, #: 해당점수만큼 마이너스
// *이 첫번째에 나온다면 현재 점수만 2배
// * 는 중첩이 가능 중첩시 4배가 되는것임
// *와 #이 중접되면 점수는 -2배
function solution(dart) {
    let point = [];
    
    for(let i=0; i<dart.length; i++) {
        // 숫자는 포인트 배열에 추가
        if(!isNaN(dart[i])) {
            // 숫자가 10일경우
            if(!isNaN(dart[i+1])) {
                point.unshift(Number(dart[i] + dart[i+1]));
                i+=1;
                continue;
            }
            point.unshift(Number(dart[i]));
            continue;
        };
        // S, D, T 점수 반영
        if(dart[i] === 'S') point[0] = Math.pow(point[0], 1);
        else if(dart[i] === 'D') point[0] = Math.pow(point[0], 2);
        else if(dart[i] === 'T') point[0] = Math.pow(point[0], 3);
        // *, # 점수 반영
        if(dart[i] === '*') {
            if(point.length === 1) point[0] = point[0] * 2;
            else {
                point[1] = point[1] * 2;
                point[0] = point[0] * 2;
            }
        }
        else if(dart[i] === '#') point[0] = -point[0];
    }
    
    return point.reduce((acc, cur) => acc + cur, 0);
}