import React, {createContext, useState} from 'react';

export const UserContext = createContext();
export const TokenContext = createContext();

export const UserProvider = ({ children}) => {
    const [user, setUser] = useState(null);
    

    return (
        <UserContext.Provider value = {{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const TokenProvider = ({ children}) => {
    const [token, setToken] = useState(null);   

    return (
        <UserContext.Provider value = {{token,setToken}}>
            {children}
        </UserContext.Provider>
    );
};



