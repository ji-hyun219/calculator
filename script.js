let numOne = '';
let numTwo = '';
let operator = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
let negative = '';



const onClickNumber= (number)=>()=>{       // 숫자를 저장하는 함수
    if (!operator) {   // 연산자가 없다 == 첫번째 숫자다
        numOne += number;
    }
    else {             // 연산자가 있다 == 두번째 숫자다
        $result.value = '';
        numTwo += number;
    }
    $result.value += number;
}

const onClickOperator = (op) => () => {    // 연산자를 저장하는 함수
    if (numOne !== '' && numTwo !== '') {
        /* 
         1. numOne, numTwo 둘 다 빈 값이 아니다
         2. numOne 에 연산결과를 저장한다
        */
        onClickEqual();
        numOne = $result.value;
        numTwo = '';
        operator = '';
        operator += op;
        $operator.value = op;
    }
    else if (numOne) {    // numOne 이 존재
        if (negative === '-') {
            numOne = '-' + numOne;
            $result.value = numOne;
            $operator.value = '';
        }
        operator += op;
        $operator.value = op;
    }
    else {
        /* <  numOne 이 존재x -> 음수가 되게 하기 >
         * 1. 일단 연산자를 추가한다(마이너스만)
         * 2. numOne 을 입력한다
         * 3. 마이너스와 numOne 을 음수로 치환한다
         */

        if (op === '-') {
            negative += op;
            $operator.value = op;
        }
        else {
            alert('please typing number');
        }
    }
}




const onClickEqual = () => {     // 숫자를 최종적으로 계산하는 함수
    if (!numTwo) {
        alert('no numTwo');
    }
    else {
        switch (operator) {
            case '+':
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;                         
            case '-':                          
                $result.value = parseInt(numOne) - parseInt(numTwo);
                break;                         
            case 'x':                          
                $result.value = parseInt(numOne) * parseInt(numTwo);
                break;                         
            case '/':                          
                $result.value = parseInt(numOne) / parseInt(numTwo);
                break;
            default:
                alert('please typing operator');
        }
    }
    $operator.value = '';
}




document.querySelector('#num-0').addEventListener('click', onClickNumber('0')); 
document.querySelector('#num-1').addEventListener('click', onClickNumber('1'));
document.querySelector('#num-2').addEventListener('click', onClickNumber('2'));
document.querySelector('#num-3').addEventListener('click', onClickNumber('3'));
document.querySelector('#num-4').addEventListener('click', onClickNumber('4'));
document.querySelector('#num-5').addEventListener('click', onClickNumber('5'));
document.querySelector('#num-6').addEventListener('click', onClickNumber('6'));
document.querySelector('#num-7').addEventListener('click', onClickNumber('7'));
document.querySelector('#num-8').addEventListener('click', onClickNumber('8'));
document.querySelector('#num-9').addEventListener('click', onClickNumber('9'));
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('x'));
document.querySelector('#calculate').addEventListener('click', onClickEqual);  
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    numTwo = '';
    operator = '';
    $result.value = '';
    $operator.value = '';
});