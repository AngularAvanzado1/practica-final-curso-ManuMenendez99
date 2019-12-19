import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {MaterialModule} from './material.module';
import { RegionesComponent } from './regiones/regiones.component';
import { PaisesComponent } from './paises/paises.component';
import { PaisComponent } from './pais/pais.component';
import { ChildComponent } from './child/child.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'regiones', component: RegionesComponent},
  { path: 'paises', component: PaisesComponent}
];

@NgModule({
  declarations: [ChildComponent, AppComponent, WelcomePageComponent, RegionesComponent, PaisesComponent, PaisComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PaisComponent]
})
export class AppModule {}
