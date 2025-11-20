import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About This Project</h1>
        <p>Learn about the technologies and structure used in this React TypeScript template</p>
      </section>

      <section className="about-content">
        <div className="content-grid">
          <div className="content-section">
            <h2>🏗️ Project Structure</h2>
            <p>This project follows a clean and organized structure:</p>
            <ul>
              <li><code>src/components/</code> - Reusable React components</li>
              <li><code>src/pages/</code> - Individual page components</li>
              <li><code>src/App.tsx</code> - Main application component</li>
              <li><code>src/main.tsx</code> - Application entry point</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>🛠️ Technologies Used</h2>
            <div className="tech-list">
              <div className="tech-item">
                <strong>React 18</strong>
                <p>Modern React with hooks and concurrent features</p>
              </div>
              <div className="tech-item">
                <strong>TypeScript</strong>
                <p>Static type checking for better development experience</p>
              </div>
              <div className="tech-item">
                <strong>Vite</strong>
                <p>Fast build tool and development server</p>
              </div>
              <div className="tech-item">
                <strong>React Router</strong>
                <p>Declarative routing for React applications</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>🚀 Getting Started</h2>
            <p>To get started with this template:</p>
            <ol>
              <li>Install dependencies: <code>npm install</code></li>
              <li>Start development server: <code>npm run dev</code></li>
              <li>Build for production: <code>npm run build</code></li>
              <li>Preview production build: <code>npm run preview</code></li>
            </ol>
          </div>

          <div className="content-section">
            <h2>📝 Routing Example</h2>
            <p>This template demonstrates basic routing with React Router:</p>
            <ul>
              <li><code>/</code> - Home page (this page)</li>
              <li><code>/about</code> - About page (current page)</li>
              <li><code>/contact</code> - Contact page</li>
            </ul>
            <p>Navigation is handled by the Layout component with active state management.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About