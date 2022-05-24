import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Educacion } from 'src/modelos/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  componente4 = "Educación"

  

educacionLista:any = [];

  educacionNueva:Educacion = {
    ideducacion:'',
    nombre_carrera: '',
    nombre_instituto: '',
    fecha_inicio: '',
    fecha_fin: '',
    descripcion_educacion: '',
    url_foto_edu: '',
    persona_idpersona: '1',
    
  };
  
  educacionModificada:Educacion = {
    ideducacion:'',
    nombre_carrera: '',
    nombre_instituto: '',
    fecha_inicio: '',
    fecha_fin: '',
    descripcion_educacion: '',
    url_foto_edu: '',
    persona_idpersona: '1',
    
  };
  
  
  isUserLogged: Boolean = false;

  constructor(private datosPorfolio:PorfolioService,
              private longinService: LoginService) { }

  ngOnInit(): any {
    this.isUserLogged = this.longinService.isUserLogged();
    this.verEducacion();
  }

  verEducacion() {
    this.datosPorfolio.obtenerDatosEducacion().subscribe(data=>{
      console.log(data);
      this.educacionLista=data;
    });
  }
  
  crearEducacion() {
    this.datosPorfolio.agregarEducacion(this.educacionNueva).subscribe(
      response =>{this.ngOnInit()
      window.location.reload();},

      error => {
        console.log(error);
      });
     

  };

    borrarEducacion(ideducacion:string) {

      this.datosPorfolio.eliminarEducacion(ideducacion).subscribe(
        response=>{this.ngOnInit();},

        error=>console.log(error)
       );
    }
    
    recuEducacion(ideducacion: string){
      this.datosPorfolio.traerEducacion(ideducacion).subscribe(
        response =>{
          //let educacionModificada = this.educacionLista[ideducacion]; 
          this.educacionModificada=response;

          console.log(response)
        },
        error => {
          console.log(error);
        });
    
    }

        modificarEducacion(ideducacion: any){
          this.datosPorfolio.editarEducacion(ideducacion, this.educacionModificada).subscribe(
            response=> {
              this.educacionModificada=response;
              console.log(response)
              this.ngOnInit()
            },
            error => console.log(error)
          );
  
      }

      public addEdu(editForm: NgForm): void {
        //editForm.reset();
       }

        public logOut():void {
        this.longinService.logout();
        this.isUserLogged = false;
        window.location.reload();
      }

      
    }
