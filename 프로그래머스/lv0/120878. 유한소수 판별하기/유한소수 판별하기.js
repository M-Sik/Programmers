function solution(분자, 분모) {
    let 정답 = 0;
    let 최대공약수 = 1;
    const 소인수배열 = [];
    let 소인수 = 2;
    
    for(let i=1; i<=(분자>분모?분자:분모); i++) {
        if((분자%i===0) && (분모%i===0)) 최대공약수 = i;
    }

    분모 = 분모/최대공약수
    
    while(분모 > 1) {
        if(분모%소인수 === 0) {
            분모 /= 소인수;
            소인수배열.push(소인수);
        }else {
            소인수++;
        }
    }
    정답 = 소인수배열.filter((item) => item!==2&&item!==5).length === 0 ? 1 : 2
    
    return 정답;
}