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

async msgtoast(msg:string , duration:number, position: any){
  const toast = await this.ToastController.create({
    message: msg,
    duration: duration,
    position: position
  });
  toast.present();
}

  async msgTopo() {
    console.log("TOPO")
    this.msgtoast("Mensagem no Topo", 5000, "top");
  }
  async msgCentro() {
    console.log("Centro")
    this.msgtoast("Mensagem no Centro", 5000, "middle");
    
  }
  async msgRodape() {
    console.log("Rodape")
    this.msgtoast("Mensagem no Rodape ", 5000, "bottom");
  }

}

  