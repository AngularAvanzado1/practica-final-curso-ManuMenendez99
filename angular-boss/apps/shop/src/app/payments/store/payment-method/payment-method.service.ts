import { Injectable } from '@angular/core';
import { Store } from '@ngrx/Store';
import * as PaymentMethodActions from "./payment-method.actions";
import { PaymentMethods,PaymentMethod } from "./payment-method.model";
@Injectable({
  providedIn: 'root'
})
export class PaymentMethodFacade {

  constructor(private store: Store<PaymentMethods>) { }

  public loadPaymentMethods() {
    this.store.dispatch(PaymentMethodActions.loadPaymentMethods());
  }

  public addPaymentMethod(newPaymentMethod: PaymentMethod) {
    this.store.dispatch(
      PaymentMethodActions.addPaymentMethod({
        newPaymentMethod: {...newPaymentMethod}
      })
    );
  }
  public selectPreferredPaymentMethod(preferredID: string) {
    this.store.dispatch(
      PaymentMethodActions.selectPreferredPaymentMethod({ preferredID })
    );
  }
  public setExpirationPaymentMethod(updatedPaymentMethod: PaymentMethod) {
    this.store.dispatch(
      PaymentMethodActions.setExpirationPaymentMethod({
        updatedPaymentMethod: {...updatedPaymentMethod}
      })
    )
  };
}
