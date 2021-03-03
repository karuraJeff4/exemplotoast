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
  users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];
  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };
  compareWith = this.compareWithFn;

async msgtoast(msg:string , duration:number, position: any){
  const toast = await this.ToastController.create({
    header:"Informação importante",
    buttons:[
      {
      side:"start",
      icon:"car",
      text :" Favoritos",
      handler:() => {
        console.log("Adicionando aos Favoritos - Igual o Exemplo");
      }
    }
  ],
    animated:false,
    cssClass:"toastpersonalizado",
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

  