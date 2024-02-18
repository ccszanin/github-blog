import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Issues from './pages/Issues';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/issues" element={<Issues />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;