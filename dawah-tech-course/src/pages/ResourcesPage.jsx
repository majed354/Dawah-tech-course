import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Download,
  FileText,
  Presentation,
  BookOpen,
  ExternalLink,
  Folder
} from 'lucide-react';
import lecturesData from '../data/lectures.json';
import './ResourcesPage.css';

const ResourcesPage = () => {
  const { lectures } = lecturesData;

  const externalResources = [
    {
      category: 'منصات تعليمية',
      links: [
        { title: 'منصة رواق', url: 'https://www.rwaq.org', description: 'منصة تعليمية عربية' },
        { title: 'أكاديمية زاد', url: 'https://www.zad-academy.com', description: 'تعليم شرعي متكامل' },
      ]
    },
    {
      category: 'أدوات التصميم',
      links: [
        { title: 'كانفا', url: 'https://www.canva.com', description: 'تصميم المحتوى البصري' },
        { title: 'CapCut', url: 'https://www.capcut.com', description: 'تحرير الفيديو' },
      ]
    },
    {
      category: 'الذكاء الاصطناعي',
      links: [
        { title: 'ChatGPT', url: 'https://chat.openai.com', description: 'توليد النصوص' },
        { title: 'Claude', url: 'https://claude.ai', description: 'مساعد ذكاء اصطناعي' },
      ]
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="resources-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <motion.div 
            className="page-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="breadcrumb">
              <Link to="/">الرئيسية</Link>
              <span>/</span>
              <span>المصادر والتحميلات</span>
            </div>
            <h1>المصادر والتحميلات</h1>
            <p>جميع ملفات المحاضرات والمصادر المفيدة</p>
          </motion.div>
        </div>
      </section>

      {/* Lecture Downloads */}
      <section className="section downloads-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>ملفات المحاضرات</h2>
            <p>حمّل ملفات PDF وعروض الشرائح لكل محاضرة</p>
          </motion.div>
          
          <div className="downloads-grid">
            {lectures.map((lecture, index) => (
              <motion.div 
                key={lecture.id}
                className="download-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="download-header">
                  <div className="lecture-badge">المحاضرة {lecture.id}</div>
                </div>
                <h3>{lecture.title}</h3>
                <p>{lecture.subtitle}</p>
                <div className="download-files">
                  {lecture.downloads.map((file, fileIndex) => (
                    <a 
                      key={fileIndex}
                      href={`/downloads/lectures/${file.filename}`}
                      className="download-link"
                      download
                    >
                      {file.icon === 'file-text' ? (
                        <FileText size={18} />
                      ) : (
                        <Presentation size={18} />
                      )}
                      <span>{file.title}</span>
                      <Download size={16} />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="section external-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>روابط ومصادر خارجية</h2>
            <p>أدوات ومنصات مفيدة للداعية الرقمي</p>
          </motion.div>
          
          <div className="resources-grid">
            {externalResources.map((category, index) => (
              <motion.div 
                key={index}
                className="resource-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="category-header">
                  <Folder size={20} />
                  <h3>{category.category}</h3>
                </div>
                <div className="category-links">
                  {category.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <div className="link-info">
                        <span className="link-title">{link.title}</span>
                        <span className="link-desc">{link.description}</span>
                      </div>
                      <ExternalLink size={16} />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="section reading-section">
        <div className="container">
          <motion.div 
            className="reading-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen size={40} />
            <h2>قراءات مقترحة</h2>
            <p>
              نوصي بالاطلاع على المصادر المتاحة حول الوسطية والاعتدال، 
              والأمن الفكري، وتوظيف التقنية في الدعوة من المواقع الرسمية 
              للمؤسسات الدعوية والعلمية المعتمدة.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
