import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  

  experienciaLista:any = [];

  
  
  constructor(private datoSPorfolio:PorfolioService) { }


  ngOnInit(): void {
    this.datoSPorfolio.obtenerDatosExperiencia().subscribe(data => {
      console.log(data);
      
      this.experienciaLista=data;
      
      //Agregar experiencia
      

      this.datoSPorfolio.agregarExperiencia

    });
    
  }
///
 
}

////