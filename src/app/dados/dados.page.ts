import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  public email: any;
  public telefone: any;

  constructor(private alertCtrl: AlertController) { }

  async showAlert() {
    await this.alertCtrl.create({
      header: "Por favor informe seus dados",
      inputs: [
        {
          type: 'email',
          name: 'email',
          placeholder: "E-mail"
        },
        {
          type: 'text',
          name: 'telefone',
          placeholder: "Telefone"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: "OK",
          handler: (data) => {
            this.email = data.email;
            this.telefone = data.telefone;
          }
        }
      ]
    }).then(res => res.present());
  }

  ngOnInit() {
  }

}
