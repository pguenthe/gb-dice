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
    this.roll(this.cool + 3, "Cool");
  }
  
  rollBrainsTalent(ev:Event) {
    this.roll(this.brains + 3, "Brains Talent");
  }
  
  rollMuscleTalent(ev:Event) {
    this.roll(this.muscle + 3, "Muscle Talent");
  }

  rollMovesTalent(ev:Event) {
    this.roll(this.moves + 3, "Moves Talent");
  }

  rollCoolTalent(ev:Event) {
    this.roll(this.cool + 3, "Cool Talent");
  }
  roll(trait:number, label: string){
    this.lastRoll = label + " Roll: ";
    var total: number = 0;

    for(var i:number = 0; i < trait - 1; i++) {
      var roll:number = this.d6();
      this.lastRoll += roll + ' ';
      total += roll;
    }

    //Ghost die
    var ghost:number = this.d6();
    if (ghost === 6) {
      this.lastRoll += 'GHOST!!';
    } else {
      this.lastRoll += ghost;
      total += ghost;
    }

    this.lastRoll += " TOTAL: " + total;
  }

  d6() {
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
