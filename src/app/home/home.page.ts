import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { throws } from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public ToastController: ToastController) { 
  }

 async msgTopo() {
    console.log("TOPO")
    const toast = await this.ToastController.create({
      message: "Mensagem exibida no Topo",
      duration: 10000,
      position: "top"
    });
    console.log(toast);
    toast.present();
  }
 async msgCentro() {
    console.log("Centro")
    const toast = await this.ToastController.create({
      message: "Mensagem exibida no Meio",
      duration: 10000,
      position: "middle"
    });
    console.log(toast);
    toast.present();
  }
 async msgRodape() {
    console.log("Rodape")
    const toast = await this.ToastController.create({
      message: "Mensagem exibida no Rodape",
      duration: 10000,
      position:"bottom"                       
    });
    console.log(toast);
    toast.present();
  }

}
