import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // style is array to inlclude multiple style files
  // styleUrls: ['./app.component.css'] // Either this, or inline style (below)
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
}
