import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:any ;
  msgError = "" ;
  idAuthor:any;

  constructor(
      private _httpService: HttpService,
      private rutaActiva: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {
    this.author = { name: "" }
    this.idAuthor = this.rutaActiva.snapshot.params
    console.log(this.idAuthor)
    //buscando los datos del author
    this._httpService.getAuthorId( this.idAuthor.id )
        .subscribe( {
          next: (result) => {
            console.log('Consulta OK : ' + JSON.stringify(result) )
            this.author = result
          } ,
          error: (error) => {
            console.log('Consulta Error: ' + JSON.stringify(error) )
            this.msgError = "Error al consultar el dato."
          }
          } )
  }

  UpdateAuthorId_Service(id:string) {
    console.log(id)
    this.msgError = "";
    let comprueba = this.author.name
    comprueba =  comprueba.trim()
    if (!comprueba) {
      this.msgError = "Ingrese un nombre";
      return
    }
    //validando el largo, para no implementar validaciones complejas en el modelo.
    if ( comprueba.length < 3 ) {
      this.msgError = "Ingrese un nombre de más de 2 caracteres";
      return
    }
    this._httpService.updAuthorId( id, this.author )
      .subscribe( {
          next: (result) => {
            console.log('Grabado edición OK : ' + JSON.stringify(result) )
            // this.location.back()
            this.router.navigate( [ '/list' ] )
          } ,
          error: (error) => {
            console.log('Grabado edición Error: ' + JSON.stringify(error) )
            this.msgError = "Problemas al grabar el dato."
          }
          } )
  }

  goBack() {
    this.router.navigate( [ '/list' ] );
  }

}
