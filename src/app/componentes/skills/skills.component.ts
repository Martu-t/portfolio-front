import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsLista:any = [];
  
  
  constructor(private datoSPorfolio:PorfolioService) { }

  

  ngOnInit(): void {
    this.datoSPorfolio.obtenerDatosSkills().subscribe(data => {
      console.log(data);
     // if (data.idpersona == '1') {
      this.skillsLista=data;
    });



  }


}


