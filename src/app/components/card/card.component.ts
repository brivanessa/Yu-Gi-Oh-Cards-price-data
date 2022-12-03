import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Datum } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() cardItem!:Datum;

constructor(private router:Router){}

goToCard(){
  this.router.navigate([`./card/${this.cardItem.id}`])
}
}
