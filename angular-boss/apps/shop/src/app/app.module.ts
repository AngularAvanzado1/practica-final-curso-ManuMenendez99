import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { UiModule } from "@a-boss/ui";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }, { path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) }], { initialNavigation: 'enabled' }),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    StoreModule.forRoot({router: RouterReducer}),
    UiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
