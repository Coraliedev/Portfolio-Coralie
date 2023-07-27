import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import ProjectDetail from "../views/ProjectDetail";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/project/:projectId" element={<ProjectDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;