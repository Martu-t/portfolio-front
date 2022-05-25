import { HttpClient, HttpHeaders, HttpProgressEvent, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from 'src/modelos/educacion';
import { Experiencia } from 'src/modelos/experiencia';
import { Persona } from 'src/modelos/persona';
import { Proyecto } from 'src/modelos/proyecto';
import { Skill } from 'src/modelos/skill';


@Injectable({
  providedIn: 'root'
})


export class PorfolioService {

  
 experienciaLista:any = [];

 private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

//  obtenerDatosSkills():Observable<any>{
//   return this.http.get('http://localhost:8080/ver/skills');
//  }

//  obtenerDatosProyectos():Observable<any>{
//   return this.http.get('http://localhost:8080/ver/proyectos');
//  }

// ---------------------- PERSONA -------------------------------- //

//Start: Traer datos personas
obtenerDatos():Observable<any>{
  return this.http.get(`${this.apiServerUrl}/ver/personas`);
}   
//Finish: Traer datos personas

// Start: Agregar UNA persona Nueva
 agregarpersona(persona: Persona): Observable<any> {
  return this.http.post(`${this.apiServerUrl}/new/persona`, persona);
}
//Finish: Agregegar UNA persona Nueva

//End: Agregar persona

//Start: Encontrar UNA persona
traerPersona(idpersona: string):Observable<any> {
  return this.http.get(`${this.apiServerUrl}/ver/persona/${idpersona}`);
}
// Finish: Encontrar UNA persona

//Start: Modificar persona
editarPersona(idpersona:string, persona:Persona): Observable<any> {
  return this.http.put(`${this.apiServerUrl}/modificar/persona/${idpersona}`, persona);
}
// Finish: Modificar Persona

  //Start: Eliminar Persona
eliminarPersona(idpersona:string):Observable<any> {
  return this.http.delete(`${this.apiServerUrl}/delete/persona/${idpersona}`);
}
//Finish Eliminar Persona


 // -------------------- EXPERIENCIA ----------------------------- //
//start obtener datos experienica///
 obtenerDatosExperiencia():Observable<any>{
  return this.http.get(`${this.apiServerUrl}/ver/experiencia`);
 }
///Finish: objeter datos experiencia //

 //Start: Agregar Experiencia Nueva
agregarExperiencia(experiencia: Experiencia): Observable<any> {
  return this.http.post(`${this.apiServerUrl}/new/experiencia`, experiencia);
}
//Finish: Agregegar Experienica

//Start: Eliminar Experiencia
eliminarExperiencia(id:string):Observable<any> {
  return this.http.delete(`${this.apiServerUrl}/delete/experiencia/${id}`);
}
//Finish Eliminar Experiencia

//Start: Encontrar UNA experienica
traerExperiencia(idexperiencia_laboral: string):Observable<any> {
  return this.http.get(`${this.apiServerUrl}/ver/experiencia/${idexperiencia_laboral}`);
}

//Start: Modificar Experiencia
editarExperiencia(idexperiencia_laboral:string, experiencia:Experiencia): Observable<any> {
  return this.http.put(`${this.apiServerUrl}/modificar/experiencia/${idexperiencia_laboral}`, experiencia);
}
// Finish: Modificar Experiencia
  
 // -------------------- EDUCACION ----------------------------- //
//start obtener datos educacion///
obtenerDatosEducacion():Observable<any>{
  return this.http.get(`${this.apiServerUrl}/ver/educacion`);
 }
///Finish: objeter datos educacion //

 //Start: Agregar Educacion Nueva
agregarEducacion(educacion: Educacion): Observable<any> {
  return this.http.post(`${this.apiServerUrl}/new/educacion`, educacion);
}
//Finish: Agregegar Experienica

//Start: Eliminar Educacion
eliminarEducacion(id:string):Observable<any> {
  return this.http.delete(`${this.apiServerUrl}/delete/educacion/${id}`);
}
//Finish Eliminar Educacion

//Start: Encontrar UNA experienica
traerEducacion(ideducacion: string):Observable<any> {
  return this.http.get(`${this.apiServerUrl}/ver/educacion/${ideducacion}`);
}

//Start: Modificar Educacion
editarEducacion(ideducacion:string, educacion:Educacion): Observable<any> {
  return this.http.put(`${this.apiServerUrl}/modificar/educacion/${ideducacion}`, educacion);
}
// Finish: Modificar Educacion

// -------------------- SKILL ----------------------------- //
//start obtener datos educacion///
obtenerDatosSkill():Observable<any>{
  return this.http.get(`${this.apiServerUrl}/ver/skills`);
 }

///Finish: obtener datos proyecto //

 //Start: Agregar proyecto Nueva
agregarSkill(skill: Skill): Observable<any> {
  return this.http.post(`${this.apiServerUrl}/new/skills`, skill);
}
//Finish: Agregegar Experienica

//Start: Eliminar skills
eliminarSkill(id:string):Observable<any> {
  return this.http.delete(`${this.apiServerUrl}/delete/skills/${id}`);
}
//Finish Eliminar skills

//Start: Encontrar UNA experienica
traerSkill(idskills: string):Observable<any> {
  return this.http.get(`${this.apiServerUrl}/ver/skills/${idskills}`);
}

//Start: Modificar skills
editarSkill(idskills:string, skill:Skill): Observable<any> {
  return this.http.put(`${this.apiServerUrl}/modificar/skills/${idskills}`, skill);
}
// Finish: Modificar skills


// -------------------- PROYECTO ----------------------------- //
//start obtener datos proyecto///
obtenerDatosProyecto():Observable<any>{
  return this.http.get(`${this.apiServerUrl}/ver/proyectos`);
 }
///Finish: obtener datos proyecto //

 //Start: Agregar proyecto Nuevo
agregarProyecto(proyecto: Proyecto): Observable<any> {
  return this.http.post(`${this.apiServerUrl}/new/proyecto`, proyecto);
}
//Finish: Agregegar proyecto Nuevo

//Start: Eliminar proyecto
eliminarProyecto(id:string):Observable<any> {
  return this.http.delete(`${this.apiServerUrl}/delete/proyecto/${id}`);
}
//Finish Eliminar proyecto

//Start: Encontrar UN proyecto
traerProyecto(idproyecto: string):Observable<any> {
  return this.http.get(`${this.apiServerUrl}/ver/proyecto/${idproyecto}`);
}
//Finish: Econtrar UN proyecto

//Start: Modificar proyecto
editarProyecto(idproyecto:string, proyecto:Proyecto): Observable<any> {
  return this.http.put(`${this.apiServerUrl}/modificar/proyecto/${idproyecto}`, proyecto);
}
// Finish: Modificar proyecto




}
    
  




 
