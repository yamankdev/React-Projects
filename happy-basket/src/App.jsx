import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Authpage from "./pages/Authpage";
import Errorpage from "./pages/Errorpage";
import FloatingNav from "./components/FloatingNav";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import ApiDataProvider from "./context/ApiDataProvider";

function App() {
  return (
    <div className="relative">
      <ApiDataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/auth" element={<Authpage />}></Route>
          <Route path="*" element={<Errorpage />}></Route>
        </Routes>
        <FloatingNav />
        <Footer />
      </ApiDataProvider>
    </div>
  );
}

export default App;
