import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { AccountContext } from "../Context/AccountContext";


export default function ConnectPage() {
    const state = useContext(AccountContext);
    const { address, connected, connect, killSession } = state;
    return (
        <View>
            <Text>Address: {address}</Text>
            <Text>Connected: {connected ? "Yes" : "No"}</Text>
            {!connected ?
                <Button onPress={connect} title="Connect" />
                :
                <Button onPress={killSession} title="Disconnect" />
            }
        </View>
    )
}