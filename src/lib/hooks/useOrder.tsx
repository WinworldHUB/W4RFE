import { DateTime } from "luxon";
import { useState } from "react";

import { toAWSDateFormat } from "../utils/date-utils";
import { generateOrderNumber } from "../utils/order-utils";
import { OrderVM } from "../../vms/order";
import { OrderStatus, PackagingType } from "../awsApis";

interface OrderState {
  order: OrderVM;
  setOrder: (order: OrderVM) => void;
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
    packaging: null,
  };

  const [order, setOrder] = useState<OrderVM>(DEFAULT_ORDER);

  return {
    order,
    setOrder,
  };
};

export default useOrder;
