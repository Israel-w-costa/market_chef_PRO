import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState();

    function loginUser(data) {
        setUser(data);
        
         localStorage.setItem("user", JSON.stringify(data)); 
    }
    
    function logoutUser() {
        setUser(null);
        localStorage.removeItem("user");
    }

    const value = { user, loginUser, logoutUser };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;