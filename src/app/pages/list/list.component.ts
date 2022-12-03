import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Datum } from 'src/app/interfaces/card.interface';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
 offset = 0;
 cards: Datum[] = [];
 searchCard = new FormControl('')
 item:string|null ='';


constructor(private CardService:CardService) {}

  ngOnInit(): void {
    this.searchCard.valueChanges.pipe( //para capturar el evento clic, en los formularios hay una propiedad llamada value Changes y este valueChanges es un observable por ende podemos suscribirnos a el y podemos trabajar con la respuesta del evento
      debounceTime(500)
    )
    .subscribe((res)=>{
      this.item =res
      this.cards =[]; //primero vacio porque cuando buscamos coincidencias debemos tener el array vacio (sin las 100 primeras cartas cuando es null itemName)
      // if(this.item===null){this.printCards();}
      if(this.searchCard.value===''){
        // window.location.reload()
        this.offset = 0
      }
      if(this.item!=null){
        // window.location.reload()
        this.offset = 0
      }


      this.printCards(res); // pintamos en patalla la rsta del evento
      console.log(this.searchCard.value)

    })
    //console.log(this.searchCard.value==='')
   // this.printCards(this.searchCard.value);
    this.printCards();

  //  if (this.searchCard === null) {this.printCards()}
  };


  onScroll() {
    console.log("scrolled!!");
    // if (this.searchCard) {
    //   this.printCards()
    //   this.offset += 100;
    //  }
    // if(this.searchCard.value===''){
    //   // window.location.reload()
    //   this.offset = 0
    // }

      console.log(this.item)
      this.offset += 100;
      this.printCards(this.searchCard.value);
  }

  printCards(itemName: string| null = null){
    // if(itemName===null){
    //   // this.offset=0;
    //   this.CardService.getCards1(this.offset).subscribe((res)=>{
    //     console.log(res)
    //     this.cards = [...this.cards, ...res];
    //   })
    // }
    // if(this.searchCard.value==='') {
    //   // this.offset=0
    //   this.CardService.getCards1(0).subscribe((res)=>{
    //     console.log(res)
    //     this.cards = res;
    //   })
    // }
    this.CardService.getCards(itemName, this.offset).subscribe((res)=>{
      console.log(res)
      this.cards = [...this.cards, ...res];
    })
  }
  // printCards1(){
  //   this.CardService.getCards1(this.offset).subscribe((res)=>{
  //     console.log(res)
  //     this.cards = [...this.cards, ...res];
  //   })
  // }
  // printCards2(itemName: string| null = null){
  //   this.CardService.getCards2(itemName).subscribe((res)=>{
  //     // console.log(res)
  //     this.cards = [...this.cards, ...res];
  //   })
 // }
}
