/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InvoiceCreateFormInputValues = {
    orderId?: string;
    invoiceDate?: string;
    paymentDate?: string;
    memberId?: string;
};
export declare type InvoiceCreateFormValidationValues = {
    orderId?: ValidationFunction<string>;
    invoiceDate?: ValidationFunction<string>;
    paymentDate?: ValidationFunction<string>;
    memberId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InvoiceCreateFormOverridesProps = {
    InvoiceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderId?: PrimitiveOverrideProps<TextFieldProps>;
    invoiceDate?: PrimitiveOverrideProps<TextFieldProps>;
    paymentDate?: PrimitiveOverrideProps<TextFieldProps>;
    memberId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InvoiceCreateFormProps = React.PropsWithChildren<{
    overrides?: InvoiceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InvoiceCreateFormInputValues) => InvoiceCreateFormInputValues;
    onSuccess?: (fields: InvoiceCreateFormInputValues) => void;
    onError?: (fields: InvoiceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InvoiceCreateFormInputValues) => InvoiceCreateFormInputValues;
    onValidate?: InvoiceCreateFormValidationValues;
} & React.CSSProperties>;
export default function InvoiceCreateForm(props: InvoiceCreateFormProps): React.ReactElement;
