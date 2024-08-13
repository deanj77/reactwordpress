// router.js
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Profile from "../pages/Profile";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import Articles from "../pages/Articles";
import HomeScreen from "../pages/Home";
import ArticleDetails from "../pages/ArticleDetails";
import NotFound from "../components/NotFound";
import NotFoundArticle from "../components/NotFoundArticle";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:title" element={<ArticleDetails />} />
        <Route path="/articles/404" element={<NotFoundArticle />} />
        <Route path="/404" element={<NotFound />} />
        <Route
          path="/articles/*"
          element={<Navigate replace to="/articles/404" />}
        />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
