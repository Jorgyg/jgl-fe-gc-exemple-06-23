let numbers = [];
let operatorA = [];
let number = '';
const show = (value) => {
  let display = document.getElementById('display');
  display.value += value;
  number+=value;
};

const operator = (value) => {
  operatorA.push(value);
  let display = document.getElementById('display');
  numbers.push(+number);
  display.value += value;
  number = '';

};

const clearC = () => {
    let display = document.getElementById('display');
    numbers = [];
    operatorA = [];
    number = '';
    display.value = '';
};

const calculate = () => {
    numbers.push(+number);
    let display = document.getElementById('display');


  for (let i = 0; i < operatorA.length; i++) {
    if (operatorA[i] == 'X') {
      numbers[i] = numbers[i] * numbers[i + 1];
      numbers.splice(i + 1, 1);
      operatorA.splice(i, 1);
      i--;
    } else if (operatorA[i] == '/') {
      if (numbers[i + 1] === 0) {
        display.value = 'Syntax error';
        return;
      }
      numbers[i] = numbers[i] / numbers[i + 1];
      numbers.splice(i + 1, 1);
      operatorA.splice(i, 1);
      i--;
    }
  }
  let totalNumber = numbers[0];

  for (let i = 0; i < operatorA.length; i++) {
    if (operatorA[i] == '+') {
      totalNumber += numbers[i + 1];
    } else if (operatorA[i] == '-') {
      totalNumber -= numbers[i + 1];
    }
  }

  numbers = [];
  operatorA = [];
  number = '';
  display.value = totalNumber.toString();
};
