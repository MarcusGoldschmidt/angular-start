import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-lancamento',
  templateUrl: './formulario-lancamento.component.html',
  styleUrls: ['./formulario-lancamento.component.scss']
})
export class FormularioLancamentoComponent implements OnInit {

  @Output() aoSalvar: EventEmitter<number> = new EventEmitter<number>();

  preco = 0;

  constructor() {
  }

  ngOnInit() {
    // Durante a iniciação do componente
  }

  salvar() {
    this.aoSalvar.emit(this.preco);
    alert('Evento salvar | Preço: ' + this.preco);
  }

}
