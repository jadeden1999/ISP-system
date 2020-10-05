// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import ViewUsers from "views/TableList/ViewUsers.jsx" ;
import Viewlinks from "views/Links/links.jsx"
import Expenses from "views/Expenses/Expenses.jsx"
// core components/views for RTL layout
import OutUsers from "views/TableList/outusers.js"
import ViewUser from "views/TableList/ViewUser.js"
import Viewlink from "./views/Links/Viewlink";
import NewLink from "./views/Links/Newlink";
import Notes from "./views/Dashboard/Notes";
import DebtUsers from "./views/TableList/DebtUsers";
import SummerUsers from "./views/TableList/SummerUsers";
import ActiveUsers from "./views/TableList/activeusers";
import InActiveUsers from "./views/TableList/inusers";
import NewExpense from "./views/Expenses/Addexpense";
import EditExpense from "./views/Expenses/Viewexpense"
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Create User",
    rtlName: " Create User",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/Viewusers",
    name: "Registered Users",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ViewUsers,
    layout: "/admin"
  },

  
  {
    path: "/summer",
    name: "Summer Users" ,
    rtlNmae : "" ,
    icon: "pool",
    component: SummerUsers,
    layout: "/admin"

  }  ,{
    path: "/active",
    name: "Active Users" ,
    rtlNmae : "" ,
    icon: "sentiment_satisfied",
    component: ActiveUsers,
    layout: "/admin"

  }
  ,{
    path: "/inactive",
    name: "Stopped Users" ,
    rtlNmae : "" ,
    icon: "sentiment_very_dissatisfied",
    component: InActiveUsers,
    layout: "/admin"

  },
 
  {
    path: "/Viewlinks",
    name: "Stations",
    rtlName: "قائمة الجدول",
    icon: "settings_remote",
    component: Viewlinks,
    layout: "/admin"

  },

  {
    path: "/Newlink",
    name: "Add Hardware",
    rtlName: "",
    icon: "settings_input_antenna",
    component: NewLink,
    layout: "/admin"
  }
  ,
  

  {
    path: "/Notes",
    name: "Notes",
    rtlName: "",
    icon: "announcement",
    component: Notes,
    layout: "/admin"
  }
  ,
  {
    path: "/debt",
    name: "Debts" ,
    rtlNmae : "" ,
    icon: "attach_money",
    component: DebtUsers,
    layout: "/admin"

  },
  
 
  {
    path: "/outusers",
    name: "Advance Payments" ,
    rtlNmae : "" ,
    icon: "payment",
    component: OutUsers,
    layout: "/admin"

  },
  {
    path: "/Expenses",
    name: "Expenses" ,
    rtlNmae : "" ,
    icon: "subtitles",
    component: Expenses,
    layout: "/admin"

  },
  {
    path: "/Viewuser/:id/:page",
    name: "",
    rtlName: "",
    icon: "",
    component: ViewUser,
    layout: "/admin"
  },
  {
    path: "/Viewlink/:id",
    name: "",
    rtlName: "",
    icon: "",
    component: Viewlink,
    layout: "/admin"
  },
  {
    path: "/Newexpense",
    name: "",
    rtlName: "",
    icon: "",
    component: NewExpense,
    layout: "/admin"
  },
  {
    path: "/Viewexpense/:id",
    name: "",
    rtlName: "",
    icon: "",
    component: EditExpense,
    layout: "/admin"
  },
  
  // {
  //   path: "/typography",
  //   name: "Links",
  //   rtlName: "طباعة",
  //   icon: icon,
  //   component: Typography,
  //   layout: "/admin"
  // }
  //,
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
