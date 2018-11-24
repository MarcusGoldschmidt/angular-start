import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fist-angular';
  name = 'Marcus Goldschmidt Oliveira';
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eligendi eum id laudantium magni possimus tempora?';

  exibirAlerta() {
    alert(this.name);
  }

  salvarEvento($event: any) {
    // TODO: Salvar
    alert('Event: '+ $event + '\nTitle: ' + this.title + '\nNome: ' + this.name + '\nTexto: ' + this.text);

  }
}
