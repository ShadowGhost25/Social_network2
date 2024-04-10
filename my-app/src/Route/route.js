import FullPosts from "../componets/Posts/FullPosts/FullPosts";
import Profile from "../pages/Profile/Profile";
import AddElement from "../pages/AddElement/AddElement";
import Error from "../pages/Error/Error";
import Friends from "../pages/Friends/Friends";
import Group from "../pages/Group/Group";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Message from "../pages/Message/Message";
import Music from "../pages/Music/Music";
import Register from "../pages/Register/Register";

import Settings from "../pages/Settings/Settings";

export const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/group",
    element: <Group />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/posts/:id",
    element: <FullPosts />,
  },
  // {
  //     path: '/group/:id',
  //     element: <FullGroup />
  // },
  {
    path: "/posts/:id/edit",
    element: <AddElement />,
  },
  {
    path: "/group/:id/edit",
    element: <AddElement />,
  },
  {
    path: "/add-posts",
    element: <AddElement />,
  },
  {
    path: "/add-group",
    element: <AddElement />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/settings/notifications",
    element: <Settings />,
  },
  {
    path: "/settings/friends",
    element: <Settings />,
  },
  {
    path: "/settings/password",
    element: <Settings />,
  },
  {
    path: "/settings/delete",
    element: <Settings />,
  },
];

export const navigationButtons = [
  {
    typeStyle: "navBar",
    position: true,
    imageName: "box",
    title: "Посты",
    alt: "no img box",
  },
  {
    typeStyle: "navBar",
    position: true,
    imageName: "foto",
    title: "Фотографии",
  },
  {
    typeStyle: "navBar",
    position: true,
    imageName: "info",
    title: "Прочее",
  },
];
export const assessmentPosts = [
  {
    typeStyle: "assessment",
    position: true,
    imageName: "like",
  },
  {
    typeStyle: "assessment",
    position: true,
    imageName: "comment",
  },
];
export const measurementAge = [
  {
    typeStyle: "primary",
    size: "small",
    position: true,
    title: "От",
    noCenter: "left",
    imageName: "down",
  },
  {
    size: "small",
    typeStyle: "primary",
    position: true,
    noCenter: "left",
    title: "До",
    imageName: "up",
  },
];
export const buttonSettings = [
  {
    title: "Настройки профиля",
    typeStyle: "settings",
  },
  {
    title: "Уведомления",
    typeStyle: "settings",
  },
  {
    title: "Запросы в друзья",
    typeStyle: "settings",
  },
  {
    title: "Изменить пароль",
    typeStyle: "settings",
  },
  {
    title: "Удалить аккаунт",
    typeStyle: "settings",
  },
];

export const buttonHeader = [
  {
    url: "/",
    imageName: "news",
    centerImage: true,
    typeStyle: "navBar",
  },
  {
    url: "/message",
    imageName: "message",
    centerImage: true,
    typeStyle: "navBar",
  },
  {
    url: "/friends",
    imageName: "friends",
    centerImage: true,
    typeStyle: "navBar",
  },
  {
    url: "/group",
    imageName: "group",
    centerImage: true,
    typeStyle: "navBar",
  },
  {
    url: "/music",
    imageName: "music",
    centerImage: true,
    typeStyle: "navBar",
  },
  {
    url: "/settings",
    imageName: "settings",
    centerImage: true,
    typeStyle: "navBar",
  },
];
