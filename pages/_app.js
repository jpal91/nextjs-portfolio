import { Provider } from "react-redux";
//import "../styles/globals.css";
import { wrapper, store } from "../store/store";
import { ThemeProvider, CssBaseline, Container } from "@mui/material/";
import Image from "next/image";

import theme from "../styles/theme/";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Image
          alt="mountains"
          src="/images/kalen-emsley.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ zIndex: -1 }}
        />
        <Container
          className="center"
          fluid="true"
          sx={{ display: "flex", flexDirection: "column" }}
          id="5"
        >
          <NavBar />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
