import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Target, 
  BookOpen, 
  ArrowLeft,
  PlayCircle,
  FileText
} from 'lucide-react';
import lecturesData from '../data/lectures.json';
import './LecturesPage.css';

const LecturesPage = () => {
  const { lectures } = lecturesData;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="lectures-page">
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
              <span>الخطة التدريبية</span>
            </div>
            <h1>الخطة التدريبية</h1>
            <p>المحاضرات والورش التدريبية</p>
            <div className="header-stats">
              <div className="stat">
                <BookOpen size={20} />
                <span><strong>7</strong> محاضرات</span>
              </div>
              <div className="stat">
                <Target size={20} />
                <span><strong>7</strong> ورش عمل</span>
              </div>
              <div className="stat">
                <Clock size={20} />
                <span><strong>8</strong> ساعات</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lectures List */}
      <section className="section lectures-list">
        <div className="container">
          <motion.div 
            className="lectures-container"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {lectures.map((lecture, index) => (
              <motion.div 
                key={lecture.id}
                className="lecture-card"
                variants={fadeInUp}
              >
                <div className="lecture-card-header">
                  <div className="lecture-number-badge">
                    المحاضرة {lecture.id}
                  </div>
                  <div className="lecture-duration">
                    <Clock size={16} />
                    <span>{lecture.duration} دقيقة</span>
                  </div>
                </div>

                <div className="lecture-card-body">
                  <h2 className="lecture-title">{lecture.title}</h2>
                  <p className="lecture-subtitle">{lecture.subtitle}</p>
                  <p className="lecture-description">{lecture.description}</p>

                  <div className="lecture-objectives">
                    <h4>
                      <Target size={16} />
                      الأهداف التعليمية
                    </h4>
                    <ul>
                      {lecture.objectives.slice(0, 3).map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lecture-card-footer">
                  <div className="workshop-badge">
                    <FileText size={16} />
                    <span>يرافقها: ورشة العمل {lecture.workshopId}</span>
                  </div>
                  
                  <div className="lecture-actions">
                    <Link 
                      to={`/lectures/${lecture.id}`} 
                      className="btn btn-primary"
                    >
                      <PlayCircle size={18} />
                      دخول المحاضرة
                    </Link>
                    <Link 
                      to={`/workshops/${lecture.workshopId}`} 
                      className="btn btn-secondary"
                    >
                      دخول الورشة
                      <ArrowLeft size={16} />
                    </Link>
                  </div>
                </div>

                <div className="lecture-progress-indicator">
                  <div className="progress-line" />
                  {index < lectures.length - 1 && (
                    <div className="progress-connector" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LecturesPage;
