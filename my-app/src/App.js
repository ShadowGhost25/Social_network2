import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "./redux/slices/login";
import { route } from "./Route/route";
import { fetchMusic } from "./redux/slices/music";
import Loading from "./componets/Loading/Loading";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAuthMe());
    dispatch(fetchMusic());
  }, []);
  return (
    <>
      <Routes>
        {route.map(({ path, element }) => (
          <Route key={path} path={path} element={element} exact />
        ))}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
}

export default App;
