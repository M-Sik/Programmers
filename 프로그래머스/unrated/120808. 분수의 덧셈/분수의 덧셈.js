function solution(numer1, denom1, numer2, denom2) {
    const 공약수 = [];
    let 최대공약수 = 0;
    let 최소공배수 = 0;
    // 최대공약수를 구함
    for(let i = 2; i <= (denom1 >= denom2 ? denom1 : denom2); i++) {
        if((denom1 % i === 0) && (denom2 % i === 0)) 공약수.push(i);
    }
    if(공약수.length === 0) 최소공배수 = denom1 * denom2;
    else {
        최대공약수 = Math.max(...공약수);
        최소공배수 = (denom1 * denom2) / 최대공약수;
    }
    console.log("최소공배수, 최대공약수, 공약수 => ", 최소공배수, 최대공약수, 공약수);
    const 더한분자 = (numer1 * (최소공배수 / denom1)) + (numer2 * (최소공배수 / denom2));
    const 더한분모 = 최소공배수;
    let 더한분수공약수 = [];
    let 더한분수최대공약수 = 1
    
    for(let i = 2; i <= (더한분자 >= 더한분모 ? 더한분자 : 더한분모); i++) {
        if((더한분자 % i === 0) && (더한분모 % i === 0)) 더한분수공약수.push(i);
    }
    더한분수최대공약수 = Math.max(...더한분수공약수);
    
    if(더한분수공약수.length === 0) return [더한분자, 더한분모];
    else return [더한분자/더한분수최대공약수, 더한분모/더한분수최대공약수]; 
}