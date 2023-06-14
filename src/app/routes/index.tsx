import {
  BrowserRouter,
  Routes as Router,
  Route,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<h1>principal</h1>} />
        <Route path="/pagina-inicial" element={<Dashboard />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Router>
    </BrowserRouter>
  );
};
