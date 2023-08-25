import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  terms = terms;
  adjectives: string[] = [];
  programmingLanguages = proglangs;

  constructor() {
    this.descriptorsControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(x => (this.adjectives = adjectives.slice(0, x)));
    this.descriptorsControl.setValue(4);
  }
}
