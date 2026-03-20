import DesktopProduct from "./DesktopProduct";
import MobileProduct from "./MobileProduct";

function Productpage() {
  const isDesktop = window.innerWidth >= 1024;
  return isDesktop ? <DesktopProduct /> : <MobileProduct />;
}

export default Productpage;
