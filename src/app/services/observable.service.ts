import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../components/formulario/formulario.component';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  time = new Observable<string>(
    (observador) => {
      setInterval ( () => {
        observador.next( new Date().toString() )
        }, 1000)
    }
  )

  enviarAlbackend(data:Persona){
    //aqui iria el http.post
    console.log(data);
  }
}
