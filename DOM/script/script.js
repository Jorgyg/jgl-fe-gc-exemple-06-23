const show = (value) =>{
    let display = document.getElementById('display');
    display.value += value;
}

const clear = () => {
    let display = document.getElementById('display');
    display.value = '';
}

const calculate = () => {
    let display = document.getElementById('display');
    let result = eval(display.value);
    display.value = result;
}
