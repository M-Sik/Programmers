function solution(nums) {
    let answer = 0;
    let sumNum = 0; // 3개의 수를 더한 변수
    
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                // 3개의 수를 1부터 나눠지는 수를 저장하는 배열
                let dividerNum = []
                // 3개의 수를 더함
                sumNum = nums[i] + nums[j] + nums[k];
                for(let n=1; n<=sumNum; n++) {
                    if(sumNum % n === 0) dividerNum = [...dividerNum, n];
                }
                // 소수는 1과 자기 자신으로만 나눠지는 수이기에 약수가 2개이면 소수의 수 증가
                (dividerNum.length === 2) && answer++;
            }
        }
    }
    
    return answer;
}