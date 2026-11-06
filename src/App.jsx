import { useEffect, useRef, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon, ArrowRight01Icon, ArrowUpRight01Icon, Copy01Icon, Search01Icon, Tick02Icon } from '@hugeicons/core-free-icons'
import { allWork, bioProjectLinks, contactLinks, intro, learningWall, now, profile } from './content'
import { workGroups } from './work'
import repositories from './repositories.json'
import bioTokens from './bio-tokens.json'

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

function LinkArrow({ external = false }) {
  return <HugeiconsIcon icon={external ? ArrowUpRight01Icon : ArrowRight01Icon} size={13} strokeWidth={1.6} className={`link-arrow${external ? ' external-arrow' : ''}`} aria-hidden="true" />
}

function projectLinkLabel(href) {
  const host = new URL(href).hostname
  if (host === 'github.com') return 'view code'
  if (host === 'doi.org') return 'read paper'
  if (host === 'apps.apple.com') return 'view app'
  if (host === 'pypi.org') return 'view package'
  if (host === 'youtu.be' || host === 'youtube.com') return 'watch demo'
  return 'visit project'
}

function WorkRows({ items, id }) {
  return (
    <ul className="now-list" id={id}>
      {items.map(item => (
        <li key={item.id} className="project-item" id={`work-${item.id}`}>
          <details className="project-disclosure">
            <summary className="project-summary">
              <span className="project-name">{item.name}<HugeiconsIcon icon={ArrowDown01Icon} size={12} strokeWidth={1.6} className="project-chevron" aria-hidden="true" /></span>
              <span className="now-detail">{item.summary}</span>
            </summary>
            <div className="project-expanded">
              {item.status ? <p className="work-status">{item.status}</p> : null}
              <p>{item.detail}</p>
              {item.technologies?.length ? <ul className="project-technologies" aria-label="technologies">{item.technologies.map(technology => <li key={technology}>{technology.toLowerCase()}</li>)}</ul> : null}
              {item.href ? <a className="project-destination inline-underline" href={item.href} target="_blank" rel="noreferrer">{projectLinkLabel(item.href)}<LinkArrow external /></a> : null}
            </div>
          </details>
        </li>
      ))}
    </ul>
  )
}

const workFilters = [
  { id: 'featured', label: 'featured' },
  { id: 'all', label: 'all' },
  { id: 'apps', label: 'apps' },
  { id: 'ai', label: 'ai' },
  { id: 'open-source', label: 'open source' },
  { id: 'libraries', label: 'libraries' },
  { id: 'systems', label: 'systems' },
  { id: 'professional', label: 'career' },
]

function matchingWork(filter) {
  if (filter === 'featured') return now
  if (filter === 'all') return allWork
  if (filter === 'open-source') return allWork.filter(item => item.openSource)
  return workGroups.find(group => group.id === filter)?.items ?? []
}

function WorkFilters({ value, onChange, resultsId }) {
  return (
    <div className="work-filters" role="group" aria-label="filter work">
      {workFilters.map(filter => (
        <button key={filter.id} type="button" className="work-chip" aria-pressed={value === filter.id} aria-controls={resultsId} onClick={() => onChange(filter.id)}>
          <span className="work-chip-face">{filter.label}{filter.id === 'all' ? <span className="work-chip-count">{allWork.length}</span> : null}</span>
        </button>
      ))}
    </div>
  )
}

function NowList({ filter, onFilterChange }) {
  const items = matchingWork(filter)
  return (
    <section className="now-section" aria-label="selected work">
      <div className="home-work-heading"><h2 className="now-heading">work</h2></div>
      <WorkFilters value={filter} onChange={onFilterChange} resultsId="home-work-results" />
      <p className="visually-hidden" role="status">{items.length} {items.length === 1 ? 'entry' : 'entries'} · {workFilters.find(item => item.id === filter).label}</p>
      <WorkRows items={items} id="home-work-results" />
    </section>
  )
}

function RepositoryArchive() {
  const [query, setQuery] = useState('')
  const normalized = query.trim().toLowerCase()
  const results = repositories.filter(repo => `${repo.name} ${repo.language} ${repo.fork ? 'fork' : ''}`.toLowerCase().includes(normalized))
  return (
    <details className="repository-archive" id="code-archive">
      <summary><span>public code archive · {repositories.length} repositories</span><HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={1.6} className="archive-chevron" aria-hidden="true" /></summary>
      <p className="archive-intro">the longer trail: apps, tools, coursework, tutorials, and experiments. forks are marked; this is a repository index, not a list of shipped products. snapshot: november 2026.</p>
      <label className="repository-search">find a repository
        <span className="repository-search-field"><HugeiconsIcon icon={Search01Icon} size={17} strokeWidth={1.6} aria-hidden="true" /><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="name or language" /></span>
      </label>
      <p className="repository-count" role="status">{results.length} of {repositories.length} repositories</p>
      {results.length ? <ul className="repository-list">{results.map(repo => (
        <li key={repo.name}><a className="inline-underline" href={repo.href} target="_blank" rel="noreferrer">{repo.name.toLowerCase()}</a><span>{[repo.language, repo.fork ? 'fork' : ''].filter(Boolean).join(' · ').toLowerCase()}</span></li>
      ))}</ul> : <p className="archive-intro">no matches. try a project name or a language such as swift or python.</p>}
    </details>
  )
}

const bioPhrasePattern = new RegExp(`\\b(${bioProjectLinks.map(link => link.phrase).sort((a, b) => b.length - a.length).join('|')})\\b`, 'gi')
const bioLinkRanges = Array.from(bioTokens.source.matchAll(bioPhrasePattern), match => ({
  ...bioProjectLinks.find(link => link.phrase === match[0].toLowerCase()),
  start: match.index,
  end: match.index + match[0].length,
}))
const bioTokenGroups = bioTokens.tokens.reduce((groups, token, index) => {
  const range = bioLinkRanges.find(link => token.start < link.end && token.end > link.start)
  const previous = groups.at(-1)
  if (range && previous?.rangeStart === range.start) previous.tokens.push({ ...token, index })
  else groups.push({ project: range?.project, rangeStart: range?.start, tokens: [{ ...token, index }] })
  return groups
}, [])

function BioToken({ token }) {
  return <span className={`bio-token token-color-${token.index % 5}`} data-token-id={token.id} title={`token ${token.id} · ${JSON.stringify(token.text)}`}>{token.text}</span>
}

function TokenBio({ onProjectSelect }) {
  return <p className="token-stream">{bioTokenGroups.map(group => {
    const key = group.tokens[0].start
    const tokens = group.tokens.map(token => <BioToken key={token.start} token={token} />)
    if (!group.project) return tokens
    const project = allWork.find(item => item.id === group.project)
    return <a key={key} className="bio-token-link" href={`/#work-${group.project}`} title={`open ${project.name}`} aria-label={`${group.tokens.map(token => token.text).join('').trim()} (open ${project.name} project)`} onClick={event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      onProjectSelect(group.project)
      const target = document.getElementById(`work-${group.project}`)
      if (target) target.querySelector('details').open = true
    }}>{tokens}</a>
  })}</p>
}

function ProfileIntro({ onProjectSelect }) {
  const [showTokens, setShowTokens] = useState(false)
  return (
    <header className="hero-header home-about bio-section" id="about">
      <div className="profile-heading">
        <h1>{profile.name}</h1>
        <div className="bio-view-switch" role="group" aria-label="biography view">
          <button type="button" aria-pressed={!showTokens} aria-controls="bio-copy" onClick={() => setShowTokens(false)}>text</button>
          <span aria-hidden="true">/</span>
          <button type="button" aria-pressed={showTokens} aria-controls="bio-copy" onClick={() => setShowTokens(true)}>tokens</button>
        </div>
      </div>
      {showTokens ? <p className="bio-view-hint" title={`${bioTokens.encoding} · ${bioTokens.generator}`.toLowerCase()}>{bioTokens.tokens.length} gpt tokens · underlined phrases open projects</p> : null}
      <div className={`intro-copy ${showTokens ? 'token-bio' : 'bio-note'}`} id="bio-copy">{showTokens ? <TokenBio onProjectSelect={onProjectSelect} /> : <RichParagraphs paragraphs={intro} />}</div>
    </header>
  )
}

function EmailContact() {
  const [state, setState] = useState('idle')
  const resetTimer = useRef(null)
  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  const copyEmail = async () => {
    window.clearTimeout(resetTimer.current)
    try {
      await navigator.clipboard.writeText(profile.email)
      setState('copied')
      resetTimer.current = window.setTimeout(() => setState('idle'), 2500)
    } catch {
      setState('failed')
    }
  }

  return (
    <span className="email-contact">
      <a href={`mailto:${profile.email}`}>email</a>
      <button type="button" className={`copy-email${state === 'copied' ? ' copied' : ''}`} onClick={copyEmail} aria-label={state === 'copied' ? 'email copied' : 'copy email address'}>
        <HugeiconsIcon icon={state === 'copied' ? Tick02Icon : Copy01Icon} size={13} strokeWidth={1.6} aria-hidden="true" />
      </button>
      <span className={state === 'idle' ? 'visually-hidden' : 'email-copy-feedback'} role="status">{state === 'copied' ? 'copied' : state === 'failed' ? `copy unavailable: ${profile.email}` : ''}</span>
    </span>
  )
}

function App() {
  const [isPetting, setIsPetting] = useState(false)
  const [isReacting, setIsReacting] = useState(false)
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))
  const [filter, setFilter] = useState(() => window.location.pathname === '/work' || window.location.hash.startsWith('#work-') ? 'all' : 'featured')

  const isLearningWall = learningPaths.includes(pathname)

  const togglePet = () => {
    setIsPetting((value) => !value)
    setIsReacting(true)
  }

  const changeFilter = value => {
    if (window.location.hash.startsWith('#work-')) window.history.replaceState(null, '', window.location.pathname)
    setFilter(value)
  }

  const selectBioProject = id => {
    if (!document.getElementById(`work-${id}`)) setFilter('all')
  }

  useEffect(() => {
    if (window.location.pathname === '/work') {
      const hash = window.location.hash === '#context' ? '#about' : window.location.hash === '#work-index-title' ? '' : window.location.hash
      window.history.replaceState(null, '', `/${hash}`)
    }
    const revealFragment = () => {
      const fragment = window.location.hash.slice(1)
      if (!fragment) return
      const target = document.getElementById(fragment)
      if (!target) return
      const disclosure = target.matches('details') ? target : target.querySelector('details')
      if (disclosure) disclosure.open = true
      target.scrollIntoView()
      if (fragment.startsWith('work-')) target.querySelector('summary')?.focus({ preventScroll: true })
    }
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#work-') && !document.getElementById(window.location.hash.slice(1))) setFilter('all')
      revealFragment()
    }
    revealFragment()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [pathname, filter])

  useEffect(() => {
    const handlePopState = () => setPathname(normalizePath(window.location.pathname))
    document.title = isLearningWall ? 'notes | ranga reddy nukala' : 'ranga reddy nukala · founding engineer'
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isLearningWall])

  return (
    <div className={`page-shell${isLearningWall ? ' wall-mode' : ' home-mode'}`}>
      <div className="ambient ambient-primary" aria-hidden="true" />
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <main className="page">
        {isLearningWall ? <><nav className="notes-return" aria-label="site"><a href="/"><HugeiconsIcon icon={ArrowRight01Icon} size={13} strokeWidth={1.6} aria-hidden="true" />back home</a></nav><TopicWall /></> : (
        <section className="hero-section home-compact">
          <ProfileIntro onProjectSelect={selectBioProject} />
          <NowList filter={filter} onFilterChange={changeFilter} />
          <div className="home-supplement"><RepositoryArchive /></div>
          <footer className="home-footer">
            <nav className="home-contact-links" aria-label="contact and more">
              <a href={learningWall.route}>notes</a>
              <EmailContact />
              {contactLinks.filter(link => ['github', 'linkedin'].includes(link.label)).map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
              <a href="https://blog.irangareddy.in" target="_blank" rel="noreferrer">blog</a>
            </nav>
            <div className="home-pet">
              <span className="home-pet-status" role="status">{isPetting ? 'thank you' : ''}</span>
              <button type="button" className={`pet-button${isReacting ? ' reacting' : ''}`} onClick={togglePet} onAnimationEnd={() => setIsReacting(false)} aria-label="pet the cat" aria-pressed={isPetting}>
                <img src="/panda-pet.svg" alt="" className="pet-icon" width="32" height="32" />
              </button>
            </div>
          </footer>
        </section>
        )}
      </main>
    </div>
  )
}

export default App
