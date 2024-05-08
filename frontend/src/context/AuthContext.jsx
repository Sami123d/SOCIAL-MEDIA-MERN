import { createContext, useEffect, useReducer } from "react";
import AuthReducer from  "./AuthReducer.js"

const INITIAL_STATE = {
    user: {
      "_id": {
        "$oid": "6632045c9bfa630a2967ac29"
      },
      "username": "tofee",
      "email": "tofee@mail.com",
      "password": "$2b$10$2IYgaGJS88Yorwr6Q.GFEORkj7z7kz4XL4vWpw4ZWBdnvUuc/eT5W",
      "profilePicture": "",
      "coverPicture": "",
      "followers": [
        "663204519bfa630a2967ac27",
        "66337a8c64ac0e01f84e128a"
      ],
      "followings": [],
      "isAdmin": false,
      "createdAt": {
        "$date": "2024-05-01T08:59:08.748Z"
      },
      "updatedAt": {
        "$date": "2024-05-02T11:37:22.027Z"
      },
      "__v": 0
    },
    isFetching: false,
    error: false,
  };
  
  
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    // useEffect(()=>{
    //   localStorage.setItem("user", JSON.stringify(state.user))
    // },[state.user])
    
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };