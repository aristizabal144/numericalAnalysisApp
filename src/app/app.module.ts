import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './menu/menu.component';
import { IncrementalSearchComponent } from './incremental-search/incremental-search.component';
import { BisectionComponent } from './bisection/bisection.component';
import { NewtonComponent } from './newton/newton.component';
import { FalseRuleComponent } from './false-rule/false-rule.component';
import { FixedPointComponent } from './fixed-point/fixed-point.component';
import { SecantComponent } from './secant/secant.component';
import { MultipleRootsComponent } from './multiple-roots/multiple-roots.component';
import { FormsModule } from '@angular/forms';
import { GaussSimpleComponent } from './gauss-simple/gauss-simple.component'
import { GaussPartialComponent } from './gauss-partial/gauss-partial.component';
import { GaussTotalComponent } from './gauss-total/gauss-total.component';
import { LuSimpleComponent } from './lu-simple/lu-simple.component';
import { LuPivotComponent } from './lu-pivot/lu-pivot.component';
import { JacobiComponent } from './jacobi/jacobi.component';
import { GaussSeidelComponent } from './gauss-seidel/gauss-seidel.component';
import { SorComponent } from './sor/sor.component';
import { PlotGeneralComponent } from './plot-general/plot-general.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MenuComponent,
    IncrementalSearchComponent,
    BisectionComponent,
    NewtonComponent,
    FalseRuleComponent,
    FixedPointComponent,
    SecantComponent,
    MultipleRootsComponent,
    GaussSimpleComponent,
    GaussPartialComponent,
    GaussTotalComponent,
    LuSimpleComponent,
    LuPivotComponent,
    JacobiComponent,
    GaussSeidelComponent,
    SorComponent,
    PlotGeneralComponent           
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
