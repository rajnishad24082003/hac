import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import CalendarIcon from "@heroicons/react/24/solid/CalendarIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Light Scan",
    path: "/",
    icon: (
      <SvgIcon fontSize="small" style={{ color: "#02c751" }}>
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Intermediate Scan",
    path: "/intermediate",
    icon: (
      <SvgIcon fontSize="small" style={{ color: "#ffe600" }}>
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Heavy Scan",
    path: "/heavy",
    icon: (
      <SvgIcon fontSize="small" style={{ color: "#ff9100" }}>
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Ultimate Scan",
    path: "/ultimate",
    icon: (
      <SvgIcon fontSize="small" style={{ color: "#ff1e00" }}>
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Past Scans",
    path: "/past",
    icon: (
      <SvgIcon fontSize="small">
        <CalendarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Account",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Settings",
    path: "/settings",
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },
];
