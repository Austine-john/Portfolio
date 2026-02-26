import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
    const infoRef = useScrollReveal();
    const formRef = useScrollReveal();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Initialize EmailJS with public key
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    title: 'Portfolio Contact Form'
                }
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info reveal reveal-left" ref={infoRef}>
                        <h2 className="section-title">Let&apos;s Connect</h2>
                        <p className="contact-description">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" aria-hidden="true" />
                                <div>
                                    <h4>Email Me</h4>
                                    <a href="mailto:austineochieng101@gmail.com">austineochieng101@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Find me on</h4>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/austine-john/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                    <FaLinkedin aria-hidden="true" />
                                </a>
                                <a href="https://github.com/Austine-john" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                                    <FaGithub aria-hidden="true" />
                                </a>
                                <a href="https://x.com/Austine77_" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter / X">
                                    <FaTwitter aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form reveal reveal-right" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                autoComplete="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                                autoComplete="email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or opportunity"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending…' : 'Send Message'}
                        </button>

                        {submitStatus === 'success' && (
                            <p className="status-message success" role="status">✓ Message sent successfully!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="status-message error" role="alert">✕ Failed to send message. Please try again later.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
