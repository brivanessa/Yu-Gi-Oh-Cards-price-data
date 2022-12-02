import { Component, Injectable, OnInit } from '@angular/core';
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
  constructor(private CardService:CardService) {}

  ngOnInit(): void {
    this.printCards();
  }
  onScroll() {
    console.log("scrolled!!");
    this.offset += 100;
    this.printCards();

  }

  printCards(){
    this.CardService.getCards(this.offset).subscribe((res)=>{
      console.log(res)
      this.cards = [...this.cards, ...res];
    })
  }
}
