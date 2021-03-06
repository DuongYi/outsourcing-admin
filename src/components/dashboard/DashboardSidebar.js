/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  makeStyles,
} from "@material-ui/core";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AlbumIcon from "@material-ui/icons/Album";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import CameraIcon from "@material-ui/icons/Camera";
import ChatIcon from "@material-ui/icons/Chat";
import CheckBoxRoundedIcon from "@material-ui/icons/CheckBoxRounded";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import HistoryIcon from "@material-ui/icons/History";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import MoneyIcon from "@material-ui/icons/Money";
import MoneyRoundedIcon from "@material-ui/icons/MoneyRounded";
import PaymentIcon from "@material-ui/icons/Payment";
import PublicIcon from "@material-ui/icons/Public";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import RemoveShoppingCartOutlinedIcon from "@material-ui/icons/RemoveShoppingCartOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsSoccerTwoToneIcon from "@material-ui/icons/SportsSoccerTwoTone";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";
import StoreIcon from "@material-ui/icons/Store";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import PropTypes from "prop-types";
import { Link as RouterLink, useLocation } from "react-router-dom";

import NavSection from "../NavSection";
import Scrollbar from "../Scrollbar";

const sections = [
  {
    title: "Menu t???ng",
    items: [
      {
        title: "Overview",
        path: "/overview",
        icon: <AssessmentIcon fontSize="small" />,
      },
      {
        title: "Th???ng k??",
        path: "/thong-ke",
        icon: <AssessmentIcon fontSize="small" />,
      },
      {
        title: "Th??nh vi??n",
        path: "/thanh-vien",
        icon: <SupervisorAccountIcon fontSize="small" />,
      },
      {
        title: "??i???m danh",
        path: "/diem-danh",
        icon: <AssignmentTurnedInIcon fontSize="small" />,
      },
      {
        title: "Doanh thu chi ti???t",
        path: "/doanh-thu",
        icon: <AccountBalanceIcon fontSize="small" />,
      },
      {
        title: "Chat th??? gi???i",
        icon: <ChatIcon fontSize="small" />,
        children: [
          {
            title: "Th??? c??o",
            path: "/chat-tg/nap-the-cao",
            icon: <MoneyIcon fontSize="small" />,
          },
          {
            title: "V?? th??? si??u r???",
            path: "/chat-tg/nap-tsr",
            icon: <AccountBalanceWalletIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "N???p ti???n",
        icon: <LocalAtmIcon fontSize="small" />,
        children: [
          {
            title: "N???p t??? v?? THESIEURE",
            path: "/nap-tien/nap-tsr",
            icon: <MoneyIcon fontSize="small" />,
          },
          {
            title: "N???p t??? v?? MOMO",
            path: "/nap-tien/nap-momo",
            icon: <AccountBalanceWalletIcon fontSize="small" />,
          },
          {
            title: "N???p t??? ng??n h??ng",
            path: "/nap-tien/nap-atm",
            icon: <PaymentIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "G???ch th???",
        icon: <MoneyRoundedIcon fontSize="small" />,
        children: [
          {
            title: "Th??? kh??ch n???p",
            path: "/gach-the/the-khach-nap",
            icon: <DirectionsWalkIcon fontSize="small" />,
          },
          {
            title: "Th??? th??nh c??ng",
            path: "/gach-the/the-thanh-cong",
            icon: <CheckBoxRoundedIcon fontSize="small" />,
          },
          {
            title: "C??i ?????t",
            path: "/gach-the/cai-dat-gach-the",
            icon: <SettingsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "R??t ti???n",
        icon: <TransferWithinAStationIcon fontSize="small" />,
        children: [
          {
            title: "R??t ti???n",
            path: "/rut-tien/rut-tien",
            icon: <TransferWithinAStationIcon fontSize="small" />,
          },
          {
            title: "L???ch s??? r??t th??? c??o",
            path: "/rut-tien/lich-su-rut-the-cao",
            icon: <HistoryIcon fontSize="small" />,
          },
          {
            title: "Danh s??ch th??? c??o",
            path: "/rut-tien/danh-sach-the-cao",
            icon: <ListAltIcon fontSize="small" />,
          },
        ],
      },
    ],
  },
  {
    title: "Giao d???ch t??? ?????ng",
    items: [
      {
        title: "B??n nick",
        icon: <RemoveShoppingCartIcon fontSize="small" />,
        children: [
          {
            title: "Danh s??ch giao d???ch",
            path: "/ban-nick/danh-sach-giao-dich",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Danh s??ch t??n mi???n block",
            path: "/ban-nick/danh-sach-ten-mien-block",
            icon: <FormatListBulletedIcon fontSize="small" />,
          },
          {
            title: "Giao d???ch",
            path: "/ban-nick/giao-dich",
            icon: <CompareArrowsIcon fontSize="small" />,
          },
          {
            title: "Config gi??",
            path: "/bannick/config-gia",
            icon: <SettingsApplicationsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Nh???p nick",
        icon: <AddShoppingCartIcon fontSize="small" />,
        children: [
          {
            title: "Danh s??ch giao d???ch",
            path: "/nhap-nick/danh-sach-giao-dich",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Danh s??ch t??n mi???n block",
            path: "/nhap-nick/danh-sach-ten-mien-block",
            icon: <FormatListBulletedIcon fontSize="small" />,
          },
          {
            title: "Giao d???ch",
            path: "/nhap-nick/giao-dich",
            icon: <CompareArrowsIcon fontSize="small" />,
          },
          {
            title: "Config gi??",
            path: "/nhap-nick/config-gia",
            icon: <SettingsApplicationsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "B??n ?????",
        icon: <RemoveShoppingCartOutlinedIcon fontSize="small" />,
        children: [
          {
            title: "????n h??ng",
            path: "/ban-do/don-hang",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "????? ??ang b??n",
            path: "/ban-do/do-dang-ban",
            icon: <StoreIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "B??n v??ng",
        icon: <SportsSoccerIcon fontSize="small" />,
        children: [
          {
            title: "????n h??ng",
            path: "/ban-vang/don-hang",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "L???ch s??? r??t v??ng",
            path: "/ban-vang/lich-su-rut-vang",
            icon: <HistoryIcon fontSize="small" />,
          },
          {
            title: "C??i ?????t b??n v??ng",
            path: "/ban-vang/cai-dat-ban-vang",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "C??i ?????t nh??n v???t",
            path: "/ban-vang/cai-dat-nhan-vat",
            icon: <SettingsApplicationsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Nh???p v??ng",
        icon: <SportsSoccerTwoToneIcon fontSize="small" />,
        children: [
          {
            title: "????n h??ng",
            path: "/nhap-vang/don-hang",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "L???ch s??? r??t v??ng",
            path: "/nhap-vang/lich-su-rut-vang",
            icon: <HistoryIcon fontSize="small" />,
          },
          {
            title: "C??i ?????t b??n v??ng",
            path: "/nhap-vang/cai-dat-ban-vang",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "C??i ?????t nh??n v???t",
            path: "/nhap-vang/cai-dat-nhan-vat",
            icon: <SettingsApplicationsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "R??t v??ng",
        icon: <SportsVolleyballIcon fontSize="small" />,
        children: [
          {
            title: "Th??? c??o",
            path: "/rut-vang/nap-the-cao",
            icon: <MoneyIcon fontSize="small" />,
          },
          {
            title: "V?? th??? si??u r???",
            path: "/rut-vang/nap-tsr",
            icon: <AccountBalanceWalletIcon fontSize="small" />,
          },
        ],
      },
    ],
  },
  {
    title: "V??ng quay",
    items: [
      {
        title: "V??ng quay c?? l??i",
        icon: <AlbumIcon fontSize="small" />,
        children: [
          {
            title: "C??i ?????t",
            path: "/vqcolai/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh s??ch ph???n th?????ng",
            path: "/vqcolai/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "L???ch s???",
            path: "/vqcolai/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "V??ng quay si??u c???p",
        icon: <BlurCircularIcon fontSize="small" />,
        children: [
          {
            title: "C??i ?????t",
            path: "/vqsieucap/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh s??ch ph???n th?????ng",
            path: "/vqsieucap/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "L???ch s???",
            path: "/vqsieucap/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Quay nick cao c???p",
        icon: <CameraIcon fontSize="small" />,
        children: [
          {
            title: "C??i ?????t",
            path: "/quaynickcaocap/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh s??ch ph???n th?????ng",
            path: "/quaynickcaocap/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "L???ch s???",
            path: "/quaynickcaocap/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Quay nick 50 t???",
        icon: <DonutSmallIcon fontSize="small" />,
        children: [
          {
            title: "C??i ?????t",
            path: "/quaynick50ty/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh s??ch ph???n th?????ng",
            path: "/quaynick50ty/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "L???ch s???",
            path: "/quaynick50ty/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Quay nick Halloween",
        icon: <RadioButtonCheckedIcon fontSize="small" />,
        children: [
          {
            title: "C??i ?????t",
            path: "/qnhalloween/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh s??ch ph???n th?????ng",
            path: "/qnhalloween/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "L???ch s???",
            path: "/qnhalloween/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "V??ng quay ?????",
        icon: <PublicIcon fontSize="small" />,
        children: [
          {
            title: "C??i ?????t",
            path: "/vqdo/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh s??ch ph???n th?????ng",
            path: "/vqdo/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "L???ch s???",
            path: "/vqdo/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
    ],
  },
];

const useStyles = makeStyles(() => ({
  drawer: {
    "& .MuiDrawer-paperAnchorDockedLeft": {
      height: "calc(100%)",
      width: "280px",
      display: "block!important",
      position: "fixed!important",
    },
    "& .MuiDrawer-paper": {
      overflow: "hidden",
    },
  },
}));

function DashboardSidebar(props) {
  const classes = useStyles();
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const user = {
    name: "V?? ?????c D????ng",
    avatar: "/static/images/avatar.png",
    gold: "1m",
    money: "200.000??",
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "0px 0px 16px 16px",
      }}
    >
      <Scrollbar
        style={{ paddingRight: "16px" }}
        options={{ suppressScrollX: true }}
      >
        <Box style={{ padding: "16px" }}>
          <Box
            style={{
              alignItems: "center",
              borderRadius: 1,
              display: "flex",
              overflow: "hidden",
              padding: "16px",
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                cursor: "pointer",
                height: 48,
                width: 48,
              }}
            />
            <Box ml={2}>
              <Typography color="textPrimary" variant="subtitle2">
                {user.name}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Admin
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box style={{ padding: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              style={{
                "& + &": {
                  marginTop: 3,
                },
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
        <Box style={{ padding: "16px 0 20px 0" }}>
          <Typography color="textPrimary" variant="subtitle2">
            B???n c???n gi??p ??????
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
            style={{ marginTop: "8px" }}
          >
            Li??n h??? ch??ng t??i
          </Typography>
          <Button
            color="primary"
            component={RouterLink}
            fullWidth
            style={{ margin: "16px 0" }}
            to="/docs"
            variant="contained"
          >
            H??? tr???
          </Button>
        </Box>
      </Scrollbar>
    </Box>
  );

  // if (lgUp) {
  //   return (
  //     <Drawer
  //       anchor="left"
  //       open
  //       PaperProps={{
  //         sx: {
  //           backgroundColor: 'background.paper',
  //           height: 'calc(100% - 64px) !important',
  //           top: '64px !Important',
  //           width: 280
  //         }
  //       }}
  //       variant="permanent"
  //     >
  //       {content}
  //     </Drawer>
  //   );
  // }

  return (
    <Drawer className={classes.drawer} anchor="left" open variant="permanent">
      {content}
    </Drawer>
  );
}

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default DashboardSidebar;
