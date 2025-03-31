
import React, { createContext, useState } from "react";
import getState from "./store";

export const Context = createContext(null);

const AppContext = ({ children }) => {
  const [state, setState] = useState(
    getState({
      getStore: () => state.store,
      getActions: () => state.actions,
      setStore: (updatedStore) =>
        setState({
          store: { ...state.store, ...updatedStore },
          actions: { ...state.actions },
        }),
    })
  );

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;

