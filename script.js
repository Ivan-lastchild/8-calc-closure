"use strict";

function createCalculatop(defaultNumber){ 

    return {
        add:(num) => {
            if(typeof num != "number"){
                return defaultNumber;
            } else {
                return defaultNumber += num;
            }
        },
        sub:(num) => {
            if(typeof num != "number"){
                return defaultNumber;
            } else {
                return defaultNumber -= num;
            }
        },
        mult:(num) => {
            if(typeof num != "number"){
                return defaultNumber;
            } else {
                return defaultNumber *= num;
            }
        },
        div:(num) => {
            if(typeof num != "number"){
                return defaultNumber;
            } else {
                return defaultNumber /= num;
            }
        },
        set:(num) =>{
            defaultNumber = num;
        },
        get:()=>{
            return defaultNumber;
        }
    };
}


const calculator = createCalculatop(100);

calculator.add(10); // 110
calculator.add(10); // 120
calculator.sub(20); // 100

calculator.set(20); // 20
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
console.log(calculator.get());