import DesktopProduct from "./DesktopProduct";
import MobileProduct from "./MobileProduct";

function Productpage() {
  return (
    <>
      <div className="lg:hidden">
        <MobileProduct />
      </div>
      <div className="hidden lg:block">
        <DesktopProduct />
      </div>
    </>
  );
}

export default Productpage;
