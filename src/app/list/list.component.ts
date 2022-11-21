import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  msgError: string
  authorsList:any  //contiene el listado de autores

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
     this.listAuhtors()
  }

  listAuhtors() {
    this.msgError = ""
    this._httpService.getAuthors().subscribe({
      next: (result) => {
          this.authorsList =  result
          // console.log( result)
      } ,
      error: (error) => {
        console.log('Consulta Error: ' + JSON.stringify(error) )
        this.msgError = "Error al consultar los datos."
      }
      } )
  }

  delAuthorId_Service(id: string) {
    this.msgError = ""
    this._httpService.delAuthorId(id)
    .subscribe( {
      next: (result) => {
        // console.log('Eliminación OK : ' + JSON.stringify(result) )
        //cargar la pagina
        this.listAuhtors()
      } ,
      error: (error) => {
        console.log('Consulta Error: ' + JSON.stringify(error) )
        this.msgError = "Error al eliminar el dato."
      }
      } )

  }
}
