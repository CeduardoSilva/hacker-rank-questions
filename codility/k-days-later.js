function solution(S, K) {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let sIndex = days.indexOf(S);
    let finalIndex = (sIndex + K) % days.length;
    return days[finalIndex];
}

console.log(solution('Sat',23));