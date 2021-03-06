import React from "react";
import { Redirect } from "react-router-dom";
import Search from "./Search";
import Forecast from "./Forecast";
import NotFound from "./NotFound";
import { initialUrl } from "../shared/constants/AppConst";

const routesConfig = [
  {
    path: "/",
    component: () => <Redirect to={initialUrl} />,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/five-day-forecast",
    component: Forecast,
  },
  {
    component: NotFound,
  },
];

export default routesConfig;
