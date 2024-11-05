//DOM
const body = document.body;
const workArea = document.querySelector('.work');
const input = document.querySelector('.input');
const solution = document.querySelector('.result');
const buttons = document.querySelector('.keypad');
const resHeader = document.querySelector('.answer');
const toggleTheme = document.querySelector('#night');
const label = document.querySelector('.toggle');

//workarounds

//calc keys
function keys() {
    for(let k=0;k<20;k++) {
        let key = document.createElement('div');
        key.innerHTML = k;
        key.setAttribute('class','keys');
        buttons.appendChild(key)
        switch (k) {
            case 0:
            key.innerHTML = 'C';
            key.style.backgroundColor = 'red';
            key.onclick = () => {input.value = ''; solution.innerHTML = '';}
            break;
            /*case 1:
            key.innerHTML = '√';
            key.style.backgroundColor = 'blue';
            key.onclick = () => {put('√');}
            break;*/
            case 2:
            key.innerHTML = '%';
            key.style.backgroundColor = 'blue';
            key.onclick = ()=>{put('%');}
            break;
            case 1:
            key.innerHTML = '^';
            key.style.backgroundColor = 'blue';
            key.onclick = ()=>{put('^');}
            break;
            case 3:
            key.innerHTML = '÷';
            key.style.backgroundColor = 'blue';
            key.onclick = ()=>{put('÷');}
            break;
            case 4:
            key.innerHTML = '1';
            key.onclick = ()=>{put(1);}
            break;
            case 5:
            key.innerHTML = '2';
            key.onclick = ()=>{put(2);}
            break;
            case 6:
            key.innerHTML = '3';
            key.onclick = ()=>{put(3);}
            break;
            case 7:
            key.innerHTML = 'x';
            key.style.backgroundColor = 'blue';
            key.onclick = ()=>{put('x');}
            break;
            case 8:
            key.innerHTML = '4';
            key.onclick = ()=>{put(4);}
            break;
            case 9:
            key.innerHTML = '5';
            key.onclick = ()=>{put(5);}
            break;
            case 10:
            key.innerHTML = '6';
            key.onclick = ()=>{put(6);}
            break;
            case 11:
            key.innerHTML = '-';
            key.style.backgroundColor = 'blue';
            key.onclick = ()=>{put('-');}
            break;
            case 12:
            key.innerHTML = '7';
            key.onclick = ()=>{put(7);}
            break;
            case 13:
            key.innerHTML = '8';
            key.onclick = ()=>{put(8);}
            break;
            case 14:
            key.innerHTML = '9';
            key.onclick = ()=>{put(9);}
            break;
            case 15:
            key.innerHTML = '+';
            key.style.backgroundColor = 'blue';
            key.onclick = ()=>{put('+');}
            break;
            case 16:
            key.innerHTML = '.';
            key.onclick = ()=>{put('.');}
            break;
            case 17:
            key.innerHTML = '0';
            key.onclick = ()=>{put(0);}
            break;
            case 18:
            key.innerHTML = '&#9003';
            key.onclick = ()=>{
                input.value = input.value.slice(0,-1);
            }
            break;
            case 19:
            key.innerHTML = '=';
            key.style.backgroundColor = 'green';
            key.onclick = ()=>{solve();}
            break;
        }
    }
}
keys();

//input limit
function put(value) {
  this.value = value;
  if(input.value.length < 25) {
    input.value+=`${this.value}`;
  }
}

//calculator analysis
const solve = () => {
    let operation = input.value;
    let operands = operation.match(/(\d+(\.\d+)?)/g).map(Number);
    let operators = operation.match(/[+\÷\x\/\√\%\-\^]/g);
    let base = operands[0];
    for(let n=0;n<operators.length;n++) {
        switch (operators[n]) {
            case '+':
            base+=operands[n+1];
            break;
            case '-':
            base-=operands[n+1];
            break;
            case 'x':
            base*=operands[n+1];
            break;
            case '÷':
            base/=operands[n+1];
            break;
            case '^':
            base = Math.pow(base,operands[n+1]);
            break;
            case '√':
            base = Number(Math.sqrt(base));
            break;
            case '%':
            base/=100;
            break;
            default:
            base = 'Invalid expression';
        }
    }
    solution.innerHTML = `${base}`;
}

//theme toggle
function toggle() {
    let keys = document.querySelectorAll('.keys');
    if(toggleTheme.checked === true) {
        body.style.backgroundColor = 'black';
        workArea.style.backgroundImage = 'linear-gradient(to top,lightgrey,black)';
        label.style.color = `white`;
        for(k of keys) {
            k.style.color = 'white';
            k.style.border = '4px solid white';
        }
        input.style.color = 'white';
        resHeader.style.color = 'white';
    } else if(toggleTheme.checked === false) {
        body.style.backgroundColor = 'white';
        workArea.style.backgroundImage = 'linear-gradient(to top,white,lightgrey)';
        label.style.color = 'black';
        for(k of keys) {
            k.style.color = 'black';
            k.style.border = '4px solid black';
        }
        input.style.color = 'black';
        resHeader.style.color = 'black';
    }
    requestAnimationFrame(toggle);
}
toggle();