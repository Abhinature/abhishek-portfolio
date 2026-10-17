import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Code2, Database, Layers3, Braces,
  Mail, Phone, Menu, X, Sparkles,
  Terminal, Workflow, Globe2, CheckCircle2, Bot, Cpu, MessagesSquare, Wand2
} from 'lucide-react';
import { Github, Linkedin } from './brandIcons.jsx';

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
  { icon: Terminal, title: 'Workflow', skills: 'Git · GitHub · Composer · Debugging · Deployment basics' },
  { icon: Bot, title: 'AI Tooling', skills: 'GitHub Copilot · Cursor · Claude Code · ChatGPT · Claude · Gemini' },
  { icon: Cpu, title: 'AI Integration', skills: 'OpenAI API · LLM APIs · Prompt design · Structured JSON output' },
  { icon: Sparkles, title: 'AI Workflow', skills: 'AI-assisted refactoring · Test generation · Docs · Code review' }
];

const aiExperiences = [
  {
    icon: Wand2, label: 'AI-ASSISTED DEVELOPMENT', title: 'Pair-programming with AI',
    description: 'Using GitHub Copilot, Cursor, and Claude Code day to day to scaffold features, refactor legacy code, write tests, and move faster — while reviewing every suggestion with a developer’s eye.',
    tools: ['GitHub Copilot', 'Cursor', 'Claude Code']
  },
  {
    icon: Cpu, label: 'LLM INTEGRATIONS', title: 'AI features inside real apps',
    description: 'Integrating OpenAI and other LLM APIs into web applications — prompt design, structured JSON responses, validation, and graceful error handling built on solid backend foundations.',
    tools: ['OpenAI API', 'LLM APIs', 'PHP / Laravel', 'REST']
  },
  {
    icon: MessagesSquare, label: 'AI FOR PROBLEM SOLVING', title: 'Research, debugging & docs',
    description: 'Working with ChatGPT, Claude, and Gemini to explore solutions, analyse tricky bugs and SQL, draft documentation, and turn vague requirements into clear implementation plans.',
    tools: ['ChatGPT', 'Claude', 'Gemini']
  }
];
const aiTools = [
  ['GitHub Copilot', 'Code assistant'], ['Cursor', 'AI editor'], ['Claude Code', 'Agentic coding'],
  ['ChatGPT', 'Assistant'], ['Claude', 'Assistant'], ['Gemini', 'Assistant'], ['OpenAI API', 'LLM integration']
];
const marqueeItems = ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'GitHub Copilot', 'Cursor', 'Claude Code', 'ChatGPT', 'Claude', 'Gemini', 'OpenAI API', 'PostgreSQL', 'JavaScript', 'WordPress'];
const heroWords = ['elegant', 'scalable', 'intelligent', 'reliable'];
const terminalScript = [
  { kind: 'cmd', text: 'claude "add AI summaries to support tickets"' },
  { kind: 'out', text: '✓ Reading app/Http/Controllers/TicketController.php' },
  { kind: 'out', text: '✓ Drafting SummaryService with OpenAI client' },
  { kind: 'cmd', text: 'php artisan test --filter=SummaryServiceTest' },
  { kind: 'ok', text: 'PASS  6 tests · 14 assertions' },
  { kind: 'cmd', text: 'git commit -m "feat: ticket summaries"' },
  { kind: 'ok', text: 'Reviewed by a human. Shipped. ✳' }
];

const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (prefersReducedMotion()) { items.forEach(el => el.classList.add('in')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
    }), { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(heroWords[0]);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const word = heroWords[index];
    let delay = deleting ? 55 : 95;
    if (!deleting && text === word) delay = 1900;
    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') { setDeleting(false); setIndex((index + 1) % heroWords.length); }
      else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index]);
  return <span className="gradient-text typed">{text}<span className="caret" aria-hidden="true"/></span>;
}

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const [value, setValue] = useState(prefersReducedMotion() ? to : 0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = now => {
        const t = Math.min((now - start) / 1400, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);
  return <span ref={ref}>{value}{suffix}</span>;
}

// Tracks the pointer inside a card so CSS can draw a glow and a subtle 3D tilt.
const trackPointer = (event) => {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  el.style.setProperty('--mx', `${x * 100}%`);
  el.style.setProperty('--my', `${y * 100}%`);
  el.style.setProperty('--rx', `${(0.5 - y) * 6}deg`);
  el.style.setProperty('--ry', `${(x - 0.5) * 6}deg`);
};
const resetPointer = (event) => {
  event.currentTarget.style.setProperty('--rx', '0deg');
  event.currentTarget.style.setProperty('--ry', '0deg');
};
const glowProps = { onMouseMove: trackPointer, onMouseLeave: resetPointer };

function AiTerminal() {
  const [lines, setLines] = useState(prefersReducedMotion() ? terminalScript.map(l => ({ ...l })) : []);
  const [typing, setTyping] = useState('');
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let cancelled = false;
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const run = async () => {
      while (!cancelled) {
        setLines([]);
        for (const line of terminalScript) {
          if (cancelled) return;
          if (line.kind === 'cmd') {
            for (let i = 1; i <= line.text.length; i++) {
              if (cancelled) return;
              setTyping(line.text.slice(0, i));
              await wait(32);
            }
            await wait(350);
            setTyping('');
          } else {
            await wait(420);
          }
          setLines(prev => [...prev, line]);
        }
        await wait(3800);
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);
  return (
    <div className="terminal" aria-label="Animated example of an AI-assisted development session">
      <div className="terminal-bar"><span/><span/><span/><small>~/projects/laravel-app — ai session</small></div>
      <div className="terminal-body">
        {lines.map((line, i) => <div key={i} className={`t-line t-${line.kind}`}>{line.kind === 'cmd' && <b>❯</b>}{line.text}</div>)}
        <div className="t-line t-cmd"><b>❯</b>{typing}<span className="caret"/></div>
      </div>
      <div className="terminal-glow"/>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const progress = useScrollProgress();
  const spotlightRef = useRef(null);
  useReveal();
  useEffect(() => {
    if (prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return;
    const move = e => spotlightRef.current?.style.setProperty('transform', `translate(${e.clientX}px, ${e.clientY}px)`);
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="cursor-spotlight" ref={spotlightRef} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="ambient ambient-three" />
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu}>AC<span>✳</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {[['About','#about'],['Work','#work'],['AI','#ai'],['Skills','#skills'],['Journey','#journey']].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy hero-enter">
            <div className="availability"><span className="pulse"/> OPEN TO PHP / LARAVEL OPPORTUNITIES</div>
            <p className="overline">HELLO, I'M ABHISHEK</p>
            
<h1>
  <span className="line-mask">
    <span>I turn complex</span>
  </span>

  <span className="line-mask">
    <span>problems into</span>
  </span>

  <span className="line-mask">
    <span><RotatingWord /></span>
  </span>

  <span className="line-mask">
    <span className="serif-word">web solutions.</span>
  </span>
</h1>

            <p className="hero-description">PHP & Laravel Developer with 5+ years of experience building useful web applications, reliable APIs, and data-driven systems — now supercharged with AI-assisted development and LLM integrations. I care about clean code, thoughtful user experiences, and solving the problem behind the requirement.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="button button-ghost" href={linkedin} target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={16}/></a>
            </div>
            <div className="hero-footnote"><span className="line"/> Based in India <span className="foot-dot">·</span> Available for remote opportunities</div>
          </div>
          <div className="portrait-stage hero-enter-late">
            <div className="portrait-orbit orbit-a"><i/></div><div className="portrait-orbit orbit-b"><i/></div>
            <div className="portrait-frame">
              <img src="/images/abhishek-profile.jpg" alt="Portrait of Abhishek Kumar Choudhary" />
              <div className="portrait-shade"/>
              <div className="portrait-label"><span className="label-icon"><Code2 size={16}/></span><div><strong>Developer mindset</strong><small>Build · Improve · Deliver</small></div></div>
            </div>
            <div className="floating-card float-top"><span className="float-icon"><Braces size={17}/></span><span><b><CountUp to={5} suffix="+"/> years</b><small>Building for the web</small></span></div>
            <div className="floating-card float-ai"><span className="float-icon"><Bot size={17}/></span><span><b>AI-powered</b><small>Copilot · Cursor · Claude</small></span></div>
            <div className="floating-card float-bottom"><span className="float-check"><CheckCircle2 size={18}/></span><span><b>Problem solver</b><small>From query to solution</small></span></div>
            <div className="portrait-index">01 <span>—</span> DEVELOPER PROFILE</div>
          </div>
          <a href="#about" className="scroll-cue"><span/> SCROLL TO EXPLORE</a>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => <span key={i}>{item}<em>✳</em></span>)}
          </div>
        </div>

        <section className="intro section-wrap" id="about">
          <div className="section-index">01 / ABOUT</div>
          <div className="intro-content reveal">
            <p className="overline">A LITTLE ABOUT MY APPROACH</p>
            <h2>Good software isn't just code.<br/><span>It's a better way to work.</span></h2>
            <div className="intro-bottom"><p>I work across backend development, integrations, databases, and front-end implementation. Whether I’m building a feature from scratch or improving an existing system, I aim for solutions that are practical, secure, maintainable, and easy for people to use.</p><div className="signature">Abhishek <span>↗</span></div></div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading reveal"><div><div className="section-index">02 / SELECTED WORK</div><h2>Work that solves<br/><span>real problems.</span></h2></div><p>A few solution areas from my experience. Details are intentionally high-level to respect client confidentiality.</p></div>
          <div className="project-grid">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return <article className="project-card glow-card reveal" style={{ '--delay': `${i * 90}ms` }} key={project.number} {...glowProps}>
                <div className="project-top"><span>{project.number} / {project.type}</span><span className="project-icon"><Icon size={19}/></span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-bottom"><span>ENGINEERING / DELIVERY</span><ArrowUpRight size={18}/></div>
              </article>;
            })}
          </div>
        </section>

        <section className="ai-section section-wrap" id="ai">
          <div className="section-index">03 / AI EXPERIENCE</div>
          <div className="section-heading skills-heading reveal"><div><h2>Engineering with<br/><span className="ai-gradient">AI as a co-pilot.</span></h2></div><p>I bring AI into both how I build and what I build — faster delivery with coding assistants, and smarter products with LLM integrations. Always with human review and solid engineering underneath.</p></div>
          <div className="ai-layout">
            <div className="ai-list">
              {aiExperiences.map(({ icon: Icon, label, title, description, tools }, i) =>
                <article className="ai-card glow-card reveal" style={{ '--delay': `${i * 110}ms` }} key={title} {...glowProps}>
                  <div className="ai-card-top"><span className="ai-icon"><Icon size={18}/></span><span>{label}</span></div>
                  <h3>{title}</h3><p>{description}</p>
                  <div className="project-tags">{tools.map(tool => <span key={tool}>{tool}</span>)}</div>
                </article>
              )}
            </div>
            <div className="ai-side reveal" style={{ '--delay': '160ms' }}>
              <AiTerminal/>
              <div className="ai-tools">
                <div className="ai-tools-title"><Sparkles size={14}/> AI TOOLS I WORK WITH</div>
                <div className="ai-tools-grid">
                  {aiTools.map(([name, role], i) => <div className="ai-tool" key={name} style={{ '--i': i }}><b>{name}</b><small>{role}</small></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-index">04 / TOOLKIT</div>
          <div className="section-heading skills-heading reveal"><div><h2>The tools behind<br/><span>the thinking.</span></h2></div><p>A versatile stack for building, connecting, debugging, and improving web applications.</p></div>
          <div className="skills-grid">{skillGroups.map(({icon: Icon,title,skills}, i) => <div className="skill-card glow-card reveal" style={{ '--delay': `${i * 70}ms` }} key={title} {...glowProps}><div className="skill-icon"><Icon size={19}/></div><h3>{title}</h3><p>{skills}</p></div>)}</div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <div className="section-index">05 / JOURNEY</div>
          <div className="journey-layout"><div className="reveal"><p className="overline">HOW I ADD VALUE</p><h2>Curious by nature.<br/><span>Practical by design.</span></h2></div>
            <div className="journey-list reveal" style={{ '--delay': '120ms' }}>
              <div className="journey-item"><span>01</span><div><h3>Understand the problem</h3><p>Clarify requirements and turn them into a practical implementation plan.</p></div></div>
              <div className="journey-item"><span>02</span><div><h3>Build for maintainability</h3><p>Use reusable patterns, clear validation, structured APIs, and readable code.</p></div></div>
              <div className="journey-item"><span>03</span><div><h3>Improve what matters</h3><p>Debug carefully, tune data access, and refine the experience based on real needs.</p></div></div>
              <div className="journey-item"><span>04</span><div><h3>Amplify with AI</h3><p>Use AI tools to accelerate the routine work, then apply judgment and review where it counts.</p></div></div>
            </div>
          </div>
          <div className="experience-note reveal"><Sparkles size={18}/><p><strong>Professional background</strong><br/>PHP / Laravel development, government portal features, CMS websites, API integrations, and database performance work — plus hands-on AI-assisted development and LLM API integrations.</p></div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card reveal">
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
