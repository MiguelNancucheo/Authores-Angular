import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Autores Angular ';

  constructor (private _httpService: HttpService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    //Funcion inicial

    // this.listAuhtors()

  }

  // listAuhtors() {
  //   this._httpService.getAuthors().subscribe({
  //     next: (result) => {
  //         this.authorsList =  result
  //         console.log( result)
  //     }
  //   })
  // }
}
