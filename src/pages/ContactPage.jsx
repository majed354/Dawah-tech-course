import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  HelpCircle,
  CheckCircle
} from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const faqs = [
    {
      question: 'كيف ألتحق بالدورة؟',
      answer: 'يمكنك البدء مباشرة باستعراض المحاضرات والورش من صفحة الخطة التدريبية.'
    },
    {
      question: 'هل هناك شهادة إتمام؟',
      answer: 'نعم، يحصل المتدرب على شهادة إتمام عند إكمال جميع المحاضرات والورش ومشروع التخرج.'
    },
    {
      question: 'هل المحتوى مجاني؟',
      answer: 'نعم، جميع المحتوى التعليمي متاح مجانًا لخدمة الدعوة إلى الله.'
    },
    {
      question: 'هل تُسجّل المحاضرات؟',
      answer: 'نعم، جميع المحاضرات متاحة للمشاهدة في أي وقت يناسبك.'
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="contact-page">
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
              <span>تواصل معنا</span>
            </div>
            <h1>تواصل معنا</h1>
            <p>نسعد بتواصلك معنا واستفساراتك</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="form-header">
                <MessageSquare size={28} />
                <h2>أرسل رسالتك</h2>
              </div>
              
              {submitted ? (
                <div className="success-message">
                  <CheckCircle size={48} />
                  <h3>تم إرسال رسالتك بنجاح!</h3>
                  <p>سنتواصل معك في أقرب وقت ممكن</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">الاسم الكامل</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">البريد الإلكتروني</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">الموضوع</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">الرسالة</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="اكتب رسالتك هنا..."
                      rows="5"
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-full">
                    <Send size={18} />
                    إرسال الرسالة
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="info-card">
                <h3>معلومات التواصل</h3>
                <div className="info-items">
                  <a href="mailto:info@dawah-tech.com" className="info-item">
                    <div className="info-icon">
                      <Mail size={20} />
                    </div>
                    <div className="info-content">
                      <span className="info-label">البريد الإلكتروني</span>
                      <span className="info-value">info@dawah-tech.com</span>
                    </div>
                  </a>
                  
                  <a href="tel:+966500000000" className="info-item">
                    <div className="info-icon">
                      <Phone size={20} />
                    </div>
                    <div className="info-content">
                      <span className="info-label">الهاتف</span>
                      <span className="info-value">+966 50 000 0000</span>
                    </div>
                  </a>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="info-content">
                      <span className="info-label">الموقع</span>
                      <span className="info-value">المملكة العربية السعودية</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>الأسئلة الشائعة</h2>
            <p>إجابات على الأسئلة الأكثر شيوعًا</p>
          </motion.div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="faq-question">
                  <HelpCircle size={20} />
                  <h4>{faq.question}</h4>
                </div>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
