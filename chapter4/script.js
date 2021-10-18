let numOne = '';
let numTwo = '';
let operator = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
let negative = '';



const onClickNumber= (number)=>()=>{
    if (!operator) {
        numOne += number;
    }
    else {
        $result.value = '';
        numTwo += number;
    }
    $result.value += number;
}

const onClickOperator = (op) => () => {
    if (numOne !== '' && numTwo !== '') {
        /* 
         1. numOne, numTwo 둘 다 빈 값이 아니다
         2. numOne 에 연산결과를 저장한다
         3. 새로운 연산을 한다
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
        /* <  numOne 이 존재x -> 음수가 되게 하기(새로운 과제임) >
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


/* = 버튼 클릭
 * 1. numTwo 가 존재하지 않는다
 * 2. 경고창을 표시
 * 3. numTwo 가 존재한다
 * 4. 계산한다
 * 이중 if문 써야 하나
 * */



const onClickEqual = () => {
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




document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));  // 왜 문자로 저장하는가
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
document.querySelector('#calculate').addEventListener('click', onClickEqual);    // 변수에 저장하는 이유가 뭔가?
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    numTwo = '';
    operator = '';
    $result.value = '';
    $operator.value = '';
});