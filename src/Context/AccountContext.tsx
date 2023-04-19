import { useWalletConnect } from "@walletconnect/react-native-dapp";
import React from "react";

interface AccountContextProps {
    address: string;
    connected: boolean;
    connect: () => void;
    killSession: () => void;
}

export const AccountContext = React.createContext<AccountContextProps>({
    address: '',
    connected: false,
    connect: () => { },
    killSession: () => { }
});
