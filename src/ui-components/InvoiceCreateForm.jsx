/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createInvoice } from "../graphql/mutations";
const client = generateClient();
export default function InvoiceCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    orderId: "",
    invoiceDate: "",
    paymentDate: "",
    memberId: "",
  };
  const [orderId, setOrderId] = React.useState(initialValues.orderId);
  const [invoiceDate, setInvoiceDate] = React.useState(
    initialValues.invoiceDate
  );
  const [paymentDate, setPaymentDate] = React.useState(
    initialValues.paymentDate
  );
  const [memberId, setMemberId] = React.useState(initialValues.memberId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOrderId(initialValues.orderId);
    setInvoiceDate(initialValues.invoiceDate);
    setPaymentDate(initialValues.paymentDate);
    setMemberId(initialValues.memberId);
    setErrors({});
  };
  const validations = {
    orderId: [{ type: "Required" }],
    invoiceDate: [{ type: "Required" }],
    paymentDate: [],
    memberId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          orderId,
          invoiceDate,
          paymentDate,
          memberId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createInvoice.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InvoiceCreateForm")}
      {...rest}
    >
      <TextField
        label="Order id"
        isRequired={true}
        isReadOnly={false}
        value={orderId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId: value,
              invoiceDate,
              paymentDate,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.orderId ?? value;
          }
          if (errors.orderId?.hasError) {
            runValidationTasks("orderId", value);
          }
          setOrderId(value);
        }}
        onBlur={() => runValidationTasks("orderId", orderId)}
        errorMessage={errors.orderId?.errorMessage}
        hasError={errors.orderId?.hasError}
        {...getOverrideProps(overrides, "orderId")}
      ></TextField>
      <TextField
        label="Invoice date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={invoiceDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              invoiceDate: value,
              paymentDate,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.invoiceDate ?? value;
          }
          if (errors.invoiceDate?.hasError) {
            runValidationTasks("invoiceDate", value);
          }
          setInvoiceDate(value);
        }}
        onBlur={() => runValidationTasks("invoiceDate", invoiceDate)}
        errorMessage={errors.invoiceDate?.errorMessage}
        hasError={errors.invoiceDate?.hasError}
        {...getOverrideProps(overrides, "invoiceDate")}
      ></TextField>
      <TextField
        label="Payment date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={paymentDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              invoiceDate,
              paymentDate: value,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.paymentDate ?? value;
          }
          if (errors.paymentDate?.hasError) {
            runValidationTasks("paymentDate", value);
          }
          setPaymentDate(value);
        }}
        onBlur={() => runValidationTasks("paymentDate", paymentDate)}
        errorMessage={errors.paymentDate?.errorMessage}
        hasError={errors.paymentDate?.hasError}
        {...getOverrideProps(overrides, "paymentDate")}
      ></TextField>
      <TextField
        label="Member id"
        isRequired={false}
        isReadOnly={false}
        value={memberId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              invoiceDate,
              paymentDate,
              memberId: value,
            };
            const result = onChange(modelFields);
            value = result?.memberId ?? value;
          }
          if (errors.memberId?.hasError) {
            runValidationTasks("memberId", value);
          }
          setMemberId(value);
        }}
        onBlur={() => runValidationTasks("memberId", memberId)}
        errorMessage={errors.memberId?.errorMessage}
        hasError={errors.memberId?.hasError}
        {...getOverrideProps(overrides, "memberId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
