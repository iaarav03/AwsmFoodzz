import React from "react";
import { createContext } from "react";

const UserContext = createContext({
  user: {
    lat:26.9124336,
    lng:75.7872709
  },
});
export default UserContext;
