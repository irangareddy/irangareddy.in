import { useEffect, useRef, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon, ArrowRight01Icon, ArrowUpRight01Icon, Cancel01Icon, Copy01Icon, Search01Icon, Tick02Icon } from '@hugeicons/core-free-icons'
import { allWork, bioProjectLinks, contactLinks, intro, learningWall, now, profile } from './content'
import { workGroups } from './work'
import repositories from './repositories.json'
import bioTokens from './bio-tokens.json'
import PandaPet from './PandaPet'

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

function WorkRows({ items, id, selectedId, onProjectSelect }) {
  return (
    <ul className="now-list" id={id}>
      {items.map(item => (
        <li key={item.id} className="project-item" id={`work-${item.id}`}>
          <a className="project-summary" href={`/#work-${item.id}`} aria-current={selectedId === item.id ? 'true' : undefined} aria-haspopup="dialog" onClick={event => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
            event.preventDefault()
            onProjectSelect(item.id)
          }}>
            <span className="project-name">{item.name}<HugeiconsIcon icon={ArrowRight01Icon} size={12} strokeWidth={1.6} className="project-chevron" aria-hidden="true" /></span>
            <span className="now-detail">{item.summary}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

function ProjectPanel({ item, items, onClose, onProjectSelect }) {
  const dialogRef = useRef(null)
  const headingRef = useRef(null)
  const group = workGroups.find(group => group.items.some(project => project.id === item.id))
  const index = items.findIndex(project => project.id === item.id)
  const previous = items[index - 1]
  const next = index >= 0 ? items[index + 1] : undefined

  useEffect(() => {
    const dialog = dialogRef.current
    const opener = document.activeElement
    const mobile = window.matchMedia('(max-width: 1000px)')
    const originalOverflow = document.body.style.overflow
    const show = () => {
      dialog.close()
      if (mobile.matches) dialog.showModal()
      else dialog.show()
      document.body.style.overflow = mobile.matches ? 'hidden' : originalOverflow
      headingRef.current?.focus({ preventScroll: true })
    }
    show()
    mobile.addEventListener('change', show)
    return () => {
      mobile.removeEventListener('change', show)
      dialog.close()
      document.body.style.overflow = originalOverflow
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
    }
  }, [])

  useEffect(() => {
    dialogRef.current.scrollTop = 0
    headingRef.current.focus({ preventScroll: true })
  }, [item.id])

  return (
    <dialog ref={dialogRef} className="project-panel" aria-labelledby="project-panel-title" onCancel={event => { event.preventDefault(); onClose() }} onKeyDown={event => {
      if (event.key === 'Escape') { event.preventDefault(); onClose() }
    }}>
      <div className="project-panel-toolbar">
        <span>work / {group.title}</span>
        <button type="button" className="project-panel-close" onClick={onClose} aria-label="close project details"><span>close</span><HugeiconsIcon icon={Cancel01Icon} size={17} strokeWidth={1.5} aria-hidden="true" /></button>
      </div>
      <article className="project-panel-content">
        <header className="project-panel-heading">
          {item.status ? <p className="work-status">{item.status}</p> : null}
          <h2 id="project-panel-title" tabIndex={-1} ref={headingRef}>{item.name}</h2>
          <p className="project-panel-summary">{item.summary}</p>
        </header>
        <section className="project-panel-section" aria-label="about the project">
          <h3>about the project</h3>
          <p>{item.detail}</p>
        </section>
        {item.technologies?.length ? <section className="project-panel-section" aria-label="built with"><h3>built with</h3><ul className="project-technologies">{item.technologies.map(technology => <li key={technology}>{technology.toLowerCase()}</li>)}</ul></section> : null}
        {item.href ? <a className="project-destination inline-underline" href={item.href} target="_blank" rel="noreferrer">{projectLinkLabel(item.href)}<LinkArrow external /></a> : null}
        {previous || next ? <nav className="project-panel-pagination" aria-label="more projects">
          {previous ? <button type="button" onClick={() => onProjectSelect(previous.id)}><span>previous</span>{previous.name}</button> : <span />}
          {next ? <button type="button" onClick={() => onProjectSelect(next.id)}><span>next</span>{next.name}</button> : null}
        </nav> : null}
      </article>
    </dialog>
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

function NowList({ filter, onFilterChange, selectedId, onProjectSelect }) {
  const items = matchingWork(filter)
  return (
    <section className="now-section" aria-label="selected work">
      <div className="home-work-heading"><h2 className="now-heading">work</h2></div>
      <WorkFilters value={filter} onChange={onFilterChange} resultsId="home-work-results" />
      <p className="visually-hidden" role="status">{items.length} {items.length === 1 ? 'entry' : 'entries'} · {workFilters.find(item => item.id === filter).label}</p>
      <WorkRows items={items} id="home-work-results" selectedId={selectedId} onProjectSelect={onProjectSelect} />
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
      event.preventDefault()
      onProjectSelect(group.project)
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

const projectFromHash = () => allWork.find(item => `#work-${item.id}` === window.location.hash)?.id ?? null

function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))
  const [filter, setFilter] = useState(() => window.location.pathname === '/work' || (projectFromHash() && !now.some(item => item.id === projectFromHash())) ? 'all' : 'featured')
  const [selectedId, setSelectedId] = useState(projectFromHash)
  const selectedProject = allWork.find(item => item.id === selectedId)
  const isLearningWall = learningPaths.includes(pathname)

  const closeProject = () => {
    if (window.history.state?.projectPanel) window.history.back()
    else {
      window.history.replaceState(null, '', window.location.pathname)
      setSelectedId(null)
    }
  }

  const changeFilter = value => {
    // Keep this selection in the list's history entry when leaving a detail.
    if (selectedId) {
      window.history.replaceState(null, '', window.location.pathname)
      setSelectedId(null)
    }
    setFilter(value)
  }

  const selectProject = id => {
    if (!matchingWork(filter).some(item => item.id === id)) setFilter('all')
    if (selectedId) window.history.replaceState(window.history.state, '', `/#work-${id}`)
    else window.history.pushState({ projectPanel: true }, '', `/#work-${id}`)
    setSelectedId(id)
  }

  useEffect(() => {
    if (window.location.pathname === '/work') {
      const hash = window.location.hash === '#context' ? '#about' : window.location.hash === '#work-index-title' ? '' : window.location.hash
      window.history.replaceState(null, '', `/${hash}`)
    }
    const syncProject = () => {
      const id = projectFromHash()
      setSelectedId(id)
      if (id) setFilter(value => matchingWork(value).some(item => item.id === id) ? value : 'all')
    }
    window.addEventListener('hashchange', syncProject)
    window.addEventListener('popstate', syncProject)
    return () => {
      window.removeEventListener('hashchange', syncProject)
      window.removeEventListener('popstate', syncProject)
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => setPathname(normalizePath(window.location.pathname))
    document.title = isLearningWall ? 'notes | ranga reddy nukala' : 'ranga reddy nukala · founding engineer'
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isLearningWall])

  return (
    <div className={`page-shell${isLearningWall ? ' wall-mode' : ' home-mode'}${selectedProject && !isLearningWall ? ' project-panel-open' : ''}`}>
      <div className="ambient ambient-primary" aria-hidden="true" />
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <main className="page">
        {isLearningWall ? <><nav className="notes-return" aria-label="site"><a href="/"><HugeiconsIcon icon={ArrowRight01Icon} size={13} strokeWidth={1.6} aria-hidden="true" />back home</a></nav><TopicWall /></> : (
        <section className="hero-section home-compact">
          <ProfileIntro onProjectSelect={selectProject} />
          <NowList filter={filter} onFilterChange={changeFilter} selectedId={selectedId} onProjectSelect={selectProject} />
          <div className="home-supplement"><RepositoryArchive /></div>
          <footer className="home-footer">
            <nav className="home-contact-links" aria-label="contact and more">
              <a href={learningWall.route}>notes</a>
              <EmailContact />
              {contactLinks.filter(link => ['github', 'linkedin'].includes(link.label)).map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
              <a href="https://blog.irangareddy.in" target="_blank" rel="noreferrer">blog</a>
            </nav>
            <PandaPet />
          </footer>
        </section>
        )}
      </main>
      {selectedProject && !isLearningWall ? <ProjectPanel item={selectedProject} items={matchingWork(filter)} onClose={closeProject} onProjectSelect={selectProject} /> : null}
    </div>
  )
}

export default App
