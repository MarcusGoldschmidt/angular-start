import {Component, OnInit} from '@angular/core';
import {Login} from '../shared/models/login';
import {Registro} from '../shared/models/registro';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login;
  registro: Registro;
  auth: AuthService;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.login = new Login();
    this.registro = new Registro();
  }

  efetuarLogin() {
    this.authService.efetuarLogin(this.login);
  }

  efetuarCadastro() {
    if (this.registro.senha === this.registro.repitaSenha) {
      this.authService.efetuarCadastro(this.registro);
    } else {
      alert('Senhas incoretas');
    }
  }

}
