import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Target, 
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Users,
  CheckCircle,
  Download,
  ExternalLink,
  FileText,
  Send
} from 'lucide-react';
import workshopsData from '../data/workshops.json';
import './WorkshopPage.css';

const WorkshopPage = () => {
  const { id } = useParams();
  const workshopId = parseInt(id);
  const { workshops } = workshopsData;
  const workshop = workshops.find(w => w.id === workshopId);

  if (!workshop) {
    return (
      <div className="not-found">
        <h2>الورشة غير موجودة</h2>
        <Link to="/lectures" className="btn btn-primary">
          العودة للمحاضرات
        </Link>
      </div>
    );
  }

  const prevWorkshop = workshops.find(w => w.id === workshopId - 1);
  const nextWorkshop = workshops.find(w => w.id === workshopId + 1);

  return (
    <div className="workshop-page">
      {/* Page Header */}
      <section className="workshop-header">
        <div className="workshop-header-bg" />
        <div className="container">
          <motion.div 
            className="workshop-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="breadcrumb">
              <Link to="/">الرئيسية</Link>
              <span>/</span>
              <Link to="/lectures">الخطة التدريبية</Link>
              <span>/</span>
              <span>ورشة العمل {workshop.id}</span>
            </div>

            <div className="workshop-badge">ورشة العمل {workshop.id}</div>
            
            <h1>{workshop.title}</h1>
            
            <div className="workshop-meta">
              <div className="meta-item">
                <Clock size={18} />
                <span>{workshop.duration} دقيقة</span>
              </div>
              <div className="meta-item">
                <BookOpen size={18} />
                <span>مرتبطة بالمحاضرة {workshop.lectureId}</span>
              </div>
            </div>

            <Link 
              to={`/lectures/${workshop.lectureId}`} 
              className="btn btn-outline-light"
            >
              <ArrowRight size={18} />
              العودة للمحاضرة
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Workshop Content */}
      <section className="workshop-content">
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
                <p className="workshop-description">{workshop.description}</p>
              </div>

              {/* Objectives */}
              <div className="content-section">
                <h2>
                  <Target size={22} />
                  أهداف الورشة
                </h2>
                <ul className="objectives-list">
                  {workshop.objectives.map((obj, index) => (
                    <li key={index}>
                      <CheckCircle size={18} />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div className="content-section activities-section">
                <h2>
                  <Users size={22} />
                  خطوات الورشة
                </h2>
                <div className="activities-timeline">
                  {workshop.activities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-time">
                        <Clock size={14} />
                        <span>{activity.duration} د</span>
                      </div>
                      <div className="activity-content">
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assignment */}
              <div className="content-section assignment-section">
                <h2>
                  <Send size={22} />
                  {workshop.assignment.title}
                </h2>
                <div className="assignment-card">
                  <p>{workshop.assignment.description}</p>
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
              {/* Tools */}
              <div className="sidebar-card">
                <h3>
                  <Target size={18} />
                  أدوات ونماذج مساعدة
                </h3>
                <div className="tools-list">
                  {workshop.tools.map((tool, index) => (
                    <div key={index} className="tool-item">
                      {tool.url ? (
                        <a 
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tool-link"
                        >
                          <ExternalLink size={18} />
                          <div className="tool-info">
                            <span className="tool-name">{tool.name}</span>
                            <span className="tool-desc">{tool.description}</span>
                          </div>
                        </a>
                      ) : (
                        <a 
                          href={`/downloads/workshops/${tool.filename}`}
                          className="tool-link"
                          download
                        >
                          <FileText size={18} />
                          <div className="tool-info">
                            <span className="tool-name">{tool.name}</span>
                            <span className="tool-desc">{tool.description}</span>
                          </div>
                          <Download size={16} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Lecture */}
              <div className="sidebar-card lecture-cta">
                <div className="cta-icon">
                  <BookOpen size={28} />
                </div>
                <h3>المحاضرة {workshop.lectureId}</h3>
                <p>راجع محتوى المحاضرة المرتبطة بهذه الورشة</p>
                <Link 
                  to={`/lectures/${workshop.lectureId}`}
                  className="btn btn-primary btn-full"
                >
                  <ArrowRight size={16} />
                  العودة للمحاضرة
                </Link>
              </div>
            </motion.aside>
          </div>

          {/* Navigation */}
          <div className="workshop-navigation">
            {prevWorkshop ? (
              <Link 
                to={`/workshops/${prevWorkshop.id}`}
                className="nav-btn prev"
              >
                <ArrowRight size={20} />
                <div className="nav-info">
                  <span className="nav-label">الورشة السابقة</span>
                  <span className="nav-title">{prevWorkshop.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextWorkshop && (
              <Link 
                to={`/workshops/${nextWorkshop.id}`}
                className="nav-btn next"
              >
                <div className="nav-info">
                  <span className="nav-label">الورشة التالية</span>
                  <span className="nav-title">{nextWorkshop.title}</span>
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

export default WorkshopPage;
