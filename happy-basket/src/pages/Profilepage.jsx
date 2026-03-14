import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../context/UserContext";

import { BiArrowBack } from "react-icons/bi";

function Profilepage() {
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
  //   const isUserLoggedIn = state.currentUser.mobile;

  return (
    <div className="relative">
      <div className="bg-gray-300 absolute top-0 left-0 right-0">
        <div className="flex px-4 py-1 gap-3 mt-10">
          <button onClick={() => navigate(-1)} className="size-6">
            <BiArrowBack />
          </button>
          <p className="text-[0.8rem] font-bold">Update Profile</p>
        </div>
        <div className="relative px-2 mt-3 rounded-lg">
          {/* <div className=" rounded-lg"> */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 focus:bg-white p-2 rounded-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Name: "
              value={user.name}
              onChange={handleChange}
              className="text-[0.7rem] ring ring-gray-400 px-3 py-2 rounded-md "
            />
            <input
              type="phone"
              name="mobile"
              placeholder="Mobile: "
              value={user.mobile}
              onChange={handleChange}
              className="text-[0.7rem] ring ring-gray-400 px-3 py-2 rounded-md "
            />
            <input
              type="email"
              name="email"
              placeholder="Email: "
              value={user.email}
              onChange={handleChange}
              className="text-[0.7rem] ring ring-gray-400 px-3 py-2 rounded-md "
            />
            <button
              type="submit"
              className="w-full py-2 mt-90 ring-1 ring-green-300 rounded-sm text-[0.8rem] text-white flex justify-center   bg-green-600 "
            >
              <b>Update Profile</b>
            </button>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profilepage;
