import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Authpage from "./pages/Authpage";
import Loginpage from "./pages/Loginpage";
import Checkoutpage from "./pages/Checkoutpage";
import Productpage from "./pages/Productpage";
import Errorpage from "./pages/Errorpage";
import Wishlistpage from "./pages/Wishlistpage";

import ApiDataProvider from "./context/ApiDataProvider";

function App() {
  return (
    <div className="relative">
      <ApiDataProvider>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/auth" element={<Authpage />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/checkout" element={<Checkoutpage />}></Route>
          <Route path="/product/:id" element={<Productpage />}></Route>
          <Route path="/wish" element={<Wishlistpage />}></Route>
          <Route path="*" element={<Errorpage />}></Route>
        </Routes>
      </ApiDataProvider>
    </div>
  );
}

export default App;
