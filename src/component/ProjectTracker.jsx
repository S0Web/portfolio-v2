import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import './ProjectTracker.scss'

const ProjectTracker = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const sections = items.map((_, index) => document.getElementById(`project-${index}`)).filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target)
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  const handleClick = (index) => {
    document.getElementById(`project-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="project-tracker" aria-label="Navigation entre les projets">
      <ul>
        {items.map((label, index) => (
          <li key={label}>
            <button
              type="button"
              className={`tracker-dot${index === activeIndex ? ' active' : ''}`}
              onClick={() => handleClick(index)}
              aria-label={label}
              aria-current={index === activeIndex ? 'true' : undefined}
            >
              {index === activeIndex && (
                <motion.span
                  className="tracker-active-pill"
                  layoutId="tracker-active-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="tracker-dot-inner" />
              <span className="tracker-label">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

ProjectTracker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ProjectTracker
