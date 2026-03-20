import DesktopLayout from "../../pages/home/DesktopLayout";
import MobileLayout from "../../pages/home/MobileLayout";

function Layout() {
  const isDesktop = window.innerWidth >= 1024;
  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
}

export default Layout;
