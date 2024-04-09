import { FC, useState } from "react";
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

interface ProductMobileTileProps {
  product: Product;
}

const ProductMobileTile: FC<ProductMobileTileProps> = ({ product }) => {
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
          <span>{product?.title}</span>
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
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select
                      title="Size"
                      className="form-control"
                      onChange={(e) =>
                        setSelectedVariant(
                          productVariants?.[e.target.selectedIndex]
                        )
                      }
                    >
                      {(productVariants ?? []).map((variant, index) => (
                        <option value={variant.size}>{variant.size}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select title="Size" className="form-control">
                      {getArrayFromTo(1, 12).map((quantity) => (
                        <option value={quantity}>{quantity}</option>
                      ))}
                    </select>
                  </td>
                  <td>{selectedVariant?.price}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProductMobileTile;
