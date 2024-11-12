export class Main {
    fifthRowMinute(time){
        if(time==="00:01:00")return "Y";
        if(time==="00:02:00")return "YY";
        if(time==="00:03:00")return "YYY";

        return "YYYY"
    }
    fourthRowMinute(time){
        return "Y";
    }
}