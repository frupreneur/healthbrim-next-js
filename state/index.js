import React, { createContext, useContext } from "react";
import { DATABASE } from "@/db";

const AppContext = createContext();

export default function StateProvider({ children }) {
  return <AppContext.Provider value={DATABASE}>{children}</AppContext.Provider>;
}

export function useGlobalState() {
  const state = useContext(AppContext);
  return state;
}
