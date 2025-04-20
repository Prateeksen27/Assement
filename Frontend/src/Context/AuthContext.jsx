import { createContext, useState, useEffect, useCallback } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setLoginLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({ username: '', email: '', password: '' });
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });

    useEffect(() => {
        const storedUser = localStorage.getItem("User");
        setUser(storedUser ? JSON.parse(storedUser) : null);
    }, []);
    const updateRegister = useCallback((info) => {
        setRegisterInfo(info);
    }, []);
    const updateLogin = useCallback((info) => {
        setLoginInfo(info);
    }, []);
    const registerUser = useCallback(async (e) => {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);
        try {
            const res = await postRequest(`${baseUrl}/auth/register`, JSON.stringify(registerInfo), {
                headers: { "Content-Type": "application/json" }
            });
            if (res?.error) {
                setRegisterError(res);
            } else {
                localStorage.setItem("User", JSON.stringify(res));
                setUser(res);
            }
        } catch (error) {
            setRegisterError({ error: "Something went wrong!" });
        } finally {
            setIsRegisterLoading(false);
        }
    }, [registerInfo]);

    const loginUser = useCallback(async (e) => {
        e.preventDefault();
        setLoginLoading(true);
        setLoginError(null);
        const res = await postRequest(`${baseUrl}/auth/login`, JSON.stringify(loginInfo), {
            headers: { "Content-Type": "application/json" }
        });
        setLoginLoading(false);
        if (res?.error) {
            setLoginError(res);
        } else {
            localStorage.setItem("User", JSON.stringify(res));
            setUser(res);
        }
    }, [loginInfo]);

    const logoutUser = useCallback(() => {
        localStorage.removeItem("User");
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider value={{ user, registerInfo, setRegisterInfo, registerUser, registerError, isRegisterLoading, loginUser, loginError, loginInfo, setLoginInfo, isLoginLoading, logoutUser,updateRegister,updateLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
