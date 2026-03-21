import { useNavigate, useSearchParams } from "react-router-dom";
import { useApiData } from "../../context/ApiDataProvider";
import { useUserData } from "../../context/UserContext";
import ProductBoxCard from "../productDetails/ProductBoxCard";

function DesktopCategoryProd() {
  const { data } = useApiData();
//   const navigate = useNavigate();
  const [searchParams] = useSearchParams();
//   const { state } = useUserData();

//   const { cart } = state.currentUser;
//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const category = searchParams.get("c")?.toLowerCase() || "";

  const filteredProducts = data.products.filter((item) => {
    return item.category.toLowerCase().includes(category);
  });

  const completeCategory = filteredProducts[0].category;

  return (
    <div className="flex flex-col w-[80%] mx-auto my-10">
      <h3 className="text-2xl p-4 font-bold">{completeCategory}</h3>
      <div className="flex flex-wrap justify-evenly gap-3 min-h-135 p-2">
        {filteredProducts.map((item) => {
          return <ProductBoxCard product={item} />;
        })}
      </div>
    </div>
  );
}

export default DesktopCategoryProd;
