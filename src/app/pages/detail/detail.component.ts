import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CardService } from '../../services/card.service';
import { Datum } from '../../interfaces/card.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit{
  //para capturar el identificador de la carta
  id!:string;
  card$!: Observable<Datum> //creando observable
  //para capturar el id - si existe que sea de tipo string
  constructor(private route: ActivatedRoute, private CardService: CardService){}//inyeccion de dependencia en el constructor de una var llamada route que va a ser de tipo Activate Route
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('identifier') || ''; //el route hace referencia a la ruta que esta activa en ese momento
    //el snapshot indica que al momento de cargar el oninit va a ser una captura de la ruta
    //paramMap es para entrar a la info de los parametros y vamos a hacer un .get del parametro identifier se que se llama id porque en app-routing.module.ts le colocamos ese nombre
    //si no existe este this.id sera vacio
    console.log(this.id)
    //luego de crear mi servicio para obtener la carta y por ello agrego la depednencia del servico cardservice
    // hay un patron en angular que se basa en no usar el subscribe sino un observable porque el subscribe se usa si quieres hacer algo mas con la data ademas de guardarla en una variable
    //como yo solo quiero mostrar la var, entonces no es necesario subscribe
    //hay un metodo pipe que nos permite suscribirnos a observables sin necesidad de usar el subscribe (algo que es muy usudo porque la suscripcion se hace por html)
    this.card$ = this.CardService.getCard(this.id) //me suscribo a este thisCard$ desde mi html para cargar datos sin necesitad de suscribirme
    //luego en detail.component.html
  }

  }
