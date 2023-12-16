import Head from "next/head";
import { useState } from "react";
import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  TextField,
  Button,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import Compdf from "./Compdf";

const now = new Date();
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Page = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [pdfcontent, setpdfcontent] = useState("");
  const handleOpen = (data, order) => {
    setpdfcontent(data);
    setOpen(true);
  };
  return (
    <>
      <Head>
        <title>Light Scan</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Compdf pdfcontent={pdfcontent}></Compdf>
          </Box>
        </Modal>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="URL/IP Address" id="fullWidth" />
            <Button
              variant="contained"
              style={{
                margin: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Scan
            </Button>
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
                open={handleOpen}
                orders={[
                  {
                    id: "f69f88012978187a6c12897f",
                    ref: "Public Reconnaissance",
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
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
