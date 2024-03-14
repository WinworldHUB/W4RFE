import React, { FC } from "react";
import MenuBar from "./menubar";
import PageFooter from "./page-footer";

interface PageLayoutProps {
  isShowSideMenu?: boolean;
  children?: React.ReactNode;
  selectedMenuId: number;
  menuItems: MenuItem[];
}

const PageLayout: FC<PageLayoutProps> = ({
  isShowSideMenu = false,
  children,
  selectedMenuId,
  menuItems,
}: PageLayoutProps) => {
  return (
    <div id="wrapper">
      {/* <div id="pre-loader" className="loader-container">
        <div className="loader">
          <img src="/assets/images/svg/rings.svg" alt="loader" />
        </div>
      </div> */}
      <div className="w1">
        <MenuBar menuItems={menuItems} selectedMenuId={selectedMenuId} />
        {children}

        <span id="back-top" className="fa fa-arrow-up"></span>
      </div>
      <PageFooter />
    </div>
  );
};

export default PageLayout;
