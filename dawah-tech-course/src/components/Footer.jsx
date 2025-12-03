import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'عن البرنامج' },
    { path: '/lectures', label: 'الخطة التدريبية' },
    { path: '/project', label: 'مشروع التخرج' },
  ];

  const resourceLinks = [
    { path: '/resources', label: 'المصادر والتحميلات' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <footer className="footer">
      <div className="footer-pattern" />
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <BookOpen size={28} />
                </div>
                <div className="logo-text">
                  <span className="logo-title">التقنية في الدعوة</span>
                  <span className="logo-subtitle">برنامج تدريبي متكامل</span>
                </div>
              </div>
              <p className="footer-desc">
                برنامج تدريبي متخصص في توظيف التقنية الحديثة والذكاء الاصطناعي 
                في الدعوة إلى الله ونشر الوسطية والاعتدال.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">روابط سريعة</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h4 className="footer-title">المصادر</h4>
              <ul className="footer-links">
                {resourceLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="footer-title">تواصل معنا</h4>
              <div className="footer-contact">
                <a href="mailto:info@dawah-tech.com" className="contact-item">
                  <Mail size={18} />
                  <span>info@dawah-tech.com</span>
                </a>
                <a href="tel:+966500000000" className="contact-item">
                  <Phone size={18} />
                  <span>+966 50 000 0000</span>
                </a>
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>المملكة العربية السعودية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              جميع الحقوق محفوظة © {currentYear} - برنامج استخدام التقنية في الدعوة
            </p>
            <p className="made-with">
              صُنع بـ <Heart size={14} className="heart-icon" /> لخدمة الدعوة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
