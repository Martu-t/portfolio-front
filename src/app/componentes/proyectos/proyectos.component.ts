import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosLista:any = [];
  
  constructor(private datoSPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datoSPorfolio.obtenerDatosProyectos().subscribe(data => {
      console.log(data);
      this.proyectosLista=data;
    });
  }

}
  
  




