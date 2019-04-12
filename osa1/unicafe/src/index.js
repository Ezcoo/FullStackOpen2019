import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedbackTotal, setfeedbackTotal] = useState(0)

const handleGoodClick = () => {
    setGood(good + 1)
    setfeedbackTotal(feedbackTotal + 1)
}

const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setfeedbackTotal(feedbackTotal + 1)
}

const handleBadClick = () => {
    setBad(bad + 1)
    setfeedbackTotal(feedbackTotal + 1)
}

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={handleGoodClick} text='hyvä' />
      <Button handleClick={handleNeutralClick} text='neutraali' />
      <Button handleClick={handleBadClick} text='huono' />
      <h1>statistiikka</h1>
      <p>hyvä {good}</p>
      <p>neutraali {neutral}</p>
      <p>huono {bad}</p>
      <p>yhteensä {good + neutral + bad}</p>
      <p>keskiarvo {(good - bad) / feedbackTotal}</p>
      <p>positiivisia {Math.round(good / feedbackTotal * 100)} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)