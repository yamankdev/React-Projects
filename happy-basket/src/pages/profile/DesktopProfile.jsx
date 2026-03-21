import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserContext";
import EditProfile from "./components/EditProfile";

function DesktopProfile() {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [showPage, setShowPage] = useState({
    editProfile: true,
    deliveryAddresses: false,
    emailAddresses: false,
    smartBasket: false,
    pastOrders: false,
    myOrder: false,
    customerService: false,
    myWallet: false,
    myGiftCard: false,
  });
  const navigate = useNavigate();
  const { state, dispatch } = useUserData();

  useEffect(() => {
    const currentUser = state.currentUser;
    setUser({
      name: currentUser.name,
      mobile: currentUser.mobile,
      email: currentUser.email,
    });
  }, []);

  const isActive = ({ isActive }) => {
    isActive
      ? { fontColor: "green", fontWeight: "semibold" }
      : { fontColor: "black" };
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "USER_PROFILE_UPDATE", payload: user });
    navigate("/");
  };
  return (
    <div className="w-[80%] mx-auto flex min-h-135 my-10 bg-gray-100 ">
      {/* Left navbar */}
      <div className="w-[25%] flex flex-col gap-12 text-[0.8rem] border-gray-400 border-r">
        <div className="flex flex-col gap-2 pl-2">
          <h3 className="text-base py-3">PERSONAL DETAILS</h3>
          <hr className="text-gray-400 w-full" />
          <NavLink
            onClick={() => setShowPage.editProfile(true)}
            style={isActive}
          >
            Edit Profile
          </NavLink>
          <NavLink style={isActive}>Delivery Addresses</NavLink>
          <NavLink style={isActive}>Email Addresses</NavLink>
        </div>
        <div className="flex flex-col gap-2 pl-2">
          <h3 className="text-base py-3">SHOP FROM</h3>
          <hr className="text-gray-400 w-full" />
          <NavLink style={isActive}>Smart Basket</NavLink>
          <NavLink style={isActive}>Past Orders</NavLink>
        </div>
        <div className="flex flex-col gap-2 pl-2">
          <h3 className="text-base py-3">MY ACCOUNT</h3>
          <hr className="text-gray-400 w-full" />
          <NavLink style={isActive}>My Order</NavLink>
          <NavLink style={isActive}>Customer Service</NavLink>
          <NavLink style={isActive}>My Wallet</NavLink>
          <NavLink style={isActive}>My Gift Cards</NavLink>
        </div>
      </div>
      <div className="w-full">
        {showPage.editProfile && (
          <EditProfile
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            user={user}
          />
        )}
      </div>
    </div>
  );
}

export default DesktopProfile;
