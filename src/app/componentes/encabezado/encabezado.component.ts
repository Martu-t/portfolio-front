import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {


  isUserLogged: Boolean = false;


  constructor(private loginService: LoginService) { }
  ngOnInit(): any {
    this.isUserLogged = this.loginService.isUserLogged();
  }


  public logOut():void {
    this.loginService.logout();
    this.isUserLogged = false;
    window.location.reload();
  }
}
