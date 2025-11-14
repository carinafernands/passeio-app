import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorias } from './categorias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  salvar(categoria: Categorias) : Observable<Categorias>{
    return this.http.post<Categorias>('http://localhost:3000/categorias', categoria);
  }

  obterTodas() : Observable<Categorias[]>{
    return this.http.get<Categorias[]>('http://localhost:3000/categorias');
  }
}
