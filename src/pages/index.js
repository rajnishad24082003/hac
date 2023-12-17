import Head from "next/head";
import { useState } from "react";
import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@mui/material/Modal";
import { ToastContainer, toast } from "react-toastify";
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
import { useEffect } from "react";
import axios from "axios";

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
  let [wordpress, setwordpress] = useState(false);
  let [avgvulscore, setavgvulscore] = useState(0);
  let [pieper, setpieper] = useState([0, 0, 0, 0, 0]);
  let [totalcve, settotalcve] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [pdfcontent, setpdfcontent] = useState("");
  const [orderval, setorderval] = useState({});
  const handleOpen = (data, order) => {
    setpdfcontent(data);
    setorderval(order);
    setOpen(true);
  };
  let [taskprogress, settaskprogress] = useState(0);
  let [timer, setTimer] = useState(0);
  let [scan, setscan] = useState("");
  let [resFetch, setResFetch] = useState({});
  let scanbt = async (e) => {
    let date1 = new Date();
    try {
      e.preventDefault();
      let temp = scan;
      if (scan.search("https://") != -1) {
        temp = scan.substring(8);
      } else if (scan.search("http://") != -1) {
        temp = scan.substring(7);
      } else if (scan.search("http://wwww.") != -1) {
        temp = scan.substring(12);
      } else if (scan.search("www.") != -1) {
        temp = scan.substring(4);
      }
      let response = await axios.post("http://10.1.17.129:3000/scan", {
        domainIp: temp,
        level: "light",
        wordpress: wordpress,
      });

      let responsenmap = await axios.get("http://10.1.17.129:3000/nmappdata");
      console.log(response.data.data.ShodanData.Vulns[0]);
      let total = 0;
      let len = 0;
      let temparr = [0, 0, 0, 0, 0];
      Object.keys(response.data.data.ShodanData.Vulns[0]).map((key, ind) => {
        total += response.data.data.ShodanData.Vulns[0][key].cvss;
        len = len + 1;
        if (response.data.data.ShodanData.Vulns[0][key].cvss <= 2) {
          temparr[0] = temparr[0] + 1;
        } else if (response.data.data.ShodanData.Vulns[0][key].cvss <= 4) {
          temparr[1] = temparr[1] + 1;
        } else if (response.data.data.ShodanData.Vulns[0][key].cvss <= 6) {
          temparr[2] = temparr[2] + 1;
        } else if (response.data.data.ShodanData.Vulns[0][key].cvss <= 8) {
          temparr[3] = temparr[3] + 1;
        } else if (response.data.data.ShodanData.Vulns[0][key].cvss <= 10) {
          temparr[4] = temparr[4] + 1;
        }
      });
      setpieper(temparr);
      let date2 = new Date();
      setavgvulscore((total / len).toFixed(2));
      // console.log(
      //   responsenmap.data.Data[responsenmap.data.Data.length - 1].Portss
      // );

      settaskprogress(100);
      settotalcve(len);
      setTimer((date2 - date1) / 1000);
      setResFetch((prev) => {
        return {
          ...prev,
          domain: temp,
          postss: responsenmap.data.Data[0].Portss
            ? responsenmap.data.Data[0].Portss
            : [],
          ShodanData: response.data.data.ShodanData,
        };
      });
      toast.success("scanning done", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  //console.log(resFetch);

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
        <ToastContainer />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Compdf pdfcontent={pdfcontent} orderval={orderval}></Compdf>
          </Box>
        </Modal>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="URL/IP Address"
              id="fullWidth"
              onChange={(e) => {
                setscan(e.target.value);
              }}
            />
            <Button
              variant="contained"
              style={{
                margin: "20px",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={scanbt}
            >
              Scan
            </Button>
            <label>wordpress</label>
            <Checkbox
              value={wordpress}
              onChange={(e) => {
                setwordpress(e.target.checked);
              }}
            ></Checkbox>
          </Box>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: "100%" }}
                value={avgvulscore}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value={totalcve}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTasksProgress
                sx={{ height: "100%" }}
                value={taskprogress}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalProfit sx={{ height: "100%" }} value={timer} />
            </Grid>
            <Grid xs={12} lg={8}>
              <OverviewSales
                chartSeries={[
                  {
                    name: "This year",
                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19],
                  },
                  {
                    name: "Last year",
                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12],
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewTraffic
                chartSeries={pieper}
                labels={["Low", "Medium", "High", "Major", "Critical"]}
                sx={{ height: "100%" }}
              />
            </Grid>

            <Grid xs={12} md={12} lg={12}>
              <OverviewLatestOrders
                open={handleOpen}
                resFetch={resFetch}
                orders={[
                  {
                    id: "f69f88012978187a6c12897f",
                    ref: "Public Reconnaissance",
                  },
                  {
                    id: "f69f8801297818794ije12897f",
                    ref: "Running Services",
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
