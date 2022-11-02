const digitBreak = (number) => {
    const numberList = String(number).split("");
    const resultList = [];
    for (let i = 0; i < numberList.length; i++) {
        const element = numberList[i];
        const zeroAfter = Math.pow(10, (numberList.length - i) -1)
       resultList.push(element * zeroAfter);
    }
    return resultList
}

console.log(digitBreak(57428451))