import { Main } from "../src/app.js";

describe("turn on a yellow light for every minute ", function(){
    const main = new Main();

    const fifthRowTestCases = [
        {time: "00:00:00", expected: "XXXX"},
        {time: "00:01:00", expected: "YXXX"},
        {time: "00:02:00", expected: "YYXX"},
        {time: "00:03:00", expected: "YYYX"},
        {time: "00:04:00", expected: "YYYY"}
    ];

    fifthRowTestCases.forEach(({time, expected}) => {
        it(`Main should return '${expected}' when given '${time}'`, function(){
            
            const result = main.fifthRowMinute(time);
            
            expect(result).toBe(expected);
        });
    });
});

describe("turn on a yellow light per 5 minutes and a red light for multiples of 15 ", function(){
    const main = new Main();

    const fourthRowTestCases = [
        {time: "00:00:00", expected: "XXXXXXXXXXX"},
        {time: "00:05:00", expected: "YXXXXXXXXXX"},
        {time: "00:10:00", expected: "YYXXXXXXXXX"},
        {time: "00:15:00", expected: "YYRXXXXXXXX"},
        {time: "00:20:00", expected: "YYRYXXXXXXX"},
        {time: "00:25:00", expected: "YYRYYXXXXXX"},
        {time: "00:30:00", expected: "YYRYYRXXXXX"},
        {time: "00:35:00", expected: "YYRYYRYXXXX"},
        {time: "00:40:00", expected: "YYRYYRYYXXX"},
        {time: "00:45:00", expected: "YYRYYRYYRXX"},
        {time: "00:50:00", expected: "YYRYYRYYRYX"},
        {time: "00:55:00", expected: "YYRYYRYYRYY"}
    ];

    fourthRowTestCases.forEach(({time, expected}) => {
        it(`Main should return '${expected}' when given '${time}'`, function(){
            
            const result = main.fourthRowMinute(time);
            
            expect(result).toBe(expected);
        });
    });
});

describe("turn on a red light for every hour", function(){
    const main = new Main();

    const thirdRowTestCases = [
        {time: "00:00:00", expected: "XXXX"},
        {time: "01:00:00", expected: "RXXX"},
        {time: "02:00:00", expected: "RRXX"},
        {time: "03:00:00", expected: "RRRX"},
        {time: "04:00:00", expected: "RRRR"}
    ];

    thirdRowTestCases.forEach(({time, expected}) => {
        it(`Main should return '${expected}' when given '${time}'`, function(){
            
            const result = main.thirdRowHour(time);
            
            expect(result).toBe(expected);
        });
    });
});

describe("turn on a red light per 5 hours", function(){
    const main = new Main();
    
    const secondRowTestCases = [
        {time: "00:00:00", expected: 'XXXX'},
        {time: "05:00:00", expected: 'RXXX'},
        {time: "10:00:00", expected: 'RRXX'},
        {time: "15:00:00", expected: 'RRRX'},
        {time: "20:00:00", expected: 'RRRR'}
    ];

    secondRowTestCases.forEach(({time, expected}) => {
        it(`Main should return '${expected}' when given '${time}'`, function(){
            
            const result = main.secondRowHour(time);
            
            expect(result).toBe(expected);
        });
    });
});
describe("turn on a yellow light when the seconds are even", function(){

    const main= new Main();

    const firstRowTestCases =[
        {time: "00:00:00", expected: 'Y'},
        {time: "00:00:01", expected: 'X'},
        {time: "00:00:02", expected: 'Y'},
        {time: "00:00:03", expected: 'X'},
        {time: "00:00:04", expected: 'Y'},
        {time: "00:00:05", expected: 'X'},
        {time: "00:00:10", expected: 'Y'},
        {time: "00:00:15", expected: 'X'},
        {time: "00:00:50", expected: 'Y'},
        {time: "00:00:59", expected: 'X'},
    
     ];

     firstRowTestCases.forEach(({time, expected}) => {
        it(`Main should return '${expected}' when given '${time}'`, function(){
            
            const result = main.firstRowSeconds(time);
            
            expect(result).toBe(expected);
        });
    });

});
describe("Group all the previous methods to give the desired time", function(){

    const main = new Main();

    it(" main should return (Y\nXXXX\nXXXX\nXXXXXXXXXXX\nXXXX) when given 0",function(){

        const result = main.berlinClock("00:00:00");
        
        expect(result).toBe("Y\nXXXX\nXXXX\nXXXXXXXXXXX\nXXXX");
    });

    it(" main should return (X\nXXXX\nXXXX\nXXXXXXXXXXX\nYXXX) when given (00:01:01)",function(){

        const result = main.berlinClock("00:01:01");
        
        expect(result).toBe("X\nXXXX\nXXXX\nXXXXXXXXXXX\nYXXX");
    });

    it(" main should return (X\nXXXX\nYXXX\nXXXXXXXXXXX\nYXXX) when given (01:01:01)",function(){

        const result = main.berlinClock("01:01:01");
        
        expect(result).toBe("X\nXXXX\nRXXX\nXXXXXXXXXXX\nYXXX");
    });

    it(" main should return (X\nXXXX\nXXXX\nXXXXXXXXXXX\nYXXX) when given (05:05:05)",function(){

        const result = main.berlinClock("05:05:05");
        
        expect(result).toBe("X\nRXXX\nXXXX\nYXXXXXXXXXX\nXXXX");
    });

    it(" main should return (Y\nRRXX\nRRRX\nYYXXXXXXXXX\nYYYX) when given (06:13:06)",function(){

        const result = main.berlinClock("13:13:06");
        
        expect(result).toBe("Y\nRRXX\nRRRX\nYYXXXXXXXXX\nYYYX");
        console.log(result);

    });

    
})


    


    

    
