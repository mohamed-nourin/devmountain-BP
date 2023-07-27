function sortByProductAndIndex(arr) {
    const sortedArr = arr.map((value, index) => ({
        value,
        product: value * (index + 1), 
    })).sort((a, b) => a.product - b.product);

    return sortedArr.map(item => item.value);
}

const inputArray = [23, 2, 3, 4, 5];
const outputArray = sortByProductAndIndex(inputArray);
console.log(outputArray); 
