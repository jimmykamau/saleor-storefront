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
          billingAddress: { phone },
        },
      },
    } = this.props;

    return (
      <form
        ref={formRef}
        onSubmit={async evt => {
          evt.preventDefault();
          const token = phone.toString();
          await update({ dummyStatus: token});
          processPayment(token, PROVIDERS.MPESA.label);
        }}
      >
        <p>
          The phone number ({ phone.toString() }) in your billing address will be used for payment.
          Kindly ensure it's registered to M-PESA.
        </p>
      </form>
    )
  }
}

export default Mpesa;
