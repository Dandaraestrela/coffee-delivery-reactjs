import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@/layouts/DefaultLayout/DefaultLayout";
import { Home } from "@/pages/Home/Home";
import { Checkout } from "@/pages/Checkout/Checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-concluded" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
