import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegisterModalPage } from '../register-modal/register-modal.page';
import { LoginModalPage } from '../login-modal/login-modal.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl:ModalController,private router:Router) {}
  async openRegister(){
    const openLogin= await this.modalCtrl.create({
      component:RegisterModalPage
    })
    await openLogin.present();
  }
  async openLogin(){
    const openRegister=await this.modalCtrl.create({
      component:LoginModalPage
    })
    await openRegister.present();
  }
}
