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
import { CroutComponent } from './crout/crout.component';
import { DoolittleComponent } from './doolittle/doolittle.component';
import { CholeskyComponent } from './cholesky/cholesky.component';
import { SplineLinComponent } from "./spline-lin/spline-lin.component";
import { SplineCuadComponent } from './spline-cuad/spline-cuad.component';
import { SplineCubicComponent } from './spline-cubic/spline-cubic.component';
import { LagrangeComponent } from './lagrange/lagrange.component';
import { DifNewtonComponent } from './dif-newton/dif-newton.component';
import { VandermondeComponent } from './vandermonde/vandermonde.component';

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
    PlotGeneralComponent,           
    CroutComponent,
    DoolittleComponent,
    CholeskyComponent,          
    SplineLinComponent,
    SplineCuadComponent,
    SplineCubicComponent,
    LagrangeComponent,
    DifNewtonComponent,
    VandermondeComponent
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
