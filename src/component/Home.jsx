import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useSpring, useMotionTemplate } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import PageTransition from './PageTransition'
import Magnetic from './Magnetic'
import ScrambleText from './ScrambleText'
import './Home.scss'
import profilImg from '../assets/profil.jpg'
import Linkedin from '../assets/social-link/linkedin.svg'
import Github from '../assets/social-link/github.svg'
import flyderImg from '../assets/portfolio/flyder.jpg'
import boookableImg from '../assets/portfolio/boookable.jpg'
import undercoverImg from '../assets/portfolio/undercover.jpg'

const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/selim-ouadi/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/S0Web' },
]

const WORK_PREVIEW = [
  { title: 'Flyder', image: flyderImg, anchor: '/portfolio#project-0' },
  { title: 'Boookable', image: boookableImg, anchor: '/portfolio#project-2' },
  { title: 'Undercover', image: undercoverImg, anchor: '/portfolio#project-4' },
]

const TECH_STACK = ['React', 'Node.js', 'Python', 'SQL', 'pandas', 'ETL', 'SQLite', 'Git', 'Google Analytics', 'LLM / IA']

const CONTACT_METHODS = [
  { icon: Mail, label: 'selimouadi31@gmail.com', href: 'mailto:selimouadi31@gmail.com' },
  { icon: Phone, label: '06 18 33 69 33', href: 'tel:+33618336933' },
]

const containerVariants = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const spring = { stiffness: 150, damping: 20, mass: 0.5 }

const Home = () => {
  const cardRef = useRef(null)

  const rotateX = useSpring(0, spring)
  const rotateY = useSpring(0, spring)
  const translateX = useSpring(0, spring)
  const translateY = useSpring(0, spring)
  const boxShadow = useMotionTemplate`${translateX}px ${translateY}px 60px rgba(0, 0, 0, 0.45)`

  const handleMouseMove = (event) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const diffX = event.clientX - (rect.left + rect.width / 2)
    const diffY = event.clientY - (rect.top + rect.height / 2)

    rotateY.set((diffX / rect.width) * 14)
    rotateX.set(-(diffY / rect.height) * 14)
    translateX.set((diffX / rect.width) * 24)
    translateY.set((diffY / rect.height) * 24)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    translateX.set(0)
    translateY.set(0)
  }

  return (
    <PageTransition>
      <div className="home-content">
        <div className="rotating-div" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <motion.div
            ref={cardRef}
            className="container"
            style={{ rotateX, rotateY, x: translateX, y: translateY, boxShadow }}
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.img
              src={profilImg}
              alt="Selim Ouadi"
              className="avatar"
              variants={itemVariants}
            />
            <motion.span className="eyebrow" variants={itemVariants}>
              Data Analyst &amp; Développeur Full-Stack
            </motion.span>
            <motion.h1 variants={itemVariants}>
              <ScrambleText text="Selim Ouadi" />
            </motion.h1>
            <motion.p className="bio" variants={itemVariants}>
              Développeur full-stack reconverti dans la data, je construis des pipelines ETL,
              des dashboards analytiques et des outils d&apos;automatisation.
            </motion.p>
            <motion.span className="availability" variants={itemVariants}>
              <span className="availability-dot" />
              En alternance à la SNCF · Développeur d&apos;agents IA
            </motion.span>
            <motion.div className="tech-ticker" variants={itemVariants}>
              <div className="tech-ticker-track">
                {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                  <span key={`${tech}-${i}`}>{tech}</span>
                ))}
              </div>
            </motion.div>
            <motion.div className="home-actions" variants={itemVariants}>
              <Magnetic className="btn btn-primary" href="/cv/OUADI-Selim-cv.pdf" target="_blank" rel="noreferrer">
                Télécharger mon CV
              </Magnetic>
              <Magnetic to="/resume" className="btn btn-ghost">
                Voir mon parcours →
              </Magnetic>
              <div className="social-links">
                {SOCIAL_LINKS.map((social) => (
                  <Magnetic key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name}>
                    <img src={social.icon} alt="" />
                  </Magnetic>
                ))}
              </div>
            </motion.div>
            <motion.div className="home-contact" variants={itemVariants}>
              {CONTACT_METHODS.map((method) => (
                <a key={method.href} href={method.href} className="home-contact-item">
                  <method.icon size={16} />
                  {method.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="home-preview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="home-preview-label">Un aperçu du travail</span>
          <div className="home-preview-grid">
            {WORK_PREVIEW.map((item) => (
              <Link key={item.title} to={item.anchor} className="preview-thumb">
                <img src={item.image} alt={`Aperçu du projet ${item.title}`} loading="lazy" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default Home
