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
        display: { md: "flex", xs: "none" },
      }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={10}>
        <Grid item md={3}></Grid>
        <Grid item md={6}>
          <SubscribeBox>
            <SubscribeHeadingBox>
              <ThemeProvider theme={subscribeheadingtheme}>
                <Typography variant="h4">
                  Subscribe on our newsletter
                </Typography>
              </ThemeProvider>
              <ThemeProvider theme={subscribeheadingsubtheme}>
                <Typography variant="h4" sx={{ marginTop: "10px" }}>
                  Get daily news on upcoming offers from many suppliers all over
                  the world
                </Typography>
              </ThemeProvider>
            </SubscribeHeadingBox>
            <SubscribeFormLayout></SubscribeFormLayout>
          </SubscribeBox>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </Grid>
  );
}
