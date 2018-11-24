import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fist-angular';
  name = 'Marcus Goldschmidt Oliveira';
  text = '';

  exibirAlerta() {
    alert(this.name);
  }
}
