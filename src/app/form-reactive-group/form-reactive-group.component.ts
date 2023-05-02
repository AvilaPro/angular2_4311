import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-group',
  templateUrl: './form-reactive-group.component.html',
  styleUrls: ['./form-reactive-group.component.scss']
})
export class FormReactiveGroupComponent {
  //METODO CONSTRUCTOR
  constructor( private formBuilder: FormBuilder ) {}



  // CONTROL DE FORMULARIO
  nombre = new FormControl('');
  apellido = new FormControl('');

  // GRUPO DE CONTROLES DE FORMULARIO
  conyuge = new FormGroup({
    nombreConyuge: new FormControl('', [Validators.required]),
    statusAnterior: new FormControl('')
  })

  // GRUPO DE CONTROLES DE FORMULARIOS
  // CREADOS CON FORMBUILDER
  propiedad = this.formBuilder.group({
    nombrePropiedad: ['',{
      validators: [
        Validators.required,
      ]
    }
  ],
    tipoPropiedad: ['',{
      validators: [
        Validators.minLength(3),
        Validators.required
      ]
    }],
    hipoteca: ['']
  })

  // GRUPO DE CONTROLES DE FORMULARIO
  // CREADOS CON FORMARRAY
  hijos = this.formBuilder.group({
    nombreHijo: this.formBuilder.array([
      this.formBuilder.control('', [Validators.required, Validators.minLength(4)])
    ])
  })
  get nombreHijo(){
    return this.hijos.get('nombreHijo') as FormArray;
  }
  addNombreHijos(){
    this.nombreHijo.push(this.formBuilder.control('', [Validators.required, Validators.minLength(4)]));
  }

  mostrarFormControl(){
    console.log(this.nombre, this.apellido);
  }
  mostrarFormGroup(){
    console.log(this.conyuge);
  }
  mostrarFormBuilder(){
    console.log(this.propiedad);
  }
  mostrarFormArray(){
    console.log(this.hijos);
  }
  mostrarHijo(a: any){
    console.log(a);
  }
}
