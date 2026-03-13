import { createContext, useContext, useEffect, useReducer } from "react";
import UserReducer, { initialState } from "./UserReducer";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state.users));
    localStorage.setItem("activeUser", JSON.stringify(state.currentUser));
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
