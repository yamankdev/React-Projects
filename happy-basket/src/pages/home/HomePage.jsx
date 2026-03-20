import DesktopLayout from "../components/layout/DesktopLayout";
import MobileLayout from "../../components/layout/footer/MobileLayout";
// import { useData } from "../context/ApiDataProvider";

function Homepage() {
  const isDesktop = window.innerWidth >= 1024;

  return isDesktop ? (
    <DesktopLayout>{children}</DesktopLayout>
  ) : (
    <MobileLayout>{children}</MobileLayout>
  );
}

export default Homepage;
