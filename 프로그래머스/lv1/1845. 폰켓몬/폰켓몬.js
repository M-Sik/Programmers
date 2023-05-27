function solution(nums) {
    const maxPickNum = nums.length / 2
    const deduplication = [...new Set(nums)]
    
    return maxPickNum >= deduplication.length ? deduplication.length : maxPickNum;
}