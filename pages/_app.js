import { Provider } from "react-redux";
import "../styles/globals.css";
import { wrapper, store } from '../store/store'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default wrapper.withRedux(MyApp);
