import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserData } from "../context/UserContext";

function AddressInput({ handlePage = (pageValue) => {} }) {
  const [addr, setAddr] = useState({
    addressType: "",
    name: "",
    mobile: "",
    house: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    isDefault: "",
  });
  const { state, dispatch } = useUserData();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setAddr((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ADDRESS", payload: addr });
    console.log("New address has been added successfully.");
    navigate("/address");
    return handlePage(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" relative flex flex-col w-[95%] mx-auto mt-3 px-3 py-4 min-h-130 rounded-xl bg-white"
    >
      {/* Share Phone Number to login */}
      <div className="flex flex-col gap-2 text-[0.7rem] justify-between">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={addr.name}
          onChange={handleChange}
          className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={addr.mobile}
          onChange={handleChange}
          className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
        />
        <input
          type="text"
          name="house"
          placeholder="House No"
          value={addr.house}
          onChange={handleChange}
          className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
        />
        <input
          type="text"
          name="area"
          placeholder="Area"
          value={addr.area}
          onChange={handleChange}
          className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
        />
        <input
          type="text"
          name="landmark"
          placeholder="Landmark"
          value={addr.landmark}
          onChange={handleChange}
          className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={addr.city}
          onChange={handleChange}
          className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={addr.state}
          onChange={handleChange}
          className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
        />
        <input
          type="text"
          name="pincode"
          placeholder="PIN code"
          value={addr.pincode}
          onChange={handleChange}
          className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
        />
        <div className="flex justify-between text-[0.7rem] p-2">
          <div className="flex gap-1">
            <label htmlFor="addressType">Address Type: </label>
            <select
              name="addressType"
              id="addressType"
              value={addr.addressType}
              onChange={handleChange}
              className="border rounded-md w-15 border-gray-400"
            >
              <option value="other" defaultValue={"other"}>
                Other
              </option>
              <option value="home">Home</option>
              <option value="work">Work</option>
            </select>
          </div>
          <div className="flex gap-1">
            <label htmlFor="isDefault">Is Default: </label>
            <select
              name="isDefault"
              id="isDefault"
              value={addr.isDefault}
              onChange={handleChange}
              className="border rounded-md w-15 border-gray-400"
            >
              <option value="false" defaultValue={"false"}>
                False
              </option>
              <option value="true">True</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-12 ring-1 ring-green-300 rounded-sm text-[0.8rem] text-white flex justify-center   bg-green-600 "
        >
          <b>Save Address</b>
        </button>
      </div>
    </form>
  );
}

export default AddressInput;
