import PageLayout from "../lib/components/page-layout";
import { FC, useEffect } from "react";
import useApi from "../lib/hooks/useApi";
import { ListGroup, Image, Card, Button } from "react-bootstrap";
import { TEST_APIS } from "../lib/constants/api-constants";

const TestPage: FC<PageProps> = (pageProps) => {
  return <PageLayout {...pageProps}></PageLayout>;
};

export default TestPage;
