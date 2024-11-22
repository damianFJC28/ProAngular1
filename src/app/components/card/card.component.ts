import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { SliderComponent } from '../slider/slider.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule,SliderComponent,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  contador=0;
  reloj:Observable<string>
  constructor(
    private observableService:ObservableService
  ){
    this.reloj=this.observableService.time;
    
    }
  ngOnChanges(changes: SimpleChanges): void {
    this.contador++;
    console.log('On Changes',this.contador,changes);
  }
  ngOnInit(): void {
    console.log('ejecucion del OnInit.');
  }
  ngDoCheck(): void {
    this.contador++;
    console.log('Do Checked:',this.contador);
  }
  ngOnDestroy(): void {
    console.log('componente destruido.');
  }


valorDelHijo:number|null=null;

longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
originally bred for hunting.`;

imgUrl='https://material.angular.io/assets/img/examples/shiba2.jpg';

onEmit(valor:number){
  this.valorDelHijo=valor;

}

}
