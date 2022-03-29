import React, { createContext } from 'react';
import UseFirebase from '../hooks/UseFirebase';





export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContexts = UseFirebase();
    return (
        <div>
            <AuthContext.Provider value={allContexts}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;