import { Component, OnInit } from '@angular/core';
import { identidad } from 'src/app/model/identidad.model';
import { IdentidadService } from 'src/app/service/identidad.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  identidad: identidad = new identidad("","","");
  
  constructor(public identidadService: IdentidadService) { }

  ngOnInit(): void {
    this.identidadService.getIdentidad().subscribe(info =>{this.identidad = info})
  }

}
