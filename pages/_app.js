import "../styles/style.css";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "../redux/store";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CookiesProvider>
  );
}
