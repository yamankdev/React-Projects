import { Link } from "react-router-dom";

function ProductSlideCard({ prod }) {
  return (
    <Link
      to={"/product"}
      className="w-30 p-2 shrink-0 shadow-lg shadow-gray-600"
    >
      <img src={prod.image} alt={prod.name} className="h-30 mx-auto" />
      <figcaption className="flex flex-col">
        <pre className="text-center text-[0.8rem]">
          <b>&#8377;{prod.discountPrice}</b>
          <del className="text-[0.6rem]">&#8377;{prod.price}</del>
        </pre>
        <p className="text-[0.6rem] leading-3 line-clamp-3 ">
          {prod.description}
        </p>
      </figcaption>
    </Link>
  );
}

export default ProductSlideCard;
