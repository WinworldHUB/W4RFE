import { FC, useEffect, useState } from "react";

import PageLayout from "../lib/components/page-layout";
import { Link } from "react-router-dom";
import { PageRoutes } from "../lib/constants";
import useApi from "../lib/hooks/useApi";
import { ORDERS_APIS } from "../lib/constants/api-constants";
import { Order } from "../lib/awsApis";
import OrdersDataTable from "../lib/components/orders-data-table";
import ModalDialog from "../lib/components/modal-dialog";
import OrderDetails from "../lib/components/order-details";

const Orders: FC<PageProps> = (pageProps) => {
  const { data: orders, getData: getOrders } = useApi<Order[]>();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  useEffect(() => {
    getOrders(ORDERS_APIS.GET_ALL_ORDERS_API);
  }, []);

  return (
    <PageLayout {...pageProps}>
      <section className="mt-contact-banner style4">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>ORDERS</h1>
              <nav className="breadcrumbs">
                <ul className="list-unstyled">
                  <li>
                    <Link to={PageRoutes.Home}>
                      Home <i className="fa fa-angle-right"></i>
                    </Link>
                  </li>
                  <li>Orders</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <OrdersDataTable
              data={orders}
              onRowClicked={(order) => {
                console.log(order);
                setIsShowModal(true);
                setSelectedOrder(order);
              }}
            />
          </div>
        </div>
      </div>
      {isShowModal && (
        <ModalDialog onClose={() => setIsShowModal(false)}>
          {selectedOrder && <OrderDetails order={selectedOrder} />}
        </ModalDialog>
      )}
    </PageLayout>
  );
};

export default Orders;
