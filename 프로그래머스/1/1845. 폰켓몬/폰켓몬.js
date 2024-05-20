function solution(nums) {
    // 최대로 선택 가능한 포켓몬 수
    const maxPickNum = nums.length / 2
    // 다양한 포켓몬을 골라야하기에 중복 제거
    const dedupSize = new Set(nums).size
    
    return maxPickNum >= dedupSize ? dedupSize : maxPickNum;
}