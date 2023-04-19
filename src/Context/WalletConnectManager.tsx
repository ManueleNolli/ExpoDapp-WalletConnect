import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { useCallback, useState } from "react";
import { AccountContext } from "./AccountContext";
import { Alert } from "react-native";

type WalletConnectManagerProps = {
    children: React.ReactNode;
}

export default function WalletConnectManager({ children }: WalletConnectManagerProps) {
    const [address, setAddress] = useState<string>('');
    const [connected, setConnected] = useState<boolean>(false);

    const connector = useWalletConnect();

    const connectWallet = async () => {
        await connector.connect().then((data) => {
            setConnected(true);
            setAddress(data.accounts[0]);
        }).catch((error) => {
            Alert.alert("Error", "An error occurred while connecting, please restart the app and try again.");
        });
    };

    const killSession = async () => {
        await connector.killSession().then(() => {
            setConnected(false);
            setAddress('');
        }).catch((error) => {
            // Unfortunatly, sometimes the killSession method fails, so we need to restart the app to clear the session
            // I have no idea why this happens, but it does
            // Also, I have no idea how to automate this, so the user have to manually restart the app
            Alert.alert("Error", "An error occurred while disconnecting, please restart the app and try again.");
        });
    };

    return (
        <AccountContext.Provider value={{ address, connected, connect: connectWallet, killSession }}>
            {children}
        </AccountContext.Provider>
    )
}