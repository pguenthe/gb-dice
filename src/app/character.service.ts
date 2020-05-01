import { Injectable } from '@angular/core';
import { Trait } from './interfaces/trait';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

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

  updateTotal = function() {
    this.totalTraits = this.brains.value + this.muscle.value + this.moves.value + this.cool.value;
  }

  decreaseBrowniePoints() {
    if (this.browniePoints > 0) {
      this.browniePoints--;
    }
  }

  increaseBrowniePoints() {
    this.browniePoints++;
  }
}
