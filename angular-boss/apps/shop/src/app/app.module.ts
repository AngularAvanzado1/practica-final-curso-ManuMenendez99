import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store"
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UiModule } from "@a-boss/ui";
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }, { path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) }, { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }], { initialNavigation: 'enabled' }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
      ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    UiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
