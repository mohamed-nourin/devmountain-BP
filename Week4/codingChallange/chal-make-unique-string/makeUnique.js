// Write your solution below:
// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.
let answer = ''
function makeUnique (str)  {
    for (let i = 0; i < str.length; i++) {
        if(!answer.includes(str[i])) {
            answer += str[i]
        }
    }
    return answer
}

console.log(makeUnique('helloworld'));
console.log(makeUnique('iwanttoclimbamountain'));

