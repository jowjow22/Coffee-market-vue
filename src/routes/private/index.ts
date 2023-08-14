export const CATALOG = {
  path: "/",
  name: "Catalog",
  component: () => import("../../views/Catalog/Catalog.vue"),
};

export const TEST_COMPONENTS = {
  path: "/test-components",
  name: "TestComponents",
  component: () => import("../../views/TestComponents/TestComponents.vue"),
};

export const CHECKOUT = {
  path: "/checkout",
  name: "Checkout",
  component: () => import("../../views/Checkout/Checkout.vue"),
};

export const ORDER_FINISH = {
  path: "/order-finish",
  name: "OrderFinish",
  component: () => import("../../views/OrderFinish/OrderFinish.vue"),
};
