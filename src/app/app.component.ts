import { Component } from '@angular/core';
import { RollRequest } from './interfaces/roll-request';
import {CharacterService} from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  character:CharacterService;

  constructor(chr:CharacterService) { 
    this.character = chr;
  }

  title = 'Ghostbusters ID Card & Die Roller';

  lastRoll: string = 'Rolls appear here';

  ghostStatus: boolean = false;

  ngOnInit() {
    this.character.updateTotal();
  }

  onChanged() {
    this.character.updateTotal();
  }

  onRoll ($event) {
    this.roll($event.name, $event.value);
  }

  roll = function (name:string, value:number){
    let rollStr= name + " Roll:&nbsp;";
    var total: number = 0;

    for(var i:number = 0; i < value - 1; i++) {
      var roll:number = this.d6();
      rollStr += `<img width="44" height="44" src="assets/img/green${roll}.svg" class="die" />&nbsp;`;
      total += roll;
    }

    //Ghost die
    var ghost:number = this.d6();
    if (ghost === 6) {
      this.ghostStatus = true;
    } else {
      this.ghostStatus = false;
      total += ghost;
    }

    rollStr += `<img width="44" height="44" src="assets/img/white${ghost}.svg" class="die" />&nbsp;`;

    rollStr += " Total: " + total;
    this.lastRoll = rollStr;
  }

  rollStraight = function() {
    let rollStr= "Straight d6 Roll:&nbsp;";
    var roll:number = this.d6();

    rollStr += `<img width="44" height="44" src="assets/img/green${roll}.svg" class="die" />&nbsp;`;
    rollStr += " Total: " + roll;
   
    this.lastRoll = rollStr;
    this.ghostStatus = false;
  }

  d6 = function() {
    return Math.floor(Math.random() * 6 + 1);
  }

}
