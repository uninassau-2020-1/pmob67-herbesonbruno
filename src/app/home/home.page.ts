import { Platform, LoadingController } from '@ionic/angular';
import { Component, ViewChild, NgZone } from '@angular/core';
import { Environment, GoogleMap, GoogleMaps, GoogleMapOptions, GoogleMapsEvent, MyLocation, GoogleMapsAnimation, Marker, Geocoder } from '@ionic-native/google-maps';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('map',{static: true}) mapELement:any;
  private loading: any;
  private map: GoogleMap;
  public cep: string = '';
  private googleAutocomplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
  private originMarker: Marker;
  public destination: any;

  constructor(
    private platform:Platform,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone
  
  ) {}
  
  ngOnInit() {

    this.mapELement = this.mapELement.nativeElement;

    this.mapELement.style.width = this.platform.width() + 'px';
    this.mapELement.style.height = this.platform.height() + 'px';

    this.loadMap();
  }

  async loadMap(){
    this.loading = await this.loadingCtrl.create({message: 'Aguarde...'});
    await this.loading.present();

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAkXgNj5MyhkM8_wtBW39ea_48_bS9ntzY',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAkXgNj5MyhkM8_wtBW39ea_48_bS9ntzY'
    });

    const mapOptions: GoogleMapOptions = {
      controls:{
        zoom: false
      }
    }

    this.map = GoogleMaps.create(this.mapELement,mapOptions);

    try {
      await this.map.one(GoogleMapsEvent.MAP_READY);
      this.addOriginMarker();
    } catch (error) {
      console.error(error);
    }
  }

  async addOriginMarker(){
    try {
      const myLocation: MyLocation = await this.map.getMyLocation();

      await this.map.moveCamera({
        target: myLocation.latLng,
        zoom:18
      });

      this.originMarker = this.map.addMarkerSync({
        title:'Local',
        icon:'#000',
        animation:GoogleMapsAnimation.DROP,
        position: myLocation.latLng
      });

    } catch (error) {
      console.error(error);
    }finally{
      this.loading.dismiss();
    }
    
  }  

  cepBusca(){
    if (!this.cep.trim().length) return;

    this.googleAutocomplete.getPlacePredictions({input: this.cep}, predictions =>{
      this.ngZone.run(() => {
        this.searchResults = predictions;
       });
    });
  }

  async apontaRua(item: any){
    this.cep = '';
    this.destination = item;

    const info: any = await Geocoder.geocode({address: this.destination.description});

    let markerDestination: Marker = this.map.addMarkerSync({
      title: this.destination.description,
      icon: '#000',
      animation: GoogleMapsAnimation.DROP,
      position: info[0].position,
      center: info[0].position
    });

    this.map.moveCamera({
      target: info[0].position,
      
      zoom:18
    });
    
  }



}
