import "../styles/globals.css";
//redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "../redux/store";
import { Toaster } from "react-hot-toast";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Component {...pageProps} />
        </div>
        <Toaster />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
