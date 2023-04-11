function solution(price, money, count) {
    let totalPrice = 0;
    
    for(let i=1; i<=count; i++) {
        totalPrice += (price * i);
    }
    if(money >= totalPrice) return 0;
    else return totalPrice - money
}