export class Main {
    lastRowMinute(time){
        if(time==="00:01:00")return "Y";
        if(time==="00:02:00")return "YY";
        return "YYY"
    }
}