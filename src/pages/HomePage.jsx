import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Shield, 
  Cpu, 
  Palette, 
  Scale, 
  Users, 
  BookOpen, 
  Clock,
  Target,
  CheckCircle,
  PlayCircle,
  Star
} from 'lucide-react';
import courseData from '../data/course.json';
import lecturesData from '../data/lectures.json';
import './HomePage.css';

const HomePage = () => {
  const { course } = courseData;
  const { lectures } = lecturesData;

  const iconMap = {
    shield: Shield,
    cpu: Cpu,
    palette: Palette,
    scale: Scale,
  };

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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-pattern" />
          <div className="hero-gradient" />
        </div>
        
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Star size={16} />
              <span>برنامج تدريبي متخصص</span>
            </div>
            
            <h1 className="hero-title">
              {course.title}
            </h1>
            
            <p className="hero-subtitle">
              {course.subtitle}
            </p>
            
            <p className="hero-description">
              {course.description}
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <Clock size={20} />
                <span><strong>{course.totalHours}</strong> ساعات تدريبية</span>
              </div>
              <div className="stat-item">
                <BookOpen size={20} />
                <span><strong>{course.lecturesCount}</strong> محاضرات</span>
              </div>
              <div className="stat-item">
                <Target size={20} />
                <span><strong>{course.workshopsCount}</strong> ورش عمل</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <Link to="/lectures" className="btn btn-gold">
                <PlayCircle size={20} />
                ابدأ التعلم الآن
              </Link>
              <Link to="/about" className="btn btn-secondary-light">
                تعرّف على البرنامج
                <ArrowLeft size={18} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-icon">
                  <Cpu size={32} />
                </div>
                <div className="hero-card-badge">متاح الآن</div>
              </div>
              <h3>رحلتك نحو الدعوة الرقمية</h3>
              <p>تعلم كيف توظف التقنية الحديثة والذكاء الاصطناعي في نشر الوسطية والاعتدال</p>
              <div className="hero-card-features">
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>محتوى عملي تطبيقي</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>شهادة إتمام معتمدة</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>ورش عمل تفاعلية</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>لماذا هذا البرنامج مهم؟</h2>
            <p>في عصر التحول الرقمي، أصبح توظيف التقنية في الدعوة ضرورة لا ترفًا</p>
          </motion.div>
          
          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {course.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div 
                  key={index} 
                  className="feature-card"
                  variants={fadeInUp}
                >
                  <div className="feature-icon">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="section learn-section">
        <div className="container">
          <div className="learn-grid">
            <motion.div 
              className="learn-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>ماذا ستتعلم؟</h2>
              <p className="learn-intro">
                جدارات معرفية ومهارية متكاملة تؤهلك لتوظيف التقنية في العمل الدعوي
              </p>
              
              <div className="competencies">
                <div className="competency-group">
                  <h4>
                    <BookOpen size={18} />
                    الجدارات المعرفية
                  </h4>
                  <ul>
                    {course.competencies.knowledge.map((item, index) => (
                      <li key={index}>
                        <CheckCircle size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="competency-group">
                  <h4>
                    <Target size={18} />
                    الجدارات المهارية
                  </h4>
                  <ul>
                    {course.competencies.skills.map((item, index) => (
                      <li key={index}>
                        <CheckCircle size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="learn-visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="visual-card">
                <div className="visual-header">
                  <span className="visual-badge">نظام التقييم</span>
                </div>
                <div className="evaluation-items">
                  <div className="eval-item">
                    <div className="eval-info">
                      <span className="eval-name">{course.evaluation.attendance.description}</span>
                      <span className="eval-percentage">{course.evaluation.attendance.percentage}%</span>
                    </div>
                    <div className="eval-bar">
                      <div className="eval-fill" style={{ width: `${course.evaluation.attendance.percentage}%` }} />
                    </div>
                  </div>
                  <div className="eval-item">
                    <div className="eval-info">
                      <span className="eval-name">{course.evaluation.activities.description}</span>
                      <span className="eval-percentage">{course.evaluation.activities.percentage}%</span>
                    </div>
                    <div className="eval-bar">
                      <div className="eval-fill" style={{ width: `${course.evaluation.activities.percentage}%` }} />
                    </div>
                  </div>
                  <div className="eval-item">
                    <div className="eval-info">
                      <span className="eval-name">{course.evaluation.workshop.description}</span>
                      <span className="eval-percentage">{course.evaluation.workshop.percentage}%</span>
                    </div>
                    <div className="eval-bar">
                      <div className="eval-fill" style={{ width: `${course.evaluation.workshop.percentage}%` }} />
                    </div>
                  </div>
                  <div className="eval-item highlight">
                    <div className="eval-info">
                      <span className="eval-name">{course.evaluation.project.description}</span>
                      <span className="eval-percentage">{course.evaluation.project.percentage}%</span>
                    </div>
                    <div className="eval-bar">
                      <div className="eval-fill gold" style={{ width: `${course.evaluation.project.percentage}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lectures Preview */}
      <section className="section lectures-preview">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>الخطة التدريبية</h2>
            <p>7 محاضرات متخصصة مع ورش عمل تطبيقية لكل محاضرة</p>
          </motion.div>
          
          <motion.div 
            className="lectures-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {lectures.slice(0, 4).map((lecture) => (
              <motion.div 
                key={lecture.id} 
                className="lecture-preview-card"
                variants={fadeInUp}
              >
                <div className="lecture-number">
                  <span>{lecture.id}</span>
                </div>
                <div className="lecture-content">
                  <h3>{lecture.title}</h3>
                  <p>{lecture.subtitle}</p>
                  <div className="lecture-meta">
                    <span className="meta-item">
                      <Clock size={14} />
                      {lecture.duration} دقيقة
                    </span>
                    <span className="meta-item">
                      <Target size={14} />
                      ورشة عمل مرفقة
                    </span>
                  </div>
                </div>
                <Link to={`/lectures/${lecture.id}`} className="lecture-link">
                  <ArrowLeft size={18} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="view-all">
            <Link to="/lectures" className="btn btn-primary">
              عرض جميع المحاضرات
              <ArrowLeft size={18} />
            </Link>
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
            <div className="audience-text">
              <h2>لمَن هذا البرنامج؟</h2>
              <p>صُمم هذا البرنامج لكل من يسعى لتوظيف التقنية في خدمة الدعوة إلى الله</p>
            </div>
            
            <div className="audience-tags">
              {course.targetAudience.map((audience, index) => (
                <motion.div 
                  key={index} 
                  className="audience-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Users size={18} />
                  {audience}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>ابدأ رحلتك في الدعوة الرقمية اليوم</h2>
            <p>انضم إلى البرنامج واكتسب المهارات اللازمة لتوظيف التقنية في نشر الوسطية والاعتدال</p>
            <div className="cta-actions">
              <Link to="/lectures" className="btn btn-gold">
                <PlayCircle size={20} />
                ابدأ الآن
              </Link>
              <Link to="/contact" className="btn btn-outline">
                تواصل معنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
