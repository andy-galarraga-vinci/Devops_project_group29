export class Main {
    fifthRowMinute(time){
        if(time === "00:01:00") return "Y";
        if(time === "00:02:00") return "YY";
        if(time === "00:03:00") return "YYY";
        return "YYYY"
    }

    fourthRowMinute(time){
        if(time === "00:10:00") return "YY";
        if(time === "00:15:00") return"YYR";
        if(time === "00:20:00") return "YYRY";
        if(time === "00:25:00") return "YYRYY";
        if(time === "00:30:00") return "YYRYYR";
        if(time === "00:35:00") return "YYRYYRY";
        if(time === "00:40:00") return "YYRYYRYY";
        if(time === "00:45:00") return "YYRYYRYYR";
        if(time === "00:50:00") return "YYRYYRYYRY";
        if(time === "00:55:00") return "YYRYYRYYRYY";
        return "Y";
    }
}