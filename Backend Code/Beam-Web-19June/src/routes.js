import Documents from "views/Documents/Documents.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import Request from "views/Dashboard/Request.js";
import Investors from "views/Dashboard/Investors.js";
import InvestorInsights from "views/Dashboard/InvestorInsights.js";
import LoginPage from "views/Pre-Login/LoginPage.js";
import RegisterPage from "views/Pre-Login/RegisterPage.js";
import ForgotPassword from "views/Pre-Login/ForgotPassword.js";
import Description from "views/Description/Description.js";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import Requests from "views/Requests/Requests";
import SingleDescription from "views/Description/SingleDescription";

var dashRoutes = [
  {
    path: "updates",
    name: "Updates",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/"
  },
  {
    path: "insights",
    name: "Description",
    icon: DashboardIcon,
    component: InvestorInsights,
    layout: "/"
  },
  {
    path: "requests",
    name: "Description",
    icon: DashboardIcon,
    component: Requests,
    layout: "/"
  },
  {
    path: "descriptionPost",
    name: "Description",
    icon: DashboardIcon,
    component: SingleDescription,
    layout: "/"
  },
  {
    path: "description",
    name: "Description",
    icon: DashboardIcon,
    component: Description,
    layout: "/"
  },
  {
    path: "documents",
    name: "Documents",
    icon: DateRange,
    component: Documents,
    layout: "/"
  },
  {
    path: "mynetwork",
    component: Request,
    layout: "/"
  },
  {
    path: "investors",
    name: "Investors",
    icon: DashboardIcon,
    component: Investors,
    layout: "/"
  },
  {
    path: "/register",
    name: "Register",
    icon: DashboardIcon,
    component: RegisterPage,
    layout: "/auth"
  },
  {
    path: "/login",
    name: "Login",
    icon: DashboardIcon,
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    icon: DashboardIcon,
    component: ForgotPassword,
    layout: "/auth"
  }
];

export default dashRoutes;
