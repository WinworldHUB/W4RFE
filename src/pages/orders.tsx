import { FC, useEffect, useState } from "react";

import PageLayout from "../lib/components/page-layout";
import useApi from "../lib/hooks/useApi";
import { ORDERS_APIS } from "../lib/constants/api-constants";
import { Order } from "../lib/awsApis";
import OrdersDataTable from "../lib/components/orders-data-table";
import OrderDetails from "../lib/components/order-details";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const Orders: FC<PageProps> = (pageProps) => {
  const { data: orders, getData: getOrders } = useApi<Order[]>();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  useEffect(() => {
    getOrders(ORDERS_APIS.GET_ALL_ORDERS_API);
  }, []);

  return (
    <PageLayout {...pageProps}>
      <div className="container pt-3">
        <div className="row">
          <div className="col-xs-12">
            <OrdersDataTable
              data={orders}
              onRowClicked={(order: Order) => {
                setIsShowModal(true);
                setSelectedOrder(order);
              }}
            />
          </div>
        </div>
      </div>
      <Modal
        show={isShowModal}
        size="xl"
        centered
        onHide={() => setIsShowModal(false)}
      >
        <ModalHeader className="d-flex justify-content-between">
          <ModalTitle>Order#: {selectedOrder?.orderNumber}</ModalTitle>
          <span
            className="fs-5 icon-close cursor-hand"
            onClick={() => setIsShowModal(false)}
          ></span>
        </ModalHeader>
        <ModalBody>
          <OrderDetails order={selectedOrder} />
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsShowModal(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </PageLayout>
  );
};

export default Orders;
