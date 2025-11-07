import React from 'react'
import { Mail, Linkedin, Phone, FileDown, ExternalLink } from 'lucide-react'

export default function App(){
  return (
    <div className="app-root">
      <header className="hero">
        <img src="/profile.jpg" alt="Profile" className="avatar" />
        <h1>S. Shanmugapragashan</h1>
        <p className="tag">Full-Stack Developer | IT Executive | Network Technician</p>
        <div className="actions">
          <a className="btn" href="mailto:shanmugapragashan@gmail.com"><Mail/> Email</a>
          <a className="btn outline" href="tel:+94766257350"><Phone/> Call</a>
          <a className="btn outline" href="https://linkedin.com/in/somasundaram-shanmugapragashan-0109601b8" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
          <a className="btn" href="/shanmugapragashan_updated.pdf" download><FileDown/> Download CV</a>
        </div>
      </header>
      <main className="container">
        <section className="about"><h2>About Me</h2><p>I’m a passionate IT professional and full-stack developer with hands-on experience in Laravel, PHP, MySQL, and networking technologies. Having contributed to Sri Lankan government IT systems, I aim to empower local businesses with secure and efficient digital solutions.</p></section>
        <section className="skills"><h2>Technical Skills</h2><div className="grid"><div className="card">Frontend: HTML, CSS, Bootstrap, JavaScript, jQuery</div><div className="card">Backend: PHP, Laravel, Python, MySQL</div><div className="card">Networking: LAN/WAN, Firewalls, Servers, CCTV Installation</div></div></section>
        <section className="projects"><h2>Highlighted Projects</h2><div className="grid"><div className="card"><h3>IWMS Sub-Module</h3><p>Developed PHP modules for government web systems.</p></div><div className="card"><h3>LAN Management System</h3><p>Laravel web app for monitoring office networks.</p></div><div className="card"><h3>CCTV Monitoring Dashboard</h3><p>Python automation for CCTV tasks and reporting.</p></div></div></section>
        <section className="gallery"><h2>Projects Gallery</h2><p className="muted">Add your project screenshots to <code>/public/projects/</code> and update links in <code>/src/App.jsx</code>.</p><div className="gallery-grid"><div className="thumb"><img src="/projects/laravel-dashboard.png" alt="laravel"/><a className="overlay" href="https://example.com" target="_blank" rel="noreferrer"><ExternalLink/> View</a></div><div className="thumb"><img src="/projects/php-invoice.png" alt="php"/><a className="overlay" href="https://example.com" target="_blank" rel="noreferrer"><ExternalLink/> View</a></div><div className="thumb"><img src="/projects/network-monitor.png" alt="network"/><a className="overlay" href="https://example.com" target="_blank" rel="noreferrer"><ExternalLink/> View</a></div></div></section>
        <section className="contact"><h2>Hire Me / Get In Touch</h2><form action="https://formspree.io/f/xjkbwqgn" method="POST" className="contact-form"><input name="name" type="text" placeholder="Your name" required/><input name="email" type="email" placeholder="Your email" required/><textarea name="message" rows="5" placeholder="Project details" required></textarea><button className="btn primary" type="submit">Send Message</button></form></section>
      </main>
      <footer className="footer">© 2025 S. Shanmugapragashan — Designed in Sri Lanka</footer>
    </div>
  )
}