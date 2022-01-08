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

calculator.add(10);
calculator.add(10); 
calculator.sub(20); 
calculator.set(20);
calculator.add(10);
calculator.add(10); 
calculator.add('qwe');
console.log(calculator.get());