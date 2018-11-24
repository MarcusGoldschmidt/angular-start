import {Injectable} from '@angular/core';
import {Login} from '../models/login';
import {Registro} from '../models/registro';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {Usuario} from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  angularFireAuth: AngularFireAuth, private database: AngularFireDatabase) {

  }

  efetuarLogin(login: Login) {
    // TODO: comunicar ao firebase
    this.angularFireAuth.auth.signInWithEmailAndPassword(login.email, login.senha)
      .then( user => {
        localStorage.setItem('usuario');
      });
  }

  efetuarCadastro(registro: Registro) {
    // TODO: comunicar ao firebase
    localStorage.setItem(registro.email, JSON.stringify(registro));

    this.angularFireAuth.auth.createUserWithEmailAndPassword(registro.email, registro.senha)
      .then(user => {
        this.salvarUsuarioNoBanco(user.user.uid, registro);
      });
  }

  private salvarUsuarioNoBanco(uid: string, registro: Registro) {

    const usuario = new Usuario(registro.name, registro.email);

    this.database.list('/usuarios')
      .update(uid, usuario);
  }

}
