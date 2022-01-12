"use strict";

const calculator = createCalculatop("");

calculator.add(10);
calculator.add(10); 
calculator.sub(20);
calculator.set(20); 
calculator.add(10);
calculator.add(10); 
calculator.add('qwe');
console.log(calculator.get());

function createCalculatop(defaultNumber){ 

    validNum(defaultNumber) ? defaultNumber = 0 : defaultNumber;
    
    return {
        add:(num) => validNum(num) ? defaultNumber : defaultNumber += num,
        sub:(num) => validNum(num) ? defaultNumber : defaultNumber -= num,
        mult:(num) => validNum(num) ? defaultNumber : defaultNumber *= num,
        div:(num) => validNum(num) ? defaultNumber : defaultNumber /= num,
        set:(num) => defaultNumber = num,
        get:() => defaultNumber,
    };
}

function validNum (num){
    return typeof num != "number";
}