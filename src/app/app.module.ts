import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { Navbar1Component } from './navbar1/navbar1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Footer1Component } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';
import { DemocompComponent } from './democomp/democomp.component';
import { Flipcard1Component } from './flipcard1/flipcard1.component';
import { Loginpage1Component } from './loginpage1/loginpage1.component';
import { Loginpage2Component } from './loginpage2/loginpage2.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { Navbar4Component } from './navbar4/navbar4.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Footer1Component,
    Footer2Component,
    DemocompComponent,
    Flipcard1Component,
    Loginpage1Component,
    Loginpage2Component,
    Navbar2Component,
    Navbar3Component,
    Navbar4Component
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
