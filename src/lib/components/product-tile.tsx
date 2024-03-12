import { FC } from "react";

interface ProductTileProps {
  imagePath: string;
}

const ProductTile: FC<ProductTileProps> = ({ imagePath }) => {
  return (
    <div className="mt-product1 mt-paddingbottom20">
      <div className="box">
        <div className="b1">
          <div className="b2">
            <a href="product-detail.html">
              <img src={imagePath} alt="" />
            </a>
            <span className="caption">
              <span className="new">NEW</span>
            </span>
            <ul className="mt-stars">
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star-o"></i>
              </li>
            </ul>
            <ul className="links">
              <li>
                <a href="#">
                  <i className="icon-handbag"></i>
                  <span>Add to Cart</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icomoon icon-heart-empty"></i>
                </a>
              </li>
              <li>
                <a href="#popup1" className="lightbox">
                  <i className="icomoon icon-eye"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="txt">
        <strong className="title">
          <a href="product-detail.html">Puff Chair</a>
        </strong>
        <span className="price">
          <i className="fa fa-eur"></i> <span>287,00</span>
        </span>
      </div>
    </div>
  );
};

export default ProductTile;
