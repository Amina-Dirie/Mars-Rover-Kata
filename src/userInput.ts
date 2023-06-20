import {nextMove} from './index';
import * as readline from 'readline';
// adding a user input
const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

ask.question('What are the commands? ', (commands: string) => {
    let theCurrentPosition = {
        "X": 0,
        "Y":0,
        "direction": 'N' 
    }
    let splited = commands.split('');

    console.log(nextMove([5,5],theCurrentPosition,splited));
  
  ask.close();
});