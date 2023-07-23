const decoder = code => {
  let splitStr = code.split('')
  let result = ''

  for (let i = 0; i < splitStr.length; i++) {
    if (!isNaN(+splitStr[i])) {
      i += +splitStr[i]
    } else {
      result += splitStr[i]
    }
  }

  return result
}

// decoder('0y4akjfe0s')
// decoder('0h2xce5ngbrdy')
// decoder('2bna0p1mp2osl0e')