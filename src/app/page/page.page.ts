import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {


  constructor(public router: Router) { }

  ngOnInit() {
    this.validatesession();

  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('home');

  }
  validatesession(){
    let correo = localStorage.getItem('email');
    let contraseña = localStorage.getItem('password');
    if (correo===null&&contraseña===null){
      this.router.navigateByUrl('home');
    }
  }

}
