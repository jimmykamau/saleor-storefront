import { Formik } from "formik";
import React from "react";

import { ErrorMessage } from "@components/atoms";
import * as S from "./styles";
import { IProps } from "./types";

const MpesaPaymentGateway: React.FC<IProps> = ({
  processPayment,
  formRef,
  formId,
  address,
  errors,
}: IProps) => {
  return (
    <Formik
      initialValues={{ token: address?.phone || "phone number used in your billing address" }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        processPayment(values.token);
        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        isSubmitting,
        isValid,
      }) => (
        <S.Wrapper>
          <S.Form id={formId} ref={formRef} onSubmit={handleSubmit}>
            The phone number { address?.phone || "set in your billing address" } will be used for payment.
            Kindly ensure it's registered to M-PESA and wait for a PIN prompt after you finish checking out.
          </S.Form>
          <ErrorMessage errors={errors} />
        </S.Wrapper>
      )}
    </Formik>
  )
}

export { MpesaPaymentGateway }
