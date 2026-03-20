import DesktopCheckout from "./DesktopCheckout";
import MobileCheckout from "./MobileCheckout";

function Checkoutpage() {
  const isDesktop = window.innerWidth >= 1024;
  return isDesktop ? <DesktopCheckout /> : <MobileCheckout />;
}

export default Checkoutpage;
