import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  personaLista:any;

  constructor(private datoSPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datoSPorfolio.obtenerDatos().subscribe(data => {
      //console.log(data);
     // if (data.idpersona == '1') {
      this.personaLista=data[0];
  
            });
      
        }

}
