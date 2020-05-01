import { Component } from '@angular/core';
import { Trait } from './interfaces/trait';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ghostbusters ID Card & Die Roller';

  name: string = '';

  brainsTalents = ['Accounting', 'Anthropology', 'Archaeology','Astronomy', 'Biology',
  'Botany', 'Bureaucratics', 'Chemistry', 'Computer Use', 'Deduction', 'Demolitions', 
  'Electronics', 'Geology', 'Guess', 'Hair Styling', 'History', 'Journalism', 
  'Library Science', 'Linguistics', 'Mathematics', 'Electrical Repair', 'Mechanical Repair',
  'Medicine', 'Occult', 'Parapsychology', 'Physics', 'Psychoanalysis', 'Soap Opera Romances',
  'Sports Facts', 'Zoology', 'Other'];

  muscleTalents = ['Brawl', 'Break Things', 'Climb', 'Gobble Food', 'Grapple', 'Intimidate',
  'Jump', 'Kick Things Over', 'Lift', 'Rip Things Open', 'Run', 'Swim', 'Wrestle', 'Other'];

  movesTalents = ['Attract Attention', 'Balance', 'Breakdance', 'Catch', 'Disguise', 'Dodge',
  'Drive Vehicle', 'Fire Weapon', 'Gossip', 'Hide', 'Listen', 'Make Music', 'Pick Pocket',
  'Seduce', 'See', 'Sleight of Hand', 'Sneak', 'Sniff', 'Strut', 'Throw', 'Other'];

  coolTalents = ['Bargain', 'Bluff', 'Borrow', 'Browbeat', 'Charm', 'Convince', 'Fast Talk', 
  'Orate', 'Play Poker', 'Play Stock Market', 'Raise Children', 'Tell Fibs', 'Other', ];

  goals = ['Fame', 'Love/Sex', 'Serving Humanity', 'Wealth', 'Other'];

  brains:Trait = {name: 'Brains', value: 1, talent: '', availableTalents: this.brainsTalents};
  muscle:Trait = {name: 'Muscle', value: 1, talent: '', availableTalents: this.muscleTalents};
  moves:Trait = {name: 'Moves', value: 1, talent: '', availableTalents: this.movesTalents};
  cool:Trait = {name: 'Cool', value: 1, talent: '', availableTalents: this.coolTalents};

  totalTraits:number;
  traitsAllowed:number = 12;

  goal: string = '';

  browniePoints: number = 20;

  lastRoll: string = 'Rolls appear here';

  ghostStatus: boolean = false;

  ngOnInit() {
    this.totalTraits = this.brains.value + this.muscle.value + this.moves.value + this.cool.value;
  }

  onChanged() {
    this.totalTraits = this.brains.value + this.muscle.value + this.moves.value + this.cool.value;
  }

  decreaseBrowniePoints(ev:Event) {
    if (this.browniePoints > 1) {
      this.browniePoints--;
    }
  }

  increaseBrowniePoints(ev:Event) {
    this.browniePoints++;
  }

  roll = function (trait:number, label: string){
    let rollStr= label + " Roll:&nbsp;";
    var total: number = 0;

    for(var i:number = 0; i < trait - 1; i++) {
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
  }

  d6 = function() {
    return Math.floor(Math.random() * 6 + 1);
  }

}
