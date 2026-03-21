import { Routes, Route } from "react-router-dom";

import ApiDataProvider from "./context/ApiDataProvider";
import DesktopNavbar from "./components/layout/navbar/DesktopNavbar";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AddressPage from "./pages/address/AddressPage";
import LoginPage from "./pages/auth/LoginPage";
import Checkoutpage from "./pages/checkout/CheckoutPage";
import Productpage from "./pages/productDetails/ProductPage";
import WishlistPage from "./pages/wishlist/WishlistPage";
import Errorpage from "./pages/Errorpage";
import DesktopFooter from "./components/layout/footer/DesktopFooter";
import SearchedPage from "./pages/productDetails/SearchedPage";
import CategoryProducts from "./pages/home/CategoryProducts";

function App() {
  return (
    <div className="relative">
      <ApiDataProvider>
        <div className="hidden lg:block">
          <DesktopNavbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/" element={<Layout />}></Route> */}
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/address" element={<AddressPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/checkout" element={<Checkoutpage />}></Route>
          <Route path="/product/:id" element={<Productpage />}></Route>
          <Route path="/search" element={<SearchedPage />}></Route>
          <Route path="/category" element={<CategoryProducts />}></Route>
          {/* <Route path="/catProducts" element={<ViewProductspage />}></Route> */}
          <Route path="/wishlist" element={<WishlistPage />}></Route>
          <Route path="*" element={<Errorpage />}></Route>
        </Routes>
        <div className="hidden lg:block">
          <DesktopFooter />
        </div>
      </ApiDataProvider>
    </div>
  );
}

export default App;
