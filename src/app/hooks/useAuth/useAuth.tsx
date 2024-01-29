import { useState } from "react";

type UserProps = {
    name: string,
    permissions: string[],
    isAdmin: boolean,
    token: string
}

const useAuth = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const isAuthenticated = !!user;
    
    const login = ({login, password}: {login: string, password: string}) => {
        const response = {
            name: "Jhon",
            permissions: [""],
            isAdmin: true,
            token: "token"
        }

        setUser(response);
    }

    const logout = () => {

        //Remover Cooks;
        // Remover dados do localStorage;

        setUser(null);
    }


    return  {
        user,
        isAuthenticated,
        login,
        logout
            }
}

export default useAuth;