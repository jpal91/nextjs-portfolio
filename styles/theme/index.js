import { createTheme } from "@mui/material";

import typography from "./base/typography";

import grid from "./components/grid";
import appbar from "./components/appbar";
import container from "./components/container";
import breakpoints from "./base/breakpoint";

export default createTheme({
  typography: { ...typography },
  breakpoints: { ...breakpoints },
  components: {
    MuiGrid: { ...grid },
    MuiAppBar: { ...appbar },
    MuiContainer: { ...container }
  }
});
