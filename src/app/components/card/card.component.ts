import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
originally bred for hunting.`;
}
