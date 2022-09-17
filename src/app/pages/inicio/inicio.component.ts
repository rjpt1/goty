import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] =[];

  constructor( private db: AngularFirestore ) { }

  ngOnInit() {

    const newLocal = map((resp: Game[]) => {
      return resp.map(juego => {
        return {
          name: juego.name,
          value: juego.votos
        };
      });
    });
    this.db.collection('goty').valueChanges()
      .pipe(
        // map((resp: Game[]) => {
        //   return resp.map(({name, votos}) => ({name, value:votos}) )
        // })
        // newLocal
        // map( (resp:Game[]) => {
        //   return resp.map( juego =>{
        //     return {
        //       name: juego.name,
        //       value: juego.votos
        //     }
        //   })
        // })
      )
      .subscribe(resp=>{
        // console.log(juegos);
        // this.juegos = juegos;
      });

  }

}
