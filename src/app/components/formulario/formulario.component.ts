import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ObservableService } from '../../services/observable.service';


export interface Persona {
  nombre: string;
  apellido: string;
  email: string;
  celular: string;
  }

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  personaForm:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private observableservice:ObservableService

  ){
    this.personaForm=this.formBuilder.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      email:['', Validators.required],
      celular:['', Validators.required]  
    })
  }
  onSubmit(){
    // Aqui se llama al servicio para enviar los datos al backend
    this.observableservice.enviarAlbackend(this.personaForm.value as Persona)
    
    }

}
