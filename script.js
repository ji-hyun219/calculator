let numOne = '';
let numTwo = '';
let operator = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
let negative = '';



const onClickNumber= (number)=>()=>{       // ���ڸ� �����ϴ� �Լ�
    if (!operator) {   // �����ڰ� ���� == ù��° ���ڴ�
        numOne += number;
    }
    else {             // �����ڰ� �ִ� == �ι�° ���ڴ�
        $result.value = '';
        numTwo += number;
    }
    $result.value += number;
}

const onClickOperator = (op) => () => {    // �����ڸ� �����ϴ� �Լ�
    if (numOne !== '' && numTwo !== '') {
        /* 
         1. numOne, numTwo �� �� �� ���� �ƴϴ�
         2. numOne �� �������� �����Ѵ�
        */
        onClickEqual();
        numOne = $result.value;
        numTwo = '';
        operator = '';
        operator += op;
        $operator.value = op;
    }
    else if (numOne) {    // numOne �� ����
        if (negative === '-') {
            numOne = '-' + numOne;
            $result.value = numOne;
            $operator.value = '';
        }
        operator += op;
        $operator.value = op;
    }
    else {
        /* <  numOne �� ����x -> ������ �ǰ� �ϱ� >
         * 1. �ϴ� �����ڸ� �߰��Ѵ�(���̳ʽ���)
         * 2. numOne �� �Է��Ѵ�
         * 3. ���̳ʽ��� numOne �� ������ ġȯ�Ѵ�
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




const onClickEqual = () => {     // ���ڸ� ���������� ����ϴ� �Լ�
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