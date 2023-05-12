import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { adjectives, proglangs, terms } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  descriptorsControl: FormControl = new FormControl();
  showDetails = false;
  terms: any[] = terms;
  adjectives: string[] = [];
  programmingLanguages: any[] = proglangs;

  constructor() {
    this.descriptorsControl.valueChanges.subscribe(
      x => (this.adjectives = adjectives.slice(0, x))
    );
    this.descriptorsControl.setValue(4);
  }
}
