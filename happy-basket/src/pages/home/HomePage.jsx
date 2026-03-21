import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function HomePage() {
  return (
    <>
      <div className="lg:hidden">
        <MobileLayout />
      </div>
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
    </>
  );
}

export default HomePage;
