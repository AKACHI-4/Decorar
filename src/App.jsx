import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ARRoom from "./Pages/ARRoom";
import DimRoom from "./Pages/DimRoom";
import ErrorPage from "./Pages/ErrorPage";
import Template from "./Pages/Template";

function App() {
  const routes = [
    { id: 0, path: "/", page: <Home /> },
    { id: 1, path: "/ar-room", page: <ARRoom /> },
    { id: 2, path: "/2d-room", page: <DimRoom /> },
    { id: 3, path: "*", page: <ErrorPage /> },
  ];

  return (
    <Router>
      <Routes>
        <Route element={<Template />}>
          {routes.map((route) => (
            <Route path={route.path} element={route.page} key={route.id} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
