import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Home, Info, Calendar, GraduationCap, Download, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'الرئيسية', icon: <Home size={18} /> },
    { path: '/about', label: 'عن البرنامج', icon: <Info size={18} /> },
    { path: '/lectures', label: 'الخطة التدريبية', icon: <Calendar size={18} /> },
    { path: '/project', label: 'مشروع التخرج', icon: <GraduationCap size={18} /> },
    { path: '/resources', label: 'المصادر', icon: <Download size={18} /> },
    { path: '/contact', label: 'تواصل معنا', icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-icon">
            <BookOpen size={24} />
          </div>
          <div className="brand-text">
            <span className="brand-title">التقنية في الدعوة</span>
            <span className="brand-subtitle">برنامج تدريبي متكامل</span>
          </div>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
