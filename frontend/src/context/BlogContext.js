import { createContext } from "react";

export const BlogContext = createContext();

// children represents the app tag in the index.js file
export const BlogsContextProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
