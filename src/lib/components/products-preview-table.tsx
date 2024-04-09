import { FC } from "react";
import { Card } from "react-bootstrap";
import DataTable, { TableColumn } from "react-data-table-component";
import { Product } from "../awsApis";
import { DATA_TABLE_DEFAULT_STYLE, GBP_SYMBOL } from "../constants";
import { formatCurrency } from "../utils/utils";

interface ProductsPreviewTableProps {
  products: Product[];
  orderValue: number;
}

const columns: TableColumn<Product>[] = [
  {
    name: "",
    maxWidth: "70px",
    selector: (row) => row.featuredImage,
    cell: (row) => (
      <img
        src={row.featuredImage}
        alt="Featured"
        style={{ width: "50px", height: "50px" }}
      />
    ),
  },
  {
    name: "Title",
    selector: (row) => row.title,
    maxWidth: "50%",
    wrap: true,
  },
  {
    maxWidth: "10%",
    name: "Size",
    center: true,
    selector: (row) => row.size,
  },
  {
    maxWidth: "15%",
    name: "Quantity",
    center: true,
    selector: (row) => row.quantity,
  },

  {
    maxWidth: "20%",
    name: "Price",
    right: true,
    selector: (row) =>
      row?.price ? `${GBP_SYMBOL} ${formatCurrency(row.price.toString())}` : 0,
  },
];

const ProductsPreviewTable: FC<ProductsPreviewTableProps> = ({
  products,
  orderValue,
}) => {
  return (
    <Card>
      <Card.Header className="d-in-flex justify-content-between">
        <Card.Title className="card-title">Products</Card.Title>
        <Card.Title className="card-title">
          Total: {GBP_SYMBOL} {formatCurrency(orderValue.toFixed(2))}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <DataTable
          columns={columns}
          data={products}
          responsive
          className="border"
          customStyles={DATA_TABLE_DEFAULT_STYLE}
        />
      </Card.Body>
    </Card>
  );
};

export default ProductsPreviewTable;
