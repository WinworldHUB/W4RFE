import { PackagingType } from "../../awsApis";

export const DEFAULT_APP_STATE: AppState = {
  isUserLoggedIn: false,
  accessToken: "",
  refreshToken: "",
  selectedProductId: "",
  order: null,
  username: "",

  setAppState: () => {},
};

export const DEFAULT_LOCAL_STORAGE_KEY_FOR_APP_STATE = "W4R_LS_APP_STATE";

export enum PageRoutes {
  Home = "/",
  Login = "/",
  Products = "/products",
  ProductDetail = "/productDetail",
  Test = "/test",
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
      "With box packaging type you can order minimum 6 quantities and maximum 10 quantities in one order. For more quantities split the order into two or more",
    minQuantity: 6,
    maxQuantity: 10,
    available: true,
  },
  {
    id: PackagingType.FLAT_PACK,
    title: "Flat-pack packaging",
    description:
      "With flat-pack packaging type you can order minimum 6 quantities and maximum 12 quantities in one order. For more quantities split the order into two or more",
    minQuantity: 6,
    maxQuantity: 12,
    available: true,
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
      fontSize: "0.9rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

export const EMPTY_STRING = "";

export const EMPTY_DELIVERY_DETAILS: OrderDeliveryDetails = {
  memberName: EMPTY_STRING,
  deliverAt: EMPTY_STRING,
  deliverTo: EMPTY_STRING,
  memberEmail: EMPTY_STRING,
  memberPhone: EMPTY_STRING,
};
