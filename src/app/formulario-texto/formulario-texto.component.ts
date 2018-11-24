import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulario-texto',
  templateUrl: './formulario-texto.component.html',
  styleUrls: ['./formulario-texto.component.scss']
})
export class FormularioTextoComponent implements OnInit {

  title = 'fist-angular';
  name = 'Marcus Goldschmidt Oliveira';
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eligendi eum id laudantium magni possimus tempora?';


  constructor() {
  }

  ngOnInit() {
  }


  exibirAlerta() {
    alert(this.name);
  }

  salvarEvento($event: any) {
    // TODO: Salvar
    alert('Event: ' + $event + '\nTitle: ' + this.title + '\nNome: ' + this.name + '\nTexto: ' + this.text);
  }

}
