import { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import DataTable, { TableColumn } from "react-data-table-component";
import { Order, OrderStatus } from "../awsApis";
import { DATA_TABLE_DEFAULT_STYLE } from "../constants";

const columns: TableColumn<Order>[] = [
  {
    name: "Order#",
    selector: (row) => row.orderNumber,
    sortable: true,
  },
  {
    name: "Order Value",
    selector: (row) => row.orderValue.toFixed(2),
    sortable: true,
  },
  {
    name: "Order Date",
    selector: (row) => row.orderDate,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    center: true,
    conditionalCellStyles: [
      {
        when: (row) => row.status === OrderStatus.DONE,
        style: {
          backgroundColor: "rgba(63, 195, 128, 0.9)",
          color: "white",
        },
      },
      {
        when: (row) => row.status === OrderStatus.CANCELLED,
        style: {
          backgroundColor: "rgba(200, 200, 200, 0.9)",
          color: "white",
        },
      },
      {
        when: (row) => row.status === OrderStatus.UNPAID,
        style: {
          backgroundColor: "rgba(242, 38, 19, 0.9)",
          color: "white",
          fontWeight: "bold",
        },
      },
    ],
  },
];

const OrdersDataTable: FC<DataTableProps<Order>> = ({
  data,
  onRowClicked,
  isEditable = false,
  onCreateClick,
}) => {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <Card.Title className="card-title">My Orders</Card.Title>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <DataTable
          columns={columns}
          data={data ?? []}
          striped
          highlightOnHover
          pagination
          onRowClicked={onRowClicked}
          customStyles={DATA_TABLE_DEFAULT_STYLE}
        />
      </Card.Body>
    </Card>
  );
};

export default OrdersDataTable;
