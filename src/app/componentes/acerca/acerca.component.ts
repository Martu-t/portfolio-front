import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Persona } from 'src/modelos/persona';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  personaLista:any;

  personaNueva: Persona = {
  idpersona : '',
  nombre : '',
  apellido: '',
  residencia: '',
  fecha_nacimiento: '',
  telefono: '',
  email: '',
  sobre_mi: '',
  url_foto: '',
  url_banner: ''

};


  isUserLogged: Boolean = false;

  constructor(private datoSPorfolio:PorfolioService,
              private loginService: LoginService) { }

  ngOnInit(): any {
    this.isUserLogged = this.loginService.isUserLogged();
    this.verDatos();
        }

        verDatos() {
          this.datoSPorfolio.obtenerDatos().subscribe(data => {
            //console.log(data);
           // if (data.idpersona == '1') {
            this.personaLista=data[0];
        
                  });
        }

        //Agregar PERSONA
      
       crearPersona() {
        this.datoSPorfolio.agregarpersona(this.personaNueva).subscribe(
          response =>{this.ngOnInit();},
            //console.log(response);
          //},
          error => {
            console.log(error);
          });
         
  
        };
      
        borrarPersona(idpersona:string) {
  
          this.datoSPorfolio.eliminarPersona(idpersona).subscribe(
            response=>{this.ngOnInit();},
            error=>console.log(error)
           );
          //)
        }
        
        recuPersona(idepersona: string){
          this.datoSPorfolio.traerPersona(idepersona).subscribe(
            response =>{
              this.personaNueva=response;
              console.log(response)
            },
            error => {
              console.log(error);
            });
           }
        

            modificarPersona(idpersona: any){
              this.datoSPorfolio.editarPersona(idpersona, this.personaNueva).subscribe(
                response=>{
                  this.personaNueva=response;
                  this.ngOnInit();
                  //window.location.reload();
                },
                error=> console.log(error)
    
              );
  
              
          }

          public editPersona(editForm: NgForm): void {

          }
         
        
          public logOut():void {
            this.loginService.logout();
            this.isUserLogged = false;
            window.location.reload();
          }

}
