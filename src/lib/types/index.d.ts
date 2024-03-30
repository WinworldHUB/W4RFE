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

interface CartState {
  products: Product[];
  addProduct: (product: Product) => void;
}

interface CartStateProps {
  cartState: CartState;
  updateCartState: ({ products }: CartState) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

interface PageProps {
  selectedMenuId: number;
  menuItems: MenuItem[];
  username: string;
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

enum TimelineStatus {
  Active = "active",
  Completed = "completed",
  Pending = "pending",
}

type TimelineItem = {
  status: TimelineStatus;
  title: string;
};

interface DataTableProps<T> {
  isEditable?: boolean;
  data: T[];
  onCreateClick?: VoidFunction;
  onRowClicked?: Dispatch<SetStateAction<Order>>;
  onDataImport?: (data: T[]) => void;
}

type PageTitleItem = {
  id: string;
  title: string;
};
