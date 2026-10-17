import React, { useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Code2, Database, Layers3, Braces,
  Github, Linkedin, Mail, Phone, Menu, X, ExternalLink, Sparkles,
  Terminal, Workflow, Globe2, CheckCircle2
} from 'lucide-react';

const linkedin = 'https://www.linkedin.com/in/abhishek-choudhary-02342b164/';
const email = 'theabhi.sam@gmail.com';
const projects = [
  {
    number: '01', type: 'CIVIC TECHNOLOGY', title: 'Smart PDS Portal',
    description: 'Citizen-facing and administrative workflows for public distribution services, with role-based access, application screening, record management, and portal improvements.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Role-based access'],
    icon: Globe2
  },
  {
    number: '02', type: 'BACKEND ENGINEERING', title: 'API & Service Integrations',
    description: 'API-driven features and third-party integrations designed around dependable data exchange, validation, structured error handling, and maintainable code.',
    stack: ['REST APIs', 'JSON', 'PHP', 'Integrations'],
    icon: Workflow
  },
  {
    number: '03', type: 'DATA & PERFORMANCE', title: 'Database Optimization',
    description: 'SQL troubleshooting and reporting improvements through query restructuring, practical indexing, and careful analysis of joins and filters.',
    stack: ['MySQL', 'MariaDB', 'PostgreSQL', 'SQL'],
    icon: Database
  },
  {
    number: '04', type: 'WEB EXPERIENCES', title: 'CMS & Business Websites',
    description: 'Content-driven websites and custom functionality with responsive interfaces, including WordPress work and e-commerce-oriented web experiences.',
    stack: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    icon: Layers3
  }
];
const skillGroups = [
  { icon: Code2, title: 'Backend', skills: 'PHP · Laravel · CodeIgniter · Lumen · MVC · OOP' },
  { icon: Database, title: 'Data', skills: 'MySQL · MariaDB · PostgreSQL · SQL tuning · Indexing' },
  { icon: Braces, title: 'Frontend', skills: 'HTML5 · CSS3 · JavaScript · jQuery · AJAX · React basics' },
  { icon: Workflow, title: 'Integration', skills: 'REST APIs · JSON · Payment gateway integration · Postman' },
  { icon: Layers3, title: 'Platforms', skills: 'WordPress · Shopify exposure · CMS development' },
  { icon: Terminal, title: 'Workflow', skills: 'Git · GitHub · Composer · Debugging · Deployment basics' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu}>AC<span>✳</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {[['About','#about'],['Work','#work'],['Skills','#skills'],['Journey','#journey']].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="pulse"/> OPEN TO PHP / LARAVEL OPPORTUNITIES</div>
            <p className="overline">HELLO, I'M ABHISHEK</p>
            <h1>I turn complex<br/>problems into <span className="gradient-text">elegant</span><br/><span className="serif-word">web solutions.</span></h1>
            <p className="hero-description">PHP & Laravel Developer with 5+ years of experience building useful web applications, reliable APIs, and data-driven systems. I care about clean code, thoughtful user experiences, and solving the problem behind the requirement.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="button button-ghost" href={linkedin} target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={16}/></a>
            </div>
            <div className="hero-footnote"><span className="line"/> Based in India <span className="foot-dot">·</span> Available for remote opportunities</div>
          </div>
          <div className="portrait-stage">
            <div className="portrait-orbit orbit-a"/><div className="portrait-orbit orbit-b"/>
            <div className="portrait-frame">
              <img src="/images/abhishek-profile.jpg" alt="Portrait of Abhishek Kumar Choudhary" />
              <div className="portrait-shade"/>
              <div className="portrait-label"><span className="label-icon"><Code2 size={16}/></span><div><strong>Developer mindset</strong><small>Build · Improve · Deliver</small></div></div>
            </div>
            <div className="floating-card float-top"><span className="float-icon"><Braces size={17}/></span><span><b>5+ years</b><small>Building for the web</small></span></div>
            <div className="floating-card float-bottom"><span className="float-check"><CheckCircle2 size={18}/></span><span><b>Problem solver</b><small>From query to solution</small></span></div>
            <div className="portrait-index">01 <span>—</span> DEVELOPER PROFILE</div>
          </div>
          <a href="#about" className="scroll-cue"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-index">01 / ABOUT</div>
          <div className="intro-content">
            <p className="overline">A LITTLE ABOUT MY APPROACH</p>
            <h2>Good software isn't just code.<br/><span>It's a better way to work.</span></h2>
            <div className="intro-bottom"><p>I work across backend development, integrations, databases, and front-end implementation. Whether I’m building a feature from scratch or improving an existing system, I aim for solutions that are practical, secure, maintainable, and easy for people to use.</p><div className="signature">Abhishek <span>↗</span></div></div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading"><div><div className="section-index">02 / SELECTED WORK</div><h2>Work that solves<br/><span>real problems.</span></h2></div><p>A few solution areas from my experience. Details are intentionally high-level to respect client confidentiality.</p></div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className="project-card" key={project.number}>
                <div className="project-top"><span>{project.number} / {project.type}</span><span className="project-icon"><Icon size={19}/></span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-bottom"><span>ENGINEERING / DELIVERY</span><ArrowUpRight size={18}/></div>
              </article>;
            })}
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-index">03 / TOOLKIT</div>
          <div className="section-heading skills-heading"><div><h2>The tools behind<br/><span>the thinking.</span></h2></div><p>A versatile stack for building, connecting, debugging, and improving web applications.</p></div>
          <div className="skills-grid">{skillGroups.map(({icon: Icon,title,skills}) => <div className="skill-card" key={title}><div className="skill-icon"><Icon size={19}/></div><h3>{title}</h3><p>{skills}</p></div>)}</div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <div className="section-index">04 / JOURNEY</div>
          <div className="journey-layout"><div><p className="overline">HOW I ADD VALUE</p><h2>Curious by nature.<br/><span>Practical by design.</span></h2></div>
            <div className="journey-list">
              <div className="journey-item"><span>01</span><div><h3>Understand the problem</h3><p>Clarify requirements and turn them into a practical implementation plan.</p></div></div>
              <div className="journey-item"><span>02</span><div><h3>Build for maintainability</h3><p>Use reusable patterns, clear validation, structured APIs, and readable code.</p></div></div>
              <div className="journey-item"><span>03</span><div><h3>Improve what matters</h3><p>Debug carefully, tune data access, and refine the experience based on real needs.</p></div></div>
            </div>
          </div>
          <div className="experience-note"><Sparkles size={18}/><p><strong>Professional background</strong><br/>PHP / Laravel development, government portal features, CMS websites, API integrations, and database performance work.</p></div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-eyebrow"><span className="pulse"/> HAVE A PROJECT OR ROLE IN MIND?</div>
            <h2>Let’s make<br/><span>something matter.</span></h2>
            <p>Looking for a PHP / Laravel developer or a collaborator for your next web project? I’d be happy to connect.</p>
            <div className="contact-actions"><a className="button button-primary" href={`mailto:${email}`}>Start a conversation <Mail size={17}/></a><a className="button button-ghost" href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a></div>
            <div className="contact-details"><a href={`mailto:${email}`}><Mail size={15}/>{email}</a><a href="tel:+918796657939"><Phone size={15}/>+91 87966 57939</a></div>
            <div className="contact-decoration">AC<span>✳</span></div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="wordmark" href="#home">AC<span>✳</span></a><span>Designed with intent. Built with React.</span><div className="footer-links"><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={18}/></a></div><span className="copyright">© {new Date().getFullYear()} Abhishek Choudhary</span></footer>
    </div>
  );
}
export default App;
            
