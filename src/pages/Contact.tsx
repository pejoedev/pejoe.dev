import React, { useState } from 'react'
import './Contact.css'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData)
        alert('Thank you for your message! (This is just a demo)')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="contact">
            <section className="contact-header">
                <h1>Contact Us</h1>
                <p>Get in touch with us using the form below or through our social channels</p>
            </section>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

                    <div className="contact-methods">
                        <div className="contact-method">
                            <h3>📧 Email</h3>
                            <p>hello@pejoe.dev</p>
                        </div>
                        <div className="contact-method">
                            <h3>🐦 Twitter</h3>
                            <p>@pejoedev</p>
                        </div>
                        <div className="contact-method">
                            <h3>💼 LinkedIn</h3>
                            <p>/in/pejoedev</p>
                        </div>
                        <div className="contact-method">
                            <h3>🐙 GitHub</h3>
                            <p>/pejoedev</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Send Message</h2>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
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
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact