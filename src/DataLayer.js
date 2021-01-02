import React, { useContext, useReducer, createContext } from "react";
import reducer, { notes } from "./reducer";

const StateContext = createContext();

const ProvideNotes = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, notes)}>
      {children}
    </StateContext.Provider>
  );
};

export const useDiaryNotesAPI = () => useContext(StateContext);

export default ProvideNotes;
