import { Link } from 'react-router-dom'
import PageTransition from '../component/PageTransition'
import ScrambleText from '../component/ScrambleText'
import './NotFound.scss'

const NotFound = () => {
  return (
    <PageTransition>
      <div className="not-found">
        <span className="not-found-code">404</span>
        <h2><ScrambleText text="Cette page n’existe pas" /></h2>
        <p>Le lien que tu as suivi est cassé, ou la page a été déplacée.</p>
        <Link to="/" className="btn btn-primary">Retour à l’accueil</Link>
      </div>
    </PageTransition>
  )
}

export default NotFound
