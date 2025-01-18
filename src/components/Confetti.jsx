import { useState } from 'react'
import confetti from 'canvas-confetti'

export default function ConfettiButton() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleConfetti = () => {
    setIsAnimating(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 1 }
    })
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <Button 
      onClick={handleConfetti} 
      disabled={isAnimating}
      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-200 hover:scale-105"
    >
      {isAnimating ? 'Popping!' : 'Pop Confetti!'}
    </Button>
  )
}