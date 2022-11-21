import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {
  author: any;
  // idAuthor: string;
  msgError: string;
  authorParm: any;

  constructor(
    private rutaActiva: ActivatedRoute,
    private _httpService: HttpService,
    private router: Router) { }

  ngOnInit(): void {
    this.author = { name: "" }
    this.listQuotes()
  }

  listQuotes () {
    this.msgError = ""
    this.authorParm = this.rutaActiva.snapshot.params
    this._httpService.getAuthorId( this.authorParm.id )
    .subscribe( {
      next: (result) => {
        // console.log('Consulta OK : ' + JSON.stringify(result) )
        this.author = result
      } ,
      error: (error) => {
        console.log('Consulta Error: ' + JSON.stringify( error ) )
        this.msgError = "Error al consultar el dato."
      }
      } )
  }

  voteUpQuote(idAuthor: string, idQuote: string) {
    //incrementa en 1
    // console.log(`idAuthor: ${idAuthor}, idQuote: ${idQuote}`)
    this.updateVote(idAuthor, idQuote, 1 )
  }

  voteDownQuote(idAuthor: string, idQuote: string) {
    //decrementa en 1
    // console.log(`idAuthor: ${idAuthor}, idQuote: ${idQuote}`)
    this.updateVote(idAuthor, idQuote, -1  )
  }

  updateVote(idAuthor: string, idQuote: string, value: number) {
    this.msgError = ""
    // console.log(`comp:  idAuthor: ${idAuthor}, idQuote: ${idQuote}, value: ${value}`)
    this._httpService.updVoteQuote( idAuthor, { idQuotes: idQuote, votes: value } )
      .subscribe( {
        next: (result) => {
          // this.router.navigate( [ 'quotes/quote/' + this.authorParm.id] );
          this.listQuotes()
        } ,
        error: (error) => {
          console.log('Consulta Error: ' + JSON.stringify(error) )
          this.msgError = "Error al actualizar el votación"
        }
        } )
  }

  deleteQuote(idAuthor: string, idQuote: string) {
    this.msgError = ""
    // console.log(`comp:  idAuthor: ${idAuthor}, idQuote: ${idQuote}`)
    this._httpService.delQuoteAuthor( idAuthor, { idQuote: idQuote })
      .subscribe( {
        next: (result) => {
          // this.router.navigate( [ 'quotes/quote/' + this.authorParm.id] );
          this.listQuotes()
        } ,
        error: (error) => {
          console.log('Error al borrar: ' + JSON.stringify(error) )
          this.msgError = "Error al eliminar cita"
        }
        } )
  }
}
