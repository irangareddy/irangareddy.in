import { useEffect, useRef, useState } from 'react'
import './PandaPet.css'

function roamSeconds() {
  if (typeof document === 'undefined') return 24
  const width = document.documentElement.clientWidth
  const pandaWidth = Math.min(146, Math.max(112, width * .09))
  return Math.max(12, (width - pandaWidth) / 28 * 2)
}

function prefersStillness() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function PandaPet() {
  const [activity, setActivity] = useState(() => prefersStillness() ? 'sitting' : 'walking')
  const [reducedMotion, setReducedMotion] = useState(prefersStillness)
  const [feeding, setFeeding] = useState(0)
  const [showThanks, setShowThanks] = useState(false)
  const [roundTripSeconds, setRoundTripSeconds] = useState(roamSeconds)
  const wantsBamboo = useRef(false)
  const thanksTimer = useRef(null)

  useEffect(() => {
    const resized = () => setRoundTripSeconds(roamSeconds())
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const motionChanged = event => setReducedMotion(event.matches)
    window.addEventListener('resize', resized)
    media.addEventListener('change', motionChanged)
    return () => {
      window.clearTimeout(thanksTimer.current)
      window.removeEventListener('resize', resized)
      media.removeEventListener('change', motionChanged)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const pauses = {
      walking: 26000 + Math.random() * 10000,
      lowering: 550,
      sitting: 6000 + Math.random() * 4000,
      eating: 14000 + Math.random() * 6000,
      standing: 650,
    }
    const timer = window.setTimeout(() => {
      if (activity === 'walking') setActivity('lowering')
      else if (activity === 'lowering') setActivity(wantsBamboo.current ? 'eating' : 'sitting')
      else if (activity === 'sitting') setActivity('eating')
      else if (activity === 'eating') setActivity('standing')
      else {
        wantsBamboo.current = false
        setActivity('walking')
      }
    }, pauses[activity])
    return () => window.clearTimeout(timer)
  }, [activity, feeding, reducedMotion])

  const offerBamboo = () => {
    window.clearTimeout(thanksTimer.current)
    wantsBamboo.current = true
    setFeeding(value => value + 1)
    setShowThanks(true)
    setActivity(current => reducedMotion || current === 'sitting' || current === 'eating' ? 'eating' : 'lowering')
    thanksTimer.current = window.setTimeout(() => setShowThanks(false), 2400)
  }

  return <div className="panda-pet" id="panda" data-activity={activity} style={{ '--roam-duration': `${roundTripSeconds}s` }}>
    <span className="panda-feedback" role="status">{showThanks ? 'bamboo break' : ''}</span>
    <button type="button" className="panda-button" onClick={offerBamboo} aria-label="offer bamboo to the panda">
      <span className="panda-facing">
        <span className="panda-walk-sprite panda-pose" aria-hidden="true" />
        <span className="panda-rest-sprite panda-pose" aria-hidden="true" />
      </span>
    </button>
  </div>
}
