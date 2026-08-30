import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
}

const PageTransition = ({ children }) => (
  <motion.div
    className="page-transition"
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTransition
