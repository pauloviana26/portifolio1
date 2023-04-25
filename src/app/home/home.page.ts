import { Component } from '@angular/core';
import { IonItem, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController) {}

  onClick(item: string) {
    this.presentToast(item);
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


}
