import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import{Card} from '../interfaces/card.interface'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  API_URL='https://db.ygoprodeck.com/api/v7/cardinfo.php'

  constructor(private http:HttpClient) { }

  getCards(name: string | null, startItem: number =0 ){ //name puede ser string o null cuando no escribimos nada en el buscador
    const params: any ={ // params sera de tipo any para que podamos agrgar un fname
      num: 100, // cuantos se imprimen
      offset: startItem, // desde que item se imprime
    };
    //fname es el endpoint de la api para mostrar las coincidencias del string que se escribe
    if(name){ params.fname = name }; // si existe un name entonces agregas una propiedad a params - la prop name sera lo que escribes en el buscador
    return this.http.get(this.API_URL,{params})
    .pipe(
      map((res:any)=>{return res.data})
    )
  }

  getCards2(name: string | null){ //name puede ser string o null cuando no escribimos nada en el buscador
    const params: any = {
      fname: name
    };
    //fname es el endpoint de la api para mostrar las coincidencias del string que se escribe
    return this.http.get(this.API_URL,{params})
    .pipe(
      map((res:any)=>{return res.data})
    )
  }

  getCards1(startItem: number =0){ //name puede ser string o null cuando no escribimos nada en el buscador
    const params: any ={ // params sera de tipo any para que podamos agrgar un fname
      num: 100, // cuantos se imprimen
      offset: startItem, // desde que item se imprime
    };
    return this.http.get(this.API_URL,{params})
    .pipe(
      map((res:any)=>{return res.data})
    )
  }
}
