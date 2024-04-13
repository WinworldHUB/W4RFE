import { FC } from "react";
import { Order, OrderStatus } from "../awsApis";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";

interface OrderTileProps {
  order: Order;
  onItemClick: VoidFunction;
}

const OrderTile: FC<OrderTileProps> = ({ order, onItemClick }) => {
  const getBgColor = (orderStatus: OrderStatus): string => {
    switch (orderStatus) {
      case OrderStatus.UNPAID:
        return "danger";

      case OrderStatus.DONE:
        return "success";

      case OrderStatus.CANCELLED:
        return "light";

      case OrderStatus.PAID:
        return "warning";

      default:
        return "primary";
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle
          className="text-primary"
          onClick={() => {
            onItemClick();
          }}
        >
          Order#: {order?.orderNumber}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs="12">Date placed: {order?.orderDate}</Col>
          <Col xs="12">Order Value: {order?.orderValue.toFixed(2)}</Col>
          <Col xs="12">
            Order Status:{" "}
            <Badge bg={getBgColor(order?.status)}>{order?.status}</Badge>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default OrderTile;
