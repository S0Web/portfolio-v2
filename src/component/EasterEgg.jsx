import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './EasterEgg.scss'

const TRIGGER = 'selim'
const AUTO_HIDE_MS = 15000
const REDIRECT_DELAY_MS = 1400

const MESSAGES = [
  'Ouais, tu m’as appelé ?',
  'Ouais quoi ?',
  'Bon, quoi ?? Je suis occupé orh.',
  'Si tu continue je casse la page parce que c’est agaçant là',
  'Ne pousse pas...',
  '... Je t’aurais prévenu !!',
  'Bon, 3...',
  '2...',
  '1...',
  '1 et demi...',
  'Aller 0, ciao.',
]

const EasterEgg = () => {
  const [messages, setMessages] = useState([])
  const idRef = useRef(0)
  const countRef = useRef(0)
  const navigate = useNavigate()

  const removeMessage = useCallback((id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id))
  }, [])

  useEffect(() => {
    let buffer = ''

    const handleKeyDown = (event) => {
      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || event.target?.isContentEditable) return
      if (event.key.length !== 1) return

      buffer = (buffer + event.key.toLowerCase()).slice(-TRIGGER.length)
      if (buffer !== TRIGGER) return
      buffer = ''

      const messageIndex = countRef.current % MESSAGES.length
      const isLast = messageIndex === MESSAGES.length - 1
      countRef.current = isLast ? 0 : countRef.current + 1

      idRef.current += 1
      const id = idRef.current
      setMessages((prev) => [...prev, { id, text: MESSAGES[messageIndex] }])
      setTimeout(() => removeMessage(id), AUTO_HIDE_MS)

      if (isLast) {
        setTimeout(() => navigate('/tu-m-as-saoule'), REDIRECT_DELAY_MS)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [removeMessage, navigate])

  return (
    <div className="easter-egg-stack">
      <AnimatePresence>
        {messages.map((msg) => (
          <motion.button
            key={msg.id}
            type="button"
            className="easter-egg"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            onClick={() => removeMessage(msg.id)}
            aria-label="Fermer le message"
          >
            <span className="easter-egg-avatar">S</span>
            <span className="easter-egg-body">
              <span className="easter-egg-name">
                Selim
                <span className="easter-egg-dot" />
              </span>
              <span className="easter-egg-message">{msg.text}</span>
            </span>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default EasterEgg
