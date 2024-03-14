import { FC } from "react";
import { Link } from "react-router-dom";

interface ProductHoverActionProps {
  onAddToCartClick: VoidFunction;
  onViewClick: VoidFunction;
}

const ProductHoverAction: FC<ProductHoverActionProps> = ({
  onAddToCartClick,
  onViewClick,
}) => {
  return (
    <ul className="links">
      <li>
        <Link to="" onClick={onAddToCartClick}>
          <i className="icon-handbag"></i>
          <span>Add to Cart</span>
        </Link>
      </li>
      {/* <li>
        <a href="#">
          <i className="icomoon icon-heart-empty"></i>
        </a>
      </li> */}
      <li>
        <Link to="" className="lightbox" onClick={onViewClick}>
          <i className="icomoon icon-eye"></i>
        </Link>
      </li>
    </ul>
  );
};

export default ProductHoverAction;
