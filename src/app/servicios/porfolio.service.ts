import { HttpClient, HttpHeaders, HttpProgressEvent, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class PorfolioService {

  
 experienciaLista:any = [];

  //VER

  constructor(private http:HttpClient) { }
    obtenerDatos():Observable<any>{
    return this.http.get('http://localhost:8080/ver/personas');
 }  

 obtenerDatosExperiencia():Observable<any>{
  return this.http.get('http://localhost:8080/ver/experiencia');
 }

 obtenerDatosEducacion():Observable<any>{
  return this.http.get('http://localhost:8080/ver/educacion');
 }

 obtenerDatosSkills():Observable<any>{
  return this.http.get('http://localhost:8080/ver/skills');
 }

 obtenerDatosProyectos():Observable<any>{
  return this.http.get('http://localhost:8080/ver/proyectos');
 }

 // Borrar 

//eliminarDatosExperiencia()

// Guardar


agregarExperiencia(experienciaLista: any) {
this.http.post('http://localhost:8080/new/experiencia', experienciaLista).subscribe(
  response=>console.log("Se han guardado las experiencias " + response),
  //error=> console.log("Error " + error),
)
}
  
  
  
  //response=>console.log("Se ha agregado la experienncia" + response);
  
  

}


 
