import { Grid } from "@mui/material";
import {
  SubscribeBox,
  SubscribeHeadingBox,
  subscribeheadingtheme,
  subscribeheadingsubtheme,
  SubscribeFormLayout,
} from "../../Components/SubscribeTheme/SubscribeTheme";
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
export default function HomePageSection9() {
  return (
    <Grid
      container
      xs={12}
      md={12}
      sx={{
        top: { md: "2000px", xs: "1149px" },
        position: "absolute",
        display: { md: "flex" },
        border: "1px solid blue",
      }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={10}>
        <Grid item md={3}>
          1
        </Grid>
        <Grid item md={6} sx={{ border: "2px solid red" }}>
          <SubscribeBox>
            <SubscribeHeadingBox>
              <ThemeProvider theme={subscribeheadingtheme}>
                <Typography variant="h4">Suppliers by region</Typography>
              </ThemeProvider>
              <ThemeProvider theme={subscribeheadingsubtheme}>
                <Typography variant="h4">
                  Get daily news on upcoming offers from many suppliers all over
                  the world
                </Typography>
              </ThemeProvider>
            </SubscribeHeadingBox>
            <SubscribeFormLayout></SubscribeFormLayout>
          </SubscribeBox>
        </Grid>
        <Grid item md={3}>
          3
        </Grid>
      </Grid>
    </Grid>
  );
}
