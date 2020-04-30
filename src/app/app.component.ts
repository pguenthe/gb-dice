import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ghostbusters ID Card & Die Roller';

  name: string = '';

  brains: number = 1;
  muscle: number = 1;
  moves: number = 1;
  cool: number = 1;
  totalTraits = this.brains + this.muscle + this.moves + this.cool;
  traitsAllowed:number = 12;

  brainsTalent: string = '';
  muscleTalent: string = '';
  movesTalent: string = '';
  coolTalent: string = '';

  goal: string = '';

  browniePoints: number = 20;

  lastRoll: string = 'Rolls appear here';

  ghostStatus: boolean = false;

  increaseBrains(ev:Event) {
    if (this.brains < 5 && this.totalTraits < this.traitsAllowed) {
      this.brains++;
      this.totalTraits++;
    }
  }

  decreaseBrains(ev:Event) {
    if (this.brains > 1) {
      this.brains--;
      this.totalTraits--;
    }
  }

  increaseMuscle(ev:Event) {
    if (this.muscle < 5 && this.totalTraits < this.traitsAllowed) {
      this.muscle++;
      this.totalTraits++;
    }
  }

  decreaseMuscle(ev:Event) {
    if (this.muscle > 1) {
      this.muscle--;
      this.totalTraits--;
    }
  }

  increaseMoves(ev:Event) {
    if (this.moves < 5 && this.totalTraits < this.traitsAllowed) {
      this.moves++;
      this.totalTraits++;
    }
  }

  decreaseMoves(ev:Event) {
    if (this.moves > 1) {
      this.moves--;
      this.totalTraits--;
    }
  }

  increaseCool(ev:Event) {
    if (this.cool < 5 && this.totalTraits < this.traitsAllowed) {
      this.cool++;
      this.totalTraits++;
    }
  }

  decreaseBrowniePoints(ev:Event) {
    if (this.browniePoints > 1) {
      this.browniePoints--;
    }
  }

  increaseBrowniePoints(ev:Event) {
    this.browniePoints++;
  }

  decreaseCool(ev:Event) {
    if (this.cool > 1) {
      this.cool--;
      this.totalTraits--;
    }
  }

  rollBrains(ev:Event) {
    this.roll(this.brains, "Brains");
  }

  rollMuscle(ev:Event) {
    this.roll(this.muscle, "Muscle");
  }

  rollMoves(ev:Event) {
    this.roll(this.moves, "Moves");
  }

  rollCool(ev:Event) {
    this.roll(this.cool, "Cool");
  }
  
  rollBrainsTalent(ev:Event) {
    this.roll(this.brains + 3, this.brainsTalent + " (Brains)");
  }
  
  rollMuscleTalent(ev:Event) {
    this.roll(this.muscle + 3, this.muscleTalent + " (Muscle)");
  }

  rollMovesTalent(ev:Event) {
    this.roll(this.moves + 3, this.movesTalent + " (Moves}");
  }

  rollCoolTalent(ev:Event) {
    this.roll(this.cool + 3, this.coolTalent + " (Cool)");
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
}
