import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosloginService {

  users: Array<{ id: number, nome: string, login: string, senha: string, email: string, icon: string }>;

  constructor() {
    this.users = [
      {
        id: 1002, nome: 'Pedro Bernardes Horeia', login: 'pedrobh', senha: '123',
        email: 'pedrobh@teste.com', icon: 'start'
      },
      {
        id: 1006, nome: 'Daniela Joule Rosa', login: 'danijouli', senha: '123',
        email: 'danirosa@teste.com', icon: 'start'
      }
    ]
  }
}
