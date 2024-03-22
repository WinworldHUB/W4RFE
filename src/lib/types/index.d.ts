interface AppState {
  isUserLoggedIn?: boolean;
  accessToken?: string;
  refreshToken?: string;
  selectedProductId?: string;
  order: unknown;
  username: string;

  setAppState: ({
    isUserLoggedIn,
    accessToken,
    refreshToken,
    selectedProductId,
    order,
    username,
  }: AppState) => void;
}

interface PageProps {
  selectedMenuId: number;
  menuItems: MenuItem[];
}

type MenuItem = {
  id: number;
  label: string;
  icon: React.ReactElement;
  route: string;
};

type ProductVariant = {
  size: string;
  available: boolean;
  price: number;
  quantity: number;
};

type Packaging = {
  id: string;
  title: string;
  description: string;
  minQuantity: number;
  maxQuantity: number;
  available: boolean;
};

type SizeFilter = {
  size: string;
  count: number;
  productIds: string[];
};

type OrderDeliveryDetails = {
  memberName: string;
  memberPhone: string;
  memberEmail: string;
  deliverTo: string;
  deliverAt: string;
};
interface Credentials {
  email: string;
  password: string;
}
