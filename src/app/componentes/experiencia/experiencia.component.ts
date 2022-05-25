import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia } from 'src/modelos/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  componente3 = "Experiencia laboral"

  idExperiencia:string="";
  
  experienciaLista:any = [];

  experienciaNueva: Experiencia = {
    idexperiencia_laboral:'',
    nombre_empresa: '',
    puesto: '',
    fecha_inicio: '',
    fecha_fin: '',
    descripcion_experiencia: '',
    tipo_empleo_idtipo_empleo: '1',
    persona_idpersona: '1'
};
 
experienciaModificada: Experiencia = {
  idexperiencia_laboral:'',
  nombre_empresa: '',
  puesto: '',
  fecha_inicio: '',
  fecha_fin: '',
  descripcion_experiencia: '',
  tipo_empleo_idtipo_empleo: '1',
  persona_idpersona: '1'
};
  
  
  isUserLogged: Boolean = false;

  constructor(private datoSPorfolio:PorfolioService, 
              private antivateRouter: ActivatedRoute, 
              private router:Router,
              private loginService: LoginService) { }


  ngOnInit(): void {
    this.isUserLogged = this.loginService.isUserLogged();
    this.verExperiencia();
    
  }

    verExperiencia() {
    this.datoSPorfolio.obtenerDatosExperiencia().subscribe(data => {
      console.log(data);
      
      this.experienciaLista=data;
    });
  }
      //Agregar experiencia
      
       crearExperiencia() {
      this.datoSPorfolio.agregarExperiencia(this.experienciaNueva).subscribe(
        response =>{
          //document.getElementById("conteiner")?.onreset
          //this.ngOnInit();
          window.location.reload();},
          //console.log(response);
        error => {
          console.log(error);
        });
       

      };
    
      borrarExperiencia(idexperiencia_laboral:string) {

        this.datoSPorfolio.eliminarExperiencia(idexperiencia_laboral).subscribe(
          response=>{this.ngOnInit();},

          error=>console.log(error)
         );
        //)
      }
      
      recuExperiencia(idexperiencia_laboral: string){
        this.datoSPorfolio.traerExperiencia(idexperiencia_laboral).subscribe(
          response =>{
            //let experienciaModificada = this.experienciaLista[idexperiencia_laboral]; 
            this.experienciaModificada=response;

            console.log(response)
          },
          error => {
            console.log(error);
          });
      
      }

          modificarExperiencia(idexperiencia_laboral: any){
            this.datoSPorfolio.editarExperiencia(idexperiencia_laboral, this.experienciaModificada).subscribe(
              response=> {
                this.experienciaModificada=response;
                console.log(response)
                this.ngOnInit()
               
                //window.location.reload();
              },
              error => console.log(error)
            );
    
        }

        volverPorfolio() {
          this.router.navigate(['portfolio']);
        }
        public editExp(editForm: NgForm): void { 
      
          
        }

  }

  