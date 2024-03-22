import React, { FC } from "react";
import MenuBar from "./menubar";
import PageFooter from "./page-footer";
import usePageLoaded from "../hooks/usePageLoded";

interface PageLayoutProps {
  isShowSideMenu?: boolean;
  children?: React.ReactNode;
  selectedMenuId: number;
  menuItems: MenuItem[];
  username: string;
}

const PageLayout: FC<PageLayoutProps> = ({
  isShowSideMenu = false,
  children,
  selectedMenuId,
  menuItems,
  username,
}: PageLayoutProps) => {
  const { isPageLoaded } = usePageLoaded();

  if (!isPageLoaded) {
    <div id="wrapper">
      <div id="pre-loader" className="loader-container">
        <div className="loader">
          <img src="/assets/images/svg/rings.svg" alt="loader" />
        </div>
      </div>
      ;
    </div>;
  }

  return (
    <div id="wrapper">
      <div className="w1">
        <MenuBar
          menuItems={menuItems}
          selectedMenuId={selectedMenuId}
          username={username}
        />
        {children}

        <span id="back-top" className="fa fa-arrow-up"></span>
      </div>
      <PageFooter />
    </div>
  );
};

export default PageLayout;
