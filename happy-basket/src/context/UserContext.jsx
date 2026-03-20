import { createContext, useContext, useEffect, useReducer } from "react";
import UserReducer, { initialState } from "../reducer/UserReducer";
import { saveCurrentUser, saveUsers } from "../utils/localStorage";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Saving the activeUser and activeUser inside Users in the localStorage
  useEffect(() => {
    saveUsers(state.users)
    saveCurrentUser(state.currentUser);
    // localStorage.setItem("users", JSON.stringify(state.users));
    // localStorage.setItem("activeUser", JSON.stringify(state.currentUser));
  }, [state.users, state.currentUser]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserContext);
}
