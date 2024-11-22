import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { Observable } from 'rxjs';
import { ObservableService } from '../../services/observable.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider', // componente selector
  standalone: true,
  imports: [MaterialModule,FormsModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() title:string=''; // comunicacion padre con el hijo
  @Output() emisor= new EventEmitter<number>();// comunicacion hijo con el padre}
  value=0;

  reloj:Observable<string>
  constructor(
    private observableService:ObservableService
  ){
    this.reloj=this.observableService.time;
  }


  cambioSlider(valor:number){
    this.emisor.emit(valor);
  }
 
}
