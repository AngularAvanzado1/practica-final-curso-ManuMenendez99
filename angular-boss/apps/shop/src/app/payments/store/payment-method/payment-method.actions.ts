import { createAction, props } from '@ngrx/store';

export const loadPaymentMethods = createAction(
  '[PaymentMethod] Load PaymentMethods'
);

export const addPaymentMethod = createAction(
  '[PaymentMethod] Add PaymentMethod',
  props<{ newPaymentMethod: PaymentMethod }>()
);

export const selectPreferredPaymentMethod = createAction(
  '[PaymentMethod] Select preferred PaymentMethod',
  props<{ preferredID: string}>()
);

export const setExpirationPaymentMethod = createAction(
  '[PaymentMethod] Set expiration date on paymentMethod',
  props<{ updatedPaymentMethod: PaymentMethod }>()
)
