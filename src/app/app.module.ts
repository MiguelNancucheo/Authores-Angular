import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ListQuotesComponent } from './quotes/list-quotes/list-quotes.component';
import { NewQuoteComponent } from './quotes/new-quote/new-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    ListComponent,
    QuotesComponent,
    ListQuotesComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
