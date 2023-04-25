import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pages: Array<{ title: string, url: string, icon: string }>;

  constructor(private menu: MenuController) {
    menu.enable(true);

    this.pages = [
      { title: 'Home', url: '', icon: 'home' },
      { title: 'Contato', url: 'contato', icon: 'call' },
      { title: 'Endereço', url: 'endereco', icon: 'navigate' },
      { title: 'Competências', url: 'competencias', icon: 'briefcase' },
      { title: 'Escolaridade', url: 'escolaridade', icon: 'school' },
      { title: 'Idiomas', url: 'idiomas', icon: 'language' },
      { title: 'Dados', url: 'dados', icon: 'person' },
      { title: 'Login', url: 'login', icon: 'log-in' },
      { title: 'Badges', url: 'badges', icon: 'notifications' }
    ];
  }
}
