import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import PropTypes from 'prop-types'
import { Music, BookOpen, Activity } from 'lucide-react'
import PageTransition from '../component/PageTransition'
import Reveal from '../component/Reveal'
import Magnetic from '../component/Magnetic'
import ScrambleText from '../component/ScrambleText'
import './Resume.scss'

const EXPERIENCES = [
  {
    role: "Développeur d’agents IA & conduite du changement IA (alternance)",
    company: 'SNCF',
    period: 'Oct. 2026 — présent',
    headline: "Conception d’agents IA et accompagnement des équipes dans leur adoption.",
    bullets: [
      "Développement d’agents IA au service des besoins métiers.",
      "Conduite du changement : accompagnement des utilisateurs dans l’adoption des usages IA.",
    ],
  },
  {
    role: 'Data Developer',
    company: 'Fitnessmov',
    period: '2024 — 2026',
    location: 'Corbeil-Essonnes (91)',
    headline: 'Plateforme analytics full-stack en production, ~4 000 séances migrées.',
    projectLink: '/portfolio#project-0',
    bullets: [
      "Conception et développement en solo d’une plateforme analytics full-stack (React, Node.js, SQLite) pour optimiser la gestion opérationnelle multi-sites.",
      "Pipeline ETL : extraction de données depuis fichiers Excel, normalisation et migration vers un schéma relationnel.",
      "Module analytics : KPIs configurables, comparatifs période-sur-période, export de réconciliation financière.",
      "Utilisation quotidienne d’un CRM (Résamania) — gestion des données clients et suivi de performance.",
    ],
  },
  {
    role: 'Développeur Web',
    company: 'Boookable',
    period: '2023 — 2024',
    location: 'Saint-Ouen-sur-Seine (93)',
    headline: 'Navigation repensée : parcours client simplifié, site map cohérent.',
    projectLink: '/portfolio#project-2',
    bullets: [
      "Refonte de l’architecture de navigation front-end.",
      "Développement d’animations et d’interactions CSS/JavaScript.",
      "Optimisation SEO on-page : audit technique, maillage interne, suivi via Google Search Console et Google Analytics.",
      "Analyse des données de trafic et identification des leviers d’amélioration.",
    ],
  },
  {
    role: 'Développeur Web',
    company: 'Institut Adios',
    period: '2022 — 2023',
    location: 'Neuilly-sur-Seine (92)',
    headline: 'Automatisation de tâches web et suivi de performance au quotidien.',
    bullets: [
      "Scripting Python pour l’automatisation de tâches web.",
      "Collecte et analyse de données via Google Workspace et environnement cloud.",
      "Développement et intégration de contenus web (HTML/CSS/JS).",
      "Suivi des performances et reporting.",
    ],
  },
]

const EDUCATION = [
  {
    title: 'Master Développement Data IA (alternance)',
    school: 'IPSSI Paris',
    period: '2026 — 2028',
    detail: 'Architecture de données, pipelines ETL, Machine Learning, Business Intelligence & Data Analytics.',
  },
  {
    title: 'Bachelor Événementiel Sportif',
    school: 'WIN Sport School',
    period: '2025 — 2026',
    detail: 'Pilotage de projets, gestion budgétaire, logistique et analyse de performance.',
  },
  {
    title: 'BPJEPS Musculation / Haltérophilie / Cours collectifs',
    school: 'UCPA Paris 19',
    period: '2024 — 2025',
    detail: 'Gestion de projets sportifs, pédagogie, conduite du changement sur le terrain.',
  },
  {
    title: 'Développement Web',
    school: 'Cloud Campus',
    period: '2022 — 2024',
    detail: "Conception d’applications full-stack, bases de données relationnelles, logique algorithmique.",
  },
  {
    title: 'Licence Maths-Physique',
    school: 'Université d’Évry Val-de-Seine',
    period: '2019 — 2022',
    detail: 'Solides fondations en algèbre linéaire, probabilités, statistiques et modélisation.',
  },
]

const SKILLS = [
  { category: 'Langages', items: ['JavaScript', 'SQL', 'HTML/CSS', 'PHP', 'Python'] },
  { category: 'Data & Analytics', items: ['pandas', 'ETL', 'Google Analytics', 'Search Console', 'CRM'] },
  { category: 'Dev & outils', items: ['React', 'Node.js', 'SQLite', 'Git', 'Google Workspace'] },
  { category: 'IA & Cloud', items: ['LLM', 'Prompting', 'Environnement cloud', 'Automatisation'] },
]

const INTEREST_GROUPS = [
  { label: 'Musique', icon: Music, items: ['Piano', 'Guitare'] },
  { label: 'Lecture', icon: BookOpen, items: ['Développement personnel', 'Romans', 'Langues'] },
  { label: 'Sport', icon: Activity, items: ['Taekwondo', 'Course à pied', 'Volleyball', 'Parkour'] },
]

const ExperienceItem = ({ exp, index, progress, timelineRef }) => {
  const dotRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const checkActive = (value) => {
      const dot = dotRef.current
      const timeline = timelineRef.current
      if (!dot || !timeline) return

      const timelineRect = timeline.getBoundingClientRect()
      if (!timelineRect.height) return

      const dotRect = dot.getBoundingClientRect()
      const dotFraction = (dotRect.top - timelineRect.top) / timelineRect.height
      setIsActive(value >= dotFraction)
    }

    checkActive(progress.get())
    return progress.on('change', checkActive)
  }, [progress, timelineRef])

  return (
    <Reveal className="resume-item" delay={index * 0.08} spotlight>
      <span ref={dotRef} className={`resume-item-dot${isActive ? ' active' : ''}`} />
      <h4>{exp.role} · {exp.company}</h4>
      <div className="meta">
        <span>{exp.period}</span>
        {exp.location && <span>{exp.location}</span>}
      </div>
      <p className="resume-item-headline">{exp.headline}</p>
      <ul>
        {exp.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {exp.projectLink && (
        <Magnetic to={exp.projectLink} className="btn btn-ghost resume-item-link">
          Voir le projet →
        </Magnetic>
      )}
    </Reveal>
  )
}

ExperienceItem.propTypes = {
  index: PropTypes.number.isRequired,
  exp: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    location: PropTypes.string,
    headline: PropTypes.string.isRequired,
    projectLink: PropTypes.string,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  progress: PropTypes.shape({
    get: PropTypes.func,
    on: PropTypes.func,
  }).isRequired,
  timelineRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
}

const Resume = () => {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.5'],
  })
  const fillScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })

  return (
    <PageTransition>
      <h2 className="section-title"><ScrambleText text="Curriculum vitae" /></h2>

      <Reveal className="resume-intro" tilt spotlight>
        <h3>Selim Ouadi</h3>
        <p>
          Développeur full-stack reconverti dans la data, je construis des pipelines ETL, des
          dashboards analytiques et des outils d’automatisation. Autonome, j’ai développé en solo
          une plateforme analytics en production pour une chaîne de salles de sport.
        </p>
        <ul className="quick-facts">
          <li><a href="mailto:selimouadi31@gmail.com">selimouadi31@gmail.com</a></li>
          <li><a href="tel:+33618336933">06 18 33 69 33</a></li>
          <li>Corbeil-Essonnes (91100)</li>
          <li>26 ans · Permis de conduire</li>
          <li>En alternance à la SNCF depuis octobre 2026</li>
        </ul>
        <Magnetic className="btn btn-ghost" href="/cv/OUADI-Selim-cv.pdf" target="_blank" rel="noreferrer">
          Télécharger le CV (PDF)
        </Magnetic>
      </Reveal>

      <div className="resume-grid">
        <section className="resume-column resume-column--main">
          <h3 className="resume-heading">Expériences</h3>
          <div className="experience-timeline" ref={timelineRef}>
            <div className="experience-timeline-rail" />
            <motion.div className="experience-timeline-fill" style={{ scaleY: fillScale }} />
            {EXPERIENCES.map((exp, index) => (
              <ExperienceItem
                key={exp.company}
                exp={exp}
                index={index}
                progress={fillScale}
                timelineRef={timelineRef}
              />
            ))}
          </div>
        </section>

        <aside className="resume-column resume-column--side">
          <Reveal className="side-block" tilt spotlight>
            <h3 className="resume-heading">Formations</h3>
            {EDUCATION.map((edu) => (
              <div key={edu.title} className="edu-item">
                <h4>{edu.title}</h4>
                <div className="meta">
                  <span>{edu.school}</span>
                  <span>{edu.period}</span>
                </div>
                <p>{edu.detail}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="side-block" delay={0.08} tilt spotlight>
            <h3 className="resume-heading">Compétences</h3>
            {SKILLS.map((group) => (
              <div key={group.category} className="skill-group">
                <span className="skill-category">{group.category}</span>
                <ul className="chip-list">
                  {group.items.map((item) => (
                    <li key={item} className="chip">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <Reveal className="side-block" delay={0.16} tilt spotlight>
            <h3 className="resume-heading">Langues</h3>
            <p className="lang-item">
              Anglais — B1 <span>(Bac L spécialité anglais approfondi)</span>
            </p>
          </Reveal>

          <Reveal className="side-block" delay={0.2} tilt spotlight>
            <h3 className="resume-heading">Centres d’intérêt</h3>
            <div className="interest-groups">
              {INTEREST_GROUPS.map((group) => (
                <div key={group.label} className="interest-group">
                  <button type="button" className="interest-chip">
                    <group.icon size={15} strokeWidth={2} />
                    {group.label}
                  </button>
                  <div className="interest-bubble" role="tooltip">
                    <span className="interest-bubble-title">{group.label}</span>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </aside>
      </div>
    </PageTransition>
  )
}

export default Resume
