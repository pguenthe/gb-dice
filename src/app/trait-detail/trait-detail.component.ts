import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trait } from '../interfaces/trait';
import { RollRequest } from '../interfaces/roll-request';
import { CharacterService } from '../character.service';


@Component({
  selector: 'app-trait-detail',
  templateUrl: './trait-detail.component.html',
  styleUrls: ['./trait-detail.component.css']
})
export class TraitDetailComponent implements OnInit {
  @Input() trait:Trait;
  @Output() changed = new EventEmitter();
  @Output() roll = new EventEmitter;

  character:CharacterService;

  constructor(chr:CharacterService) {
    this.character = chr;
  }

  ngOnInit(): void {}


  increase() {
    // if (this.value < 5 && this.totalTraits < this.traitsAllowed) {
    if (this.trait.value < 5 && this.character.totalTraits < this.character.traitsAllowed) {
      this.trait.value++;
      this.changed.emit(null);
    }
  }

  decrease() {
    if (this.trait.value > 1) {
      this.trait.value--;
      this.changed.emit(null);
    }
  }

  rollTrait() {
    let req:RollRequest = { name: this.trait.name, value: this.trait.value };
    this.roll.emit(req);
  }

  rollTalent() {
    let req:RollRequest = { name: `${this.trait.talent} (${this.trait.name})`, value: this.trait.value + 3 };
    this.roll.emit(req);
  }
}
