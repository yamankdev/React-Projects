import MobileCategoryProd from "./MobileCategoryProd";
import DesktopCategoryProd from "./DesktopCategoryProd";

function CategoryProducts() {
  return (
    <>
      <div className="lg:hidden">
        <MobileCategoryProd />
      </div>
      <div className="hidden lg:block">
        <DesktopCategoryProd />
      </div>
    </>
  );
}

export default CategoryProducts;
