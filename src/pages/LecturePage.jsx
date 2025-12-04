import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Target, 
  BookOpen, 
  ArrowLeft,
  ArrowRight,
  PlayCircle,
  FileText,
  Download,
  MessageCircle,
  CheckCircle,
  Presentation
} from 'lucide-react';
import lecturesData from '../data/lectures.json';
import './LecturePage.css';

const LecturePage = () => {
  const { id } = useParams();
  const lectureId = parseInt(id);
  const { lectures } = lecturesData;
  const lecture = lectures.find(l => l.id === lectureId);

  if (!lecture) {
    return (
      <div className="not-found">
        <h2>المحاضرة غير موجودة</h2>
        <Link to="/lectures" className="btn btn-primary">
          العودة للمحاضرات
        </Link>
      </div>
    );
  }

  const prevLecture = lectures.find(l => l.id === lectureId - 1);
  const nextLecture = lectures.find(l => l.id === lectureId + 1);

  const iconMap = {
    'file-text': FileText,
    'presentation': Presentation,
  };

  return (
    <div className="lecture-page">
      {/* Page Header */}
      <section className="lecture-header">
        <div className="lecture-header-bg" />
        <div className="container">
          <motion.div 
            className="lecture-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="breadcrumb">
              <Link to="/">الرئيسية</Link>
              <span>/</span>
              <Link to="/lectures">الخطة التدريبية</Link>
              <span>/</span>
              <span>المحاضرة {lecture.id}</span>
            </div>

            <div className="lecture-badge">المحاضرة {lecture.id}</div>
            
            <h1>{lecture.title}</h1>
            <p className="subtitle">{lecture.subtitle}</p>
            
            <div className="lecture-meta">
              <div className="meta-item">
                <Clock size={18} />
                <span>{lecture.duration} دقيقة</span>
              </div>
              <div className="meta-item">
                <Target size={18} />
                <span>ورشة عمل {lecture.workshopId}</span>
              </div>
            </div>

            <div className="lecture-actions">
              <Link 
                to={`/workshops/${lecture.workshopId}`} 
                className="btn btn-gold"
              >
                <PlayCircle size={18} />
                انتقل إلى ورشة العمل
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lecture Content */}
      <section className="lecture-content">
        <div className="container">
          <div className="content-grid">
            {/* Main Content */}
            <motion.div 
              className="main-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Description */}
              <div className="content-section">
                <p className="lecture-description">{lecture.description}</p>
              </div>

              {/* Objectives */}
              <div className="content-section">
                <h2>
                  <Target size={22} />
                  الأهداف التعليمية
                </h2>
                <ul className="objectives-list">
                  {lecture.objectives.map((obj, index) => (
                    <li key={index}>
                      <CheckCircle size={18} />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div className="content-section">
                <h2>
                  <BookOpen size={22} />
                  محتوى المحاضرة
                </h2>
                <div className="topics-list">
                  {lecture.topics.map((topic, index) => (
                    <div key={index} className="topic-card">
                      <div className="topic-number">{index + 1}</div>
                      <div className="topic-content">
                        <h3>{topic.title}</h3>
                        <p>{topic.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discussion Questions */}
              <div className="content-section discussion-section">
                <h2>
                  <MessageCircle size={22} />
                  أسئلة للتفكير والنقاش
                </h2>
                <div className="questions-list">
                  {lecture.discussionQuestions.map((question, index) => (
                    <div key={index} className="question-card">
                      <div className="question-icon">؟</div>
                      <p>{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside 
              className="sidebar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Downloads */}
              <div className="sidebar-card">
                <h3>
                  <Download size={18} />
                  مواد للتحميل
                </h3>
                <div className="downloads-list">
                  {lecture.downloads.map((download, index) => {
                    const IconComponent = iconMap[download.icon] || FileText;
                    return (
                      <a 
                        key={index} 
                        href={`/downloads/lectures/${download.filename}`}
                        className="download-item"
                        download
                      >
                        <IconComponent size={20} />
                        <span>{download.title}</span>
                        <Download size={16} className="download-icon" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Workshop CTA */}
              <div className="sidebar-card workshop-cta">
                <div className="cta-icon">
                  <Target size={28} />
                </div>
                <h3>ورشة العمل {lecture.workshopId}</h3>
                <p>تطبيق عملي على محتوى هذه المحاضرة</p>
                <Link 
                  to={`/workshops/${lecture.workshopId}`}
                  className="btn btn-gold btn-full"
                >
                  دخول الورشة
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </motion.aside>
          </div>

          {/* Navigation */}
          <div className="lecture-navigation">
            {prevLecture ? (
              <Link 
                to={`/lectures/${prevLecture.id}`}
                className="nav-btn prev"
              >
                <ArrowRight size={20} />
                <div className="nav-info">
                  <span className="nav-label">المحاضرة السابقة</span>
                  <span className="nav-title">{prevLecture.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextLecture && (
              <Link 
                to={`/lectures/${nextLecture.id}`}
                className="nav-btn next"
              >
                <div className="nav-info">
                  <span className="nav-label">المحاضرة التالية</span>
                  <span className="nav-title">{nextLecture.title}</span>
                </div>
                <ArrowLeft size={20} />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LecturePage;
