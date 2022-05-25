import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Proyecto } from 'src/modelos/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  componente6 = "Proyectos";

  proyectosLista:any = [];

  proyectoNuevo:Proyecto= {
    idproyecto: '',
    proyecto_nombre: '',
    descripcion: '',
    url_proyecto: '',
    persona_idpersona: '1'
};
  
proyectoModificado:Proyecto= {
  idproyecto: '',
  proyecto_nombre: '',
  descripcion: '',
  url_proyecto: '',
  persona_idpersona: '1'
};
  isUserLogged: Boolean = false;

  constructor(private datoSPorfolio:PorfolioService,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.isUserLogged = this.loginService.isUserLogged();
    this.verProyectos();
  }

  verProyectos() {
    this.datoSPorfolio.obtenerDatosProyecto().subscribe(data => {
      console.log(data);
      this.proyectosLista=data;
    });
  }

  crearProyecto(): void {
    this.datoSPorfolio.agregarProyecto(this.proyectoNuevo).subscribe(
      response =>{this.ngOnInit();
      
      console.log(response);},
      error => {
        console.log(error);
      });
     

    };

    borrarProyecto(idsproyecto:string) {

      this.datoSPorfolio.eliminarProyecto(idsproyecto).subscribe(
        response=>{this.ngOnInit();},

        error=>console.log(error)
       );
      //)
    }
    
    recuProyecto(idproyecto: string){
      this.datoSPorfolio.traerProyecto(idproyecto).subscribe(
        response =>{
          //let proyectoModificado = this.experienciaLista[idskill]; 
          this.proyectoModificado=response;

          console.log(response)
        },
        error => {
          console.log(error);
        });
    
    }

        modificarProyecto(idproyecto: any){
          this.datoSPorfolio.editarProyecto(idproyecto, this.proyectoModificado).subscribe(
            response=> {
              this.proyectoModificado=response;
              console.log(response)
              this.ngOnInit()
            },
            error => console.log(error)
          );
  
      }

      public editProyecto(editForm: NgForm): void { }
      public addProyecto(addForm: NgForm): void {
       //addForm.reset();
       }
}
  
  




