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
    return this._http.get( this.urlLocal + '/auhors' )
  }

  newAuthor(author:{}){
    return this._http.post( this.urlLocal + '/new', author )
  }

  getAuthorId(id: string) {
    return this._http.get( this.urlLocal + '/author/' + id )
  }

  updAuthorId(id: string, author: {}) {
    return this._http.put( this.urlLocal + '/author/' + id , author )
  }

  delAuthorId(id: string) {
    return this._http.delete( this.urlLocal + '/author/' + id )
  }
}


