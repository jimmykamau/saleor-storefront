import { IAddress } from "@types";

export interface IProps {
    formRef?: React.RefObject<HTMLFormElement>;
    formId?: string;
    address?: IAddress | null | undefined;
    errors?: any;
    processPayment: (token: string) => void;
  }
  