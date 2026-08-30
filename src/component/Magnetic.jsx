import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useSpring } from 'framer-motion'
import PropTypes from 'prop-types'

const MotionLink = motion(Link)
const pullSpring = { stiffness: 200, damping: 15, mass: 0.4 }
const PULL_STRENGTH = 0.35

const Magnetic = ({ as = 'a', className, children, to, ...rest }) => {
  const ref = useRef(null)
  const x = useSpring(0, pullSpring)
  const y = useSpring(0, pullSpring)
  const MotionTag = to ? MotionLink : (motion[as] ?? motion.a)

  const handleMouseMove = (event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const distX = event.clientX - (rect.left + rect.width / 2)
    const distY = event.clientY - (rect.top + rect.height / 2)
    x.set(distX * PULL_STRENGTH)
    y.set(distY * PULL_STRENGTH)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <MotionTag
      ref={ref}
      to={to}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

Magnetic.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
}

export default Magnetic
