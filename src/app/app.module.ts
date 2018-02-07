import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {homeComponent } from './home.component';
import { productComponent } from './product.component';

const appRoutes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'product', component: productComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    productComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
    	appRoutes,
    	{
    	  enableTracing:true
    	}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
