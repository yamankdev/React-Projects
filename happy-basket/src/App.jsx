import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Authpage from "./pages/Authpage";
import Loginpage from "./pages/Loginpage";
import Checkoutpage from "./pages/Checkoutpage";
import Productpage from "./pages/Productpage";
import Errorpage from "./pages/Errorpage";
import FloatingNav from "./components/FloatingNav";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import ApiDataProvider from "./context/ApiDataProvider";
import Wishlistpage from "./pages/Wishlistpage";

function App() {
  return (
    <div className="relative">
      <ApiDataProvider>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/auth" element={<Authpage />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/checkout" element={<Checkoutpage />}></Route>
          <Route path="/product/:id" element={<Productpage />}></Route>
          <Route path="/wish" element={<Wishlistpage />}></Route>
          <Route path="*" element={<Errorpage />}></Route>
        </Routes>
        {/* <FloatingNav /> */}
        {/* <Footer /> */}
      </ApiDataProvider>
    </div>
  );
}

export default App;
