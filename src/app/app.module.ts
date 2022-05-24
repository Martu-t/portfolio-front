import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './componentes/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      titleFontSize: "15",
      subtitleFontSize: "20",
      subtitleColor:"rgb(28, 70, 110)"
      
      //subtitle: 'ACA VA ALGO',

    })
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
