import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  constructor(
        private _httpService: HttpService,
        private location: Location) { }

  newAuthor:any;
  msgError = "" ;

  ngOnInit(): void {
    this.newAuthor = { name: "" }
  }

  newAuthor_Service(){
    this.msgError = "";
    let comprueba = this.newAuthor.name
    comprueba =  comprueba.trim()
    if (!comprueba) {
      this.msgError = "Ingrese un nombre";
      return
    }
    //el largo lo valida el server
    this._httpService.newAuthor( this.newAuthor )
      .subscribe( {
          next: (result) => {
            console.log('Ingreso OK : ' + JSON.stringify(result) )
            this.location.back()
          } ,
          error: (error) => {
            console.log('Ingreso Error: ' + JSON.stringify(error) )
            this.msgError = "Dato inválido"
          }
          } )
  }

  goBack() {
    this.location.back();
  }
}
