import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

import StaticProfile from "../component/StaticProfile";
import DynamicProfile, { Avatar } from "../component/DynamicProfile";
import ToDoList from "../component/ToDoList";
import Counter from "../component/Counter";
import CounterReduse from "../component/CounterReduse";
import ToDoDynemic from "../component/ToDoDynemic";

import Home from "../pages/Home";
import USBadges from "../pages/USBadges";
import USBreadcrumbs from "../pages/USBreadcrumbs";
import USButtonGroup from "../pages/USButtonGroup";
import USButtons from "../pages/USButtons";
import USCards from "../pages/USCards";
import USCloseButton from "../pages/USCloseButton";
import USFigures from "../pages/USFigures";
import USImages from "../pages/USImages";
import USListGroup from "../pages/USListGroup";
import USPagination from "../pages/USPagination";
import USProgressBars from "../pages/USProgressBars";
import USSpinners from "../pages/USSpinners";
import USTables from "../pages/USTables";

import USAccordion from "../pages/USAccordion";
import USCarousel from "../pages/USCarousel";
import USDropdowns from "../pages/USDropdowns";
import USModals from "../pages/USModals";
import USNavbarOffcanvas from "../pages/USNavbarOffcanvas";
import USNavTabs from "../pages/USNavTabs";
import USOverlaysTooltips from "../pages/USOverlaysTooltips";
import USForms from "../pages/USForms";

import BasicForm from "../pages/Forms/BasicForm"
import FormikFormYup from "../pages/Forms/FormikFormYup"
import RHForm from "../pages/Forms/RHForm"
import RHFormYup from "../pages/Forms/RHFormYup"

import Products from "../pages/StateManagement/Products"
import Cart from "../pages/StateManagement/Cart"
import Wishlist from "../pages/StateManagement/Wishlist"

const img =
  "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?";
const Name = "Umang";
const Email = "umang@gmail.com";
const Number = "1234567890";

export const routs = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/StaticProfile", element: <StaticProfile /> },
      {
        path: "/DynamicProfile",
        element: <DynamicProfile />,
        children: [
          {
            path: "profile",
            element: (
              <DynamicProfile
                imgurl={img}
                name={Name}
                email={Email}
                number={Number}
              />
            ),
          },
          { path: "avatar", element: <Avatar img={img} /> },
        ],
      },
      { path: "/ToDoList", element: <ToDoList /> },
      { path: "/Counter", element: <Counter /> },
      { path: "/CounterReduse", element: <CounterReduse /> },
      { path: "/ToDoDynemic", element: <ToDoDynemic /> },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      { path: "/USBadges", element: <USBadges /> },
      { path: "/USBreadcrumbs", element: <USBreadcrumbs /> },
      { path: "/USButtonGroup", element: <USButtonGroup /> },
      { path: "/USButtons", element: <USButtons /> },
      { path: "/USCards", element: <USCards /> },
      { path: "/USCloseButton", element: <USCloseButton /> },
      { path: "/USFigures", element: <USFigures /> },
      { path: "/USImages", element: <USImages /> },
      { path: "/USListGroup", element: <USListGroup /> },
      { path: "/USPagination", element: <USPagination /> },
      { path: "/USProgressBars", element: <USProgressBars /> },
      { path: "/USSpinners", element: <USSpinners /> },
      { path: "/USTables", element: <USTables /> },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      { path: "/USAccordion", element: <USAccordion /> },
      { path: "/USCarousel", element: <USCarousel /> },
      { path: "/USDropdowns", element: <USDropdowns /> },
      { path: "/USModals", element: <USModals /> },
      { path: "/USNavbarOffcanvas", element: <USNavbarOffcanvas /> },
      { path: "/USNavTabs", element: <USNavTabs /> },
      { path: "/USOverlaysTooltips", element: <USOverlaysTooltips /> },
      { path: "/USForms", element: <USForms /> },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      { path: "/BasicForm", element: <BasicForm /> },
      { path: "/FormikFormYup", element: <FormikFormYup /> },
      { path: "/RHForm", element: <RHForm /> },
      { path: "/RHFormYup", element: <RHFormYup /> },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      { path: "/Products", element: <Products /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Wishlist", element: <Wishlist /> },
    ],
  },
]);
