import { FC } from "react";
import { Product } from "../../awsApis";
import PageLayout from "../lib/components/page-layout";

const Products: FC<PageProps> = (pageProps) => {
  return <PageLayout {...pageProps}></PageLayout>;
};

export default Products;
