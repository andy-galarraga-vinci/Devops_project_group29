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
describe("turn on a yellow light per 5 minute and a red light for multiples of 15 ", function(){
    const main = new Main();
    
    it("Main should return Yellow (Y) when given 5 minute", function(){
        const result = main.fourthRowMinute("00:05:00");
        
        expect(result).toBe("Y") 
    })

    it("Main should return Yellow (Y) when given 10 minute", function(){
        const result = main.fourthRowMinute("00:10:00");
        
        expect(result).toBe("YY")
    })

});