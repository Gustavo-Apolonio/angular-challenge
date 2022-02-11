import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'challenge-xp';

  desc = '';

  sendDesc(desc: string) {
    this.desc = desc;
  }
}
