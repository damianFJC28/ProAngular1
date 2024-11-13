import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider', // componente selector
  standalone: true,
  imports: [MaterialModule,FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() title:string=''; // comunicacion padre con el hijo
  @Output() emisor= new EventEmitter<number>();// comunicacion hijo con el padre}
  value=0;

  cambioSlider(valor:number){
    this.emisor.emit(valor);
  }
 
}
