import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Skill } from 'src/modelos/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  componente5 = "Hard & soft skills"

  skillsLista:any = [];
  
  skillNueva: Skill = {
    idskill: '',
    skill_nombre: '',
    skill_porcentaje: '',
    persona_idpersona: '1'
};

skillModificada: Skill = {
  idskill: '',
  skill_nombre: '',
  skill_porcentaje: '',
  persona_idpersona: '1'
};

  isUserLogged: Boolean = false;

  constructor(private datoSPorfolio:PorfolioService,
              private loginService:LoginService) { }

  

  ngOnInit(): void {
    this.isUserLogged = this.loginService.isUserLogged();
    this.verSkill();

  }

  verSkill() {
    this.datoSPorfolio.obtenerDatosSkill().subscribe(data => {
      console.log(data);
     // if (data.idpersona == '1') {
      this.skillsLista=data;
    });
  }

  crearSkill() {
    this.datoSPorfolio.agregarSkill(this.skillNueva).subscribe(
      response =>{this.ngOnInit();
      
      },
        //console.log(response);
      //},
      error => {
        console.log(error);
      });
     

    };

    borrarSkill(idskill:string) {

      this.datoSPorfolio.eliminarSkill(idskill).subscribe(
        response=>{this.ngOnInit();},

        error=>console.log(error)
       );
      //)
    }
    
    recuSkill(idskill: string){
      this.datoSPorfolio.traerSkill(idskill).subscribe(
        response =>{
          //let skillModificada = this.experienciaLista[idskill]; 
          this.skillModificada=response;
          
          console.log(response)
        },
        error => {
          console.log(error);
        });
    
    }

        modificarSkill(idskill: any){
          this.datoSPorfolio.editarSkill(idskill, this.skillModificada).subscribe(
            response=> {
              this.skillModificada=response;
              console.log(response)
              
              this.ngOnInit()
            },
            error => console.log(error)
          );
  
      }
      public editSkill(editForm: NgForm): void { }
      public addSkill(addForm: NgForm): void {
        //addForm.reset();
      }

}


