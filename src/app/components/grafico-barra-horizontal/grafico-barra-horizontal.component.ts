import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  @Input() results: any = [];
  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 8940000
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 5000000
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 7200000
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 6600000
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo: any;
  constructor() {

    // this.intervalo = setInterval(()=>{
    //   const newResults = [...this.results];
  
    //   for (const i in newResults) {
    //     newResults[i].value = Math.round(Math.random()*500);
    //   }
    //   this.results = [...newResults];
    // }, 2000);
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }

}
