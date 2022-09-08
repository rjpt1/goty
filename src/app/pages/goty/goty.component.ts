import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] =  [];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados()
      .subscribe(juegos => {
        console.log('%cgoty.component.ts line:16 object', 'color: #007acc;', juegos);
        this.juegos = juegos;
      });
  }

}
