/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOrder } from "../graphql/queries";
import { updateOrder } from "../graphql/mutations";
const client = generateClient();
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order: orderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    orderNumber: "",
    orderDate: "",
    orderValue: "",
    products: "",
    deliveryDetails: "",
    status: "",
    trackingStatus: "",
    trackingNumber: "",
    packagingType: "",
    memberId: "",
  };
  const [orderNumber, setOrderNumber] = React.useState(
    initialValues.orderNumber
  );
  const [orderDate, setOrderDate] = React.useState(initialValues.orderDate);
  const [orderValue, setOrderValue] = React.useState(initialValues.orderValue);
  const [products, setProducts] = React.useState(initialValues.products);
  const [deliveryDetails, setDeliveryDetails] = React.useState(
    initialValues.deliveryDetails
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [trackingStatus, setTrackingStatus] = React.useState(
    initialValues.trackingStatus
  );
  const [trackingNumber, setTrackingNumber] = React.useState(
    initialValues.trackingNumber
  );
  const [packagingType, setPackagingType] = React.useState(
    initialValues.packagingType
  );
  const [memberId, setMemberId] = React.useState(initialValues.memberId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord }
      : initialValues;
    setOrderNumber(cleanValues.orderNumber);
    setOrderDate(cleanValues.orderDate);
    setOrderValue(cleanValues.orderValue);
    setProducts(cleanValues.products);
    setDeliveryDetails(cleanValues.deliveryDetails);
    setStatus(cleanValues.status);
    setTrackingStatus(cleanValues.trackingStatus);
    setTrackingNumber(cleanValues.trackingNumber);
    setPackagingType(cleanValues.packagingType);
    setMemberId(cleanValues.memberId);
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOrder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrder
        : orderModelProp;
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [orderRecord]);
  const validations = {
    orderNumber: [{ type: "Required" }],
    orderDate: [{ type: "Required" }],
    orderValue: [{ type: "Required" }],
    products: [{ type: "Required" }],
    deliveryDetails: [{ type: "Required" }],
    status: [{ type: "Required" }],
    trackingStatus: [],
    trackingNumber: [],
    packagingType: [{ type: "Required" }],
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
          orderNumber,
          orderDate,
          orderValue,
          products,
          deliveryDetails,
          status,
          trackingStatus: trackingStatus ?? null,
          trackingNumber: trackingNumber ?? null,
          packagingType,
          memberId: memberId ?? null,
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
            query: updateOrder.replaceAll("__typename", ""),
            variables: {
              input: {
                id: orderRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
      <TextField
        label="Order number"
        isRequired={true}
        isReadOnly={false}
        value={orderNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber: value,
              orderDate,
              orderValue,
              products,
              deliveryDetails,
              status,
              trackingStatus,
              trackingNumber,
              packagingType,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.orderNumber ?? value;
          }
          if (errors.orderNumber?.hasError) {
            runValidationTasks("orderNumber", value);
          }
          setOrderNumber(value);
        }}
        onBlur={() => runValidationTasks("orderNumber", orderNumber)}
        errorMessage={errors.orderNumber?.errorMessage}
        hasError={errors.orderNumber?.hasError}
        {...getOverrideProps(overrides, "orderNumber")}
      ></TextField>
      <TextField
        label="Order date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={orderDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber,
              orderDate: value,
              orderValue,
              products,
              deliveryDetails,
              status,
              trackingStatus,
              trackingNumber,
              packagingType,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.orderDate ?? value;
          }
          if (errors.orderDate?.hasError) {
            runValidationTasks("orderDate", value);
          }
          setOrderDate(value);
        }}
        onBlur={() => runValidationTasks("orderDate", orderDate)}
        errorMessage={errors.orderDate?.errorMessage}
        hasError={errors.orderDate?.hasError}
        {...getOverrideProps(overrides, "orderDate")}
      ></TextField>
      <TextField
        label="Order value"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={orderValue}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              orderNumber,
              orderDate,
              orderValue: value,
              products,
              deliveryDetails,
              status,
              trackingStatus,
              trackingNumber,
              packagingType,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.orderValue ?? value;
          }
          if (errors.orderValue?.hasError) {
            runValidationTasks("orderValue", value);
          }
          setOrderValue(value);
        }}
        onBlur={() => runValidationTasks("orderValue", orderValue)}
        errorMessage={errors.orderValue?.errorMessage}
        hasError={errors.orderValue?.hasError}
        {...getOverrideProps(overrides, "orderValue")}
      ></TextField>
      <TextField
        label="Products"
        isRequired={true}
        isReadOnly={false}
        value={products}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber,
              orderDate,
              orderValue,
              products: value,
              deliveryDetails,
              status,
              trackingStatus,
              trackingNumber,
              packagingType,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.products ?? value;
          }
          if (errors.products?.hasError) {
            runValidationTasks("products", value);
          }
          setProducts(value);
        }}
        onBlur={() => runValidationTasks("products", products)}
        errorMessage={errors.products?.errorMessage}
        hasError={errors.products?.hasError}
        {...getOverrideProps(overrides, "products")}
      ></TextField>
      <TextField
        label="Delivery details"
        isRequired={true}
        isReadOnly={false}
        value={deliveryDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber,
              orderDate,
              orderValue,
              products,
              deliveryDetails: value,
              status,
              trackingStatus,
              trackingNumber,
              packagingType,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.deliveryDetails ?? value;
          }
          if (errors.deliveryDetails?.hasError) {
            runValidationTasks("deliveryDetails", value);
          }
          setDeliveryDetails(value);
        }}
        onBlur={() => runValidationTasks("deliveryDetails", deliveryDetails)}
        errorMessage={errors.deliveryDetails?.errorMessage}
        hasError={errors.deliveryDetails?.hasError}
        {...getOverrideProps(overrides, "deliveryDetails")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber,
              orderDate,
              orderValue,
              products,
              deliveryDetails,
              status: value,
              trackingStatus,
              trackingNumber,
              packagingType,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Unpaid"
          value="UNPAID"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Paid"
          value="PAID"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Processing"
          value="PROCESSING"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Done"
          value="DONE"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
        <option
          children="Cancelled"
          value="CANCELLED"
          {...getOverrideProps(overrides, "statusoption4")}
        ></option>
      </SelectField>
      <TextField
        label="Tracking status"
        isRequired={false}
        isReadOnly={false}
        value={trackingStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber,
              orderDate,
              orderValue,
              products,
              deliveryDetails,
              status,
              trackingStatus: value,
              trackingNumber,
              packagingType,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.trackingStatus ?? value;
          }
          if (errors.trackingStatus?.hasError) {
            runValidationTasks("trackingStatus", value);
          }
          setTrackingStatus(value);
        }}
        onBlur={() => runValidationTasks("trackingStatus", trackingStatus)}
        errorMessage={errors.trackingStatus?.errorMessage}
        hasError={errors.trackingStatus?.hasError}
        {...getOverrideProps(overrides, "trackingStatus")}
      ></TextField>
      <TextField
        label="Tracking number"
        isRequired={false}
        isReadOnly={false}
        value={trackingNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber,
              orderDate,
              orderValue,
              products,
              deliveryDetails,
              status,
              trackingStatus,
              trackingNumber: value,
              packagingType,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.trackingNumber ?? value;
          }
          if (errors.trackingNumber?.hasError) {
            runValidationTasks("trackingNumber", value);
          }
          setTrackingNumber(value);
        }}
        onBlur={() => runValidationTasks("trackingNumber", trackingNumber)}
        errorMessage={errors.trackingNumber?.errorMessage}
        hasError={errors.trackingNumber?.hasError}
        {...getOverrideProps(overrides, "trackingNumber")}
      ></TextField>
      <SelectField
        label="Packaging type"
        placeholder="Please select an option"
        isDisabled={false}
        value={packagingType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber,
              orderDate,
              orderValue,
              products,
              deliveryDetails,
              status,
              trackingStatus,
              trackingNumber,
              packagingType: value,
              memberId,
            };
            const result = onChange(modelFields);
            value = result?.packagingType ?? value;
          }
          if (errors.packagingType?.hasError) {
            runValidationTasks("packagingType", value);
          }
          setPackagingType(value);
        }}
        onBlur={() => runValidationTasks("packagingType", packagingType)}
        errorMessage={errors.packagingType?.errorMessage}
        hasError={errors.packagingType?.hasError}
        {...getOverrideProps(overrides, "packagingType")}
      >
        <option
          children="Box pack"
          value="BOX_PACK"
          {...getOverrideProps(overrides, "packagingTypeoption0")}
        ></option>
        <option
          children="Flat pack"
          value="FLAT_PACK"
          {...getOverrideProps(overrides, "packagingTypeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Member id"
        isRequired={false}
        isReadOnly={false}
        value={memberId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber,
              orderDate,
              orderValue,
              products,
              deliveryDetails,
              status,
              trackingStatus,
              trackingNumber,
              packagingType,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || orderModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || orderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
