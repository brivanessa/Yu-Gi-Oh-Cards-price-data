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

  getCards(startItem: number =0 ){
    const params={
      num: 100, // cuantos se imprimen
      offset: startItem, // desde que item se imprime
    };
    return this.http.get(this.API_URL,{params})
    .pipe(
      map((res:any)=>{return res.data})
    )
  }
}
