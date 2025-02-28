import { Form, Input } from "antd";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import '../styles/Forms.css';

// Define form values interface
interface FormValues {
  user_name: string;
  user_email: string;
  phone: string;
  address: string;
  message?: string;
}

// Configure your EmailJS settings here
// You can move this to a separate config file for better organization
const EMAILJS_CONFIG = {
  publicKey: "J8PVYNbQogZIhxdvV", // Your EmailJS public key
  serviceId: "service_or2x7is", // Your EmailJS service ID
  templateId: "template_a4lg6ec" // Your EmailJS template ID
};

const ContactForm = () => {
    const [form] = Form.useForm<FormValues>();
    const [isMobileWidth, setIsMobileWidth] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileWidth(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = async (values: FormValues) => {
        setIsSubmitting(true);
        setSubmitError(false);
        setSubmitted(false);
        
        try {
            // Initialize EmailJS with your public key
            emailjs.init(EMAILJS_CONFIG.publicKey);

            const templateParams = {
                user_name: values.user_name,
                user_email: values.user_email,
                phone: values.phone,
                address: values.address,
                message: values.message || "",
            };

            const response = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams
            );

            if (response.status === 200) {
                setSubmitted(true);
                form.resetFields();
            } else {
                throw new Error("Failed to send email");
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form
            form={form}
            onFinish={handleSubmit}
            className="contact-form"
            layout="vertical"
        >
            {submitted && (
                <div className="form-message success">
                    <CheckCircle2 size={20} />
                    <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
            )}

            {submitError && (
                <div className="form-message error">
                    <AlertCircle size={20} />
                    <p>There was an error sending your message. Please try again.</p>
                </div>
            )}

            <div className={`form-grid ${isMobileWidth ? 'mobile' : ''}`}>
                <Form.Item
                    name="user_name"
                    rules={[{ required: true, message: "Please enter your full name" }]}
                >
                    <Input placeholder="Your Full Name" />
                </Form.Item>

                <Form.Item
                    name="user_email"
                    rules={[
                        { required: true, message: "Please enter your email address" },
                        { type: 'email', message: "Please enter a valid email address" }
                    ]}
                >
                    <Input placeholder="Your Email Address" type="email" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    rules={[
                        { required: true, message: "Please enter your phone number" },
                        { pattern: /^[0-9+\-\s()]+$/, message: "Please enter a valid phone number" }
                    ]}
                >
                    <Input placeholder="Your Phone Number" />
                </Form.Item>

                <Form.Item
                    name="address"
                    rules={[{ required: true, message: "Please enter your address" }]}
                >
                    <Input placeholder="Your Address" />
                </Form.Item>

                <Form.Item 
                    name="message"
                    className="full-width"
                >
                    <Input.TextArea 
                        rows={5} 
                        placeholder="Your Message (optional)"
                    />
                </Form.Item>
            </div>

            <Form.Item>
                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;