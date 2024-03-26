export const DEFAULT_GET_API_HEADER = {};
export const DEFAULT_POST_API_HEADER = {
  "Content-Type": "application/json",
};
export const API_BASE_URL = "https://apis.wholesale4resale.com";

export const TEST_APIS = {
  GET_API: "https://reqres.in/api/users?page=2",
  POST_API: "https://reqres.in/api/users",
};

export const PRODUCTS_APIS = {
  GET_ALL_PRODUCTS_API: "/products",
  GET_PRODUCT_BY_ID: "/products/",
  ADD_PRODUCT_API: "/products",
  IMPORT_PRODUCTS_API: "/products/imports",
};

export const MEMBERS_APIS = {
  GET_ALL_MEMBERS_API: "/members",
  GET_MEMBER_BY_EMAIL_API: "/members",
  ADD_MEMBER_API: "/members",
  IMPORT_MEMBERS_API: "/members/imports",
};

export const COGNITO_ERROR_CODE = [
  "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED",
];
