import ProductBoxCard from "./ProductBoxCard";
import { useApiData } from "../../context/ApiDataProvider";
import { useSearchParams } from "react-router-dom";

function DesktopSearch() {
  const { data } = useApiData();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q")?.toLowerCase() || "";
  console.log("Query: ", query);

  const filteredProducts = data.products.filter((item) => {
    const words = query.toLowerCase().split(" ");
    return words.every(
      (word) =>
        item.name.toLowerCase().includes(word) ||
        item.category.toLowerCase().includes(word) ||
        item.tags.some((tags) => tags.toLowerCase().includes(word)),
    );
  });
  console.log("FilteredProducts: ", filteredProducts);

  return (
    <>
      {/* If no searched results for query */}
      {filteredProducts.length === 0 ? (
        <div className="w-[80%] mx-auto grid place-items-center min-h-145 ">
          No data Found
        </div>
      ) : (
        // If results available for query
        <div className="flex flex-col w-[80%] mx-auto my-10">
          <h3 className="text-xl p-4 font-bold">
            Searched Results for {query}
          </h3>
          <div className="flex flex-wrap justify-evenly gap-3 min-h-135 p-2">
            {filteredProducts.map((item) => {
              return <ProductBoxCard product={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default DesktopSearch;
