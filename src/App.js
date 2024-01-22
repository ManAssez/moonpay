import "./App.css";
import { MoonPayProvider } from "@moonpay/moonpay-react";
import { MoonPayBuyWidget } from "@moonpay/moonpay-react";
function App() {
  return (
    <div className="App">
      <MoonPayProvider
        apiKey="pk_test_WMS9Po3WNc39YQcS6JMEAWpldcaMOvY"
        environment="sandbox"
        debug
      >
        <div className="test">
          <MoonPayBuyWidget
            variant="embedded"
            baseCurrencyCode="usd"
            baseCurrencyAmount="100"
            defaultCurrencyCode="eth"
            walletAddress="0xc216eD2D6c295579718dbd4a797845CdA70B3C36"
            paymentMethod="credit_debit_card"
            language="fr"
            showOnlyCurrencies="eth"
            showWalletAddressForm="false"
            visible
          />
        </div>
      </MoonPayProvider>
    </div>
  );
}

export default App;
