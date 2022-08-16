import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { identidad } from '../model/identidad.model';

@Injectable({
  providedIn: 'root'
})
export class IdentidadService {
  URL = 'http://localhost:8080/identidades/';

  constructor(private http: HttpClient) { }

  public getIdentidad(): Observable<identidad>{
    return this.http.get<identidad>(this.URL+'traer/perfil');

  }
}
