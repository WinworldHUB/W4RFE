import { FC } from "react";

const FeaturedCategories: FC = () => {
  return (
    <div className="banner-frame">
      <div className="banner-1 wow fadeInLeft" data-wow-delay="0.4s">
        <img alt="image description" src="/assets/images/banner/img01.jpg" />
        <div className="holder">
          <h2>
            MY SMALL WRITING <br />
            DESK
          </h2>
          <div className="txts">
            <a className="btn-shop" href="product-detail.html">
              <span>shop now</span>
              <i className="fa fa-angle-right"></i>
            </a>
            <div className="discount">
              <span>-20%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-box first">
        <div className="banner-2 wow fadeInUp" data-wow-delay="0.4s">
          <img alt="image description" src="/assets/images/banner/img02.jpg" />
          <div className="holder">
            <h2>
              MODULAR LOUNGE <br />
              TEAK
            </h2>
            <span className="price">$ 129.00</span>
          </div>
        </div>
        <div className="banner-3 right wow fadeInDown" data-wow-delay="0.4s">
          <img alt="image description" src="/assets/images/banner/img03.jpg" />
          <div className="holder">
            <h2>
              Modular technical <br />
              fabric sofa
            </h2>
            <a href="product-detail.html" className="shop">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
      <div className="banner-4 hidden-sm wow fadeInRight" data-wow-delay="0.4s">
        <img alt="image description" src="/assets/images/banner/img04.jpg" />
        <div className="holder">
          <h2>
            Direct light <br />
            pendant lamp
          </h2>
          <span className="price">$ 129.00</span>
          <a className="btn-shop add" href="product-detail.html">
            <span>shop now</span>
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
