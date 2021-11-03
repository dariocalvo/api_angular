import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rubro } from 'src/app/clases/rubro';
import { ApiService } from 'src/app/utilidades/api.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  rubros!:Array<Rubro>;
  ruta!:string;
  @Input() logueado!:boolean;
  
  constructor(private router:Router, api:ApiService) {
    this.ruta = "/Rubro/Listar";
    api.traerGet(this.ruta).subscribe(resp => this.rubros = <Array<Rubro>>resp);
  }

  ngOnInit(): void {
  }
}
