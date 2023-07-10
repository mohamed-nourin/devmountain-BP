// Write your code below this line
function decodeString(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let decodeStr = ''
    let skip = 0  
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i]   
        // console.log(str[i])
        if (isNaN(currentChar)) {  
            const charIndex = alphabet.indexOf(currentChar);  
            const shiftIndex = (charIndex + skip) % 26; 
            decodeStr += alphabet[shiftIndex] 
        } else {
            skip = parseInt(currentChar)
        }
    }
    return decodeStr
}