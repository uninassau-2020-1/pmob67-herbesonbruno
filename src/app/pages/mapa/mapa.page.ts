import { ViacepService } from './../../servicos/viacep.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

export class MapaPage implements OnInit {
  //CEP
  private cep;
	private endereco:any = {};
  vazio = "";
  
  //MAPA
  map: any;

  constructor(private geolocation: Geolocation,public navCtrl: NavController, private viacep:  ViacepService) { }
 
  //endereço do cep
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
    
    //const position = new google.maps.LatLng(-21.763409, -43.349034);
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
    
        const mapOptions = {
          zoom: 18,
          center: position,
          disableDefaultUI: true
        }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
        const marker = new google.maps.Marker({
          position: position,
          map: this.map,

          //Animção
          animation: google.maps.Animation.DROP, // BOUNCE

        });
    }).catch((error) => {
      console.log('Erro ao recuperar sua posição', error);
    });
  }
}
