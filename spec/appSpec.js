import { Main } from "../src/app.js";

describe("turn on a yellow light every minute ", function(){
    const main = new Main();

    it("Main should return Yellow (Y) when given 1 minute", function(){
        const result = main.fifthRowMinute("00:01:00");
        
        expect(result).toBe("Y") 
    })
    it("Main should return Yellow (YY) when given 2 minutes", function(){
        const result = main.fifthRowMinute("00:02:00");
        
        expect(result).toBe("YY") 
    })

    it("Main should return Yellow (YYY) when given 3 minutes", function(){
        const result = main.fifthRowMinute("00:03:00");
        
        expect(result).toBe("YYY") 
    })

    it("Main should return Yellow (YYYY) when given 4 minutes", function(){
        const result = main.fifthRowMinute("00:04:00");
        
        expect(result).toBe("YYYY")
    })


});
describe("turn on a yellow light per 5 minutes and a red light for multiples of 15 ", function(){
    const main = new Main();
    
    it("Main should return Yellow (Y) when given 5 minutes", function(){
        const result = main.fourthRowMinute("00:05:00");
        
        expect(result).toBe("Y") 
    })

    it("Main should return Yellow (Y) when given 10 minutes", function(){
        const result = main.fourthRowMinute("00:10:00");
        
        expect(result).toBe("YY")
    })

    it("Main should return Red (R) when given 15 minutes", function(){
        const result = main.fourthRowMinute("00:15:00");
        
        expect(result).toBe("YYR")
    })

    it("Main should return Yellow (Y) when given 20 minutes", function(){
        const result = main.fourthRowMinute("00:20:00");

        expect(result).toBe("YYRY")
    })

    it("Main should return Yellow (Y) when given 25 minutes ", function(){
        const result = main.fourthRowMinute("00:25:00");

        expect(result).toBe("YYRYY")
    })

    it("Main should return Red (R) when given 30 minutes", function(){
        const result = main.fourthRowMinute("00:30:00");

        expect(result).toBe("YYRYYR")
    })

    it("Main should return Yellow (Y) when given 35 minutes", function(){
        const result = main.fourthRowMinute("00:35:00");

        expect(result).toBe("YYRYYRY")
    })

    it("Main should return Yellow (Y) when given 40 minutes",function(){
        const result = main.fourthRowMinute("00:40:00");

        expect(result).toBe("YYRYYRYY")
    })

    it("Main should return Red (R) when given 45 minutes", function(){
        const result = main.fourthRowMinute("00:45:00");

        expect(result).toBe("YYRYYRYYR")
    })

    it("Main should return Yellow (Y) when given 50 minutes", function(){
        const result = main.fourthRowMinute("00:50:00");

        expect(result).toBe("YYRYYRYYRY")
    })

    it("Main should return Yellow (Y) when given 55 minutes",function(){
        const result = main.fourthRowMinute("00:55:00");

        expect(result).toBe("YYRYYRYYRYY")
    })

});

    