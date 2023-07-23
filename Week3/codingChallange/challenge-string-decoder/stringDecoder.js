const decoder = code => {
    let splitStr = code.split ('')
    let result = ''
for (let i = 0; i < splitStr.length; i++) {
    if (!isNaN(+splitStr[i])) {
        i += +splitStr[i]
    } else {
        result += +splitStr[i]
    }
}

return result
}
console.log(result('0h2xce5ngbrdy'));
console.log(result('3vdfn'));
console.log(result('0r'));
console.log(result('2bna0p1mp2osl0e'));
console.log(result('0y4akjfe0s'));
