import PageTransition from '../component/PageTransition'
import Reveal from '../component/Reveal'
import Magnetic from '../component/Magnetic'
import ScrambleText from '../component/ScrambleText'
import flyderImg from '../assets/portfolio/flyder.jpg'
import boookableImg from '../assets/portfolio/boookable.jpg'
import undercoverImg from '../assets/portfolio/undercover.jpg'
import chatbotImg from '../assets/portfolio/chatbot.jpg'
import analyseImg from '../assets/portfolio/analyse.png'
import './Portfolio.scss'

const PROJECTS = [
  {
    title: 'Flyder',
    subtitle: 'Logiciel de gestion pour salles de sport — architecture complète en solo',
    stack: ['React', 'Node.js', 'SQLite', 'Python / pandas'],
    image: flyderImg,
    sections: [
      {
        label: 'Contexte',
        text: "Les données de séances étaient dispersées dans des fichiers Excel hétérogènes produits par différentes salles partenaires, rendant tout suivi de performance impossible.",
      },
      {
        label: 'Solution',
        text: "Développement en solo d'une application full-stack : planning des cours, gestion des coachs, RH & documents, facturation automatisée, module analytics interactif, et pipeline ETL pour fiabiliser les données historiques.",
      },
      {
        label: 'Résultat',
        text: "Migration de ~4 000 séances historiques, KPIs consultables en temps réel par site, réconciliation financière automatique entre heures déclarées et facturation.",
      },
    ],
    links: [{ label: 'Voir la démo', href: 'https://demo.flyder.fr' }],
  },
  {
    title: 'Analyse KPI — Fitnessmov’Aqua',
    subtitle: 'Diagnostic de rétention et tableau de bord de pilotage',
    stack: ['Python', 'pandas', 'Analyse de cohortes', 'Modélisation LTV'],
    image: analyseImg,
    sections: [
      {
        label: 'Contexte',
        text: "Deux ans de données d'activité disponibles uniquement via des exports bruts d'un logiciel de gestion, sans historique consolidé ni lecture fiable de la rétention.",
      },
      {
        label: 'Solution',
        text: "Réconciliation de sept exports sources, détection et correction des artefacts issus d'une migration logicielle, puis analyse du churn par cohortes, modélisation de la valeur vie client (LTV) et étude de saisonnalité.",
      },
      {
        label: 'Résultat',
        text: "Diagnostic chiffré fiable là où les indicateurs natifs de l'outil étaient trompeurs, livré avec un tableau de bord de pilotage mensuel et une feuille de route d'actions priorisées à impact estimé.",
      },
    ],
  },
  {
    title: 'Refonte de la navigation — Boookable',
    subtitle: 'Site e-commerce · 1ᵉʳ mars 2024',
    stack: ['Front-end', 'SEO', 'Google Analytics'],
    image: boookableImg,
    sections: [
      {
        label: 'Contexte',
        text: "La navigation du site e-commerce Boookable était désorganisée — aucune arborescence claire, les éléments de menu mélangés sans logique de catégorie ni de priorité.",
      },
      {
        label: 'Solution',
        text: "Audit de l'architecture existante, définition d'une nouvelle arborescence logique par catégorie et pertinence, puis intégration technique du nouveau menu.",
      },
      {
        label: 'Résultat',
        text: "Navigation restructurée, parcours client simplifié, site map cohérent — meilleure utilisabilité en interne et côté client.",
      },
    ],
    links: [{ label: 'Voir le site', href: 'https://boookable.com/' }],
  },
  {
    title: 'Chatbot WhatsApp — Fitnessmov',
    subtitle: 'Assistant conversationnel connecté à l’IA',
    stack: ['API WhatsApp Business', 'Gemini (LLM)'],
    image: chatbotImg,
    description: "Assistant conversationnel branché sur l'API WhatsApp Business, avec une intégration du modèle Gemini pour générer les réponses. Développé comme projet à part de la plateforme analytics, pour fluidifier les échanges avec les adhérents de la salle.",
  },
  {
    title: 'Jeu Undercover personnalisable par IA',
    subtitle: 'Web app · génération IA',
    stack: ['Web app', 'IA générative'],
    image: undercoverImg,
    description: "Jeu de soirée façon Mister White/Undercover : on ajoute les joueurs, on choisit les options de partie, et les thèmes des mots à deviner sont générés par IA à partir des centres d'intérêt du groupe — une partie différente à chaque fois.",
    links: [{ label: 'Essayer le jeu', href: 'https://client-production-872c.up.railway.app/' }],
  },
]

export const PROJECT_TITLES = PROJECTS.map((project) => project.title)

const Portfolio = () => {
  return (
      <PageTransition>
        <h2 className="section-title"><ScrambleText text="Portfolio" /></h2>
        <div className="portfolio-content">
          {PROJECTS.map((project, index) => {
            const isLast = index === PROJECTS.length - 1
            const nextIsAlt = (index + 1) % 2 === 1

            return (
              <div
                key={project.title}
                id={`project-${index}`}
                className={`project-band${index % 2 === 1 ? ' project-band--alt' : ''}`}
              >
                <Reveal
                  className={`project-card${index % 2 === 1 ? ' project-card--reverse' : ''}`}
                  delay={index * 0.06}
                  spotlight
                >
                  <div className="project-media">
                    {project.image ? (
                      <img src={project.image} alt={`Aperçu de ${project.title}`} loading="lazy" />
                    ) : (
                      <div className="project-media-placeholder">
                        <project.placeholderIcon size={40} strokeWidth={1.4} />
                      </div>
                    )}
                  </div>
                  <div className="project-body">
                    <div className="project-head">
                      <h3>{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>
                    <ul className="chip-list">
                      {project.stack.map((item) => (
                        <li key={item} className="chip">{item}</li>
                      ))}
                    </ul>
                    {project.sections ? (
                      <div className="project-sections">
                        {project.sections.map((section) => (
                          <div key={section.label} className="project-section">
                            <span className="project-section-label">{section.label}</span>
                            <p>{section.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="project-description">{project.description}</p>
                    )}
                    {project.links && (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <Magnetic key={link.href} className="btn btn-ghost" href={link.href} target="_blank" rel="noreferrer">
                            {link.label} ↗
                          </Magnetic>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
                {!isLast && (
                  <svg
                    className="band-wave"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d={
                        index % 2 === 0
                          ? 'M0,0 C620,0 820,160 1440,160 L1440,160 L0,160 Z'
                          : 'M0,160 C620,160 820,0 1440,0 L1440,160 L0,160 Z'
                      }
                      style={{ fill: nextIsAlt ? 'var(--band-alt)' : 'var(--bg)' }}
                    />
                  </svg>
                )}
              </div>
            )
          })}
        </div>
      </PageTransition>
  )
}

export default Portfolio
