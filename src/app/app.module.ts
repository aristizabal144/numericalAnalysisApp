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
import { FormsModule } from '@angular/forms'

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
    MultipleRootsComponent
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
