import { FC, useMemo } from "react";
import { Order, Product } from "../awsApis";
import ProductsPreviewTable from "./products-preview-table";
import HorizontalTimeline from "./horizontal-timeline";
import { DEFAULT_PACKAGES, TIMELINE_STATUSES } from "../constants";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: FC<OrderDetailsProps> = ({ order }) => {
  const deliveryDetails = useMemo(
    () =>
      order
        ? (JSON.parse(order?.deliveryDetails) as OrderDeliveryDetails)
        : ({} as OrderDeliveryDetails),
    [order]
  );

  const products = useMemo(
    () =>
      order ? (JSON.parse(order?.products) as Product[]) : ([] as Product[]),
    [order]
  );

  const totalOrderQuantity: number = useMemo(
    () =>
      products.reduce(
        (total: number, product: Product) => total + (product.quantity ?? 0),
        0
      ),
    [products]
  );

  // Find the packaging object based on the packaging type
  const packaging: Packaging | undefined = useMemo(
    () =>
      DEFAULT_PACKAGES.find(
        (pack: Packaging) => pack.id === order.packagingType
      ),
    [order.packagingType]
  );

  // Calculate the shipping charges
  const shippingCharges: number = useMemo(
    () => (packaging ? packaging.cost * totalOrderQuantity : 0),
    [packaging, totalOrderQuantity]
  );

  // Calculate the order total
  const orderTotal: number = useMemo(
    () => order.orderValue + shippingCharges,
    [order.orderValue, shippingCharges]
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <div className="row p-2">
            <div className="col-sm-3">Order #:</div>
            <div className="col-sm-9">
              <strong>{order?.orderNumber}</strong>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-sm-3">Order date:</div>
            <div className="col-sm-9">
              <strong>{order?.orderDate}</strong>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-sm-3">Order status:</div>
            <div className="col-sm-9">
              <strong>{order?.status}</strong>
            </div>
          </div>
        </div>
        <div className="col-sm-6 bg-light rounded">
          <div className="row p-2">
            <div className="col-sm-2">Deliver to:</div>
            <div className="col-sm-10">
              <p>
                <strong>{deliveryDetails.deliverTo ?? ""}</strong>
              </p>
              <p>
                <strong>{deliveryDetails.deliverAt ?? ""}</strong>
              </p>
              <p>
                <strong>{deliveryDetails.memberEmail ?? ""}</strong>
              </p>
              <p>
                <strong>{deliveryDetails.memberPhone ?? ""}</strong>
              </p>
            </div>
            <div className="col-sm-2">Instagram:</div>
            <div className="col-sm-10">
              <p>
                <strong>{deliveryDetails.instagramHandle ?? ""}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <ProductsPreviewTable products={products} orderValue={orderTotal} />
        </div>
      </div>
      <div className="row p-2">
        <div className="col-sm-12">
          <h3>Delivery Status</h3>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-sm-12 d-in-flex text-center">
          <HorizontalTimeline items={TIMELINE_STATUSES} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
