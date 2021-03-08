import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async mostrarModal(){

    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Temox',
        pais: 'Venezuela'
      }
    });
    await modal.present();

    //const {data} = await modal.onDidDismiss();//manda la informacion cuendo se termine de cerrar la aplicacion
    const {data} = await modal.onWillDismiss();// manda la informacion antes de que se cieree el modal
    console.log('will');

    console.log(data);
  }



}
