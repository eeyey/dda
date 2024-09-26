import { RouteType } from "./config";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import HopePage from "../pages/milk_production/HopePage";
import HomePage from "../pages/home/HomePage";
import MilkProductionPageLayout from "../pages/milk_production/MilkProductionPageLayout";
import LivestockPageLayout from "../pages/livestock/LivestockPageLayout";
import ReproductionPage from "../pages/livestock/ReproductionPage.tsx";
import DisposalPage from "../pages/livestock/DisposalPage.tsx";
import DiseasePage from "../pages/livestock/DiseasePage.tsx";
import CowIcon from "../components/icons/CowIcon.tsx";
import BucketIcon from "../components/icons/BuckerIcon.tsx";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/milk_produciton",
    element: <MilkProductionPageLayout />,
    state: "milk_produciton",
    sidebarProps: {
      displayText: "Производство молока",
      icon: <BucketIcon />,
    },
    child: [
      {
        index: true,
        element: <HopePage />,
        state: "milk_produciton.index",
      },
      {
        path: "/milk_produciton/hope",
        element: <HopePage />,
        state: "milk_produciton.hope",
        sidebarProps: {
          displayText: "Надой",
        },
      },
      {
        path: "/milk_produciton/contractors",
        element: <HopePage />,
        state: "milk_produciton.contractors",
        sidebarProps: {
          displayText: "Контрагенты",
        },
      },
    ],
  },
  {
    path: "/livestock",
    element: <LivestockPageLayout />,
    state: "livestock",
    sidebarProps: {
      displayText: "Поголовье",
      icon: <CowIcon />,
    },
    child: [
      {
        index: true,
        element: <HopePage />,
        state: "livestock.index",
      },
      // {
      //   path: "/livestock/forage_herd",
      //   element: <ForageHerd />,
      //   state: "livestock.forage_herd",
      //   sidebarProps: {
      //     displayText: "Фуражное стадо",
      //   },
      // },
      // {
      //   path: "/livestock/young",
      //   element: <HopePage />,
      //   state: "livestock.young",
      //   sidebarProps: {
      //     displayText: "Молодняк",
      //   },
      // },
      {
        path: "/livestock/reproduction",
        element: <ReproductionPage />,
        state: "livestock.reproduction",
        sidebarProps: {
          displayText: "Воспроизводство",
        },
      },
      {
        path: "/livestock/disposal",
        element: <DisposalPage />,
        state: "livestock.disposal",
        sidebarProps: {
          displayText: "Выбытие",
        },
      },
      {
        path: "/livestock/disease",
        element: <DiseasePage />,
        state: "livestock.disease",
        sidebarProps: {
          displayText: "Заболевания",
        },
      },
    ],
  },
];

export default appRoutes;
