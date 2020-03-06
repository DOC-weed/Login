import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage   {
  correo:string;
  contra:string;
  email='prueba@gmail.com';
  password='12345678'

  constructor(public alert: AlertController, public router: Router, public nav: NavController) {}

  login(){
    if((this.correo===''&&this.contra==='')||(this.correo===''||this.contra==='')){
      this.camposvacios();
    }else if(this.correo!==this.email&&this.contra!==this.password){
      this.camposincorrectos();
    }else{
      console.log("aqui ando");
      localStorage.setItem('email', this.correo);
      localStorage.setItem('password',this.contra);
      this.nav.navigateRoot('page');
    }
  }

  async camposvacios() {
    const alert = await this.alert.create({
      message:'Introduzca datos',
      animated:true

    });
    alert.present();
  }
  async camposincorrectos(){
    const alert= await this.alert.create({
      message:'Datos incorrectos',
      animated: true
    });
    alert.present();
  }

  

}
