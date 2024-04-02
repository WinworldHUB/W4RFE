import { DateTime } from "luxon";
import { useState } from "react";

import { toAWSDateFormat } from "../utils/date-utils";
import { generateOrderNumber } from "../utils/order-utils";
import { OrderVM } from "../../vms/order";
import { Order, OrderStatus, PackagingType } from "../awsApis";
import {
  DEFAULT_LOCAL_STORAGE_KEY_FOR_ORDER_STATE,
  DEFAULT_PACKAGES,
} from "../constants";
import useLocalStorage from "./useLocalStorage";

interface OrderState {
  order: OrderVM;
  updateOrder: (order: OrderVM) => void;
  clearOrder: VoidFunction;
}

const useOrder = (totalOrders: number): OrderState => {
  const DEFAULT_ORDER: OrderVM = {
    orderDate: toAWSDateFormat(DateTime.now()),
    orderValue: 0,
    status: OrderStatus.UNPAID,
    products: [],
    orderNumber: generateOrderNumber(totalOrders),
    deliveryDetails: "",
    packagingType: PackagingType.BOX_PACK,
    member: null,
    packaging: DEFAULT_PACKAGES[0],
  };
  const { getValue, setValue, clearValue } = useLocalStorage<OrderVM>();

  const [order, setOrder] = useState<OrderVM>(
    getValue(DEFAULT_LOCAL_STORAGE_KEY_FOR_ORDER_STATE) ?? DEFAULT_ORDER
  );

  const updateOrder = (updatedOrder: OrderVM) => {
    setOrder(updatedOrder);
    setValue(DEFAULT_LOCAL_STORAGE_KEY_FOR_ORDER_STATE, updatedOrder);
  };

  const clearOrder = () => {
    setOrder(DEFAULT_ORDER);
    clearValue(DEFAULT_LOCAL_STORAGE_KEY_FOR_ORDER_STATE);
  };

  return {
    order,
    updateOrder,
    clearOrder,
  };
};

export default useOrder;
