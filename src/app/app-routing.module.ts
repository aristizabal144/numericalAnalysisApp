import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncrementalSearchComponent } from './incremental-search/incremental-search.component';
import { PrincipalComponent } from './principal/principal.component';
import { BisectionComponent } from './bisection/bisection.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'incremental_search', component: IncrementalSearchComponent},
  { path: 'bisection', component: BisectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
