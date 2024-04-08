import { DateTime } from "luxon";

import {
  APP_AWS_DATE_FORMAT,
  EMPTY_DELIVERY_DETAILS,
  EMPTY_STRING,
} from "../constants";

import { toFormattedDate } from "./date-utils";
import { OrderVM } from "../../vms/order";
import { Order, Product } from "../awsApis";

export const isOrderContains = (order: Order, value: string): boolean => {
  if (!order) return false;

  return (
    order.id.toString().includes(value) ||
    order.orderDate.includes(value) ||
    order.status.includes(value) ||
    order.orderValue.toString().includes(value)
  );
};

export const getOrderFromVM = (order: OrderVM) => {
  return {
    orderNumber: order.orderNumber,
    orderDate: order.orderDate,
    orderValue: order.orderValue,
    packagingType: order.packagingType,
    products: JSON.stringify(order.products),
    status: order.status,
    memberId: order.member?.id,
    deliveryDetails: order.deliveryDetails,
  } as Order;
};

export const trimOrder = (order: Order, isTrimId: boolean = false): unknown => {
  if (!isTrimId) {
    return {
      id: order.id,
      orderDate: order.orderDate,
      orderNumber: order.orderNumber,
      deliveryDetails: order.deliveryDetails,
      orderValue: order.orderValue,
      packagingType: order.packagingType,
      products: order.products,
      status: order.status,
      trackingNumber: order.trackingNumber,
      trackingStatus: order.trackingStatus,
      memberId: order.memberId,
    };
  }

  return {
    orderDate: order.orderDate,
    orderNumber: order.orderNumber,
    deliveryDetails: order.deliveryDetails,
    orderValue: order.orderValue,
    packagingType: order.packagingType,
    products: order.products,
    status: order.status,
    trackingNumber: order.trackingNumber,
    trackingStatus: order.trackingStatus,
    memberId: order.memberId,
  };
};

export const getDeliveryDetails = (order: OrderVM, instagramHandle:string): OrderDeliveryDetails => {
  return {
    memberName: order.member?.name ?? EMPTY_STRING,
    memberPhone: order.member?.phone ?? EMPTY_STRING,
    memberEmail: order.member?.email ?? EMPTY_STRING,
    deliverAt: order.member?.deliveryAddress1 ?? EMPTY_STRING,
    deliverTo: order.member?.deliveryPerson ?? order.member?.name,
    instagramHandle: instagramHandle,
  };
};

export const isDeliveryDetailsValid = (deliveryDetails: string): boolean => {
  const orderDeliveryDetails =
    deliveryDetails && deliveryDetails !== EMPTY_STRING
      ? JSON.parse(deliveryDetails)
      : JSON.stringify(EMPTY_DELIVERY_DETAILS);

  return (
    orderDeliveryDetails.memberName !== EMPTY_STRING &&
    orderDeliveryDetails.memberPhone !== EMPTY_STRING &&
    orderDeliveryDetails.deliverAt !== EMPTY_STRING &&
    orderDeliveryDetails.deliverTo !== EMPTY_STRING &&
    orderDeliveryDetails.memberEmail !== EMPTY_STRING
  );
};

export const calculateOrderValue = (products: Product[]): number =>
  products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

export const generateOrderNumber = (totalOrders: number) =>
  `${toFormattedDate(DateTime.now(), APP_AWS_DATE_FORMAT)}-${totalOrders + 1}`;

export const addProduct = (order: OrderVM, product: Product): OrderVM => {
  return { ...order, products: [...order.products, product] };
};
