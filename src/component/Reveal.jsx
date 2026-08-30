import { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion'
import PropTypes from 'prop-types'

const tiltSpring = { stiffness: 220, damping: 20, mass: 0.5 }
const MAX_TILT = 6

const Reveal = ({ children, delay = 0, className, tilt = false, spotlight = false }) => {
  const ref = useRef(null)
  const rotateX = useSpring(0, tiltSpring)
  const rotateY = useSpring(0, tiltSpring)
  const spotX = useMotionValue(50)
  const spotY = useMotionValue(50)
  const spotXPercent = useMotionTemplate`${spotX}%`
  const spotYPercent = useMotionTemplate`${spotY}%`

  const handleMouseMove = (event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    if (tilt) {
      rotateY.set((px - 0.5) * MAX_TILT * 2)
      rotateX.set(-(py - 0.5) * MAX_TILT * 2)
    }
    if (spotlight) {
      spotX.set(px * 100)
      spotY.set(py * 100)
    }
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const classes = [className, spotlight ? 'spotlight' : null].filter(Boolean).join(' ')

  return (
    <motion.div
      ref={ref}
      className={classes || undefined}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={tilt || spotlight ? handleMouseMove : undefined}
      onMouseLeave={tilt ? handleMouseLeave : undefined}
      style={{
        rotateX: tilt ? rotateX : undefined,
        rotateY: tilt ? rotateY : undefined,
        transformPerspective: tilt ? 900 : undefined,
        '--spot-x': spotlight ? spotXPercent : undefined,
        '--spot-y': spotlight ? spotYPercent : undefined,
      }}
    >
      {children}
    </motion.div>
  )
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
  tilt: PropTypes.bool,
  spotlight: PropTypes.bool,
}

export default Reveal
