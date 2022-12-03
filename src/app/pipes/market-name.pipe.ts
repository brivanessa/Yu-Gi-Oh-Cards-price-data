import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketName'
})
export class MarketNamePipe implements PipeTransform {

  markets =[
    {iden: 'amazon_price', name: 'Amazon'},
    {iden: 'cardmarket_price', name: 'Cardmarket'},
    {iden: 'coolstuffinc_price', name: 'Coolstuff Inc'},
    {iden: 'ebay_price', name: 'Ebay'},
    {iden: 'tcgplayer_price', name: 'TCG Player'},
  ]
  transform(value:string): string {
    const market=this.markets.find(item=> item.iden === value)
    return market?.name || ''; // si existe que me devuelva el name y si no esta dentro de markets entonces vacio
  }

}
