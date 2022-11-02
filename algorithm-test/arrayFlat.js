const arrayFlat = (array) => {
    const list = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length) {
            for (let x = 0; x < element.length; x++) {
                const breakedArray = element[x];
                list.push(breakedArray)
            }
        } else {
            list.push(element)
        }
    }
    return list
}

console.log(arrayFlat([1,2,[3,4],5,[6,7],8]))