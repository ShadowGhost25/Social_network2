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
import box from "../pages/Profile/img/box.png";
import foto from "../pages/Profile/img/foto.png";
import info from "../pages/Profile/img/info.png";

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
];
export const navigationButtons = [
  {
    imageName: box,
    title: "Посты",
    alt: "no img box",
  },
  {
    imageName: foto,
    title: "Фотографии",
    alt: "no img foto",
  },
  {
    imageName: info,
    title: "Прочее",
    alt: "no img info",
  },
];
