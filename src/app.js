export class Main {

    fifthRowMinute(time){
       const minutes = parseInt(time.split(':')[1],10);
       const lightsOn = minutes % 5;
       const result = 'Y'.repeat(lightsOn);
       return result.padEnd(4,'X');
    }

    fourthRowMinute(time){
       const minutes = parseInt(time.split(':')[1],10);
       const lightsOn = Math.floor(minutes / 5);
       let result = '';

       for(let i = 1; i<= lightsOn; i++){
        if(i % 3 === 0) {
         result += 'R';
        } else {
            result += 'Y';
        }
       }
       return result.padEnd(11,'X');

    }

    thirdRowHour(time){
        const hours = parseInt(time.split(':')[0],10);
        const lightsOn = hours % 5;
        const result = 'R'.repeat(lightsOn);
        return result.padEnd(4,'X');
    }

    secondRowHour(time){
        if(time === "05:00:00") return 'RXXX';
        if(time === "10:00:00") return 'RRXX';
        if(time === "15:00:00") return 'RRRX';
    }
}