import { Action, createReducer, on } from '@ngrx/store';
import * as PaymentMethodActions from './payment-method.actions';
import { PaymentMethods } from './payment-method.model';

export const paymentMethodFeatureKey = 'paymentMethod';

export interface State {
  PaymentMethods: PaymentMethods;
}

export const initialState: State = {
  PaymentMethods: { list: [], preferred: null}
};

const paymentMethodReducer = createReducer(
  initialState,
  on(PaymentMethodActions.loadPaymentMethods, state => state),
  on(PaymentMethodActions.selectPreferredPaymentMethod,(state, { preferredID }) => {
    return {
      ...state,
      PaymentMethods: {...state.PaymentMethods, preferred: preferredID}
    };
  }),
  on(PaymentMethodActions.setExpirationPaymentMethod,(state, { updatedPaymentMethod}) => {
    const list = state.PaymentMethods.list;
    const updatedlist = list.map(pM =>
      pM.id === updatedPaymentMethod.id ? updatedPaymentMethod : pM
    );
    return {
      ...state,
      paymentMethods: {
        ...state.PaymentMethods,
        list: updatedlist
      }
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return paymentMethodReducer(state, action);
}
