/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Invoice } from "../../awsApis.ts";
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
export declare type InvoiceUpdateFormInputValues = {
    orderId?: string;
    invoiceDate?: string;
    paymentDate?: string;
    memberId?: string;
};
export declare type InvoiceUpdateFormValidationValues = {
    orderId?: ValidationFunction<string>;
    invoiceDate?: ValidationFunction<string>;
    paymentDate?: ValidationFunction<string>;
    memberId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InvoiceUpdateFormOverridesProps = {
    InvoiceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderId?: PrimitiveOverrideProps<TextFieldProps>;
    invoiceDate?: PrimitiveOverrideProps<TextFieldProps>;
    paymentDate?: PrimitiveOverrideProps<TextFieldProps>;
    memberId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InvoiceUpdateFormProps = React.PropsWithChildren<{
    overrides?: InvoiceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    invoice?: Invoice;
    onSubmit?: (fields: InvoiceUpdateFormInputValues) => InvoiceUpdateFormInputValues;
    onSuccess?: (fields: InvoiceUpdateFormInputValues) => void;
    onError?: (fields: InvoiceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InvoiceUpdateFormInputValues) => InvoiceUpdateFormInputValues;
    onValidate?: InvoiceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InvoiceUpdateForm(props: InvoiceUpdateFormProps): React.ReactElement;
