import { PackagingType } from "../awsApis";

export const DEFAULT_APP_STATE: AppVars = {
  isUserLoggedIn: false,
  accessToken: "",
  refreshToken: "",
  username: "",
  selectedProductId: "",
  member: null,
};

export const DEFAULT_LOCAL_STORAGE_KEY_FOR_APP_STATE = "W4R_LS_APP_STATE";
export const DEFAULT_LOCAL_STORAGE_KEY_FOR_CART_STATE = "W4R_LS_CART_STATE";
export const DEFAULT_LOCAL_STORAGE_KEY_FOR_ORDER_STATE = "W4R_LS_ORDER_STATE";

export const GBP_SYMBOL = "£";
export const DEFAULT_BRAND = "wholesale4resale.com";
export const BEST_SELLER = "best seller";

export enum PageRoutes {
  Home = "/",
  Login = "/",
  Products = "/products",
  ProductDetail = "/productDetail",
  Test = "/test",
  Orders = "/orders",
  Cart = "/cart",
  SignUp = "/signup",
}

export enum CreateOrderSlides {
  SelectPackaging = 0,
  SelectMember = 1,
  SelectProducts = 2,
  SelectQuantities = 3,
  Preview = 4,
  Submit = 5,
}

export const BACKGROUND_ANIMATION_STYLE: React.CSSProperties = {
  transition: "background-color 0.3s",
};

export const APP_CONVERSION_DATE_FORMAT = "dd/MM/yyyy";
export const APP_SHORT_DATE_FORMAT = "dd MMM yyyy";
export const APP_AWS_DATE_FORMAT = "yyyy-MM-dd";
export const APP_LONG_DATE_FORMAT = "DDDD";
export const APP_ORDER_NUMBER_FORMAT = "yyyy/dd/#";

export const KEY_LATEST = "Latest";
export const KEY_UNPAID = "Unpaid";
export const KEY_ALL = "All";

export const DEFAULT_PACKAGES: Packaging[] = [
  {
    id: PackagingType.BOX_PACK,
    title: "Box packaging",
    description:
      "Sneakers will arrive to you remaining in their original boxes as sold\nThis shipping method is priced higher due to the space required when keeping products in this form\nIf you would like to purchase more than the maximum quantity per shipment then please split your orders\n",
    minQuantity: 6,
    maxQuantity: 10,
    available: true,
    cost: 20,
  },
  {
    id: PackagingType.FLAT_PACK,
    title: "Flat-pack packaging",
    description:
      "Sneakers will arrive to you flat-packed meaning the original boxes will need to be built\nThis shipping method is priced lower due to being able to fit the most products into the shipment\nIf you would like to purchase more than the maximum quantity per shipment then please split your orders\n",
    minQuantity: 6,
    maxQuantity: 12,
    available: true,
    cost: 14,
  },
];

export const DATA_TABLE_DEFAULT_STYLE = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      backgroundColor: "var(--bs-primary)",
      color: "var(--bs-white)",
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      fontSize: "1.1rem",
    },
  },
};

enum TimelineStatus {
  Active = "active",
  Completed = "completed",
  Pending = "pending",
}

export const TIMELINE_STATUSES = [
  {
    status: TimelineStatus.Completed,
    title: "Order placed",
  },
  {
    status: TimelineStatus.Completed,
    title: "Payment completed",
  },
  {
    status: TimelineStatus.Active,
    title: "Order shipped",
  },
  {
    status: TimelineStatus.Pending,
    title: "Arrived in UK",
  },
  {
    status: TimelineStatus.Pending,
    title: "Delivered",
  },
] as TimelineItem[];

export const EMPTY_STRING = "";

export const EMPTY_DELIVERY_DETAILS: OrderDeliveryDetails = {
  memberName: EMPTY_STRING,
  deliverAt: EMPTY_STRING,
  deliverTo: EMPTY_STRING,
  memberEmail: EMPTY_STRING,
  memberPhone: EMPTY_STRING,
  instagramHandle: EMPTY_STRING,
};
