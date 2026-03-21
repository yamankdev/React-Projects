import MobileSearch from "./MobileSearch";
import DesktopSearch from "./DesktopSearch";

function SearchedPage() {
  return (
    <>
      <div className="lg:hidden">
        <MobileSearch />
      </div>
      <div className="hidden lg:block">
        <DesktopSearch />
      </div>
    </>
  );
}

export default SearchedPage;
