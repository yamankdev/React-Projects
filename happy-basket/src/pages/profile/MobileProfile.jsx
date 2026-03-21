import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserContext";

import { BiArrowBack } from "react-icons/bi";
import EditProfile from "./components/EditProfile";

function MobileProfile() {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
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

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "USER_PROFILE_UPDATE", payload: user });
    navigate("/auth");
  };
  return (
    <div className="relative">
      <div className="bg-gray-300 absolute h-vh top-0 left-0 right-0">
        {/* navbar */}
        <div className="flex px-4 py-1 gap-3 mt-10">
          <button onClick={() => navigate(-1)} className="size-6">
            <BiArrowBack />
          </button>
          <p className="text-[0.8rem] font-bold">Update Profile</p>
        </div>

        <div className="relative px-2 mt-3 rounded-lg">
          {/* <div className=" rounded-lg"> */}
          <EditProfile
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            user={user}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default MobileProfile;
