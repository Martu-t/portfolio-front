import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miPorfolio:any; 

  constructor(private datoSPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datoSPorfolio.obtenerDatos() .subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
            });
      
        }

}
