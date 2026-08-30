import { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const STEP_MS = 30
const REVEAL_SPEED = 3

const ScrambleText = ({ text, as: Tag = 'span', className }) => {
  const [display, setDisplay] = useState(text)
  const timeoutRef = useRef(null)

  const scramble = useCallback(() => {
    clearTimeout(timeoutRef.current)
    let iteration = 0
    const totalIterations = text.length * REVEAL_SPEED

    const step = () => {
      setDisplay(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration / REVEAL_SPEED) return text[index]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join(''),
      )

      if (iteration < totalIterations) {
        iteration += 1
        timeoutRef.current = setTimeout(step, STEP_MS)
      } else {
        setDisplay(text)
      }
    }

    step()
  }, [text])

  useEffect(() => {
    scramble()
    return () => clearTimeout(timeoutRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <Tag className={className} onMouseEnter={scramble}>
      {display}
    </Tag>
  )
}

ScrambleText.propTypes = {
  text: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
}

export default ScrambleText
