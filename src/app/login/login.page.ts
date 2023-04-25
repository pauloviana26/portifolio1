import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DadosloginService } from '../services/dadoslogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  campoLogin: string = '';
  campoSenha: string = '';
  users: any;
  login: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(dadosServ: DadosloginService, private navController: NavController) {
    this.users = dadosServ.users;
  }

  ngOnInit() {
  }

  entrar(campoLogin: string, campoSenha: string) {
    this.login = campoLogin;
    this.senha = campoSenha;
    for (const user of this.users) {
      if (this.login == user.login && this.senha == user.senha) {
        this.mensagem = 'Olá ' + user.nome + ', sua credencial está correta, seja bem-vindo!';
        console.log(this.login);
        this.navController.navigateForward('boasvindas', {
          queryParams: {
            parametro: this.mensagem 
          }
        });
      } else {
        this.mensagem = 'null';
      }
    }
  }

}
