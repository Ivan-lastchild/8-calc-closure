"use strict";

const calculator = createCalculatop(100);

calculator.add(10);
calculator.add(10); 
calculator.sub(20); 
calculator.set(20);
calculator.add(10);
calculator.add(10); 
calculator.add('qwe');
console.log(calculator.get());

function createCalculatop(defaultNumber){ 

    return {
        add:(num) => typeof num != "number" ? defaultNumber : defaultNumber += num,
        sub:(num) => typeof num != "number" ? defaultNumber : defaultNumber -= num,
        mult:(num) => typeof num != "number" ? defaultNumber : defaultNumber *= num,
        div:(num) => typeof num != "number" ? defaultNumber : defaultNumber /= num,
        set:(num) => defaultNumber = num,
        get:() => defaultNumber,
    };
}