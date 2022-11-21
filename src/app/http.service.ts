import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //inyectando el HttpClient

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //URL del server
  urlLocal = "http://localhost:8000"

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get( this.urlLocal + '/authors' )
  }

  newAuthor( author:{} ){
    return this._http.post( this.urlLocal + '/new', author )
  }

  getAuthorId( idAuthor: string)  {
    return this._http.get( this.urlLocal + '/author/' + idAuthor )
  }

  updAuthorId( idAuthor: string, author: {}) {
    return this._http.put( this.urlLocal + '/author/' + idAuthor , author )
  }

  delAuthorId( idAuthor: string ) {
    return this._http.delete( this.urlLocal + '/author/' + idAuthor )
  }

  newQuoteAuthorId( idAuthor: string, quote: {} ) {
    return this._http.put( this.urlLocal + '/newquote/' + idAuthor , quote )
  }

  updVoteQuote( idAuthor: string, quote: {} ) {
    // console.log(`Service:  idAuthor: ${idAuthor}, quote: ${ JSON.stringify(quote)}`)
    return this._http.put( this.urlLocal + '/votequote/' + idAuthor , quote )
  }

  delQuoteAuthor( idAuthor: string, quote: {} ) {
    // console.log(`Service:  idAuthor: ${idAuthor}, quote: ${ JSON.stringify(quote)}`)
    return this._http.put( this.urlLocal + '/quote/' + idAuthor , quote )
  }

}


