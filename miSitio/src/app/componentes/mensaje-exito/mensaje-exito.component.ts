import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensaje-exito',
  templateUrl: './mensaje-exito.component.html',
  styleUrls: ['./mensaje-exito.component.css']
})
export class MensajeExitoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

aceptar (){
 this.router.navigate(["publicaciones/0"]);
}

}
