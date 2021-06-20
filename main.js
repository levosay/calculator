const   inputCalc = document.querySelector('.account'),
        resultCalc = document.querySelector('.result');
        reg = /(?<dig>[-]?[\d]*([.][\d]*)?)/gm;

const toResult = (num) => {
    let last = inputCalc.value.slice(-1)

    if (last === num && last === '.') {
        return (inputCalc.value)
    } else {
        console.log('pidr')
        inputCalc.value = inputCalc.value + num
    }
    if (num === '.') {
        for (let i = 0; i < inputCalc.value.length - 1 || inputCalc.value[i] !== '.'; i++) {
            if (inputCalc.value[i] === '.') {
                return (backspace())
            }
        }
    }
    if (last === num && last === '+') return (backspace())
    if (last === num && last === '-') return (backspace())
    if (last === num && last === '*') return (backspace())
    if (last === num && last === '/') return (backspace())
}
const result = () => {
    if (eval(inputCalc.value) === undefined) {
        resultCalc.value = '0';
        inputCalc.value = '0';
    }
    if (eval(inputCalc.value) === Infinity) {
        resultCalc.value = '0';
        inputCalc.value = 'Dividing by zero is not allowed';
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}
const backspace = () => {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1)
}
const clean = () => {
    resultCalc.value = '0';
    inputCalc.value = '0';
}