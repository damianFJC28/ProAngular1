import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RymService } from '../../services/rym.service';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
  providers:[RymService]
})
export class ListaComponent implements OnInit{
  listaPersonajes:any[]=[];

  constructor(private rymSerice:RymService){}
  ngOnInit(): void {
    this.rymSerice.getCharacters().subscribe((data:any)=>
    {
      
      this.listaPersonajes=data['results'];
      console.log(data);
    })
  }

}
