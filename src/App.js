import "./App.css";
import { MoonPayProvider } from "@moonpay/moonpay-react";
import { MoonPayBuyWidget } from "@moonpay/moonpay-react";
function App() {
  return (
    <div className="App">
      <MoonPayProvider
        apiKey="pk_live_NuFhvAAONew9PvWCMN7JDMRhrWsMER"
        environment="sandbox"
        debug
      >
        <div className="test">
          <MoonPayBuyWidget
            variant="embedded"
            baseCurrencyCode="usd"
            baseCurrencyAmount="100"
            defaultCurrencyCode="btc"
            walletAddress="147PfSyiHcNrH8kd3vAwU6a3eLarqcoMp3"
            paymentMethod="credit_debit_card"
            language="fr"
            showOnlyCurrencies="btc"
            showWalletAddressForm="false"
            visible
          />
        </div>
      </MoonPayProvider>
    </div>
  );
}

export default App;
