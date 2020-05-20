import { ViacepService } from './../../servicos/viacep.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

	private cep;
	private endereco:any = {};
	vazio = "";
	
  constructor(public navCtrl: NavController, private viacep:  ViacepService) {}
	
	getEndereco(){
		this.viacep.callService(this.cep)
		.subscribe(
        data =>{
		this.endereco = data;
		console.log(data);
        }
      );
	}

  ngOnInit() {
  }

}
