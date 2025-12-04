import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap,
  Target,
  CheckCircle,
  Lightbulb,
  ArrowLeft,
  Youtube,
  Smartphone,
  Mic,
  Bot,
  Megaphone
} from 'lucide-react';
import courseData from '../data/course.json';
import './ProjectPage.css';

const ProjectPage = () => {
  const { course } = courseData;
  const { graduationProject } = course;

  const iconMap = {
    0: Youtube,
    1: Smartphone,
    2: Mic,
    3: Bot,
    4: Megaphone,
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="project-page">
      {/* Page Header */}
      <section className="page-header project-header">
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
              <span>مشروع التخرج</span>
            </div>
            <div className="project-badge">
              <GraduationCap size={20} />
              <span>{graduationProject.weight}% من التقييم</span>
            </div>
            <h1>{graduationProject.title}</h1>
            <p>{graduationProject.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="section ideas-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>أفكار لمشاريع التخرج</h2>
            <p>نماذج مقترحة يمكنك الاختيار منها أو ابتكار فكرتك الخاصة</p>
          </motion.div>
          
          <div className="ideas-grid">
            {graduationProject.ideas.map((idea, index) => {
              const IconComponent = iconMap[index] || Lightbulb;
              return (
                <motion.div 
                  key={index}
                  className="idea-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="idea-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{idea.title}</h3>
                  <p>{idea.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Stages */}
      <section className="section stages-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>مراحل تنفيذ المشروع</h2>
            <p>خطوات متسلسلة لإنجاز مشروعك بنجاح</p>
          </motion.div>
          
          <div className="stages-timeline">
            {graduationProject.stages.map((stage, index) => (
              <motion.div 
                key={index}
                className="stage-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="stage-number">{index + 1}</div>
                <div className="stage-content">
                  <h3>{stage.name}</h3>
                  <p>{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="section criteria-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>معايير التقييم</h2>
            <p>الأسس التي سيتم تقييم مشروعك بناءً عليها</p>
          </motion.div>
          
          <div className="criteria-grid">
            {graduationProject.criteria.map((criterion, index) => (
              <motion.div 
                key={index}
                className="criterion-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle size={24} />
                <span>{criterion}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap size={48} />
            <h2>مستعد لبدء مشروعك؟</h2>
            <p>راجع المحاضرات والورش للاستعداد الأمثل لمشروع التخرج</p>
            <Link to="/lectures" className="btn btn-gold">
              استعرض المحاضرات
              <ArrowLeft size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
