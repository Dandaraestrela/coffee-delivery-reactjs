import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@/layouts/DefaultLayout/DefaultLayout";
import { Home } from "@/pages/Home/Home";
import { Checkout } from "@/pages/Checkout/Checkout";
import { CheckoutConcluded } from "./pages/CheckoutConcluded/CheckoutConcluded";

export const routesURLs = {
  home: "/coffee-delivery-reactjs",
  checkout: "/coffee-delivery-reactjs/checkout",
  checkoutConcluded: "/coffee-delivery-reactjs/checkout-concluded",
};

export function Router() {
  return (
    <Routes>
      <Route path={routesURLs.home} element={<DefaultLayout />}>
        <Route path={routesURLs.home} element={<Home />} />
        <Route path={routesURLs.checkout} element={<Checkout />} />
        <Route
          path={routesURLs.checkoutConcluded}
          element={<CheckoutConcluded />}
        />
      </Route>
    </Routes>
  );
}
