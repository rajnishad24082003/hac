import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import {TextField,Button} from "@mui/material";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>heavy Scan</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
      <Box
      sx={{
        width: "100%",
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="URL/IP Address" id="fullWidth" /><Button variant="contained" style={{margin:"20px",display:"flex",justifyContent:"center"}}>scan</Button>
    </Box>
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: "100%" }}
              value="15+"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: "100%" }}
              value="15"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTasksProgress sx={{ height: "100%" }} value={100} />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalProfit sx={{ height: "100%" }} value="50 Seconds" />
          </Grid>
          <Grid xs={12} lg={8}>
            <OverviewSales
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <OverviewTraffic
              chartSeries={[23, 11, 43, 15, 22]}
              labels={["Low", "Medium", "High", "Major", "Critical"]}
              sx={{ height: "100%" }}
            />
          </Grid>

          <Grid xs={12} md={12} lg={12}>
            <OverviewLatestOrders
              orders={[
                {
                  id: "f69f88012978187a6c12897f",
                  ref: "com.simpl.android-Android",
                  amount: 30.5,
                  customer: {
                    name: "Android Vulnerability",
                  },
                  createdAt: 1555016400000,
                  status: "critical",
                },
                {
                  id: "9eaa1c7dd4433f413c308ce2",
                  ref: "com.zomata.zomato-IOS",
                  amount: 25.1,
                  customer: {
                    name: "IOS Vulnerability",
                  },
                  createdAt: 1555016400000,
                  status: "critical",
                },
                {
                  id: "01a5230c811bd04996ce7c13",
                  ref: "com.ubercab.UberClient-IOS",
                  amount: 10.99,
                  customer: {
                    name: "IOS Vulnerability",
                  },
                  createdAt: 1554930000000,
                  status: "medium",
                },
                {
                  id: "1f4e1bd0a87cea23cdb83d18",
                  ref: "com.facebook.lite-IOS",
                  amount: 96.43,
                  customer: {
                    name: "IOS Vulnerability",
                  },
                  createdAt: 1554757200000,
                  status: "low",
                },
                {
                  id: "1f4e1bd0a87cea23cdb83d18",
                  ref: "com.insta.lite-IOS",
                  amount: 96.43,
                  customer: {
                    name: "IOS Vulnerability",
                  },
                  createdAt: 1554757200000,
                  status: "low",
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
