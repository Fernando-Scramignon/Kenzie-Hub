import { IUser } from "../interfaces/User";
import {
    createContext,
    ReactNode,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";
import { AxiosRequest } from "../classes/axios";

interface UserProviderProps {
    children: ReactNode;
}

interface UserProviderData {
    user: IUser | undefined;
    setUser: Dispatch<SetStateAction<IUser | undefined>>;
    getUpdateUser: () => Promise<void>;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

function useUser() {
    const context = useContext(UserContext);
    return context;
}

function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<IUser>();

    async function getUpdateUser(): Promise<void> {
        const token: string | null = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/login/";
            return;
        }
        AxiosRequest.getUser(token)
            .then((res) => {
                setUser(res.data[0]);
            })
            .catch((err) => {
                console.error(err);
                window.location.href = "/login/";
            });
    }

    return (
        <UserContext.Provider value={{ user, setUser, getUpdateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider, useUser };
