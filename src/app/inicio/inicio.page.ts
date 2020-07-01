import { GooglePlus } from '@ionic-native/google-plus';
import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    public navCtrl : NavController,
    public googlePlus: GooglePlus
  ) { }

  loginInicio(){
    this.googlePlus.login({})
    .then(res => console.log(res))
    .catch(err => console.error(err));
   
  } 

  ngOnInit() {
  }

}
