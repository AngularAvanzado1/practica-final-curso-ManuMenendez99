import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from './store/payment-method/payment-method.service';
import { PaymentMethod } from './store/payment-method/payment-method.model';

@Component({
  selector: 'ab-shop-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private paymentMethodService: PaymentMethodService) {}

  ngOnInit() {
    this.paymentMethodService.loadPaymentMethods();
    const visa: PaymentMethod = {
      id: '0123 4567 8910 1112',
      expiration: new Date(20, 6-1,30)
    };
    this.paymentMethodService.addPaymentMethod(visa);
    this.paymentMethodService.selectPreferredPaymentMethod(visa.id);
    visa.expiration = new Date(2021,12-1,31);
    this.paymentMethodService.setExpirationPaymentMethod(visa)
  }
}
