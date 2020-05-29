import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncrementalSearchComponent } from './incremental-search/incremental-search.component';
import { PrincipalComponent } from './principal/principal.component';
import { BisectionComponent } from './bisection/bisection.component';
import { NewtonComponent } from './newton/newton.component';
import { FalseRuleComponent } from './false-rule/false-rule.component';
import { FixedPointComponent } from './fixed-point/fixed-point.component';
import { SecantComponent } from './secant/secant.component';
import { MultipleRootsComponent } from './multiple-roots/multiple-roots.component';
import { LuSimpleComponent } from './lu-simple/lu-simple.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'incremental_search', component: IncrementalSearchComponent},
  { path: 'bisection', component: BisectionComponent},
  { path: 'newton', component: NewtonComponent},
  { path: 'false_rule', component: FalseRuleComponent},
  { path: 'fixed_point', component: FixedPointComponent},
  { path: 'secant', component: SecantComponent},
  { path: 'multiple_roots', component: MultipleRootsComponent},
  { path: 'lu_simple', component: LuSimpleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
