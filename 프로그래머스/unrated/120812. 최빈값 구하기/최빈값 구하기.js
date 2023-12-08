function solution(arr) {
    // 입력값 arr에서 중복값을 제거
    let deleteDupArr = [...new Set(arr)];
    // arr의 각 요소가 몇개 있는지 담을 배열
    let answer = new Array(deleteDupArr.length).fill(0);
    // arr에 요소개 1개일경우 최빈값음 그 1개이기 때문에 리턴
    if(answer.length === 1) return arr[0];
    // arr배열을 순회하며 중복을 제거한 deleteDupArr의 요소개 arr에 몇개씩 있나 확인 후 answer에 저장
    for(let i=0; i<deleteDupArr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(deleteDupArr[i] === arr[j]) answer[i]++;
        }
    }
    // 최빈값이 가장 높은 수가 여러개일경우 ex) [1, 1, 2, 2, 3] -1 리턴
    const a = answer.filter((item) => item === Math.max(...answer))
    if(a.length > 1 ) return -1
    // 최빈값이 가장 높은 index를 찾아 deleteDupArr에서 해당 인덱스를 반환
    const maxIndex = answer.findIndex((item) => item === Math.max(...answer))   
    return deleteDupArr[maxIndex];
}