import { useEffect, useState } from 'react'
import { contactLinks, intro, learningWall, now, outro, profile } from './content'

const normalizePath = (path) => {
  if (!path || path === '/') {
    return '/'
  }

  return path.replace(/\/+$/, '')
}

const learningPaths = [learningWall.route, ...learningWall.aliases].map(normalizePath)

function TopicWall() {
  return (
    <section className="wall-section">
      <div className="wall-cloud" aria-label="wall topics">
        {learningWall.items.map((item, index) => (
          <span className="wall-fragment" key={item.label}>
            {item.disabled ? (
              <span className="wall-link disabled" aria-disabled="true">
                {item.label}
              </span>
            ) : (
              <a
                className={`wall-link${item.emphasis ? ' emphasis' : ''}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            )}
            {index < learningWall.items.length - 1 ? (
              <span className="wall-separator" aria-hidden="true">/</span>
            ) : null}
          </span>
        ))}
      </div>
    </section>
  )
}

function RichParagraphs({ paragraphs, leadFirst = false }) {
  return paragraphs.map((paragraph, index) => (
    <p key={index} className={leadFirst && index === 0 ? 'lead-line' : ''}>
      {paragraph.map((part, partIndex) => (
        part.href ? (
          <a
            key={`${index}-${partIndex}`}
            className={part.underline ? 'inline-underline' : undefined}
            href={part.href}
            target="_blank"
            rel="noreferrer"
          >
            {part.text}
          </a>
        ) : (
          <span
            key={`${index}-${partIndex}`}
            className={part.underline ? 'inline-underline' : undefined}
          >
            {part.text}
          </span>
        )
      ))}
    </p>
  ))
}

function NowList() {
  return (
    <section className="now-section" aria-label="now">
      <h2 className="now-heading">now</h2>
      <ul className="now-list">
        {now.map((item) => (
          <li key={item.name} className="now-item">
            {item.href ? (
              <a className="now-name inline-underline" href={item.href} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            ) : (
              <span className="now-name">{item.name}</span>
            )}
            <span className="now-detail">{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function App() {
  const [isPetting, setIsPetting] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  const isLearningWall = learningPaths.includes(pathname)

  const togglePet = () => {
    setIsPetting((value) => !value)
    setIsSpinning(true)
  }

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname))
    }

    document.title = isLearningWall ? 'wall | ranga reddy nukala' : 'ranga reddy nukala · product engineer'
    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [isLearningWall])

  return (
    <div className={`page-shell${isLearningWall ? ' wall-mode' : ''}`}>
      <div className="ambient ambient-primary" aria-hidden="true" />
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <main className="page">
        <nav className="page-nav" aria-label="site">
          <a className={`nav-link${!isLearningWall ? ' active' : ''}`} href="/">
            home
          </a>
          <a className={`nav-link${isLearningWall ? ' active' : ''}`} href={learningWall.route}>
            wall
          </a>
        </nav>

        {isLearningWall ? <TopicWall /> : (
        <section className="hero-section">
          <header className="hero-header">
            <h1>{profile.name}</h1>
            <p className="contact-line">
              <span>contact intercept • </span>
              <a href={`mailto:${profile.email}`}>{profile.emailLabel ?? profile.email}</a>
            </p>
          </header>

          <div className="intro-copy">
            <RichParagraphs paragraphs={intro} leadFirst />
          </div>

          <NowList />

          <div className="intro-copy outro-copy">
            <RichParagraphs paragraphs={outro} />
          </div>

          <div className="pet-row">
            <button
              type="button"
              className={`pet-button${isSpinning ? ' spinning' : ''}`}
              onClick={togglePet}
              onAnimationEnd={() => setIsSpinning(false)}
              aria-label="pet the cat"
            >
              <img src="/panda-pet.svg" alt="" className="pet-icon" />
            </button>
            <div className="pet-note">
              <svg viewBox="0 0 78 20" fill="none" aria-hidden="true">
                <path
                  d="M76 10 C58 15 37 15 2 10"
                  className="arrow-stroke"
                />
                <path
                  d="M2 10 L8 6 M2 10 L8 14"
                  className="arrow-stroke"
                />
              </svg>
              <span>{isPetting ? 'thank you' : 'pet me'}</span>
            </div>
          </div>

          <div className="link-row">
            {contactLinks.map((link) => (
              <div className="link-group" key={link.label}>
                {link.disabled ? (
                  <span className="footer-link disabled-link">{link.label}</span>
                ) : (
                  <a
                    className="footer-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                )}
                <svg viewBox="0 0 38 52" fill="none" aria-hidden="true">
                  <path d="M19 50 C19 38 19 22 19 4" className="arrow-stroke" />
                  <path d="M19 4 L15 10 M19 4 L23 10" className="arrow-stroke" />
                </svg>
                <p className="footer-note">{link.detail}</p>
              </div>
            ))}
          </div>
        </section>
        )}
      </main>
    </div>
  )
}

export default App
