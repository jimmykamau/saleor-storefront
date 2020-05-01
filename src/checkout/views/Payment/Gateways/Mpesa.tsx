import React from "react";

import { PROVIDERS } from "../../../../core/config";
import { ProviderProps } from "../View";

class Mpesa extends React.PureComponent<ProviderProps> {
  render() {
    const {
      formRef,
      processPayment,
      checkout: {
        update,
        checkout: {
          billingAddress,
          shippingAddress,
        },
      },
    } = this.props;

    return (
      <form
        ref={formRef}
        onSubmit={async evt => {
          evt.preventDefault();
          const token = !!billingAddress.phone ? billingAddress.phone.toString() : shippingAddress.phone.toString();
          await update({ mpesaData: token});
          processPayment(token, PROVIDERS.MPESA);
        }}
      >
        <p>
          The phone number ({ !!billingAddress.phone ? billingAddress.phone.toString() : shippingAddress.phone.toString() }) will be used for payment.
          Kindly ensure it's registered to M-PESA and wait for a PIN prompt after you finish checking out.
        </p>
      </form>
    )
  }
}

export default Mpesa;
