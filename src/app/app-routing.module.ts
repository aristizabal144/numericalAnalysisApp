import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncrementalSearchComponent } from './incremental-search/incremental-search.component';
import { PrincipalComponent } from './principal/principal.component';
import { BisectionComponent } from './bisection/bisection.component';
import { SecantComponent } from './secant/secant.component';
import { MultipleRootsComponent } from './multiple-roots/multiple-roots.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'incremental_search', component: IncrementalSearchComponent},
  { path: 'bisection', component: BisectionComponent},
  { path: 'secant', component: SecantComponent},
  { path: 'multiple_roots', component: MultipleRootsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
