import Home from "../Components/Home";
import UserInfo from "../Components/UserInfo";

export const AuthRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/user/info",
    element: UserInfo,
  },
];
