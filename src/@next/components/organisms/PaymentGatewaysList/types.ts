<<<<<<< HEAD
import { IAddress, ICardData, IFormError, IPaymentGateway } from "@types";
=======
import { ICardData, IFormError, IPaymentGateway } from "@types";
import { CompleteCheckout_checkoutComplete_order } from "@saleor/sdk/lib/mutations/gqlTypes/CompleteCheckout";
>>>>>>> 3ba4ffa8a14f90398462b84e5da088baeb84dfc6

export interface IProps {
  /**
   * Available payment gateways.
   */
  paymentGateways: IPaymentGateway[];
  /**
   * Selected payment gateway.
   */
  selectedPaymentGateway?: string;
  /**
   * Selected payment gateway token.
   */
  selectedPaymentGatewayToken?: string;
  /**
   * Called when selected payment gateway is changed.
   */
  selectPaymentGateway: (paymentGateway: string) => void;
  /**
   * Form reference on which payment might be submitted.
   */
  formRef?: React.RefObject<HTMLFormElement>;
  /**
   * Form id on which payment might be submitted.
   */
  formId?: string;
  /**
   * Payment gateway errors.
   */
  errors?: IFormError[];
  /**
   * Method called after the form is submitted. Passed gateway id and token attribute will be used to create payment.
   */
  processPayment: (
    gateway: string,
    token?: string,
    cardData?: ICardData
  ) => void;

  billingAddress?: IAddress | null | undefined;

  submitPayment: (data: {
    confirmationData: any;
    confirmationNeeded: boolean;
  }) => Promise<any>;
  submitPaymentSuccess: (
    order?: CompleteCheckout_checkoutComplete_order
  ) => void;
  /**
   * Method called when gateway error occured.
   */
  onError: (errors: IFormError[]) => void;
}
