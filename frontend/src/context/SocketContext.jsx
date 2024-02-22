import { createContext, useContext, useEffect, useState } from "react";
import {  useAuthContext } from "./AuthContext";
import io from "socket.io-client"

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]); // Fix typo here

    const { authUser } = useAuthContext();

    useEffect(() => {
        if(authUser){
            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id,
                },
            });
            setSocket(socket);

            socket.on("getOnlineusers", (users) => {
                setOnlineUsers(users); // Fix typo here
            })

            return () => socket.close();
        } else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);


    return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>
}
