import { Main } from "../src/app.js";

describe("turn on a yellow lamp per minute ", function(){
    let main = new Main();

    it("Main should return Yellow (Y) when given 1 minute", function(){
        let result = main.lastRowMinute("00:01:00");
        
        expect(result).toBe("Y") 
    })
    it("Main should return Yellow (YY) when given 2 minutes", function(){
        const result = main.lastRowMinute("00:02:00");
        
        expect(result).toBe("YY") 
    })

    it("Main should return Yellow (YYY) when given 3 minutes", function(){
        const result = main.lastRowMinute("00:03:00");
        
        expect(result).toBe("YYY") 
    })


});