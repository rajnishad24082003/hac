import { format } from "date-fns";
import PropTypes from "prop-types";
import ArrowDownLeftIcon from "@heroicons/react/24/solid/ArrowDownLeftIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { SeverityPill } from "src/components/severity-pill";
import Compdf from "@/pages/Compdf";
import { saveAs } from "file-saver";
import axios from "axios";
import { useEffect, useState } from "react";

const statusMap = {
  low: "success",
  medium: "info",
  high: "warning",
  critical: "error",
};

export const OverviewLatestOrders = (props) => {
  const { orders = [], sx, open, resFetch } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Report" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vulnerability Name</TableCell>
                <TableCell sortDirection="desc">Report</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                return (
                  <TableRow hover key={order.id}>
                    <TableCell
                      onClick={() => {
                        open(resFetch, order);
                      }}
                    >
                      {order.ref}
                    </TableCell>
                    <TableCell>
                      <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
                        <ArrowDownLeftIcon
                          onClick={() => {
                            open(resFetch, order);
                          }}
                        />
                      </SvgIcon>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};
