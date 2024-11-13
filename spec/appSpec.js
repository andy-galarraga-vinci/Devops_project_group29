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
    ];

    thirdRowTestCases.forEach(({time, expected}) => {
        it(`Main should return '${expected}' when given '${time}'`, function(){
            
            const result = main.thirdRowHour(time);
            
            expect(result).toBe(expected);
        });
    });
})


