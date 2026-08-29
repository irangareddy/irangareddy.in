import { useEffect, useMemo, useState } from 'react'
import {
  featuredProjects,
  learningWall,
  milestones,
  practiceAreas,
  profile,
  projectFilters,
  projects,
  socialLinks,
} from './content'

const normalizePath = (path) => {
  if (!path || path === '/') return '/'
  return path.replace(/\/+$/, '')
}

const routeForPath = (path) => {
  const normalized = normalizePath(path)
  if (normalized === '/work' || normalized === '/projects') return 'work'
  if ([learningWall.route, ...learningWall.aliases].map(normalizePath).includes(normalized)) return 'wall'
  return 'home'
}

function Arrow({ diagonal = false }) {
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d={diagonal ? 'M5 15 15 5M7 5h8v8' : 'M3 10h13M11 5l5 5-5 5'} />
    </svg>
  )
}

function SiteLink({ href, navigate, children, ...props }) {
  const handleClick = (event) => {
    if (
      navigate && href.startsWith('/') && !event.metaKey && !event.ctrlKey &&
      !event.shiftKey && event.button === 0
    ) {
      event.preventDefault()
      navigate(href)
    }
  }
  return <a href={href} onClick={handleClick} {...props}>{children}</a>
}

function Header({ route, navigate }) {
  return (
    <header className="site-header">
      <SiteLink className="wordmark" href="/" navigate={navigate} aria-label="Ranga Reddy — home">
        <span>{profile.shortName}</span><span className="wordmark-dot" aria-hidden="true" />
      </SiteLink>
      <nav className="site-nav" aria-label="Primary navigation">
        <SiteLink className={route === 'work' ? 'active' : ''} href="/work" navigate={navigate} aria-current={route === 'work' ? 'page' : undefined}>work</SiteLink>
        <SiteLink className={route === 'wall' ? 'active' : ''} href="/wall" navigate={navigate} aria-current={route === 'wall' ? 'page' : undefined}>wall</SiteLink>
        <a href="https://blog.irangareddy.in" target="_blank" rel="noreferrer">journal</a>
      </nav>
      <a className="header-contact" href={`mailto:${profile.email}`}>let’s talk <Arrow diagonal /></a>
    </header>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className={`feature-card tone-${project.tone}`}>
      <div className="feature-card-top"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.year}</span></div>
      <div className="project-orbit" aria-hidden="true"><span>{project.signal}</span></div>
      <div className="feature-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className="feature-actions">
        <a href={project.href} target="_blank" rel="noreferrer">source <Arrow diagonal /></a>
        {project.liveHref ? <a href={project.liveHref} target="_blank" rel="noreferrer">visit <Arrow diagonal /></a> : null}
      </div>
    </article>
  )
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-index" aria-hidden="true">01—05</div>
        <p className="hero-kicker"><span className="status-pulse" /> {profile.role} · {profile.location}</p>
        <h1 id="home-title">I tune agents<br />and build the <em>products</em><br />around them.</h1>
        <div className="hero-foot">
          <p>From private voice tools to spatial robotics, I build useful systems where research, interface, and engineering have to work together.</p>
          <a href="#selected-work">selected work <Arrow /></a>
        </div>
        <div className="hero-scribble" aria-hidden="true">curious → useful → shipped</div>
      </section>

      <section className="section practice-section" aria-labelledby="practice-title">
        <div className="section-heading">
          <p className="section-label">What I keep returning to</p>
          <h2 id="practice-title">A practice built across disciplines.</h2>
        </div>
        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <article className="practice-item" key={area.number}>
              <span>{area.number}</span><h3>{area.title}</h3><p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="selected-work" aria-labelledby="selected-title">
        <div className="section-heading inline-heading">
          <div><p className="section-label">Selected work · 2025—26</p><h2 id="selected-title">Things with a pulse.</h2></div>
          <SiteLink className="text-link" href="/work" navigate={navigate}>view the archive <Arrow /></SiteLink>
        </div>
        <div className="feature-grid">
          {featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}
        </div>
      </section>

      <section className="section trajectory-section" aria-labelledby="trajectory-title">
        <div className="section-heading">
          <p className="section-label">The trajectory</p><h2 id="trajectory-title">Six years of following the interesting thread.</h2>
        </div>
        <ol className="timeline">
          {milestones.map((milestone) => <li key={milestone.year}><span>{milestone.year}</span><p>{milestone.text}</p></li>)}
        </ol>
      </section>

      <section className="contact-strip" aria-label="Contact">
        <p>Have a sharp problem<br />or a strange idea?</p>
        <a href={`mailto:${profile.email}`}>Let’s make it real. <Arrow diagonal /></a>
      </section>
    </>
  )
}

function WorkPage() {
  const [filter, setFilter] = useState('all')
  const filteredProjects = useMemo(
    () => filter === 'all' ? projects : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <div className="inner-page work-page">
      <header className="page-intro">
        <p className="section-label">Public work archive · selected from 81 original repositories</p>
        <h1>Products, experiments,<br />and <em>useful detours.</em></h1>
        <p className="page-intro-copy">This is the edited version of a much messier GitHub history: the projects that best show how my work moved from mobile craft into applied AI, agent systems, and physical computing.</p>
      </header>

      <div className="filter-bar" role="group" aria-label="Filter projects">
        {projectFilters.map((item) => (
          <button className={filter === item.key ? 'active' : ''} type="button" onClick={() => setFilter(item.key)} aria-pressed={filter === item.key} key={item.key}>{item.label}</button>
        ))}
      </div>

      <div className="project-list" aria-live="polite">
        {filteredProjects.map((project, index) => (
          <article className="archive-row" key={project.name}>
            <div className="archive-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="archive-title">
              <div><h2>{project.name}</h2>{project.featured ? <span className="tiny-badge">featured</span> : null}</div>
              <p>{project.description}</p>
            </div>
            <div className="archive-meta"><span>{project.stack}</span><span>{project.year}</span></div>
            <div className="archive-links">
              {project.liveHref ? <a href={project.liveHref} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>live <Arrow diagonal /></a> : null}
              <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source`}>source <Arrow diagonal /></a>
            </div>
          </article>
        ))}
      </div>

      <a className="github-cta" href="https://github.com/irangareddy?tab=repositories" target="_blank" rel="noreferrer">
        <span>There is more in the monorepo.</span><strong>Explore all public repositories <Arrow diagonal /></strong>
      </a>
    </div>
  )
}

function WallPage() {
  return (
    <div className="inner-page wall-page">
      <header className="page-intro wall-intro">
        <p className="section-label">Research notebook · continuously in motion</p>
        <h1>{learningWall.title}</h1><p className="page-intro-copy">{learningWall.description}</p>
      </header>
      <div className="wall-cloud" aria-label="Learning topics">
        {learningWall.items.map((item, index) => (
          <span className="wall-fragment" key={item.label}>
            {item.href ? <a className={item.emphasis ? 'wall-link active' : 'wall-link'} href={item.href} target="_blank" rel="noreferrer">{item.label}</a> : <span className="wall-link pending" aria-label={`${item.label}, note in progress`}>{item.label}</span>}
            {index < learningWall.items.length - 1 ? <span className="wall-separator" aria-hidden="true">/</span> : null}
          </span>
        ))}
      </div>
      <p className="wall-note">One idea at a time. No pretending the map is the territory.</p>
    </div>
  )
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <p className="footer-mark">Ranga<br />Reddy<span>.</span></p>
        <p>{profile.status}.<br />Always open to the next difficult, useful thing.</p>
      </div>
      <div className="footer-links">
        {socialLinks.map((link) => <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" key={link.label}>{link.label} <Arrow diagonal /></a>)}
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Ranga Reddy Nukala</span><SiteLink href="/" navigate={navigate}>back to top ↑</SiteLink></div>
    </footer>
  )
}

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))
  const route = routeForPath(path)

  const navigate = (nextPath) => {
    const normalized = normalizePath(nextPath)
    if (normalized === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.history.pushState({}, '', normalized)
    setPath(normalized)
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const titles = { home: 'Ranga Reddy — AI engineer & product builder', work: 'Work — Ranga Reddy', wall: 'Learning Wall — Ranga Reddy' }
    document.title = titles[route]
  }, [route])

  return (
    <div className={`site-shell route-${route}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header route={route} navigate={navigate} />
      <main id="main-content">
        {route === 'home' ? <HomePage navigate={navigate} /> : null}
        {route === 'work' ? <WorkPage /> : null}
        {route === 'wall' ? <WallPage /> : null}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}

export default App
