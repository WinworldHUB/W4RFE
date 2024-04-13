import { FC, useMemo } from "react";
import { Order, Product } from "../awsApis";
import ProductsPreviewTable from "./products-preview-table";
import HorizontalTimeline from "./horizontal-timeline";
import { DEFAULT_PACKAGES, TIMELINE_STATUSES } from "../constants";
import { Col } from "react-bootstrap";
import ProductMobileTile from "./product-mobile-tile";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: FC<OrderDetailsProps> = ({ order }) => {
  const deliveryDetails = useMemo(
    () => JSON.parse(order?.deliveryDetails) as OrderDeliveryDetails,
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
          <div className="row p-2">
            <div className="col-sm-3">Packaging:</div>
            <div className="col-sm-9">
              <strong>{order?.packagingType}</strong>
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
        <div className="col-sm-12 d-none d-sm-block">
          <ProductsPreviewTable
            products={products}
            orderValue={order?.orderValue}
          />
        </div>
        <div className="col-xs-12 d-sm-none d-xs-block">
          {(products ?? []).map((product) => (
            <ProductMobileTile
              product={product}
              onQuantityChange={() => {}}
              onRemoveClicked={() => {}}
              onSizeChange={() => {}}
              isReadonly={true}
            />
          ))}
        </div>
      </div>
      <div className="row p-2">
        <div className="col-sm-12">
          <h3>Delivery Status</h3>
        </div>
      </div>
      <div className="row p-2">
        <Col
          xs="12"
          className="d-flex justify-content-sm-center table-responsive"
        >
          <HorizontalTimeline
            items={TIMELINE_STATUSES}
            orderStatus={order?.status}
            deliveryStatus={order?.trackingStatus}
          />
        </Col>
      </div>
    </div>
  );
};

export default OrderDetails;
