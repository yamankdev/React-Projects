import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApiData } from "../../context/ApiDataProvider";
import { useUserData } from "../../context/UserContext";
// import ProductVarCard from "../../../modules/product/ProductVarCard";

import { BiArrowBack } from "react-icons/bi";
import { HiMiniMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import { GrShareOption, GrBasket } from "react-icons/gr";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { BsLightningFill } from "react-icons/bs";
import {
  RiInboxUnarchiveLine,
  RiHeart3Fill,
  RiHeart3Line,
} from "react-icons/ri";

function DesktopProduct() {
  const { data } = useApiData();
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { state, dispatch } = useUserData();

  const { cart, wishlist } = state.currentUser;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const productDetails = data.products.find((p) => p.id === id);
    setProduct(productDetails);
  }, []);

  const isInWishlist = wishlist.some((p) => {
    return p.id === id;
  });

  return <div>DesktopProduct</div>;
}

export default DesktopProduct;
