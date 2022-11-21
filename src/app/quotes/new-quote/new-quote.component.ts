import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  author:any ;
  idAuthor: string;
  msgError:string;
  cita:any

  constructor(
    private router: Router,
    private _httpService: HttpService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cita = { quotename: "", votes: 0 }
    // this.author= { name: ""}
    this.author = this.rutaActiva.snapshot.params
    //busco los datos del autor
    this.idAuthor = this.author.id
    this._httpService.getAuthorId(this.author.id)
    .subscribe( {
      next: (result) => {
        // console.log('Consulta OK : ' + JSON.stringify(result) )
        this.author = result
      } ,
      error: (error) => {
        console.log('Consulta Error: ' + JSON.stringify(error) )
        this.msgError = "Error al consultar el dato."
      }
      } )
  }

  newQuoteAuthor_Service(idAuthor:string) {
    //codificar el servicio de actualización
    this.msgError = "";
    let comprueba = this.cita.quotename
    comprueba =  comprueba.trim()
    if (!comprueba) {
      this.msgError = "Ingrese una cita";
      return
    }
    if (comprueba.length < 3) {
      this.msgError = "Debe tener minimo 3 caracteres";
      return
    }
    this._httpService.newQuoteAuthorId(idAuthor, this.cita)
        .subscribe( {
          next: (result) => {
            console.log('Actualizacion Cita OK : ' + JSON.stringify(result) )
            this.router.navigate( [ '/quotes/quote/' + this.idAuthor ] );
          } ,
          error: (error) => {
            console.log('Error en actualizacion Cita : ' + JSON.stringify(error) )
            this.msgError = "Error en actualizar."
          }
        } )
  }

  goBack() {

    this.router.navigate( [ '/quotes/quote/' + this.idAuthor ] );
  }

}
