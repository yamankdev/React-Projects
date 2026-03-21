

function EditProfile({handleChange, handleSubmit, user}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 lg:gap-5 lg:w-[70%] p-2 lg:p-7 focus:bg-white rounded-md"
    >
      <input
        type="text"
        name="name"
        placeholder="Name: "
        value={user.name}
        onChange={handleChange}
        className="text-[0.8rem] px-3 py-2 lg:py-3 ring ring-gray-400 rounded-md "
      />
      <input
        type="phone"
        name="mobile"
        placeholder="Mobile: "
        value={user.mobile}
        onChange={handleChange}
        className="text-[0.8rem] px-3 py-2 lg:py-3 ring ring-gray-400 rounded-md "
      />
      <input
        type="email"
        name="email"
        placeholder="Email: "
        value={user.email}
        onChange={handleChange}
        className="text-[0.8rem] px-3 py-2 lg:py-3 ring ring-gray-400 rounded-md "
      />
      <button
        type="submit"
        className="w-full py-2 lg:py-3 mt-84 lg:mt-0 ring-2 ring-green-300 rounded-sm text-[0.8rem] text-white flex justify-center bg-green-600 lg:bg-white lg:text-green-600 lg:hover:bg-green-600 lg:hover:text-white" 
      >
        <b>Update Profile</b>
      </button>
    </form>
  );
}

export default EditProfile;
