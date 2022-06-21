import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "solid",
            borderWidth: "2px",
            borderRadius: "16px",
            width: "100%",
            height: "100%",
            p: 2,
            m: 2
          }}
        >
          IMAGE
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "solid",
            borderWidth: "2px",
            borderRadius: "16px",
            width: "100%",
            height: "100%",
            p: 2,
            m: 2
          }}
        >
          HERO INFO
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
//<Box sx={{ display: "flex", justifyContent: "center" }}>
/* </Box> */
