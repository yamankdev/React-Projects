import MobileProfile from "./MobileProfile";
import DesktopProfile from "./DesktopProfile";

function ProfilePage() {
  return (
    <>
      <div className="lg:hidden">
        <MobileProfile />
      </div>
      <div className="hidden lg:block">
        <DesktopProfile />
      </div>
    </>
  );
}

export default ProfilePage;
