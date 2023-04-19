/////////// ATTENTION: GLOBAL IMPORTS MUST BE AT THE TOP OF THE FILE ///////////
import "./global";
////////////////////////////////////////////////////////////////////////////////

const {
  default: AsyncStorage,
} = require("@react-native-async-storage/async-storage");
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ConnectPage from './src/screen/ConnectPage';
import WalletConnectManager from "./src/Context/WalletConnectManager";

export default function App() {
  return (
    <View style={styles.container}>
      <WalletConnectProvider
        bridge="https://bridge.walletconnect.org"
        redirectUrl={
          Platform.OS === "web" ? window.location.origin : "expodappwalletconnect://" // TODO: Change this to your app's URL
        }
        storageOptions={{
          asyncStorage: AsyncStorage,
        }}
      >
        <WalletConnectManager>
          <ConnectPage />
        </WalletConnectManager>
      </WalletConnectProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
