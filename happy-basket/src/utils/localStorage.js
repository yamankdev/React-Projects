export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const updatedUsers = (users, updatedUser) => {
  return users.map((user) =>
    user.mobile === updatedUser.mobile ? updatedUser : user,
  );
};

export const saveCurrentUser = (user) => {
  localStorage.setItem("activeUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  const users = localStorage.getItem("activeUser");
  return users ? JSON.parse(users) : null;
};

export const removeCurrentUser = (user) => {
  localStorage.removeItem("activeUser");
};
