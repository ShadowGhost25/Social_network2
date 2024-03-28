// import s from './app.module.css'
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./redux/slices/login";
import { route } from "./Route/route";

function App() {

  return (
    <>
      <Routes>
        {route.map(({ path, element }) => 
          <Route key={path} path={path} element={element} exact />
        )}
        <Route path="*" element={<Navigate to='/error' />} />
      </Routes>
    </>
  );
}

export default App;
