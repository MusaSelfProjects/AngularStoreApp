import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CardDetailsComponent } from './card-details/card-details.component';
const routes: Routes = [

  { path: '', component: ContentComponent },
  { path: 'details/:imdbID', component: CardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
