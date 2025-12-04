import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  BookOpen, 
  Clock, 
  Users,
  CheckCircle,
  Award,
  Lightbulb,
  ArrowLeft
} from 'lucide-react';
import courseData from '../data/course.json';
import './AboutPage.css';

const AboutPage = () => {
  const { course } = courseData;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-page">
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
              <span>عن البرنامج</span>
            </div>
            <h1>عن البرنامج</h1>
            <p>تعرف على البرنامج التدريبي وأهدافه ومحتواه</p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="about-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="intro-icon">
              <Lightbulb size={40} />
            </div>
            <h2>وصف البرنامج</h2>
            <p>{course.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Clock size={32} />
              <div className="stat-value">{course.totalHours}</div>
              <div className="stat-label">ساعات تدريبية</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <BookOpen size={32} />
              <div className="stat-value">{course.lecturesCount}</div>
              <div className="stat-label">محاضرات</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Target size={32} />
              <div className="stat-value">{course.workshopsCount}</div>
              <div className="stat-label">ورش عمل</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Award size={32} />
              <div className="stat-value">40%</div>
              <div className="stat-label">مشروع تخرج</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section objectives-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>أهداف البرنامج</h2>
            <p>ما ستحققه من خلال هذا البرنامج التدريبي</p>
          </motion.div>
          
          <div className="objectives-grid">
            {course.objectives.map((objective, index) => (
              <motion.div 
                key={index}
                className="objective-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="objective-number">{index + 1}</div>
                <p>{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="section competencies-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>الجدارات المعرفية والمهارية</h2>
            <p>ما ستكتسبه من معارف ومهارات</p>
          </motion.div>
          
          <div className="competencies-grid">
            <motion.div 
              className="competency-box knowledge"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="box-header">
                <BookOpen size={24} />
                <h3>الجدارات المعرفية</h3>
              </div>
              <ul>
                {course.competencies.knowledge.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="competency-box skills"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="box-header">
                <Target size={24} />
                <h3>الجدارات المهارية</h3>
              </div>
              <ul>
                {course.competencies.skills.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section className="section evaluation-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>نظام التقييم</h2>
            <p>كيف يتم تقييم أداء المتدربين</p>
          </motion.div>
          
          <div className="evaluation-grid">
            {Object.entries(course.evaluation).map(([key, value], index) => (
              <motion.div 
                key={key}
                className="evaluation-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="eval-percentage">{value.percentage}%</div>
                <div className="eval-description">{value.description}</div>
                <div className="eval-bar">
                  <div 
                    className="eval-fill" 
                    style={{ width: `${value.percentage}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section audience-section">
        <div className="container">
          <motion.div 
            className="audience-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="audience-icon">
              <Users size={40} />
            </div>
            <h2>الفئة المستهدفة</h2>
            <div className="audience-tags">
              {course.targetAudience.map((audience, index) => (
                <span key={index} className="audience-tag">
                  {audience}
                </span>
              ))}
            </div>
          </motion.div>
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
            <h2>ابدأ رحلتك التعليمية الآن</h2>
            <p>انضم إلى البرنامج واكتسب المهارات اللازمة لتوظيف التقنية في الدعوة</p>
            <Link to="/lectures" className="btn btn-gold">
              ابدأ التعلم
              <ArrowLeft size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
