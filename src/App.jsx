import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LecturesPage from './pages/LecturesPage';
import LecturePage from './pages/LecturePage';
import WorkshopPage from './pages/WorkshopPage';
import ProjectPage from './pages/ProjectPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/lectures" element={<LecturesPage />} />
            <Route path="/lectures/:id" element={<LecturePage />} />
            <Route path="/workshops/:id" element={<WorkshopPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
