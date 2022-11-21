import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ListQuotesComponent } from './quotes/list-quotes/list-quotes.component';
import { NewQuoteComponent } from './quotes/new-quote/new-quote.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [

   { path: 'author',
      children: [
        { path: '',         component: ListComponent },
        // { path: 'author',   component: ListComponent },
        { path: 'new',      component: NewComponent },
        { path: 'edit/:id', component: EditComponent }
      ] },
   {  path: 'quotes',
      children: [
        { path: '',     redirectTo: '/author', pathMatch: 'full' },
        { path: 'quote/:id', component: ListQuotesComponent },
        { path: 'new/:id',  component: NewQuoteComponent }
      ]
   },
   { path: '',    redirectTo: '/author', pathMatch: 'full' },
   { path: '**',  redirectTo: '/author', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
