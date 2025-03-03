import { createContext, useReducer } from "react";

export const BlogContext = createContext();

export const blogsReducer = (state, action) => {
  switch (action.type) {
    case "SET-BLOGS":
      return {
        blogs: action.payload,
      };
    case "CREATE-BLOG":
      return {
        blogs: [action.payload, ...state.blogs],
      };
    default:
      return state;
  }
};

// children represents the app tag in the index.js file
export const BlogsContextProvider = ({ children }) => {
  // Here is the useReducer func,
  // first param is func var
  // and second is the initial value
  const [state, dispatch] = useReducer(blogsReducer, {
    blogs: null,
  });
  return (
    <BlogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

// Check this little image out
// https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif
