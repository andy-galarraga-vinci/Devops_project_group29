export class Main {

    fifthRowMinute(time){
       const minutes = parseInt(time.split(':')[1],10);
       const lightsOn = minutes % 5;
       const result = 'Y'.repeat(lightsOn);
       return result.padEnd(4,'X');
    };

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

    };

    thirdRowHour(time){
        const hours = parseInt(time.split(':')[0],10);
        const lightsOn = hours % 5;
        const result = 'R'.repeat(lightsOn);
        return result.padEnd(4,'X');
    };

    secondRowHour(time){
        const hours = parseInt(time.split(':')[0],10);
        const lightsOn = hours / 5;
        const result = 'R'.repeat(lightsOn);
        return result.padEnd(4,'X');
    };

    firstRowSeconds(time){
        const second = parseInt(time.split(':')[2],10);
        if(second%2 ===0)return "Y";
        return "X";

    };
    berlinClock(time){
        const timeOfBerlinClock = this.firstRowSeconds(time)+'\n'+this.secondRowHour(time)+'\n'+
        this.thirdRowHour(time)+'\n'+this.fourthRowMinute(time)+'\n'+this.fifthRowMinute(time); 
        
        return timeOfBerlinClock; 
    }
}