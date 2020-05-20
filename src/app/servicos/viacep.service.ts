
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ViacepService {

  constructor(public http: HttpClient) {
    
  }
  callService(cep:String):any {
      return this.http.get(`https://viacep.com.br/ws/` + cep + `/json/`)
    }

}




