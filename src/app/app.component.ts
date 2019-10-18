import { Component } from '@angular/core';

@Component({
  selector: 'ns-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  user = {
    firstName: 'JB',
    lastName: 'Nizet'
  };
  racesPlanned = 2;
}
