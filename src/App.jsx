import { useState } from 'react'
import { contactLinks, intro, profile } from './content'

function App() {
  const [isPetting, setIsPetting] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)

  const togglePet = () => {
    setIsPetting((value) => !value)
    setIsSpinning(true)
  }

  return (
    <div className="page-shell">
      <div className="ambient ambient-primary" aria-hidden="true" />
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <main className="page">
        <section className="hero-section">
          <header className="hero-header">
            <h1>{profile.name}</h1>
            <p className="contact-line">
              <span>contact intercept • </span>
              <a href={`mailto:${profile.email}`}>{profile.emailLabel ?? profile.email}</a>
            </p>
          </header>

          <a className="hero-button" href="#">
            {profile.buttonLabel}
          </a>

          <div className="intro-copy">
            {intro.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'lead-line' : ''}>
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
            ))}
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
      </main>
    </div>
  )
}

export default App
