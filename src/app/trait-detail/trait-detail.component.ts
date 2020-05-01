import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trait } from '../interfaces/trait';


@Component({
  selector: 'app-trait-detail',
  templateUrl: './trait-detail.component.html',
  styleUrls: ['./trait-detail.component.css']
})
export class TraitDetailComponent implements OnInit {
  @Input() trait:Trait;
  @Output() changed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}


  increase() {
    // if (this.value < 5 && this.totalTraits < this.traitsAllowed) {
    if (this.trait.value < 5) {
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
    //this.roll(this.trait.value, this.trait.name);
  }

  rollTalent() {
    // this.roll(this.trait.value + 3,
    //   `${this.trait.talent} (${this.trait.name})`);
  }
}
