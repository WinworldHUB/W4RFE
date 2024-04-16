import { FC, useEffect, useState } from "react";
import { Product } from "../awsApis";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from "react-bootstrap";
import { getArrayFromTo } from "../utils/array-utils";
import { Link } from "react-router-dom";

interface ProductMobileTileProps {
  product: Product;
  onSizeChange: (sizeIndex: number) => void;
  onQuantityChange: (quantity: number) => void;
  isReadonly?: boolean;
  onRemoveClicked: VoidFunction;
}

const ProductMobileTile: FC<ProductMobileTileProps> = ({
  product,
  onSizeChange,
  onQuantityChange,
  isReadonly = false,
  onRemoveClicked,
}) => {
  const productVariants = JSON.parse(product?.variants) as ProductVariant[];

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    productVariants?.[0]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="d-flex justify-content-between align-items-center">
          <img
            className="thumbnail-50 remove-bg"
            src={product?.featuredImage}
            alt={product?.title}
          />
          <span className="limit-text">{product?.title}</span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs="12">
            <Table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Unit price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="40%">
                    <select
                      title="Size"
                      className="form-control"
                      disabled={isReadonly}
                      value={product?.size ?? selectedVariant.size}
                      onChange={(e) => {
                        setSelectedVariant(
                          productVariants?.[e.target.selectedIndex]
                        );
                        onSizeChange(e.target.selectedIndex);
                      }}
                    >
                      {(productVariants ?? []).map((variant, index) => (
                        <option value={variant.size} key={variant.size}>
                          {variant.size}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td width="30%">
                    <select
                      title="Size"
                      className="form-control"
                      disabled={isReadonly}
                      value={product?.quantity ?? selectedVariant.quantity}
                      onChange={(e) => {
                        onQuantityChange(parseInt(e.target.value));
                      }}
                    >
                      {getArrayFromTo(1, 12).map((quantity) => (
                        <option value={quantity} key={quantity}>
                          {quantity}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td width="30%">
                    <input
                      disabled={true}
                      placeholder="price"
                      className="form-control text-end"
                      value={product?.price ?? selectedVariant?.price}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          {!isReadonly && (
            <Col xs="12" className="text-end text-danger">
              <Link to="" onClick={onRemoveClicked}>
                remove
              </Link>
            </Col>
          )}
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProductMobileTile;
