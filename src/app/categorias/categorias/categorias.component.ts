import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-categorias',
  standalone: false,
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent {

  camposForm: FormGroup;

  constructor(){
    this.camposForm = new FormGroup({
      nome: new FormControl ('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  salvar(){

    this.camposForm.markAllAsTouched();
    if(this.camposForm.valid){
      console.log("Valores digitados:" , this.camposForm.value)
    }
  }

  isCampoInvalido(nomeCampo: string) : boolean{
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched || false;
  }
}
